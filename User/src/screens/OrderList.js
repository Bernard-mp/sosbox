import {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Platform,
  Pressable,
} from 'react-native';
import {listOrders} from '../graphql/queries';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {onCreateOrder} from '../graphql/subscriptions';
import {LogBox} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
export default function OrderList() {
  // Fetch order on initial render
  const [List, setList] = useState();
  let userInfo;
  const navigation = useNavigation();
  const fetchOrder = async () => {
    const user = await Auth.currentAuthenticatedUser();
    userInfo = user.attributes.sub;
    try {
      const orders = await API.graphql(
        graphqlOperation(listOrders, {
          filter: {userID: {eq: userInfo}},
        }),
      );
      let dummy = orders.data.listOrders.items;
      dummy.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
      setList(dummy);

      // console.log(List[0].Serve);

      // console.log(List[0].userID);
    } catch (e) {}
  };
  useEffect(() => {
    fetchOrder();
  });

  //create sub
  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateOrder, {
        filter: {userID: {eq: userInfo}},
      }),
    ).subscribe({
      next: () => fetchOrder(),

      error: error => console.warn(error),
    });

    return () => subscription.unsubscribe();
  }, [List]);

  const getImage = type => {
    if (type === 'Towing') {
      return require('../assests/tow.jpg');
    }
    if (type === 'VahanRepair') {
      return require('../assests/repair.jpg');
    }
    if (type === 'Fuel') {
      return require('../assests/fuel.jpg');
    }
    if (type === 'TyreRepair') return require('../assests/tyre.jpg');
    else return;
  };
  const isDone = async data => {
    if (data.status == 'Reached Customer') return;

    navigation.navigate('OrderPage', {id: data.id});
  };

  const oneAnimal = ({item}) => (
    <View style={styles.item}>
      <View style={styles.avatarContainer}>
        <Image source={getImage(item.type)} style={styles.avatar} />
      </View>

      <View>
        <Text style={styles.name}>
          <Text>Status: </Text>
          {item.status}
        </Text>
        <Text style={styles.service}>
          <Text>Service: </Text>
          {item.type}
        </Text>

        <Text style={styles.service}>
          <Text>Date: </Text>
          {item.createdAt}
        </Text>
      </View>
    </View>
  );

  // headerComponent = () => {
  //   return <Text style={styles.listHeadline}>Animals</Text>;
  // };

  listSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponentStyle={styles.listHeader}
        // ListHeaderComponent={headerComponent}
        ListEmptyComponent={
          <Text style={{textAlign: 'center', padding: 20, fontSize: 20}}>
            You are not having orders yet!!
          </Text>
        }
        data={List}
        renderItem={oneAnimal}
        ItemSeparatorComponent={listSeparator}
        // keyExtractor={ animals => animals.whatever }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  listHeader: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#7B52AB',
  },

  listHeadline: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 21,
  },

  avatarContainer: {
    backgroundColor: '#D9D9D9',
    borderRadius: 100,
    height: 89,
    width: 89,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    backgroundColor: 0x34352f,
    margin: 10,
    marginHorizontal: 0,
  },

  avatar: {
    height: 80,
    width: 80,
  },

  name: {
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 13,
  },
  service: {
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 13,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CCC',
  },
});

// import React, {useState} from 'react';
// import {Text, View, StatusBar, FlatList} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// import styled from 'styled-components';

// const ActivityFeed = ({navigation}) => {
//   const [data, setData] = useState(
//     new Array(10).fill({
//       id: 1,
//       userName: 'Name Surname',
//       // avatar: require('../../../assets/images/avatar.png'),
//       content:
//         'Eiusmod tempor quis ex aliquip non ipsum minim reprehenderit esse quis deserunt eiusmod proident id. Aliqua laborum pariatu...',
//       timeAgo: '1h ago',
//     }),
//   );

//   const _renderItem = ({item, index}) => {
//     return (
//       <Card>
//         <CardContent>
//           <Header>
//             <View style={{flexDirection: 'row', alignItems: 'center'}}>
//               <Avatar source={item.avatar} />
//               <UserName>{item.userName}</UserName>
//             </View>
//             <Time>{item.timeAgo}</Time>
//           </Header>
//           <Content>
//             <ContentText>{item.content}</ContentText>
//           </Content>
//           <Image></Image>
//           <Footer>
//             <View style={{flexDirection: 'row', alignItems: 'center'}}>
//               {/* <Icon source={require('../../../assets/images/like_icon.png')} /> */}
//               <Number>609</Number>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   marginLeft: 32,
//                 }}>
//                 {/* <Icon
//                   source={require('../../../assets/images/comments_icon.png')}
//                 /> */}
//                 <Number>120</Number>
//               </View>
//             </View>
//             <Share>{'SHARE'}</Share>
//           </Footer>
//         </CardContent>
//       </Card>
//     );
//   };

//   return (
//     <Container>
//       <StatusBar hidden={true} />
//       <NavBar>
//         {/* <Icon source={{uri: '../../../assets/images/menu_icon.png'}} /> */}
//         <Title>{'ACTIVITY FEED'}</Title>
//         {/* <Icon source={{uri: '../../../assets/images/search_icon.png'}} /> */}
//       </NavBar>
//       <FlatList
//         keyExtractor={(_, index) => '' + index}
//         data={data}
//         renderItem={_renderItem}
//       />
//     </Container>
//   );
// };

// const Container = styled.View`
//   flex: 1;
//   background-color: #f1f9ff;
// `;
// const NavBar = styled.View`
//   height: 76px;
//   margin: 0px 16px;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
// `;
// const Icon = styled.Image`
//   width: 16px;
//   height: 16px;
// `;
// const Title = styled.Text`
//   color: #2699fb;
//   font-size: 14px;
//   line-height: 24px;
//   font-weight: bold;
// `;
// const Card = styled.View`
//   margin: 8px;
//   background-color: #fff;
// `;
// const CardContent = styled.View`
//   margin: 32px;
// `;
// const Header = styled.View`
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
// `;
// const Avatar = styled.Image`
//   width: 40px;
//   height: 40px;
//   border-radius: 40px;
// `;
// const UserName = styled.Text`
//   color: #2699fb;
//   font-size: 14px;
//   line-height: 24px;
//   font-weight: bold;
//   margin-left: 8px;
// `;
// const Time = styled.Text`
//   color: #2699fb;
//   font-size: 14px;
//   line-height: 24px;
// `;
// const Content = styled.View`
//   margin: 16px 0px;
//   height: 80px;
// `;
// const ContentText = styled.Text`
//   color: #2699fb;
//   font-size: 14px;
//   line-height: 24px;
// `;
// const Image = styled.View`
//   height: 170px;
//   background-color: #bce0fd;
// `;
// const Footer = styled.View`
//   margin-top: 32px;
//   flex-direction: row;
//   justify-content: space-between;
// `;
// const Number = styled.Text`
//   margin-left: 8px;
//   color: #2699fb;
//   font-size: 14px;
//   line-height: 24px;
//   font-weight: bold;
// `;
// const Share = styled.Text`
//   color: #2699fb;
//   font-size: 14px;
//   line-height: 24px;
//   font-weight: bold;
// `;
// export default ActivityFeed;
