                                                     // OnboardingScreen 2: Verification Page

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
// import { TextInput } from 'react-native-paper'


const Verification = () => {

    const [phoneNumber, setPhoneNumber] = useState("0244637262");

    return(
        <View style={styles.container}>
            <Text style={styles.title} >Verification Pin</Text>

            <Text style={{padding: 5}}>Enter the verfication code we just sent you on {phoneNumber}</Text>

        <View style={styles.inputs}>
            <TextInput>Enter Code</TextInput>
            <Button title={"Submit Code"} color={"#006211"} />
        </View>


        <View style={styles.activate}>
            <Text>Have not recieved your code?</Text>
            <Text>Resend</Text>
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