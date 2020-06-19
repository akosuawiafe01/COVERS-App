import React from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import {  Card } from 'react-native-paper'

import Constants from 'expo-constants'


const data = [{
    id: "1",
    message: "hey there",
    time: "2 days"
},{
id: "2",
message: "hey there",
time: "2 days"
},{
    id: "3",
    message: "hey there",
    time: "2 days"

},{
    id: "4",
    message: "hey there",
    time: "2 days"

},{
    id: "5",
    message: "hey there",
    time: "2 days"

},{
    id: "6",
    message: "hey there",
    time: "2 days"

},{
    id: "7",
    message: "hey there",
    time: "2 days"

},{
    id: "8",
    message: "hey there",
    time: "2 days"

},{
    id: "9",
    message: "hey there",
    time: "2 days"

},{
    id: "10",
    message: "hey there",
    time: "2 days"

}

]


const Notification = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title} >Notifications</Text>

            <FlatList
            data={data}
            keyExtractor={data.id}
            renderItem={({item}) =>
             
                 <Card >
                     <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between", margin: 5, padding: 10, elevation: 0.5, borderBottomColor: "#f5673a"}} >
                        <Text>{item.message}</Text>

                        <Text>{item.time}</Text>

                    </View>
                 </Card>

            }
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        alignSelf: "center"
    }
});

export default Notification;