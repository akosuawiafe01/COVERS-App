import gql from 'graphql-tag'
import { exp } from 'react-native-reanimated';


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


export const VERIFY_USER = gql`

mutation LoginUserOutput{
  loginUser($input: {String!} ){
    message: "Registration Successful"
    success
  }
  
}

`;