import { gql } from "apollo-server-core";

export default gql`
  type ContentResult {
    ok: Boolean
    error: String
  }
  type Mutation {
    uploadContent(files: String, title: String, desc: String): ContentResult
  }
`;
