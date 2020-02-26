export const PRODUCT_QUERY = gql`
  query product($id: ID!) {
    product(where: { id: $id }) {
      id
      name
      typeName
      tags
      rating
      coverImage {
        url
      }
      categories {
        id
        name
        nodes {
          id
          name
          isTail
          nodes {
            id
            name
            isTail
            nodes {
              id
              name
              isTail
            }
          }
        }
      }
      message
      state
      view
      summary
      createdAt
      categoryIds
    }
  }
`;