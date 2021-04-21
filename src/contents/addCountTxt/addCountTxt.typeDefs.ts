import { gql } from "apollo-server-core";

export default gql`
  type addCountResult {
    ok: Boolean!
    error: String
    countAll: Int
  }
  type Mutation {
    addCountTxt(id: Int!): addCountResult
  }
`;
