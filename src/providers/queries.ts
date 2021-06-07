import gql from 'graphql-tag';

export const LOGIN_MUTATION = gql`
  mutation Login($input: AccountLoginInput!) {
    login(input: $input) {
      token
      user {
        id
        status
      }
    }
  }
`;
export const fragments = {
  user: gql`
    fragment UserDetails on User {
      id
      firstName
      lastName
      email
      phone
      status
    }
  `,
};

export const VIEWER_QUERY = gql`
  query ViewerQuery {
    viewer {
      id
      me {
        ...UserDetails
      }
    }
  }
  ${fragments.user}
`;
