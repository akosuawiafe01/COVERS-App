import React from 'react';
import { Modal, TouchableOpacity, FlatList, View, StyleSheet,Text,Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const countries = require('../assets/countries.json');
export default function CountriesModal({ visible, onSelectCountry, onRequestClose }) {
    return (
        <Modal animationType="slide" visible={visible} onRequestClose={onRequestClose}>
            <View>
                    <View style={styles.header}>
                        <MaterialIcons name="arrow-back" size={24} color="black" />
                        <Text style={styles.headerText}>Select Country</Text>
                    </View>
                <FlatList 
                data={countries} 
                keyExtractor={(item) => item.id} 
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => onSelectCountry(item)}>
                            <View style={styles.listItem}>
                                <Image source={{ uri: item.flag }} style={styles.img} />
                                <Text style={styles.label}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    }
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        padding: 20,
        elevation: 4,
        flexDirection:'row',
    alignItems:'center'
    },
    listItem: {
        flexDirection:'row',
        padding: 20,
        borderBottomColor: '#cfcecc',
        flexDirection:'row',
    alignItems:'center'
    },
    img: {
        marginRight:20,
        borderWidth: 1,
        borderColor: "#e3e3e3", 
        width: 45,
        height: 30
    },
    label: {
        fontSize: 17
    }
});