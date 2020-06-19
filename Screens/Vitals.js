import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import {  FAB,  } from 'react-native-paper'

const Vitals = () => {
    return(
        <View style={{flex: 1}}>
            
            <Text>Vitals Screen</Text>


            <View style={{flex: 1}} >
                <Button title="Log Vitals" />
        
            </View>
    <FAB
    style={styles.fab}
    large
    icon="plus"
    color="#ffffff"
    theme={{colors: {accent: 
        "#006211"
    }}}
    onPress={() => console.log('Pressed')}
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