import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions, ImageBackground,  } from 'react-native'
import { Card } from 'react-native-paper'

const { width, height } = Dimensions.get('window')

const images  = {uri: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}

const HomeCarouselItem = ( {label,value } ) => {
    return(
        <View>
            <Card style={{width: 500, height: 1000, }}>
                <View>
                <Image style={styles.backgroundImage  } source={images} />
                <Text> {label} </Text>
                <Text> {value} </Text>
                

                </View>
        </Card>

        </View>
    )
}

const styles = StyleSheet.create({
    backgroundImage:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.3
    },

})









export default HomeCarouselItem;