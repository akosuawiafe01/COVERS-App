                                                    // OnboardingScreen 1: Getting Started

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-paper'



const Get_Started = ({ navigation }) => {
    return(
        <View style={styles.container}>

            <View>
                <Text style={ styles.title }>COVERS</Text>
            </View>
            
            
                <Text style={styles.intro} >COVID-19 Emergency Response Service</Text>
                <Text style={styles.intro} >Join the efforts by well-meaning Ghanaians using Technology to slow down and eventually halt the spread of COVID-19</Text>
                


            <View style={ styles.inputs } >
                <TextInput placeholder="Phone Number" autoCorrect={false} label="Phone Number" color="#006211" />
                <Button title="Get Started" color="#006211" onPress={() => navigation.navigate("General_Info")} />
            </View>


        </View>
    )
} 


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        padding: 5,
        margin: 2
    },
    title: {
        fontSize: 20,
        alignSelf: "center",
        color: "#006211",
    }, 
    intro: {
        alignSelf: "center",
    }, 
    inputs: {
        padding: 5,

    }
});


export default Get_Started;