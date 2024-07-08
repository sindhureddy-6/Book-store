/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      user
      date
      total
      books {
        items {
          id
          book_id
          order_id
          book {
            id
            title
            description
            image
            author
            featured
            price
            createdAt
            updatedAt
            __typename
          }
          order {
            id
            user
            date
            total
            createdAt
            updatedAt
            customer
            __typename
          }
          createdAt
          updatedAt
          customer
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      customer
      __typename
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $id: ID
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrders(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        user
        date
        total
        books {
          items {
            id
            book_id
            order_id
            createdAt
            updatedAt
            customer
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        customer
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const bookOrdersByBook_idAndOrder_id = /* GraphQL */ `
  query BookOrdersByBook_idAndOrder_id(
    $book_id: ID!
    $order_id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBookOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookOrdersByBook_idAndOrder_id(
      book_id: $book_id
      order_id: $order_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        book_id
        order_id
        book {
          id
          title
          description
          image
          author
          featured
          price
          orders {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        order {
          id
          user
          date
          total
          books {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          customer
          __typename
        }
        createdAt
        updatedAt
        customer
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const bookOrdersByOrder_idAndBook_id = /* GraphQL */ `
  query BookOrdersByOrder_idAndBook_id(
    $order_id: ID!
    $book_id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBookOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookOrdersByOrder_idAndBook_id(
      order_id: $order_id
      book_id: $book_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        book_id
        order_id
        book {
          id
          title
          description
          image
          author
          featured
          price
          orders {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        order {
          id
          user
          date
          total
          books {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          customer
          __typename
        }
        createdAt
        updatedAt
        customer
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ordersByUserAndDate = /* GraphQL */ `
  query OrdersByUserAndDate(
    $user: String!
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByUserAndDate(
      user: $user
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user
        date
        total
        books {
          items {
            id
            book_id
            order_id
            createdAt
            updatedAt
            customer
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        customer
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      title
      description
      image
      author
      featured
      price
      orders {
        items {
          id
          book_id
          order_id
          book {
            id
            title
            description
            image
            author
            featured
            price
            createdAt
            updatedAt
            __typename
          }
          order {
            id
            user
            date
            total
            createdAt
            updatedAt
            customer
            __typename
          }
          createdAt
          updatedAt
          customer
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $id: ID
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBooks(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        title
        description
        image
        author
        featured
        price
        orders {
          items {
            id
            book_id
            order_id
            createdAt
            updatedAt
            customer
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
