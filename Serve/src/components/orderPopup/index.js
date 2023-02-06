import React, {useState, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles.js';
import {getServe, listOrders} from '../../graphql/queries';
import {API, graphqlOperation, Auth} from 'aws-amplify';
const OrderPopup = ({newOrder, onAccept, onDecline, Dis}) => {
  // console.log(newOrder);
  // const [serve, setServe] = useState();
  // const [Dis, setDis] = useState();
  // const fetchServe = async () => {
  //   try {
  //     const userData = await Auth.currentAuthenticatedUser();
  //     const serveData = await API.graphql(
  //       graphqlOperation(getServe, {id: userData.attributes.sub}),
  //     );
  //     // console.log(serveData.data.getServe);
  //     setServe(serveData.data.getServe);
  //     // console.log(serve.latitude);
  //     // console.log(newOrder.userLatitude);
  //   } catch (e) {
  //     console.error('eroor');
  //   }
  // };
  useEffect(() => {
    console.log(Dis);
  });

  return (
    <View style={styles.root}>
      <Pressable onPress={onDecline} style={styles.declineButton}>
        <Text style={styles.declineText}>Decline</Text>
      </Pressable>

      <Pressable onPress={onAccept} style={styles.popupContainer}>
        <View style={styles.row}>
          <Text style={styles.serveType}>{newOrder.type}</Text>

          <View style={styles.userBg}>
            <FontAwesome name={'user'} color={'white'} size={35} />
          </View>

          <Text style={styles.serveType}>
            <AntDesign name={'star'} size={18} />
            {newOrder.user?.rating}
          </Text>
        </View>

        {/* <Text style={styles.minutes}> {newOrder.duration} min</Text> */}
        <Text style={styles.distance}>
          Approx Dis:{Number(Dis.toFixed(3))} KM
        </Text>
      </Pressable>
    </View>
  );
};

export default OrderPopup;
