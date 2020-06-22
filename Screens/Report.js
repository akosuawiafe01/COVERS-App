import React from 'react'
import { View, Text, StyleSheet, Button  } from 'react-native'
import { FAB,  } from 'react-native-paper'



const Report = ({ navigation }) => {


    return(
        <View style={styles.container} > 

            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}} >
                <Text >Report a Case</Text>
            </View>

            <FAB
            style={styles.fab}
            large
            icon="plus"
            color="#ffffff"
            theme={{colors: {accent: 
                "#006211"
            }}}
            label="Report Case"
            onPress={() => navigation.navigate("MakeReport") }
            />

            


        </View>
    )
}



const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    header: {

    },

    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 20,

    }

});


export default Report;