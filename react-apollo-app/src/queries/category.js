import { gql } from "apollo-boost";

export const CATEGORY_QUERY = gql`
{
    categories {
      id
      name
      nodes {
        id
        name
        nodes {
          id
          name
        }
      }
    }
}
`