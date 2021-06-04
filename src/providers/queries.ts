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
