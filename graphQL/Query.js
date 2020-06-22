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

export const GET_COUNTRY_STATS = gql`
query getcountry($country: String!) {
  country(name: $country) {
    countryInfo {
      _id
      flag
    }
    result {
      cases
      deaths
      recovered
      active
      critical
      tests
    }
  }
}
`

const GET_USER_PROFILE = gql`
  query getUserProfile{
    memberProfile {
      age
      gender
      lastCountriesVisited
      licenseNumber
    }
  }
`;


export const GET_USER_VITALS = gql`
query getUserVitals{
  vitals{
    _id,
    user{
    age,
    gender
    },
    vitals{
      dryCough,
      tiredness,
      soreThroat,
      fever,
      aches,
      shortnessOfBreath
    }, createdAt
  }
}
`;

//Mutations


export const REGISTER_USER = gql`

mutation LoginUserOutput($contactNumber: String!){
  loginUser(input: {phone: $contactNumber}){
    message,
    success
  }
  
}

`;


export const VERIFY_USER = gql`
mutation validateUser($phoneNumber: String){
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

export const EDIT_USER_PROFILE = gql`
mutation editProfile($gender: Gender, $age: Int, $lastCountriesVisited: [String], $licenseNumber: String){
  editUserProfile(input: {
    gender: $gender,
    age: $age, 
    lastCountriesVisited: $lastCountriesVisited,
    licenseNumber: $licenseNumber


  }){
      gender
      age
      lastCountriesVisited
      licenseNumber
    }
}
`;

