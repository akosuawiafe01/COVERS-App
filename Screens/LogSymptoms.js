import React from 'react'
import { View, Text, StyleSheet, Button, Alert, FlatList } from 'react-native'
import { Card } from 'react-native-paper'


const symptomDetails = [
    {key: "1", symptom: "Log Symptoms",  }, {key: "2", symptom: "Dry Cough",  }, {key: "3", symptom: "Tiredness",  }, {key: "4", symptom: "Sore Throat",  }, {key: "5", symptom: "Fever",  }, {key: "6", symptom: "Aches and Pains",  }, {key: "7", symptom: "Shortness of Breath",  }, 
]

const ListSymptoms = ({symptom}) => {
    return(
        <View >
            <Card style={{
            flex:1,
            width: "100%", 
            height:100, marginTop: 5
            }} >
            <Text  
            style={{borderBottomColor: '#e0e0e0',  borderBottomWidth: 1, marginTop: 25,fontSize: 25, color:"#006211", fontWeight: "bold"}}>{symptom}</Text>
            </Card>
        </View>
    )
}

const LogSymptoms = () => {
    return(
        <View style={{flex: 1}}>

            <FlatList
            data={symptomDetails}
            renderItem={({item}) => 
            <ListSymptoms symptom={item.symptom} />
            }
            
            />

            <View style={{flex: 0}}>
                <Button title="Log Vitals" onPress={() => Alert.alert("Success", "Your report has been made successfully")} />
            </View>
        </View>
    )
}

export default LogSymptoms;