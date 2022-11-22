import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import style from './style.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Typerow = props => {
  const {type, onPress, isSelected} = props;

  const getImage = () => {
    if (type.type === 'Towing') {
      return require('../../assests/tow.jpg');
    }
    if (type.type === 'VahanRepair') {
      return require('../../assests/repair.jpg');
    }
    if (type.type === 'Fuel') {
      return require('../../assests/fuel.jpg');
    }
    return require('../../assests/tyre.jpg');
  };

  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: isSelected ? 'grey' : 'white',
        padding: 15,

        borderRadius: isSelected ? 10 : 0,
      }}>
      {/*  Image */}
      <Image style={style.image} source={getImage()} />

      <View style={style.middleContainer}>
        <Text style={style.type}>{type.type}</Text>
      </View>
    </Pressable>
  );
};
export default Typerow;
