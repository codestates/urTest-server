import { gql } from "apollo-server-core";

export default gql`
  type Query {
    getProfile(userName: String!): User
  }
`;
