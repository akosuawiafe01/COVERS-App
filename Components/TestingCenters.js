import React from 'react'
import {
    Text, View, Button, StyleSheet,
    ScrollView, Alert, FlatList, Dimensions, ActivityIndicator
} from 'react-native'
import { Card } from 'react-native-paper'
import { FontAwesome5 } from '@expo/vector-icons';
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks';
const GET_TESTING_CENTERS = gql`
{
  testingSites {
    name
    address
    location {
      coordinates
    }
  }
}
`;

const TestingCenters = () => {
    const { loading, data, error } = useQuery(GET_TESTING_CENTERS);

    return (
        <View style={styles.container}>
            <Text style={styles.title} >Testing Centers</Text>
            {loading ?
                <ActivityIndicator size={20} />
               : data?
                <FlatList
                    data={data.testingSites}
                    keyExtractor={(item, index) => String(index)}
                    ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: "#000", opacity: 0.7 }} />}
                    renderItem={({ item }) =>
                        <View style={{ padding: 20 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.address}>{item.address}</Text>
                            </View>
                            <FontAwesome5 name="map-marked-alt" size={24} color="black" />
                        </View>
                    } />
                    :<Text>Error! Check your Internet connection</Text>
            }

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
    },
    name: {
        fontSize: 20,
    },
    address: {
        fontSize: 18
    },

})

export default TestingCenters;