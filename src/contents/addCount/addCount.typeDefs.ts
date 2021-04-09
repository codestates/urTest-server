import { gql } from "apollo-server-core";

export default gql`
  type addCountResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    addCount(id: Int!): addCountResult
  }
`;
