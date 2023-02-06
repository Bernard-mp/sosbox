import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './Home';
import CustomDrawer from './CustomDrawer';
// import Edit from '../screens/EditProfile';
const Drawer = createDrawerNavigator();
// import OrderList from '../screens/OrderList';
const DummyScreen = props => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>{props.name}</Text>
  </View>
);

const RootNavigator = props => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={HomeNavigator} />

        {/* <Drawer.Screen name="Your Bookings" component={OrderList} /> */}

        {/* <Drawer.Screen name="Account" component={Edit} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
