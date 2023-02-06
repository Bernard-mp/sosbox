import React from 'react';
import {View, Text, Pressable, ScrollView} from 'react-native';
import style from './style.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Typerow from '../Typerow';
import typesData from '../../assests/types';

const OsbTypes = ({typeState, onSubmit}) => {
  const [selectedType, setselectedType] = typeState;

  return (
    <View>
      <Text
        style={{
          marginTop: 15,
          marginLeft: 20,

          fontWeight: 'bold',
          fontSize: 18,
        }}>
        Please select the service you needed
        <AntDesign name="arrowright" size={15}>
          {' '}
        </AntDesign>
      </Text>
      <ScrollView horizontal={true}>
        {typesData.map(type => (
          <Typerow
            type={type}
            isSelected={type.type === selectedType}
            onPress={() => setselectedType(type.type)}
          />
        ))}
      </ScrollView>
      <Text
        style={{
          marginTop: '2%',
          marginLeft: 15,

          fontSize: 12,
        }}>
        Note : Price may be higher than usual cost for some service
      </Text>
      <Pressable
        onPress={onSubmit}
        style={{
          backgroundColor: 'red',
          padding: 0,
          margin: 12,
          marginBottom: 20,
          alignItems: 'center',
          height: 50,
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            padding: '4%',
            fontSize: 15,
          }}>
          Confirm Service
        </Text>
      </Pressable>
    </View>
  );
};
export default OsbTypes;
