import gql from 'graphql-tag'

export const FIRST_TEN_BOOKS_QUERY = gql`
  query BooksQuery {
    books(first: 10) {
      data {
        id
        title
        cover
        slug
        description
        author
        publisher
        views
        price
        created_at
        updated_at
      }
    }
  }
`
export const ALL_BOOKS_QUERY = gql`
  query AllBooksQuery {
    allBooks {
      id
      title
      cover
      slug
      description
      author
      publisher
      views
      price
      created_at
      updated_at
    }
  }
`

export const GET_BOOK_BY_SLUG = gql`
  query FindBookQuery(
    $identifier: String!
    $operator: String!
    $value: String!
  ) {
    findBookBy(identifier: $identifier, operator: $operator, value: $value) {
      id
      title
      cover
      slug
      description
      author
      publisher
      views
      price
      created_at
      updated_at
    }
  }
`

export const GET_CATEGORY_BY_SLUG = gql`
  query FindCategoryQuery(
    $identifier: String!
    $operator: String!
    $value: String!
  ) {
    findCategoryBy(
      identifier: $identifier
      operator: $operator
      value: $value
    ) {
      name
      slug
      image
      books {
        id
        title
        cover
        slug
        description
        author
        publisher
        views
        price
        created_at
        updated_at
      }
    }
  }
`
export const ALL_CATEGORY_QUERY = gql`
  query AllCategoryQuery($first: Int!, $page: Int!) {
    categories(first: $first, page: $page) {
      paginatorInfo {
        count
        currentPage
        firstItem
        hasMorePages
        lastItem
        lastPage
        perPage
        total
      }
      data {
        id
        name
        slug
        image
      }
    }
  }
`

export const CATEGORIES_PAGE_QUERY = gql`
  query CategoriesPageQuery($page: Int!, $size: Int!) {
    categoriesPage(page: $page, size: $size) {
      categories {
        id
        name
        image
        slug
      }
      hasMore
    }
  }
`

export const BOOKS_PAGE_QUERY = gql`
  query BooksPageQuery($page: Int!, $size: Int!) {
    booksPage(page: $page, size: $size) {
      books {
        id
        title
        cover
        slug
        description
        author
        publisher
        views
        price
        created_at
        updated_at
      }
      hasMore
    }
  }
`

export const RANDOMIZED_CATEGORY = gql`
  query CategoriesQuery {
    randomCategory(total: 2) {
      id
      name
      slug
      image
    }
  }
`
