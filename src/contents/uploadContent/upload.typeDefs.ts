

import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    uploadContent(files: [Upload], title: String, desc: String): Content
  }



`;
