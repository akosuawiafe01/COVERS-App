import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'

import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from "@apollo/react-hooks"


import { NavigationContainer } from '@react-navigation/native'



import BottumTab from './Navigation/BottumTab'

import Notification from './Screens/Notification'
import Profile from './Screens/Profile'



const client = new ApolloClient({
  link: createHttpLink({ 
    uri: 'https://covid19-graphql.netlify.app/'
   }),
  cache: new InMemoryCache()
});




export default function App() {

  return (
    <ApolloProvider client={client} >

      <NavigationContainer>

        <View style={styles.container}>

          <BottumTab/>

          {/* <Notification/> */}

          {/* <Profile/>  */}
        
        </View>

      </NavigationContainer>

    </ApolloProvider>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: Constants.statusBarHeight,
    // marginBottom: -40
  },
});
