import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import { Card } from 'react-native-paper'

const { width, height } = Dimensions.get('window')



const HomeCarouselItem = ( {label,value } ) => {
    return(
        <View>
            <Card>
                <View>
                <Text> {label} </Text>
                <Text> {value} </Text>

                {/* <Text> { item.key } </Text> */}
                </View>
        </Card>

        </View>
    )
}











export default HomeCarouselItem;