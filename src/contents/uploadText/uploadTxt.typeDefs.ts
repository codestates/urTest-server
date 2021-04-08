import { gql } from "apollo-server-core";

//! [Upload]?? : 배열형태 : 그래프ql에만 있는 하나의 type이다.  (이미지 등을 받을 때)
export default gql`
  type TextResult {
    ok: Boolean
    error: String
  }

  input data {
    id: String
    question: String
    answer1: String
    answer2: String
  }

  type Mutation {
    uploadText(textTest: [data], title: String, desc: String): TextResult
  }
`;
