import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  Text,
  Linking,
  TouchableOpacity,
  Platform,
  Image,
  Pressable,
  ToastAndroid,
} from 'react-native';
import OrderMap from '../../components/OrderMap';
import {useRoute, useNavigation} from '@react-navigation/native';
import {API, graphqlOperation} from 'aws-amplify';
import {getOrder, getServe} from '../../graphql/queries';
import {onOrderUpdated, onServeUpdated} from './subscriptions';
import {deleteOrder} from '../../graphql/mutations';

const OrderScreen = props => {
  const [serve, setServe] = useState(null);
  const [order, setOrder] = useState(null);
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route.params.id);

  // Fetch order on initial render
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderData = await API.graphql(
          graphqlOperation(getOrder, {id: route.params.id}),
        );
        setOrder(orderData.data.getOrder);
      } catch (e) {}
    };
    fetchOrder();
  }, []);

  // Subscribe to order updates
  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onOrderUpdated, {id: route.params.id}),
    ).subscribe({
      next: ({value}) => setOrder(value.data.onOrderUpdated),
      error: error => console.warn(error),
    });

    return () => subscription.unsubscribe();
  }, []);

  // Fetch serve data when order is updated
  useEffect(() => {
    if (!order?.serveID || order.serveID === '1') {
      return;
    }

    const fetchServe = async () => {
      try {
        const serveData = await API.graphql(
          graphqlOperation(getServe, {id: order.serveId}),
        );
        // console.log(serveData);
        setServe(serveData.data.getServe);
      } catch (e) {}
    };
    fetchServe();
  }, [order]);

  // Subscribe to car updates
  useEffect(() => {
    if (!order?.serveID || order.serveID === '1') {
      console.log('Service not setted');
      return;
    }

    const subscription = API.graphql(
      graphqlOperation(onServeUpdated, {id: order.serveID}),
    ).subscribe({
      next: ({value}) => setServe(value.data.onServeUpdated),

      error: error => console.warn(error),
    });

    return () => subscription.unsubscribe();
  }, [order]);

  const openDialScreen = num => {
    let number = '';
    if (Platform.OS === 'ios') {
      number = `telprompt:${num}`;
    } else {
      number = `tel:${num}`;
    }
    Linking.openURL(number);
  };
  const getImage = () => {
    if (order?.type === 'Towing') {
      return require('../../assests/tow.jpg');
    }
    if (order?.type === 'VahanRepair') {
      return require('../../assests/repair.jpg');
    }
    if (order?.type === 'Fuel') {
      return require('../../assests/fuel.jpg');
    }
    if (order?.type === 'TyreRepair') return require('../../assests/tyre.jpg');
    else return;
  };

  //oncancel
  const onCancel = async () => {
    try {
      const ordercancel = await API.graphql({
        query: deleteOrder,
        variables: {
          input: {
            id: order.id,
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
      console.log(ordercancel);
      navigation.navigate('Home');
      TostMessage();
    } catch (e) {
      console.log(e);
    }
  };
  const TostMessage = () => {
    ToastAndroid.show('Cancelled Sucessfully !', ToastAndroid.SHORT);
  };
  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 400}}>
        {<OrderMap serve={serve} />}
      </View>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            padding: 15,
            fontSize: 20,
          }}>
          Order status:
          {order?.status}
        </Text>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{
              height: 70,
              width: 80,
            }}
            source={getImage()}
          />
        </View>
        <Text
          style={{
            padding: 10,
            fontSize: 15,
          }}>
          Order Type :<Text style={{fontWeight: 'bold'}}>{order?.type}</Text>
        </Text>
        <Text
          style={{
            padding: 10,
            fontSize: 15,
          }}>
          Service provider :
          <Text>
            {order?.serveID == 1 ? (
              'NOT assigned'
            ) : (
              <TouchableOpacity onPress={() => openDialScreen(serve?.phone)}>
                <Text style={{fontWeight: 'bold'}}>{serve?.phone}</Text>
              </TouchableOpacity>
            )}
          </Text>
        </Text>

        <Text
          style={{
            padding: 10,
            fontSize: 15,
          }}>
          User ID:
          <Text style={{fontWeight: 'bold'}}>{order?.user.username}</Text>
        </Text>

        {order?.serveID != 1 ? null : (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#cb1a1a',
              width: 200,
              padding: 10,
              marginLeft: Dimensions.get('window').width - 280,
            }}>
            <Pressable
              style={{color: 'white', fontWeight: 'bold'}}
              onPress={onCancel}>
              <Text>Cancel</Text>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
};

export default OrderScreen;
