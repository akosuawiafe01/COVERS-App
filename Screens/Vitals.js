import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import {  FAB,  } from 'react-native-paper'




const Vitals = ({ navigation }) => {
    return(
        <View style={{flex:1}}>
            
        <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
            <Text>You haven't logged in your vitals yet...</Text>

        
        </View>
        

    <FAB
    style={styles.fab}
    large
    icon="plus"
    color="#ffffff"
    theme={{colors: {accent: 
        "#006211"
    }}}
    onPress={() => navigation.navigate("LogSymptoms")}
  />

        </View>

        
    )
}

const styles = StyleSheet.create({

    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
})

export default Vitals;