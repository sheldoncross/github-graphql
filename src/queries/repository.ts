import { gql } from "@apollo/client";

const REPOSITORY = gql`
  query Repository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      nameWithOwner
      description
      url
      stargazerCount
      forkCount
    }
  }
`;

const REPOSITORIES = gql`
  query User($login: String!, $cursor: String) {
    user(login: $login) {
      repositories(first: 100, after: $cursor, ownerAffiliations: OWNER, orderBy: {field: UPDATED_AT, direction: DESC}) {
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          name
          description
          url
          stargazerCount
          forkCount
          isPrivate
          createdAt
        }
      }
    }
  }
`;

export { REPOSITORY, REPOSITORIES };