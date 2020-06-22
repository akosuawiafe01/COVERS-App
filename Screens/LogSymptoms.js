import React, {useState} from 'react'
import { View, Text, StyleSheet, Button, Alert, FlatList } from 'react-native'
import { Card, TextInput, RadioButton  } from 'react-native-paper'


const symptomDetails = [
    {key: "1", symptom: "Log Symptoms",  }, {key: "2", symptom: "Dry Cough",  }, {key: "3", symptom: "Tiredness",  }, {key: "4", symptom: "Sore Throat",  }, {key: "5", symptom: "Fever",  }, {key: "6", symptom: "Aches and Pains",  }, {key: "7", symptom: "Shortness of Breath",  }, 
];




const ListSymptoms = ({symptom}) => {
    const [reporter, updateReporter] = useState(null)
    return(
        <View >
            <Card style={{
            flex:1,
            width: "100%", 
            height:100, marginTop: 5
            }} >
            <Text  
            style={{borderBottomColor: '#e0e0e0',  borderBottomWidth: 1, marginTop: 25,fontSize: 25, color:"#006211", fontWeight: "bold"}}>{symptom}</Text>


            
<RadioButton.Group 
            onValueChange={(reporter) => updateReporter(reporter)}
            value={reporter}
            >
            
            <View style={{flexDirection: "row"}}>
                    <RadioButton
                    value={"none"} 
                    status={ reporter === "none" ? "checked" : "unchecked" }
                    color="#006211"
                    />
                    <Text style={{marginLeft: 10}} >0</Text>
                </View>

                <View style={{flexDirection: "row"}}>
                <RadioButton
                    value={"mild"} 
                    status={ reporter === "mild" ? "checked" : "unchecked" }
                    color="#006211"
                    />
                    <Text style={{marginLeft: 10}} >1</Text>



                </View>

                
                <View style={{flexDirection: "row"}}>
                <RadioButton
                    value={"mild"} 
                    status={ reporter === "mild" ? "checked" : "unchecked" }
                    color="#006211"
                    />
                    <Text style={{marginLeft: 10}} >2</Text>

                </View>


                <View style={{flexDirection: "row"}}>         
                <RadioButton
                    value={"mild"} 
                    status={ reporter === "mild" ? "checked" : "unchecked" }
                    color="#006211"
                    />
                    <Text style={{marginLeft: 10}} >3</Text>

                </View>

                
                <View style={{flexDirection: "row"}}>
                <RadioButton
                    value={"high"} 
                    status={ reporter === "high" ? "checked" : "unchecked" }
                    color="#006211"
                    />
                    <Text style={{marginLeft: 10}} >4</Text>

                </View>

            </RadioButton.Group>

            </Card>
        </View>
    )
}

const LogSymptoms = () => {
    return(
   <View>
    <FlatList
data={symptomDetails}
renderItem={(item) => 
    <ListSymptoms symptom={item.symptom}/>        
}
    />
   </View>
    )
}

export default LogSymptoms;

