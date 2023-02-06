import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import {getUser, listUsers} from '../graphql/queries';
import {updateUser} from '../graphql/mutations';

import {API, graphqlOperation, Auth} from 'aws-amplify';
const EditProfile = ({route, navigation}) => {
  const [ListUser, setListUser] = useState();
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const userInfo = await Auth.currentAuthenticatedUser();
        const user = await API.graphql(
          graphqlOperation(getUser, {id: userInfo.attributes.sub}),
        );
        setemail(user.data.getUser.email);
        setusername(user.data.getUser.username);
        setphone(user.data.getUser.phone);
      } catch (e) {
        console.log('error in fetching');
      }
    };
    fetchCurrentUser();
  }, []);
  //fetch the user list for validation

  const fetchUser = async username => {
    try {
      const serveData = await API.graphql(graphqlOperation(listUsers));
      // console.log(serveData);
      setListUser(serveData.data.listUsers.items);
      console.log(ListUser);
      if (username in ListUser) {
        console.log('there');
        return true;
      } else console.log('not there');
    } catch (e) {}
  };

  const [username, setusername] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();

  const EditOK = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      const input = {
        id: userData.attributes.sub,
        username: username,
        email: email,
        phone: phone,
      };
      if (fetchUser(username)) {
        console.log('fecth');
      }
      const updatedUserData = await API.graphql(
        graphqlOperation(updateUser, {input}),
      );
      console.log(updatedUserData.data.updateUser);
    } catch (e) {
      console.error(e);
    }
  };
  const TostMessage = () => {
    ToastAndroid.show('Edited Sucessfully !', ToastAndroid.SHORT);
  };
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="close-outline" style={{fontSize: 35}} />
        </TouchableOpacity>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Edit Profile</Text>
        <TouchableOpacity
          onPress={() => {
            TostMessage();
            EditOK();
            navigation.goBack();
          }}>
          <Ionic name="checkmark" style={{fontSize: 35, color: '#3493D9'}} />
        </TouchableOpacity>
      </View>

      <View style={{padding: 10}}>
        <View>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Username
          </Text>
          <TextInput
            placeholder="Username"
            defaultValue={username}
            editable={false}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Email
          </Text>
          <TextInput
            placeholder="email"
            defaultValue={email}
            editable={false}
            onChangeText={newText => setemail(newText)}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Phone
          </Text>
          <TextInput
            placeholder="Phone"
            defaultValue={phone}
            onChangeText={newText => setphone(newText)}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default EditProfile;
