import gql from 'graphql-tag'


export const GET_CASES = gql`

    query globalTotal{
      globalTotal{
    cases,
    deaths,
    recovered,
    deaths
      }
  }

`;