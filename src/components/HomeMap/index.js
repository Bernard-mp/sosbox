import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import serve from '../../assests/serve';

const HomeMap = props => {
  const getImage = type => {
    if (type === 'tow') {
      return require('../../assests/tow.png');
    }
    if (type === 'repair') {
      return require('../../assests/repair.png');
    }
    if (type === 'fuel') {
      return require('../../assests/fuel.png');
    }
    if (type === 'tyre') return require('../../assests/tyre.png');
  };
  return (
    <View
      style={{
        height: 450,
        backgroundColor: '#3670E9',
        // borderBottomEndRadius: 20,
        // borderBottomLeftRadius: 20,
      }}>
      <MapView
        style={{height: '100%', width: '100%'}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: 12.93625488062098,
          longitude: 77.53534496697024,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {serve.map(serve => (
          <Marker
            coordinate={{
              latitude: serve.latitude,
              longitude: serve.longitude,
            }}>
            <Image
              style={{width: 50, height: 30}}
              source={getImage(serve.type)}></Image>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};
export default HomeMap;