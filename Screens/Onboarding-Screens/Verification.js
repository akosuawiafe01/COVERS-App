                                                     // OnboardingScreen 2: Verification Page

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

// import { TextInput } from 'react-native-paper'

import { useMutation } from '@apollo/react-hooks'


const Verification = ({ navigation }) => {

    const [loginUserOutput, {data, loading, eror}] = useMutation(VERIFY_USER)
    const submitCode = () => {
        setText('');
        loginUserOutput({
            variables: { text, "Successful" }
        });
        
    }
    

    return(
        <View style={styles.container}>
            <Text style={styles.title} >Verification Pin</Text>

            <Text style={{padding: 5}}>Enter the verfication code we just sent you on {phoneNumber}</Text>

        <View style={styles.inputs}>
            <TextInput>Enter Code</TextInput>
            <Button title={"Submit Code"} color={"#006211"} onPress={navigation.navigate("General_Info")} />
        </View>


        <View style={styles.activate}>

            <Text>Resend code</Text>
        </View>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center"
        
    }, 
    title:{
        fontSize: 20,
        alignSelf: "center", 
        color: "#006211"
    },
    activate: {
        margin: 10,
        alignSelf: "center",
        textAlign: "justify"
    }, 
    inputs: {
       padding: 5 
    }
})


export default Verification;