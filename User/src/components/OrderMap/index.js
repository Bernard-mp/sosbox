import React from 'react';
import {Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const OrderMap = ({serve}) => {
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
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 12.93625488062098,
        longitude: 77.53534496697024,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {serve && (
        <Marker
          coordinate={{latitude: serve.latitude, longitude: serve.longitude}}>
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              transform: [
                {
                  rotate: `${serve.heading}deg`,
                },
              ],
            }}
            source={getImage(serve.type)}
          />
        </Marker>
      )}
    </MapView>
  );
};

export default OrderMap;
