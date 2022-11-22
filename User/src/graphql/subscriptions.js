/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      username
      email
      orders {
        items {
          id
          createdAt
          type
          userLatitude
          userLongitude
          userID
          serveID
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      username
      email
      orders {
        items {
          id
          createdAt
          type
          userLatitude
          userLongitude
          userID
          serveID
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      username
      email
      orders {
        items {
          id
          createdAt
          type
          userLatitude
          userLongitude
          userID
          serveID
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      order {
        items {
          id
          createdAt
          type
          userLatitude
          userLongitude
          userID
          serveID
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      order {
        items {
          id
          createdAt
          type
          userLatitude
          userLongitude
          userID
          serveID
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      order {
        items {
          id
          createdAt
          type
          userLatitude
          userLongitude
          userID
          serveID
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      userID
      serveID
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
      userID
      serveID
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
      userID
      serveID
      updatedAt
    }
  }
`;
