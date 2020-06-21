import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, KeyboardAvoidingView,TouchableNativeFeedback } from 'react-native';
import { Card, TextInput, RadioButton } from 'react-native-paper';
import CountriesModal from '../Components/CountriesModal';

const Profile = () => {

    const [profile] = useState({
        name: "AK",
        age: 17
    })

    const [gender, updateGender] = useState(null);
    const [keyboard, enableKeyboard] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [currentCountryIndex, setCurrentCountryIndex] = useState(-1);
    const [selectedCountries, setSelectedCountries] = useState([
        {
            "id": "0",
            "name": "None",
            "flag": "https://disease.sh/assets/img/flags/unknown.png"
        },
        {
            "id": "0",
            "name": "None",
            "flag": "https://disease.sh/assets/img/flags/unknown.png"
        }
    ]);

    return (
        <>
            <KeyboardAvoidingView behavior={"position"} enabled={keyboard} style={styles.container} >
                <View  >
                    <Text style={{ ...styles.title, fontSize: 20 }} >Profile</Text>
                    <View >
                        <Card style={styles.card} >

                            <Text style={{ ...styles.title, alignSelf: "auto", }} >Personal Details</Text>

                            <View style={{ flexDirection: "row" }} >
                                {/* <Text>Enter your age </Text> */}
                                <View style={{ marginTop: 10 }}>
                                    <TextInput placeholder={"Enter your age"} />
                                </View>
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


                    <View style={{ marginTop: 10 }} >

                        <Card style={styles.card}>
                            <Text style={{ ...styles.title, alignSelf: "auto" }} >Travel History</Text>
                            <Text>Select the last 2 countries you have visted (if applicable) </Text>



                            <View style={{ flexDirection: "row", alignSelf: "center", margin: 10 }}>

                                <TouchableNativeFeedback onPress={() => {
                                    setCurrentCountryIndex(0);
                                    setModalVisible(true);
                                }}>
                                    <Card>
                                        <Image source={{ uri: selectedCountries[0].flag }} style={{ ...styles.image, marginRight: 5 }} />
                                    </Card>
                                </TouchableNativeFeedback>
                                <TouchableNativeFeedback onPress={() => {
                                    setCurrentCountryIndex(1);
                                    setModalVisible(true);
                                }}>
                                    <Card>
                                        <Image source={{ uri: selectedCountries[1].flag }} style={{ ...styles.image, marginLeft: 10 }} />
                                    </Card>
                                </TouchableNativeFeedback>
                            </View>


                        </Card>

                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Card style={styles.card} >

                            <Text style={{ ...styles.title, alignSelf: "auto", padding: 2 }} >Medical Professional</Text>
                            <Text>For health workers only</Text>


                            <View style={{ marginTop: 10 }} >

                                <TextInput mode="outlined" label="Health License Number" onFocus={() => enableKeyboard(true)} />

                            </View>

                        </Card>

                    </View>

                    <View style={{ marginTop: 10, }} >
                        <Button title="Update Profile" color={"#006211"} onPress={() => Alert.alert("Profile Updated")} />
                    </View>

                </View>

            </KeyboardAvoidingView>
            <CountriesModal visible={modalVisible} onRequestClose={() => setModalVisible(false)}
                onSelectCountry={(country) => {
                    selectedCountries[currentCountryIndex] = country;
                    setSelectedCountries(selectedCountries);
                    setModalVisible(false);
                }} />
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

