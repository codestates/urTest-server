import { gql } from "apollo-server-core";

export default gql`
  type EditTextResult {
    ok: Boolean!
    error: String
  }

  input edit {
    id: Int
    question: String
    answer1: String
    answer2: String
  }

  type Mutation {
    editTxt(
      id: Int!
      question: String
      answer1: String
      answer2: String
    ): EditTextResult!

    editTxtAll(allEdit: [edit]): EditTextResult
  }
`;
