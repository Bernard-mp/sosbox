import React, {useState} from 'react';
import {
  Alert,
  Button,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useRoute, useNavigation} from '@react-navigation/native';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {createOrder} from '../../graphql/mutations';
import HomeMap from '../../components/HomeMap';
import OsbTypes from '../../components/OsbTypes';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};
const onUserLocationChange = async event => {
  loc = event.nativeEvent.coordinate;
  // const {latitude, longitude} = event.nativeEvent.coordinate;
  console.log(loc);
};
const HomeScreen = props => {
  const typeState = useState(null);
  const route = useRoute();
  const navigation = useNavigation();
  <MapView
    provider={PROVIDER_GOOGLE}
    showsUserLocation={true}
    onUserLocationChange={onUserLocationChange}
  />;
  const onSubmit = async () => {
    const [type] = typeState;

    if (!type) {
      return;
    }

    try {
      const userInfo = await Auth.currentAuthenticatedUser();
      const date = new Date();

      // createdAt: date.toISOString(),
      // user: ' userInfo.attributes.sub';
      const newOrder = await API.graphql({
        query: createOrder,
        variables: {
          input: {
            createdAt: date.toISOString(),
            type,
            userLatitude: loc.latitude,
            userLongitude: loc.longitude,
            // heading: 130.0,
            userID: userInfo.attributes.sub,
            serveID: '1',
            status: 'NEW',
          },
        },
      });
      console.log(newOrder);
      navigation.navigate('OrderPage', {id: newOrder.data.createOrder.id});
    } catch (e) {
      console.log(e);
    }
  };
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View>
        <View>
          <HomeMap />
        </View>

        <View>
          <OsbTypes typeState={typeState} onSubmit={onSubmit} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
