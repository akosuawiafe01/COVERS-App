import React from 'react'
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native'
import {  FAB,  } from 'react-native-paper'


import { useQuery, useMutation } from '@apollo/react-hooks';

import GET_USER_VITALS from '../graphQL/Query'



const Vitals = ({ navigation }) => {

    const {loading, data, error} = useQuery(GET_USER_VITALS);
    return(
 
   
        <View style={{flex:1}}>

{  loading ? <ActivityIndicator large color="#006211" />
        : data ? 
            
        <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
            <Text>You haven't logged in your vitals yet...</Text>

        
        </View>
        : <Text>You haven't logged in your vitals yet...</Text>
}


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