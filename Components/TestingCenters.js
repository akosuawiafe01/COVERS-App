import React from 'react'
import { Text, View, Button, StyleSheet, ScrollView, Alert, FlatList, Dimensions } from 'react-native'
import { Card  } from 'react-native-paper'

//import testingCenters from '../assets/testingCenters.json'


// const RenderCenters = ({item}) => {
//     return(
//         <View style={{flex: 1}}>
//             <Text >cyy</Text>
//             <Text>{item.name}</Text>
//         </View>
//     )

// }

const TestingCenters = () => {
    return(
        <View>
        {/* <View style={styles.container}>
            <Text style={styles.title} >Testing Centers</Text>
            <FlatList
            data={data}
            key ={data._id}
            renderItem={({item }) => 
            <RenderCenters item={item} />
            }

            />
            
        </View> */}
     
        </View>
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

export default TestingCenters;