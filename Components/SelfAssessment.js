import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
//import { Button  } from 'react-native-paper'


const SelfAssessment = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={{...styles.title,alignSelf: "center" }} >Self Assessment</Text>
                <Text style={styles.title}>Getting Started!</Text>
                <Text> This tool is intended to help you understand what to do next about COVID-19. You'll answer a few questions about your symptoms, travel, and contact you've had with others.

                </Text>

                <Text style={styles.title} >Note</Text>
                <Text>
                    Recommendations provided by this tool does not constitute medical advice and should not be used for diagnosis or trat medical conditions.
                </Text>

                <View style={{flex: 1, alignItems: "center"}}>
                <Button title="Start Assessment" color={"#006211"}></Button>
                </View>
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


export default SelfAssessment;