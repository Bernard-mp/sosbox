import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  Pressable,
  Linking,
  TouchableOpacity,
  Platform,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import styles from './styles.js';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {getServe, listOrders} from '../../graphql/queries';
import {updateServe, updateOrder} from '../../graphql/mutations.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import OrderPopup from '../../components/orderPopup/index.js';
import {onCreateOrder, onDeleteOrder} from '../../graphql/subscriptions';
const origin = {latitude: 12.93625488062098, longitude: 77.53534496697024};
// const destination = {latitude: 11.93625488062098, longitude: 77.03534496697024};
const GOOGLE_MAPS_APIKEY = 'AIzaSyBPP0LtDrZzzk6-33N8H7uJcCgmiQjB1Cg';
// const GOOGLE_MAPS_APIKEY = {};
const HomeScreen = props => {
  const [serve, setServe] = useState(null);
  const [order, setOrder] = useState(null);
  const [myPosition, setMyPosition] = useState(null);
  const [newOrders, setNewOrders] = useState([]);
  let dis = 0;
  const fetchServe = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      const serveData = await API.graphql(
        graphqlOperation(getServe, {id: userData.attributes.sub}),
      );
      // console.log(serveData.data.getServe);
      setServe(serveData.data.getServe);
    } catch (e) {
      console.error('eroor');
    }
  };

  const fetchOrders = async () => {
    try {
      const ordersData = await API.graphql(
        graphqlOperation(listOrders, {filter: {status: {eq: 'NEW'}}}),
      );
      // console.log(ordersData.data.listOrders.items);
      setNewOrders(ordersData.data.listOrders.items);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchServe();
    fetchOrders();
  }, []);
  //oncreate sub
  useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onCreateOrder)).subscribe(
      {
        next: () => fetchOrders(),

        error: error => console.warn(error),
      },
    );

    return () => subscription.unsubscribe();
  }, [newOrders]);
  //ondelete
  useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onDeleteOrder)).subscribe(
      {
        next: () => fetchOrders(),

        error: error => console.warn(error),
      },
    );

    return () => subscription.unsubscribe();
  }, [newOrders]);
  const onDecline = () => {
    setNewOrders(newOrders.slice(1));
  };
  const onAccept = async newOrder => {
    try {
      const input = {
        id: newOrder.id,
        status: 'ORDER ACCEPTED ',
        serveID: serve.id,
      };
      const orderData = await API.graphql(
        graphqlOperation(updateOrder, {input}),
      );
      setOrder(orderData.data.updateOrder);
    } catch (e) {}
    setNewOrders(newOrders.slice(1));
  };
  const onGo = async () => {
    if (!order) {
      try {
        const userData = await Auth.currentAuthenticatedUser();
        const input = {
          id: userData.attributes.sub,
          isActive: !serve.isActive,
        };
        const updatedServeData = await API.graphql(
          graphqlOperation(updateServe, {input}),
        );
        setServe(updatedServeData.data.updateServe);
      } catch (e) {
        console.error(e);
      }
    }
  };
  const onComplete = async () => {
    try {
      const input = {
        id: order.id,
        status: 'Reached Customer',
        serveID: serve.id,
      };
      const orderData = await API.graphql(
        graphqlOperation(updateOrder, {input}),
      );
      setOrder(null);
    } catch (e) {}
  };
  const onUserLocationChange = async event => {
    // console.log(event.nativeEvent.coordinate.latitude);

    const {latitude, longitude, heading} = event.nativeEvent.coordinate;

    try {
      const userData = await Auth.currentAuthenticatedUser();
      const input = {
        id: userData.attributes.sub,
        latitude,
        longitude,
        heading,
      };
      const updatedServeData = await API.graphql(
        graphqlOperation(updateServe, {input}),
      );
      setServe(updatedServeData.data.updateServe);
    } catch (e) {
      console.error(e);
    }
  };
  const onDirectionFound = event => {
    console.log('Direction found: ', event);
    if (order) {
      setOrder({
        ...order,
        distance: event.distance,
        duration: event.duration,
        isFinished: event.distance < 1,
      });
    }
  };
  const openMap = async (latitude, longitude, label = 'MyLabel') => {
    const tag = `${Platform.OS === 'ios' ? 'maps' : 'geo'}:0,0?q=`;
    const link = Platform.select({
      ios: `${scheme}${label}@${latitude},${longitude}`,
      android: `${scheme}${latitude},${longitude}(${label})`,
    });

    try {
      const supported = await Linking.canOpenURL(link);

      if (supported) Linking.openURL(link);
    } catch (error) {
      console.log(error);
    }
  };
  const renderBottomTitle = () => {
    if (order && order.isFinished) {
      return (
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#cb1a1a',
              width: 200,
              padding: 10,
            }}>
            <Pressable
              style={{color: 'white', fontWeight: 'bold'}}
              onPress={onComplete}>
              <Text>COMPLETE</Text>
            </Pressable>
          </View>
          <Text style={styles.bottomText}>{order.user.name}</Text>
        </View>
      );
    }
    const openDialScreen = num => {
      let number = '';
      if (Platform.OS === 'ios') {
        number = `telprompt:${num}`;
      } else {
        number = `tel:${num}`;
      }
      Linking.openURL(number);
    };

    if (order) {
      return (
        <View style={{alignItems: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>{order.duration ? order.duration.toFixed(1) : '?'} min</Text>
            <View
              style={{
                backgroundColor: '#1e9203',
                marginHorizontal: 10,
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <FontAwesome name={'user'} color={'white'} size={20} />
            </View>
            <Text>{order.distance ? order.distance.toFixed(1) : '?'} km</Text>
          </View>

          {/* <Text style={styles.bottomText}>Accepted order</Text> */}
          <TouchableOpacity onPress={() => openDialScreen(order.user.phone)}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              ph:
              {order.user.phone}
            </Text>
          </TouchableOpacity>
          {console.log(order.user.phone)}
        </View>
      );
    }
    if (serve?.isActive) {
      return <Text style={styles.bottomText}>You're online</Text>;
    }
    return <Text style={styles.bottomText}>You're offline</Text>;
  };

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
  return (
    <View>
      <MapView
        style={{
          width: '100%',
          height:
            Dimensions.get('window').height -
            (Dimensions.get('window').height * 13) / 100, //for emulator try 13 insteada of 11
        }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        onUserLocationChange={onUserLocationChange}
        initialRegion={{
          latitude: 12.93625488062098,
          longitude: 77.53534496697024,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {order && (
          <MapViewDirections
            origin={{latitude: serve?.latitude, longitude: serve?.longitude}}
            destination={{
              latitude: order.userLatitude,
              longitude: order.userLongitude,
            }}
            onReady={onDirectionFound}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeColor="brown"
            strokeWidth={5}
          />
        )}
      </MapView>

      {/* <Pressable onPress={onGoPress} style={styles.goButton}>
        <Text style={styles.goText}>{car?.isActive ? 'END' : 'GO'}</Text>
      </Pressable> */}
      <Pressable onPress={onGo} style={styles.goButton} name="goButton">
        <Text style={styles.goText}>{serve?.isActive ? 'END' : 'GO'}</Text>
      </Pressable>

      <View style={styles.bottomContainer}>
        {/* <Pressable
          onPress={() => Auth.signOut()}
          style={[
            styles.roundButton,
            {top: 10, left: 10},
            {backgroundColor: 'red'},
          ]}>
          <Entypo name={'user'} size={24} color="#4a4a4a" />
        </Pressable> */}
        <Ionicons
          name={'log-out-outline'}
          size={30}
          color="#4a4a4a"
          onPress={() => Auth.signOut()}
        />
        {renderBottomTitle()}
        <Ionicons
          name={'navigate-outline'}
          size={30}
          color="#4a4a4a"
          // onPress={() => openMap(order.userLatitude, order.userLongitude)}
        />
      </View>

      {newOrders.length > 0 &&
        !order &&
        serve?.isActive &&
        (dis = getDistanceFromLatLonInKm(
          serve.latitude,
          serve.longitude,
          newOrders[0].userLatitude,
          newOrders[0].userLongitude,
        )) +
          dis * 0.2 <
          10 && (
          <OrderPopup
            newOrder={newOrders[0]}
            // duration={2}
            // distance={0.5}
            onDecline={onDecline}
            onAccept={() => onAccept(newOrders[0])}
            Dis={dis + dis * 0.2}
          />
        )}
    </View>
  );
};

export default HomeScreen;
