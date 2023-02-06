import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
// import {Auth} from 'aws-amplify';
import {API, graphqlOperation, Auth} from 'aws-amplify';

const CustomDrawer = props => {
  const [username, setusername] = useState();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        // const userData = await API.graphql(
        //   graphqlOperation(getUser, {id: userInfo.id}),
        // );
        setusername(user.username);
        console.log(username);
      } catch (e) {
        console.log('error in fetching');
      }
    };
    fetchUser();
  }, []);
  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: '#212121', padding: 15}}>
        {/* User Row */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#cacaca',
              width: 0,
              height: 0,

              marginRight: 10,
            }}></View>

          <View>
            <Text style={{color: 'white', fontSize: 24, marginRight: 10}}>
              {username}
            </Text>
            {/* <Text style={{color: 'lightgrey'}}>5.00 *</Text> */}
          </View>
        </View>

        {/* Messages Row */}
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#919191',
            borderTopWidth: 1,
            borderTopColor: '#919191',
            paddingVertical: 5,
            marginVertical: 10,
          }}></View>
      </View>

      <DrawerItemList {...props} />

      {/* Make money */}
      <Pressable
        onPress={() => {
          Auth.signOut();
        }}>
        <Text style={{padding: 5, paddingLeft: 20}}>Logout</Text>
      </Pressable>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
