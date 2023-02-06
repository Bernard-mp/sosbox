/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      phone
      orders {
        items {
          id
          createdAt
          type
          userLatitude
          userLongitude
          status
          userID
          serveID
          updatedAt
        }
        nextToken
      }
      serve {
        id
        type
        latitude
        longitude
        heading
        phone
        isActive
        order {
          nextToken
        }
        user {
          id
          username
          email
          phone
          createdAt
          updatedAt
          userServeId
        }
        createdAt
        updatedAt
        serveUserId
      }
      createdAt
      updatedAt
      userServeId
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        phone
        orders {
          nextToken
        }
        serve {
          id
          type
          latitude
          longitude
          heading
          phone
          isActive
          createdAt
          updatedAt
          serveUserId
        }
        createdAt
        updatedAt
        userServeId
      }
      nextToken
    }
  }
`;
export const getServe = /* GraphQL */ `
  query GetServe($id: ID!) {
    getServe(id: $id) {
      id
      type
      latitude
      longitude
      heading
      phone
      isActive
      order {
        items {
          id
          createdAt
          type
          userLatitude
          userLongitude
          status
          userID
          serveID
          updatedAt
        }
        nextToken
      }
      user {
        id
        username
        email
        phone
        orders {
          nextToken
        }
        serve {
          id
          type
          latitude
          longitude
          heading
          phone
          isActive
          createdAt
          updatedAt
          serveUserId
        }
        createdAt
        updatedAt
        userServeId
      }
      createdAt
      updatedAt
      serveUserId
    }
  }
`;
export const listServes = /* GraphQL */ `
  query ListServes(
    $filter: ModelServeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        latitude
        longitude
        heading
        phone
        isActive
        order {
          nextToken
        }
        user {
          id
          username
          email
          phone
          createdAt
          updatedAt
          userServeId
        }
        createdAt
        updatedAt
        serveUserId
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      createdAt
      type
      userLatitude
      userLongitude
      status
      userID
      serveID
      user {
        id
        username
        email
        phone
        orders {
          nextToken
        }
        serve {
          id
          type
          latitude
          longitude
          heading
          phone
          isActive
          createdAt
          updatedAt
          serveUserId
        }
        createdAt
        updatedAt
        userServeId
      }
      Serve {
        id
        type
        latitude
        longitude
        heading
        phone
        isActive
        order {
          nextToken
        }
        user {
          id
          username
          email
          phone
          createdAt
          updatedAt
          userServeId
        }
        createdAt
        updatedAt
        serveUserId
      }
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        type
        userLatitude
        userLongitude
        status
        userID
        serveID
        user {
          id
          username
          email
          phone
          createdAt
          updatedAt
          userServeId
        }
        Serve {
          id
          type
          latitude
          longitude
          heading
          phone
          isActive
          createdAt
          updatedAt
          serveUserId
        }
        updatedAt
      }
      nextToken
    }
  }
`;
