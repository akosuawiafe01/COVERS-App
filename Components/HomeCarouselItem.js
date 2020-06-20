import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import { Card } from 'react-native-paper'

const { width, height } = Dimensions.get('window')



const HomeCarouselItem = ( {label,value } ) => {
    return(
        <View>
            <Card>
                <View>
                {label = 'cases' ?  (<Image style={{width: 50, height: 50, borderRadius: 25 }} source={require('../assets/COVID19-1.jpg')}  />)
                                    : <Text>Hello HomeCarouselItem</Text> }
                <Text> {label} </Text>
                <Text> {value} </Text>


                </View>
        </Card>

        </View>
    )
}











export default HomeCarouselItem;