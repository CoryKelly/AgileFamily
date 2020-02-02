import gql from "graphql-tag";

export const GET_TASK = gql`
  query tasks {
    tasks {
      id
      title
      imageUrl
      description
      task_complete
      user {
        firstName
        lastName
        avatar
      }
    }
  }
`;
