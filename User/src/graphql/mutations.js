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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
