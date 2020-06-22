import React from 'react'
import { Text, View, Button, StyleSheet, ScrollView, Alert, FlatList, Dimensions } from 'react-native'
import { Card  } from 'react-native-paper'


const FAQs = ({navigation}) => {
    return(

        <ScrollView  alwaysBounceVertical={true}>

        <View style={styles.container}>

        <Text style={{...styles.title,alignSelf: "center" }} >Frequently Asked Questions</Text>

            <Card>
                <Text style={styles.title}>What is COVID-19?</Text>
               
            </Card>


                <Text style={styles.title} >How likely am I to catch COVID-19?</Text>
                {/* <Text>
                    Recommendations provided by this tool does not constitute medical advice and should not be used for diagnosis or trat medical conditions.
                </Text> */}

            <Card>
            
                <Text style={styles.title}>What is COVID-19?</Text>
               
            </Card>


        </View>

        </ScrollView>
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


export default FAQs;