/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onOrderUpdated = /* GraphQL */ `
  subscription OnOrderUpdated($id: ID!) {
    onOrderUpdated(id: $id) {
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
export const onServeUpdated = /* GraphQL */ `
  subscription OnServeUpdated($id: ID!) {
    onServeUpdated(id: $id) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateServe = /* GraphQL */ `
  subscription OnCreateServe($filter: ModelSubscriptionServeFilterInput) {
    onCreateServe(filter: $filter) {
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
export const onUpdateServe = /* GraphQL */ `
  subscription OnUpdateServe($filter: ModelSubscriptionServeFilterInput) {
    onUpdateServe(filter: $filter) {
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
export const onDeleteServe = /* GraphQL */ `
  subscription OnDeleteServe($filter: ModelSubscriptionServeFilterInput) {
    onDeleteServe(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
