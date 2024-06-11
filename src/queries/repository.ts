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

export default REPOSITORY;