import { gql } from "apollo-server-core";

export default gql`
  type deletePhotoResult {
    ok: Boolean!
    error: String
  }

  type Mutation {
    deletePhoto(id: Int!): deletePhotoResult!
    deletePhotoAll(contentId: Int!): deletePhotoResult!
  }
`;
