                                                     // OnboardingScreen 2: Verification Page

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { TextInput } from 'react-native-paper'

import { useMutation } from '@apollo/react-hooks'



const Verification = ({ route, navigation }) => {

    const { contactNumber  } = route.params 
    const [pin, setPin] = useState('')
    const submitPin = () => {
        setPin('');
        
        navigation.navigate("General_Info")
    }
    
    
    
    return(
        <View style={styles.container}>
            <Text style={styles.title} >Verification Pin</Text>

    <Text style={{padding: 5}}>Enter the verfication code we just sent you on {contactNumber}</Text>

        <View style={styles.inputs}>
            <TextInput 
            placeholder="Input Verification Code"
            color="#006211"
            label="Verification Code"
            maxLength={5}
            autoCorrect={false}
            />
            <Button title={"Submit Code"}   color={"#006211"} onPress={submitPin} />
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