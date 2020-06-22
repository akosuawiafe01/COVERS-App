import React from 'react'
import { Text, View, Button, StyleSheet, ScrollView, Alert, FlatList, Dimensions } from 'react-native'
import { Card  } from 'react-native-paper'

const TestingCenters = () => {
    return(
        <View>
              <View style={styles.container}>
            <Text style={styles.title} >Testing Centers</Text>
            
        </View>
    ) 
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

export default TestingCenters;