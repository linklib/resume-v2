import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Tech {
    id: String!
    name: String
    image: String
    lavel: String
    categoryId: String
    Category: Category
  }

  type Category {
    id: String!
    name: String
    teches: [Tech]
  }

  type Query {
    teches: [Tech]
    categories: [Category]
  }
`;
