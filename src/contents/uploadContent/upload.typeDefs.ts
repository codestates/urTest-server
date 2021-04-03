import { gql } from "apollo-server-core";

export default gql`
  type ContentResult {
    ok: Boolean
    error: String
  }
  type Mutation {
    uploadContent(files: [Upload], title: String, desc: String): ContentResult
  }
`;
