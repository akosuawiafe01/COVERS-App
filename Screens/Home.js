import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, FlatList, Animated   } from 'react-native'
import { Card, RadioButton, FAB, ActivityIndicator, TextInput } from 'react-native-paper'

import HomeCarousel from '../Components/HomeCarousel'
import FAQs from '../Components/FAQs'



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
            
            <View>
                
                <Text style={{fontSize: 20, }}>Worldwide Statistics
</Text>          
            </View>
      
        <View style={{ marginBottom: StyleSheet.hairlineWidth, borderBottomWidth: 0.5, borderBottomColor: "#e0e0e0", marginTop: 50,  }}> 
 
        {
            loading ? <ActivityIndicator large color="#006211" />
                       : casesData ? <View>
                            <HomeCarousel data={ casesData.globalTotal} />
                        </View> 
                        : casesError ? <Card>
                            <Text>An error occured </Text>
                        </Card>
                        : null        
                    }
        </View>

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