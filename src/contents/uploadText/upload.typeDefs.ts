import { gql } from "apollo-server-core";
export default gql`
  type TextResult {
    ok: Boolean
    error: String
  }
  type Mutation {
    uploadText(textTest: String, title: String, desc: String): TextResult
  }
`;
