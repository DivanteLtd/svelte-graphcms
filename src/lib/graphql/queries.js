import { gql } from "graphql-request";

const GET_PAGES = gql`
  query getPagesQuery($language: [Locale!]!) {
    pages(locales: $language) {
      id
      slug
      title
    }
  }
`;
const GET_PAGE = gql`
  query getPageQuery($slug: String!, $language: [Locale!]!) {
    page(locales: $language, where: { slug: $slug }) {
      pageBlocks {
        __typename
        ... on QuoteBlock {
          id
          quote
          author
        }
        __typename
        ... on PostBlock {
          id
          title
        }
        __typename
        ... on ContentBlock {
          id
          title
        }
        __typename
        ... on CarouselBlock {
          id
          title
          images {
            fileName
            url
          }
        }
      }
      title
      slug
    }
  }
`;

const GET_POSTS = gql`
  query getPostsQuery($language: [Locale!]!) {
    postBlocks(locales: $language) {
      id
      slug
      title
      coverImage {
        id
        url
      }
    }
  }
`;

const GET_POST = gql`
  query getPostQuery($slug: String!, $language: [Locale!]!) {
    postBlock(locales: $language, where: { slug: $slug }) {
      id
      title
      publishedAt
      content {
        html
      }
      coverImage {
        url
      }
    }
  }
`;
export { GET_PAGES, GET_PAGE, GET_POSTS, GET_POST };
