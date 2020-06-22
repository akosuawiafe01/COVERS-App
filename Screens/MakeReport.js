import React, {useState} from 'react'
import { View, Text, StyleSheet, Alert, KeyboardAvoidingView, Button } from 'react-native'
import { TextInput, RadioButton } from 'react-native-paper'

const MakeReport = ({ navigation }) => {

    const [reporter, updateReporter] = useState(null)
    const [keyboard, enableKeyboard] = useState(false)
    const [location, setLocation] = useState("")
    const [landmark, setLandmark] = useState("")
    const [altContact, setAltContact] = useState("")
    const [description, setDescription] = useState("")

    const submitReport = () => {
        // setContactNumber('');
        
        // loginUserOutput({
        //     variables: { contactNumber },
        //    // Try again ;)
        // });
        Alert.alert("Success", "Your report has been made successfully")
        
        navigation.navigate("MakeReport", {reporter, location, landmark, altContact, description})
        
    }

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
                    <TextInput 
                    placeholder={"eg. GA-492-74"} 
                    onFocus={() => enableKeyboard(true)} 
                    
                    color="#006211" 
                    editable={true}
                    value={location}
                    onChangeText={setLocation}
                    />
                    
                    
                </View>

     

                <View>
                    <Text>Nearest Landmark</Text>
                    <TextInput placeholder={"eg. Pacific Station"} onFocus={() => enableKeyboard(true)} />

                    <View  >
                    <Text>Alternate Contact</Text>
                    <TextInput placeholder={"Alternate Contact Number"} 
                    
                    color="#006211" 
                    editable={true}
                    value={landmark}
                    onChangeText={setAltContact}
                    onFocus={() => enableKeyboard(true)} />

                    
                </View>


              
                <View>
                </View>
                <Text>description</Text>
                <TextInput placeholder={"Type Something"} 
                
                color="#006211" 
                editable={true}
                value={description}
                onChangeText={setDescription}
                
                onFocus={() => enableKeyboard(true)} />

                </View>

        <View style={{marginTop: 130, width: 120, marginLeft: 150}}>
            <Button color="#006211" onPress={submitReport} title={"Report Case"} />
        </View>

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