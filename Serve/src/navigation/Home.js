import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
// import OrderScreen from '../screens/OrderScreen';
// import DestinationSearch from "../screens/DestinationSearch";
// import SearchResults from "../screens/SearchResults";

const Stack = createStackNavigator();

const HomeNavigator = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Home'} component={HomeScreen} />
      {/* <Stack.Screen name={'OrderPage'} component={OrderScreen} /> */}
      {/* <Stack.Screen name={"SearchResults"} component={SearchResults} /> */}
      {/* <Stack.Screen name={'OrderPage'} component={OrderScreen} /> */}
    </Stack.Navigator>
  );
};

export default HomeNavigator;
