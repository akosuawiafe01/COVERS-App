import gql from 'graphql-tag'



export const GET_CASES = gql`

    query globalTotal{
      globalTotal{
    cases,
    deaths,
    recovered,
    
      }
  }

`;

export const COUNTRY_STATS = gql`
  query country($name: String!){
countryInfo{
  _id, 
  flag
}
    result{
      cases,
      deaths,
      recovered,
      active,
      critical,
      tests
      
    }
    
  }

`


export const REGISTER_USER = gql`

mutation LoginUserOutput($contactNumber: String!){
  loginUser(input: {phone: $contactNumber}){
    message,
    success
  }
  
}

`;

export const VERIFY_USER = gql`
mutation validateUser{
  validateLoginUser(input: {
    phone: $phoneNumber,
    otp: "12345"
  }){
    user{
      lastName, gender
    }
    createdAt,
    updatedAt,
    
    mobileToken
  }
}

`;