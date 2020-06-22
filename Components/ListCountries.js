                            //For Profile Screen

import React, { useState } from 'react'
import { Text, View, Button, StyleSheet, ScrollView, Alert, FlatList, Dimensions, TouchableNativeFeedback, Image } from 'react-native'
import { Card  } from 'react-native-paper'

import CountriesModal from '../Components/CountriesModal'



const ListCountries = () => {

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


return(
    
    <View style={{ marginTop: 10 }} >

    <Card style={styles.card}>
      



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

    <CountriesModal visible={modalVisible} onRequestClose={() => setModalVisible(false)}
                onSelectCountry={(country) => {
                    selectedCountries[currentCountryIndex] = country;
                    setSelectedCountries(selectedCountries);
                    setModalVisible(false);
                }} />

</View>
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

export default ListCountries;