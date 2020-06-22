                                                    // OnboardingScreen 1: Getting Started

import React,{ useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-paper'

import { useMutation } from '@apollo/react-hooks'

import { REGISTER_USER } from '../graphQL/Query'



const Get_Started = ({ navigation }) => {

    const [contactNumber, setContactNumber] = useState('')
    const [loginUserOutput, {data, loading, eror}] = useMutation(REGISTER_USER)
    
    const submitContactNumber = () => {
        setContactNumber('');
        loginUserOutput({
            variables: { contactNumber },
           // Try again ;)
        });
        
        navigation.navigate("Verification", {contactNumber})
    }

        

    return(
        <View style={styles.container}>

            <View>
                <Text style={ styles.title }>COVERS</Text>
            </View>
            
            
                <Text style={styles.intro} >COVID-19 Emergency Response Service</Text>
                <Text style={styles.intro} >Join the efforts by well-meaning Ghanaians using Technology to slow down and eventually halt the spread of COVID-19</Text>
                


            <View style={ styles.inputs } >
                <TextInput placeholder="Phone Number" autoCorrect={false} 
                label="Phone Number" 
                color="#006211" 
                editable={true}
                value={contactNumber}
               onChangeText={setContactNumber}
               maxLength={10}
               
                />

                <Button title="Get Started" 
                onPress={submitContactNumber} 
                disabled={contactNumber === ''}
                 color="#006211" 
              />

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