import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, FlatList, Animated   } from 'react-native'
import { Card, RadioButton, FAB, ActivityIndicator, TextInput } from 'react-native-paper'

import HomeCarousel from '../Components/HomeCarousel'
import FAQs from '../Components/FAQs'


 import { GET_CASES } from '../graphQL/Query'

import { useQuery } from '@apollo/react-hooks';

const { width, height } = Dimensions.get('window')

const tips = [
   {key: "1", tip: "STAY home as much as you can"}, 
   {key: "2", tip: "KEEP a safe distance"},
   {key: "3", tip: "WASH hands often"},
   {key:"4", tip: "COVER your cough" },
   {key: "5", tip: "SICK? Call ahead"}
]

const Home = ({ navigation }) => {

     const {loading, data: casesData, error: casesError} = useQuery(GET_CASES);


    return(
        <View style={styles.container}>
            
            <View>
                
                <Text style={{fontSize: 20, color: "#006211", alignSelf: "center", marginTop: 30 }}>Worldwide Statistics
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

        <Card style={{flex: 1, padding: 10}}>
            <Text style={styles.title}>Safety Tips: </Text>
       
            <FlatList
            data={tips}
            key={tips.key}
            renderItem={({item}) => 
            
                <View>
                
                   <Text>{item.tip}</Text>
                </View>
            
        }
            />

</Card>

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    }, card: {
        marginTop: 5,
        

    },
    title: {
        fontSize: 20,
        color: "#006211",
        justifyContent: "center",
        flex: 1

    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
 
});

export default Home;