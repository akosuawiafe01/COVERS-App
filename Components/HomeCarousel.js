import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated } from 'react-native'

import HomeCarouselItem from './HomeCarouselItem'


const { width, height } = Dimensions.get('window')

const renderList  = ({data}) => {
    return(
    Object.entries(data).keys
    )
}


const HomeCarousel = ({ data }) => {
    return (
        <View style={{paddingLeft: 5}}>


            <FlatList
            data={renderList}
            key={Object.entries(data).keys}
            renderItem={({item}) => 
            {return(
            <HomeCarouselItem item={item} />
            )}
            }

            />

        
         {/* { Object.entries(data)
        .forEach(([key, value]) => 
        <HomeCarouselItem key={key} value={value}
        /> } 
         */}
       
        
        {/* console.log(`${key}: ${value}`)) */}
        
        </View>
    )
}



export default HomeCarousel;