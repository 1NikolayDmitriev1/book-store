import { gql } from 'apollo-server-express';

export const userSchema = gql`
  type User {
    id: ID!
    email: String!
    name: String
    cart: [CartItem]
    favorites: [FavoriteItem]
  }

  type CartItem {
    id: ID!
    bookId: String!
    addedAt: String!
  }

  type FavoriteItem {
    id: ID!
    bookId: String!
    addedAt: String!
  }

  type Query {
    user(id: ID!): User
    users: [User]
  }

  type Mutation {
    addToCart(userId: ID!, bookId: String!): CartItem
    addToFavorites(userId: ID!, bookId: String!): FavoriteItem
    removeFromCart(userId: ID!, bookId: String!): CartItem
    removeFromFavorites(userId: ID!, bookId: String!): FavoriteItem
  }
`;
