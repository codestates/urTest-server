import { gql } from "apollo-server-core";

export default gql`
  type EditTextResult {
    ok: Boolean!
    error: String
  }

  input answers {
    answer1: String
    answer2: String
  }

  type Mutation {
    editTxt(
      id: Int
      question: String
      answer1: String
      answer2: String
    ): EditTextResult!
  }
`;
