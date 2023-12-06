import { gql } from '@apollo/client'
export const ALL_AUTHORS = gql`
query {
    allAuthors {
    name
    born
    bookCount
    id
  }
}
`
export const GET_ALL_BOOK_GENRES = gql`
  query {
    genreList
  }
`;

export const ALL_BOOKS = gql`
query{
  allBooks {
    title
    published
    id
    genres
    author {
      name
      id
      born
      bookCount
    }
  }
}
`

export const USER_INFO = gql`
query{
  me {
    username
    id
    favoriteGenre
  }
}
`

export const CREATE_BOOK = gql`
mutation createBook($title: String!, $author: String!, $published: Int!, $genres: [String!]!) {
    addBook(title: $title, author: $author, published: $published, genres: $genres) {
    author {
      bookCount
      born
      id
      name
    }
    genres
    id
    published
    title
  }
}
`
export const MODIFY_AUTHOR_BORN = gql`
  mutation modifyAuthorBorn($name: String!, $setBornTo: Int!) {
    editAuthor(name: $name, setBornTo: $setBornTo) {
      name
      id
      born
      bookCount
    }
  }
`

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      value
    }
  }
`