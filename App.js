import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import Constants from 'expo-constants'

import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloProvider } from "@apollo/react-hooks"


import { NavigationContainer } from '@react-navigation/native'



import BottumTab from './Navigation/BottumTab'
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
}); 

const client = new ApolloClient({
  link: errorLink.concat(createHttpLink({ 
    uri: 'https://covid19-graphql.netlify.app/'
   })),
  cache: new InMemoryCache()
});




export default function App() {

  return (
    <ApolloProvider client={client} >

      <NavigationContainer>

        <View style={styles.container}>

          <BottumTab/>
      
        
        </View>

      </NavigationContainer>

    </ApolloProvider>
  );
  }


  AppRegistry.registerComponent('App')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: Constants.statusBarHeight,
    // marginBottom: -40
  },
});
