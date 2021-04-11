import { gql } from "apollo-server-core";

export default gql`
  type addCountPhotoResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    addCountPhoto(id: Int!): addCountPhotoResult
  }
`;
