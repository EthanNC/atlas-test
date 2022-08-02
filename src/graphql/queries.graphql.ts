import { gql } from '@apollo/client';

export const AllPostsQuery = gql`
  query allPosts {
    posts {
      nodes {
        title
        slug
        featuredImage {
          node {
            isPreview
            mediaItemUrl
            mediaDetails {
              width
              height
            }
          }
        }
      }
    }
  }
`;

export const SinglePostQuery = gql`
  query singlePost($idType: PostIdType = SLUG, $slug: ID!) {
    post(idType: $idType, id: $slug) {
      title
      content
      date
    }
  }
`;
