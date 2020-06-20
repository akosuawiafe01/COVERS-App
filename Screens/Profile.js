import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, KeyboardAvoidingView } from 'react-native';
import { Card, TextInput, RadioButton } from 'react-native-paper'



const Profile = () => {

    const [profile] = useState({
        name: "AK",
        age: 17
    })

    const [gender, updateGender] = useState(null);
    const [keyboard, enableKeyboard] = useState(false)


    return(

        <KeyboardAvoidingView behavior={"position"} enabled={keyboard} > 
        <View style={styles.container} >

            <Text style={{...styles.title, fontSize: 20 }} >Profile</Text>


            

        <View > 
            <Card style={styles.card} >

                <Text style={{...styles.title, alignSelf: "auto",  }} >Personal Details</Text>

                <View style={{flexDirection: "row"}} >
                <Text>Name: </Text>
                <Text> { profile.name} </Text>
            
                </View>
            
          
                <View style={{flexDirection: "row"}} >
                <Text>Age: </Text>
                <Text> { profile.age} </Text>
            
                </View>

           

                
            <RadioButton.Group 
            onValueChange={(gender) => updateGender(gender)}
            value={gender}
            >
            
            <View style={{flexDirection: "row"}}>
                    <RadioButton
                    value={"male"} 
                    status={ gender === "male" ? "checked" : "unchecked" }
                    color="#006211"
                    />
                    <Text style={{marginLeft: 10}} >Male</Text>
                </View>

                <View style={{flexDirection: "row"}}>
                    <RadioButton 
                    value={"female"} 
                    status={ gender === "female" ? "checked" : "unchecked" }
                    color="#006211"
                    />
                    <Text style={{marginLeft: 10}} >Female</Text>
                </View>


            </RadioButton.Group>
            
                
            </Card>

            </View>


            <View style={{marginTop: 10 }} >

            <Card style={styles.card}>
            <Text style={{...styles.title, alignSelf: "auto" }} >Travel History</Text>
            <Text>Select the last 2 countries you have visted (if applicable) </Text>


            
            <View style={{ flexDirection:"row", alignSelf: "center", margin: 10 }}>

            <Card>
            <Image source={require('../assets/COVID19-1.jpg')} style={{...styles.image, marginRight: 5}} />
            </Card>
            <Card>
            <Image source={require('../assets/COVID19-2.jpg')} style={{...styles.image, marginLeft: 10}} />

            </Card>

            </View>
            

            </Card>

            </View>

            <View style={{marginTop: 10}}>
            <Card style={styles.card} >

            <Text style={{...styles.title, alignSelf: "auto", padding: 2 }} >Medical Professional</Text>
            <Text>For health workers only</Text>


            <View style={{marginTop: 10}} >

            <TextInput  mode="outlined" label="Health License Number"  />

            </View>

            </Card>

            </View>

            <View style={{marginTop: 10}} >
            <Button title="Update Profile" color={"#006211"} onPress={() => Alert.alert("Profile Updated") }  />
            </View>

        </View>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: "#ffffff"

    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        alignSelf: "center",
        color: "#006211"
    }, 
    card: {
        // backgroundColor: "#006211",
        padding: 5

    },
    image: {
        height: 100,
        width: 100, 
        margin: 10, 

        
    }
});



export default Profile; 

