import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, Pressable} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import styles from './styles.js';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import OrderPopup from '../../components/orderPopup/index.js';
// const origin = {latitude: 37.3318456, longitude: -122.0296002};
// const destination = {latitude: 37.771707, longitude: -122.4053769};
// const GOOGLE_MAPS_APIKEY = 'AIzaSyCmaJ7StY6xVfylUr34JDttWDXMNDgVrxo';

const HomeScreen = props => {
  const [isOnline, setisOnline] = useState(false);
  const [order, setOrder] = useState({});
  const [newOrder, setNewOrder] = useState({
    id: '1',
    type: 'towing',
    userLatitude: 12.93625488062098,
    userLongitude: 77.53534496697024,
    dist: 24,
    dur: 40,
    user: {
      username: 'Deepak',
      rating: 4.8,
    },
  });
  const onDecline = () => {
    setNewOrder(null);
    setOrder(null);
  };
  const onAccept = newOrder => {
    setOrder(newOrder);
    setNewOrder(null);
  };
  const onGo = () => {
    setisOnline(!isOnline);
  };

  const renderBottomTitle = () => {
    if (order) {
      return (
        <View style={{alignItems: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>30 min</Text>
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
            <Text>2 km</Text>
          </View>
          <Text style={styles.bottomText}>
            Picking up {order?.user?.username}
          </Text>
        </View>
      );
    }
    if (isOnline) {
      return <Text style={styles.bottomText}>You're online</Text>;
    }
    return <Text style={styles.bottomText}>You're offline</Text>;
  };
  return (
    <View>
      <MapView
        style={{
          width: '100%',
          height:
            Dimensions.get('window').height -
            (Dimensions.get('window').height * 11) / 100,
        }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: 12.93625488062098,
          longitude: 77.53534496697024,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {/* <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
        /> */}
      </MapView>
      <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.roundButton, {top: 10, left: 10}]}>
        <Entypo name={'menu'} size={24} color="#4a4a4a" />
      </Pressable>

      {/* <Pressable onPress={onGoPress} style={styles.goButton}>
        <Text style={styles.goText}>{car?.isActive ? 'END' : 'GO'}</Text>
      </Pressable> */}
      <Pressable onPress={onGo} style={styles.goButton}>
        <Text style={styles.goText}>{isOnline ? 'END' : 'GO'}</Text>
      </Pressable>

      <View style={styles.bottomContainer}>
        <Ionicons name={'options'} size={30} color="#4a4a4a" />
        {renderBottomTitle()}

        <Entypo name={'menu'} size={30} color="#4a4a4a" />
      </View>
      {newOrder && (
        <OrderPopup
          newOrder={newOrder}
          onDecline={onDecline}
          onAccept={() => onAccept(newOrder)}
        />
      )}
    </View>
  );
};

export default HomeScreen;
