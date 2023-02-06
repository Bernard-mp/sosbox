export const getServeId = /* GraphQL */ `
  query GetServe($id: ID!) {
    getServe(id: $id) {
      id
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
      user {
        id
        username
        email
        phone
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      serveUserId
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
        updatedAt
        user {
          id
          username
          email
          phone
          createdAt
          updatedAt
          userServeId
        }
      }
    }
  }
`;
