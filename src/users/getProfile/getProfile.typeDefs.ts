import { gql } from "apollo-server-core";

export default gql`
  type Query {
    getProfile(id: Int!): User
  }
`;
