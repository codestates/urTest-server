import { gql } from "apollo-server-core";

export default gql`
  type EditPhotoResult {
    ok: Boolean!
    error: String
  }

  type Mutation {
    editPhotoName(id: Int!, photoName: String): EditPhotoResult!
  }
`;
