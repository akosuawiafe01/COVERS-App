import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Card } from 'react-native-paper'



const Symptoms = ({ item }) => {
    return(
        <View style={{flex:1}} >

        <Card style={{marginTop: 5, padding: 5}}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <View>
            <Text style={{fontWeight: "bold", fontSize: 20}}> {item.title} </Text>
            <Text> {item.feed} </Text>
            </View>
            <Ionicons name="ios-arrow-forward" size={25} style={{marginRight: 5, marginTop: 10}} />

            </View>
        </Card>
</View>
    )
}

export default Symptoms;