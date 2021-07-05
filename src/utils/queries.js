// new -- utils is for non-React based code
import gql from 'graphql-tag';

export const GET_ME = gql`
 query me {
  me {
      _id
      username
      email
      bookCount
      savedBooks {
          bookId
          title
          authors
          description
          image
          link
      }
  }
}
`;
