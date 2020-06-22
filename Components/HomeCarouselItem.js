import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions, ImageBackground,  } from 'react-native'
import { Card } from 'react-native-paper'
const { width, height } = Dimensions.get('window')

const imgBack = require("../assets/COVID19-1.jpg")

const HomeCarouselItem = ( {label,value } ) => {



    return (
        <ImageBackground source={imgBack} style={styles.cardView}>
        <View style={styles.cardView}>
            <View style={styles.textView}>
               
                    <Text style={styles.itemTitle}> {label}</Text>
                    <Text style={styles.itemDescription}>{value}</Text>

            </View>
        </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width - 20,
        height: height / 3,
        //backgroundColor: "#006211",
        margin: 10,
        borderRadius: 10,
        shadowOffset: { width: 0.5, height: 0.5 },
        elevation: 5,
    },

    textView: {
        position: 'absolute',
        bottom: 10,
        margin: 10,
        left: 5,
    },
 
    itemTitle: {
        //color: 'white',
        fontSize: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
    },
    itemDescription: {
        //color: 'white',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    },
   
})








export default HomeCarouselItem;