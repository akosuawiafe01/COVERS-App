import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated } from 'react-native'

import HomeCarouselItem from './HomeCarouselItem'


const { width, height } = Dimensions.get('window')

const HomeCarousel = ({  data }) => {
    return (
        <View style={{paddingLeft: 5}}>

        
        {Object.entries(data).forEach(([key, value]) => <HomeCarouselItem key={key} value={value}/>}
        
       
        
        //console.log(`${key}: ${value}`))
        
        </View>
    )
}



export default HomeCarousel;