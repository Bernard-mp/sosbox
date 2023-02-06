// export const onOrderUpdated = /* GraphQL */ `
//   subscription onOrderUpdated($filter: ModelSubscriptionOrderFilterInput) {
//     onOrderUpdated(filter: $filter) {
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
      }
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
    }
  }
`;
