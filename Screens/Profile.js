import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, KeyboardAvoidingView } from 'react-native';
import { Card, TextInput, RadioButton } from 'react-native-paper';

import ListCountries from '../Components/ListCountries'

import { EDIT_USER_PROFILE, GET_USER_PROFILE }  from  '../graphQL/Query'


import { useMutation } from '@apollo/react-hooks'



const Profile = () => {

    const [profile, updateProfile] = useState({
        age: 17,
        gender: "female",
        licenseNumber: "",
        

    })

    

    const [editProfile, {data, loading, error}] = useMutation(EDIT_USER_PROFILE);

    const updateUserProfile = () => {
        
        editProfile({
            variables: {
                gender: profile.gender,
                age: profile.age,
                licenseNumber: profile.licenseNumber,
                
            }
            
            })
            
            
        }


    const [gender, updateGender] = useState(null);
    const [keyboard, enableKeyboard] = useState(false)
 

    return (
        <>
            <KeyboardAvoidingView behavior={"position"} enabled={keyboard} style={styles.container} >
                <View  >
                    <Text style={{ ...styles.title, fontSize: 20 }} >Profile</Text>
                    <View >
                        <Card style={styles.card} >

                            <Text style={{ ...styles.title, alignSelf: "auto", }} >Personal Details</Text>

                            
                               
                                <View style={{ marginTop: 10 }}>
                                <TextInput placeholder="Enter your age" autoCorrect={false} 
                                keyboardType="numeric"
                                label="Age" 
                                color="#006211" 
                                editable={true}
                                //value={profile.age}
                                onChangeText={updateProfile(value)}
                                maxLength={2}
               
                />

                            </View>



                            <RadioButton.Group
                                onValueChange={(gender) => updateGender(gender)}
                                value={gender}
                            >

                                <View style={{ flexDirection: "row" }}>
                                    <RadioButton
                                        value={"male"}
                                        status={gender === "male" ? "checked" : "unchecked"}
                                        color="#006211"
                                    />
                                    <Text style={{ marginLeft: 10 }} >Male</Text>
                                </View>

                                <View style={{ flexDirection: "row" }}>
                                    <RadioButton
                                        value={"female"}
                                        status={gender === "female" ? "checked" : "unchecked"}
                                        color="#006211"
                                    />
                                    <Text style={{ marginLeft: 10 }} >Female</Text>
                                </View>


                            </RadioButton.Group>


                        </Card>

                    </View>

                    <ListCountries/>

                    <View style={{ marginTop: 10 }}>
                        <Card style={styles.card} >

                            <Text style={{ ...styles.title, alignSelf: "auto", padding: 2 }} >Medical Professional</Text>
                            <Text>For health workers only</Text>


                            <View style={{ marginTop: 10 }} >

                                <TextInput mode="outlined" 
                                label="Health License Number" onFocus={() => enableKeyboard(true)} />

                            </View>

                        </Card>

                    </View>

                    <View style={{ marginTop: 10, }} >
                        <Button title="Update Profile" color={"#006211"} onPress={editProfile} />
                    </View>

                </View>

            </KeyboardAvoidingView>
           
        </>
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

