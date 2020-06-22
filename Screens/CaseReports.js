import React, {useState} from 'react'
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native'
import { FAB, Card } from 'react-native-paper'





const CaseReports = ({ navigation, route }) => {

    const {reporter, location, landmark, altContact, description} = route.params 

    const data = [
        {id: "1", message: reporter},
        {id: "2", message: location},
        {id: "4", message: landmark},
        {id: "6", message: altContact},
        {id: "5", message: description}
    ];

    const ReportedCases = ({item}) => {
        return(
            <Card >
                <Text>{item.message}</Text>
                <Text>{item.time}</Text>
        </Card>
        )
    }
 
return(
        <View style={styles.container}>
            <Text style={styles.title} >Case Reports</Text>

            <FlatList
            data={data}
            keyExtractor={data.id}
            renderItem={({item}) => <ReportedCases  item={item}/> }
            />


<FAB
    style={styles.fab}
    large
    icon="plus"
    color="#ffffff"
    theme={{colors: {accent: 
        "#006211"
    }}}
    onPress={() => navigation.navigate("MakeReport") }
  />


        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: Constants.statusBarHeight,
        
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        alignSelf: "center"
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
});

export default CaseReports;