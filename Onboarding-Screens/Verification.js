                                                     // OnboardingScreen 2: Verification Page

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import { TextInput } from 'react-native-paper'

 import { useMutation } from '@apollo/react-hooks'
import { REGISTER_USER, VERIFY_USER } from '../graphQL/Query'


const Verification = ({ route, navigation }) => {

    const { contactNumber  } = route.params 
    const [pin, setPin] = useState('')
    

    const [validateUser, { loading, data, error }] = useMutation(VERIFY_USER)

     const submitPin = () => {
       setPin('');

       validateUser({
           variables: { 
               pin,
               contactNumber
        }
         
       });
       //Alert.alert("Success")
      // navigation.push("Home")
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
            keyboardType="numeric"
            maxLength={5}
            value={pin}
            onChangeText={setPin}
            autoCorrect={false}
            />
        </View>

        
        <Button title={"Submit Code"}  
            color={"#006211"} 
            disabled={pin === ''}
            onPress={() => navigation.navigate("General_Info")} 
            /> 

    {/* <View style={styles.activate}>
            <Text onPress={() => navigation.navigate("General_Info")}>code</Text>
        </View>
    <View style={styles.activate}>
            <Text onPress={() => navigation.navigate("Home")}>Resend code</Text>
        </View> */}

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