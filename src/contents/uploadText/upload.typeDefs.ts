import { gql } from "apollo-server-core";

//! [Upload]?? : 배열형태 : 그래프ql에만 있는 하나의 type이다.  (이미지 등을 받을 때)
export default gql`
  type TextResult {
    ok: Boolean
    error: String
  }
  type Mutation {

        uploadText(textTest:String,title:String,desc:String): TextResult
  }
`
