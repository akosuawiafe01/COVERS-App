import React from 'react'
import { Text, View, Button, StyleSheet, ScrollView, Alert, FlatList, Dimensions } from 'react-native'
import { Card  } from 'react-native-paper'

const Share = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title} >Share</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 25,
        color: "#006211",
         fontWeight: "bold"
    }

})



export default Share;