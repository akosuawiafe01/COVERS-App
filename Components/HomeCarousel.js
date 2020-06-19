import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated } from 'react-native'

import HomeCarouselItem from './HomeCarouselItem'


const { width, height } = Dimensions.get('window')

const HomeCarousel = ({  data }) => {
    return (
        <View>

            <FlatList
            data={Object.entries(data.globalTotal) }
            renderItem = { ({ item }) => <HomeCarouselItem item={item} /> }
            />

        </View>
    )
}



export default HomeCarousel;