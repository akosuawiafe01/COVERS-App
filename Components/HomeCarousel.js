import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated } from 'react-native'

import HomeCarouselItem from './HomeCarouselItem'


const { width, height } = Dimensions.get('window')
 

// function infiniteScroll(dataList){
//     const numberOfData = dataList.length
//     let scrollValue = 0, scrolled = 0

//     setInterval(function() {
//         scrolled ++
//         if(scrolled < numberOfData)
//         scrollValue = scrollValue + width

//         else{
//             scrollValue = 0
//             scrolled = 0
//         }

//         this.flatList.scrollToOffset({ animated: true, offset: scrollValue})
        
//     }, 3000)
// }



const HomeCarousel = ({ data }) => {

    data = Object.entries(data);
    data = data.slice(0,data.length-1);
    const [dataList, setDataList] = useState(data)

    useEffect(()=> {
         setDataList(data)
        //infiniteScroll(dataList)
    })


  

    return (
        <View style={{paddingLeft: 5}}>

 
            <FlatList horizontal
            data={data}
            keyExtractor={(item,index)=>String(index)}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) =>  
            <HomeCarouselItem label={item[0]} value={item[1]} /> 
            }

            

            />

 


        </View>
    )
}



export default HomeCarousel;