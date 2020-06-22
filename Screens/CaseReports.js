import React, {useState} from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { FAB } from 'react-native-paper'




const CaseReports = ({ navigation }) => {

 
return(
        <View style={styles.container}>
            <Text style={styles.title} >Case Reports</Text>

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