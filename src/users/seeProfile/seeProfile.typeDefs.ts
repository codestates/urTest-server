import { gql } from "apollo-server-core";

export default gql`
  type Query {
    seeProfile(userName: String!): User
  }
`;
