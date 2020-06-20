import React, {useState} from 'react'
import { View, Text, StyleSheet, Alert, KeyboardAvoidingView } from 'react-native'
import { TextInput, Button, RadioButton } from 'react-native-paper'

const MakeReport = () => {

    const [reporter, updateReporter] = useState(null)
    const [keyboard, enableKeyboard] = useState(false)

    return(

        <KeyboardAvoidingView  styles={styles.container} enabled={keyboard} behavior={"position"} >

        <View  >
            <Text style={styles.title} >Make Report</Text>

            <Text>Who are you reporting? </Text>

            <RadioButton.Group 
            onValueChange={(reporter) => updateReporter(reporter)}
            value={reporter}
            >
            
            <View style={{flexDirection: "row"}}>
                    <RadioButton
                    value={"Self"} 
                    status={ reporter === "Self" ? "checked" : "unchecked" }
                    color="#006211"
                    />
                    <Text style={{marginLeft: 10}} >Self</Text>
                </View>

                <View style={{flexDirection: "row"}}>
                    <RadioButton 
                    value={"Other Individual"} 
                    status={ reporter === "Other_Individual" ? "checked" : "unchecked" }
                    color="#006211"
                    />
                    <Text style={{marginLeft: 10}} >Other Individual</Text>
                </View>

            </RadioButton.Group>

            <View>
                    <Text>Location or Digital Address</Text>
                    <TextInput placeholder={"eg. GA-492-74"} />
                </View>

     

                <View>
                    <Text>Nearest Landmark</Text>
                    <TextInput placeholder={"eg. Pacific Station"} />

                    <View  >
                    <Text>Alternate Contact</Text>
                    <TextInput placeholder={"Contact Number"} onFocus={() => enableKeyboard(true)} />
                </View>


              
                <View>
                </View>
                <Text>description</Text>
                <TextInput placeholder={"Type Something"} onFocus={() => enableKeyboard(true)} />
                </View>

            <Button onPress={() => Alert.alert("Success", "Your report has been made successfully")} >Report Case</Button>

        </View>

        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default MakeReport;