import { gql } from "apollo-server-core";

export default gql`
  type deleteTxtResult {
    ok: Boolean!
    error: String
  }

  type Mutation {
    deleteQuestion(id: Int!): deleteTxtResult!
  }
`;
