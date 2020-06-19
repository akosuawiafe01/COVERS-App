import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const LogSymptoms = () => {
    return(
        <View>
            <Text>Log Symptoms</Text>

            <View>
                <Text>Dry Cough</Text>

                <Text>Tiredness</Text>

                <Text>Sore Throat</Text>

                <Text>Fever</Text>

                <Text>Aches and Pains</Text>

                <Text>Shortness of Breath</Text>


            </View>

            <Button title="Log Vitals" onPress={() => Alert.alert("Success", "Your report has been made successfully")} />

        </View>
    )
}

export default LogSymptoms;