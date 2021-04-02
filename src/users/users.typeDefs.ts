import { gql } from "apollo-server-core";

export default gql`
  type User {
    id: String!
    userName: String!
    email: String!
    createdAt: String!
    updatedAt: String!
  }
`;
