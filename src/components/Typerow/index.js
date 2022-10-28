import React from 'react';
import {View, Text, Image} from 'react-native';
import style from './style.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Typerow = props => {
  const {type} = props;

  const getImage = () => {
    if (type.type === 'Towing') {
      return require('../../assests/tow.jpg');
    }
    if (type.type === 'VehicleRepair') {
      return require('../../assests/repair.jpg');
    }
    if (type.type === 'Fuel') {
      return require('../../assests/fuel.jpg');
    }
    return require('../../assests/tyre.jpg');
  };

  return (
    <View style={style.container}>
      {/*  Image */}
      <Image style={style.image} source={getImage()} />

      <View style={style.middleContainer}>
        <Text style={style.type}>{type.type}</Text>
      </View>
    </View>
  );
};
export default Typerow;
