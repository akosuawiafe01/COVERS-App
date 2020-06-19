                                                    // OnboardingScreen 3: Getting Started 

import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

import { Card, Button, } from 'react-native-paper'


const General_Info = () => {
    return(

        <View>
                <Text style={styles.title} >General Information</Text>

                <Text>Collection of your Information</Text>

                <Text>Personal Information</Text>

                <Text>Geo-Location Information</Text>

                <Text>Mobile Device Access</Text>

                <Text>Push Notifications</Text>

                <Text>Use of your Information</Text>

                <Text>Disclosure of your Information</Text>

                <Text>Options Regarding your Information</Text>

                <Text>Contact Us</Text>


                <Button color={"#006211"} mode={"contained"}>Let's get started...</Button>
            
        </View> 
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

    }, 
    title: {
        color: "#006211",
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center"
        
    }
})


export default General_Info;



                        