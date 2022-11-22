import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
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
const HomeScreen = props => {
  const typeState = useState(null);
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
            userLatitude: 123.45,
            userLongitude: 123.45,
            // heading: 130.0,
            userID: userInfo.attributes.sub,
            serveID: 'a3f4095e-39de-43d2-baf4-f8c16f0f6f4d',
          },
        },
      });
      // const input = {
      //   // createdAt: date.toISOString(),
      //   type,
      //   Latitude: 123.45,
      //   Longitude: 123.45,

      // };
      // const response = await API.graphql(
      //   graphqlOperation(CreateServe, {input: input}),
      // );
      console.log(newOrder);
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
