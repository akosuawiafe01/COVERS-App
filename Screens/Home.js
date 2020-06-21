import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, FlatList, Animated   } from 'react-native'
import { Card, RadioButton, FAB, ActivityIndicator, TextInput } from 'react-native-paper'

import HomeCarousel from '../Components/HomeCarousel'
//import Carousel from '../Components/Carousel'



//Graph data should be placed here
 import { GET_CASES } from '../graphQL/Query'

import { useQuery } from '@apollo/react-hooks';

const { width, height } = Dimensions.get('window')

const Home = ({ navigation }) => {

    // useEffect(
    //     {data, errors } = await fetch("http://covid19-graphql.netlify.com/", {
    //    headers: {
    //        'Content-Type': 'application/json',
    //        Accept: 'application/json'
    //    }, body = JSON.stringify({query: "My query"}, {variables: 'my variables'}).then(res => res.json())
   
    //    //setData(data), setErrors(errors)
    //    }), [])

     const {loading, data: casesData, error: casesError} = useQuery(GET_CASES);


    return(
        <View style={styles.container}>
        
        {/* <View style={{padding: 5}}>
            <TextInput 
            placeholder="Country Specific Statistics"
            color="#006211"
            label="Search for a country"
           </View>
            /> */}
      

        <View style={{ marginBottom: StyleSheet.hairlineWidth, borderBottomWidth: 0.5, borderBottomColor: "#e0e0e0", marginTop: 50,  }}> 
 
        {
            loading ? <ActivityIndicator large color="#006211" />
                       : <View>
                            <HomeCarousel data={ casesData.globalTotal} />
                        </View> 
                                
                    }

    
        </View>

        



        

        <View style={{ borderBottomWidth: 0.5, borderBottomColor: "#e0e0e0", marginTop: 10 }} >
            <Text style={{fontSize: 15, fontWeight: "bold" }}>Ghana's Situation Updates</Text>
            <Text>Last Update: date</Text>
        
        </View>


        
        <View>
            <Text style={{fontSize: 15, fontWeight: "bold", borderBottomWidth: 0.5, borderBottomColor: "#e0e0e0" }}>Confirmed COVID-19 cases in Ghana as at date, time </Text>
            
        
        </View>

        <FAB
    style={styles.fab}
    large
    icon="plus"
    color="#ffffff"
    theme={{colors: {accent: 
        "#006211"
    }}}
    onPress={() => navigation.navigate("Profile") }
  />


        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    }, card: {
        marginTop: 5,
        

    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
 
});

export default Home;