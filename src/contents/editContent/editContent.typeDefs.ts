import { gql } from "apollo-server-core";

export default gql`
  type EditContentResult {
    ok: Boolean!
    error: String
  }

  type Mutation {
    editContent(
      photos: [Upload]
      title: String
      desc: String
    ): EditContentResult!
  }
`;
