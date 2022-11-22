/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const deleteServe = /* GraphQL */ `
  mutation DeleteServe(
    $input: DeleteServeInput!
    $condition: ModelServeConditionInput
  ) {
    deleteServe(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
