import { gql } from "apollo-boost";

export const SEARCH_QUERY_PRODUCT_CONNECTION = gql`
query searchConnection(
    $first: Int
    $last: Int
    $offset: Int
    $after: String
    $before: String
    $orderBy: SearchConnectionOrder
    $where: SearchConnectionWhere
  ) {
    searchConnection(
        first: $first
        last: $last
        offset: $offset
        after: $after
        before: $before
        orderBy: $orderBy
        where: $where
    ) {
        edges {
        node {
            id
            name
            typeName
            coverImage {
            url
            }
            coverPrice
            salePrice
            state
            discountRate
            view
            createdAt
        }
        }
        totalCount
    }
}
`