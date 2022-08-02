import { gql } from '@apollo/client';

export const AllPostsQuery = gql`
  query allPosts {
    posts {
      nodes {
        title
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
