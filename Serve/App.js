/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {withAuthenticator} from 'aws-amplify-react-native';
import HomeScreen from './src/screens/HomeScreen/index';
import Geolocation from '@react-native-community/geolocation';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Amplify from '@aws-amplify/core';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);
import {getServeId} from './src/graphql/queries';
import {createServe} from './src/graphql/mutations';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
navigator.geolocation = require('@react-native-community/geolocation');
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

const App: () => Node = () => {
  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'OSB App Camera Permission',
          message:
            'OSB App needs access to your location ' + 'so we can help you.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      // IOS
      Geolocation.requestAuthorization();
    }
  }, []);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  //Create a service registered automatically in serve data base
  useEffect(() => {
    const updateUserServe = async () => {
      const authenticatedUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      if (!authenticatedUser) return;

      const serveData = await API.graphql(
        graphqlOperation(getServeId, {id: authenticatedUser.attributes.sub}),
      );
      if (!!serveData.data.getServe) {
        console.log(serveData.data.getServe);
        console.log('already service is defined');
        return;
      }
      const newServe = {
        id: authenticatedUser.attributes.sub,
        type: 'fuel',
        serveUserId: authenticatedUser.attributes.sub,
        phone: authenticatedUser.attributes.phone_number,
        isActive: false,
      };
      await API.graphql(graphqlOperation(createServe, {input: newServe}));
    };

    updateUserServe();
  }, []);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <HomeScreen />
    </SafeAreaView>
  );
};

// export default App;
export default withAuthenticator(App);
