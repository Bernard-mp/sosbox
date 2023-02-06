export const createServe = /* GraphQL */ `
  mutation CreateServe(
    $input: CreateServeInput!
    $condition: ModelServeConditionInput
  ) {
    createServe(input: $input, condition: $condition) {
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
  }
`;
export const updateServe = /* GraphQL */ `
  mutation UpdateServe(
    $input: UpdateServeInput!
    $condition: ModelServeConditionInput
  ) {
    updateServe(input: $input, condition: $condition) {
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
  }
`;

export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      createdAt
      type
      status
      userLatitude
      userLongitude
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
