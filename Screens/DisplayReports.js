import React, {useState} from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { TextInput, Button, RadioButton, FAB } from 'react-native-paper'


const DisplayReport = () => {
    return(
        <View>
            
            <FAB
            style={styles.fab}
            large
            icon="plus"
            color="#ffffff"
            theme={{colors: {accent: 
                "#006211"
            }}}
            label="Display Report"
            onPress={() => navigation.navigate("MakeReport") }
            />

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }

});



export  default DisplayReport;