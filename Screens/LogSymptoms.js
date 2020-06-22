import React, {useState} from 'react'
import { View, Text, StyleSheet, Button, Alert, FlatList, Picker } from 'react-native'
import { Card, TextInput, RadioButton  } from 'react-native-paper'


const data = [
    {key: "1", symptoms: "Dry Cough"}, 
    {key: "2", symptoms: "Tiredness"  },
     {key: "3", symptoms: "Sore Throat" }, 
     {key: "4", symptoms: "Fever"  }, 
     {key: "5", symptoms: "Aches and Pains"  }, 
     {key: "6", symptoms: "Shortness of Breath"  }
];





const ListSymptoms = ( {item } )  => {
    const [selectedValue, setSelectedValue] = useState("1");

    return(
        <Card>
        <View style={styles.container}>

          <Text style={{color: "#006211", fontSize: 20, }}>{item.symptoms}</Text>   
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 200, marginLeft: 20}}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          mode="dropdown"
          color={"#006211"}
        >
          <Picker.Item label="None" value="None" />
          <Picker.Item label="Mild" value="Mild" />
          <Picker.Item label="Semi Mild" value="Semi Mild" />
          <Picker.Item label="High" value="High" />
        </Picker> 
      </View>

      </Card>
    )
}


const LogSymptoms = ({navigation}) => {


    
const logVitals = () => {
    Alert.alert("Vitals Logged")

    navigation.navigate("Vitals", {})
}


    return(
   <View>
    <FlatList
    data={data}
    key={data.key}
    renderItem={({item}) => 
    <ListSymptoms item={item}/>        
}
    />

    <Button title={"Log Symptoms"}   color={"#006211"} onPress={logVitals} />

   </View>
    )
}

const styles = StyleSheet.create({
    
        container: {
          flex: 1,
          marginTop: 5, 
          backgroundColor: "#e0e0e0"
        }
      
})

export default LogSymptoms;

