import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
// import serve from '../../assests/serve';
import {API, graphqlOperation} from 'aws-amplify';
import {listServes} from '../../graphql/queries';

const HomeMap = props => {
  const [serves, setServes] = useState([]);
  useEffect(() => {
    const fetchServes = async () => {
      try {
        const response = await API.graphql(graphqlOperation(listServes));

        setServes(response.data.listServes.items);
      } catch (e) {
        console.log('error in feteching');
      }
    };
    fetchServes();
  }, []);

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
        height: Dimensions.get('window').height - 350,
        // height: Dimensions.get('window').height - 330,
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
        {serves.map(serve => (
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
