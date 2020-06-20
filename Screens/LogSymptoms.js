import React from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'

const LogSymptoms = () => {
    return(
        <View style={{flex: 1}}>
            <Text>Log Symptoms</Text>

            
                <Text>Dry Cough</Text>

                <Text>Tiredness</Text>

                <Text>Sore Throat</Text>

                <Text>Fever</Text>

                <Text>Aches and Pains</Text>

                <Text>Shortness of Breath</Text>


            

            <View>
                <Button title="Log Vitals" onPress={() => Alert.alert("Success", "Your report has been made successfully")} />
            </View>
        </View>
    )
}

export default LogSymptoms;