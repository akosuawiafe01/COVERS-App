import React,  {useState} from 'react'
import { View, Image, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { Ionicons, Foundation, Entypo } from '@expo/vector-icons';

import CountriesModal from '../Components/CountriesModal'



const Statistics = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [currentCountryIndex, setCurrentCountryIndex] = useState(-1);

    const [selectedCountry, setSelectedCountry] = useState([
        {
            "id": "77",
            "name": "Ghana",
            "flag": "https://disease.sh/assets/img/flags/gh.png"
        },])


    return (
        <View style={styles.container}>

          
            <View style={{marginTop: 50, paddingHorizontal: 10 }}>
                <View style={styles.card}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Ionicons name='ios-globe' size={22} color='blue' />
                        <Text style={{ fontSize: 22, marginLeft: 10 }}>Worldwide Statistics</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, borderRightColor: '#e0e0e0', borderRightWidth: 1 }}>
                            <Text style={styles.statsCaption}>Cases</Text>
                            <Text style={styles.statsNumber}>1,234,567</Text>
                        </View>
                        <View style={{ flex: 1, borderRightColor: '#e0e0e0', borderRightWidth: 1, paddingLeft: 5 }}>
                            <Text style={styles.statsCaption}>Recoveries</Text>
                            <Text style={styles.statsNumber}>1,234</Text>
                        </View>
                        <View style={{ flex: 1, paddingLeft: 5 }}>
                            <Text style={styles.statsCaption}>Deaths</Text>
                            <Text style={styles.statsNumber}>12,345</Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.selectCountryText}>Select country:</Text>

                <TouchableNativeFeedback onPress={() => {
                setCurrentCountryIndex(0);
                setModalVisible(true);
            }}>
                <View style={[styles.card, { flexDirection: 'row', alignItems: 'center', marginBottom: 10 }]}>
                    <Image source={{ uri: selectedCountry[0].flag }} style={styles.flag} />
                    <Text style={styles.countryText}>Ghana</Text>
                    <Entypo name='chevron-small-down' size={20} />
                </View>

            </TouchableNativeFeedback>

                <View style={styles.card}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Foundation name='graph-bar' size={22} color='green' />
                        <Text style={{ fontSize: 22, marginLeft: 10 }}>Statistics</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, borderRightColor: '#e0e0e0', borderRightWidth: 1 }}>
                            <View style={{ marginBottom: 10 }}>
                                <Text style={styles.statsCaption}>Confirmed</Text>
                                <Text style={styles.statsNumber}>1,550</Text>
                            </View>
                            <View>
                                <Text style={styles.statsCaption}>Active</Text>
                                <Text style={styles.statsNumber}>1,384</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, paddingLeft: 5, borderRightColor: '#e0e0e0', borderRightWidth: 1 }}>
                            <View style={{ marginBottom: 10 }}>
                                <Text style={styles.statsCaption}>Recovered</Text>
                                <Text style={styles.statsNumber}>155</Text>
                            </View>
                            <View>
                                <Text style={styles.statsCaption}>Critical</Text>
                                <Text style={styles.statsNumber}>4</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, paddingLeft: 5 }}>
                            <View style={{ marginBottom: 10 }}>
                                <Text style={styles.statsCaption}>Deaths</Text>
                                <Text style={styles.statsNumber}>11</Text>
                            </View>
                            <View>
                                <Text style={styles.statsCaption}>Tests</Text>
                                <Text style={styles.statsNumber}>100622</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>

            <CountriesModal visible={modalVisible} onRequestClose={() => setModalVisible(false)}
                onSelectCountry={(country) => {
                    selectedCountry[currentCountryIndex] = country;
                    setSelectedCountry(selectedCountry);
                    setModalVisible(false);
                }} />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        borderBottomWidth: 0.5,
        marginHorizontal: 10,
        marginBottom: 20
    },
    headerText: {
        fontSize: 43,
        fontWeight: 'bold'
    },
    card: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        elevation: 1
    },
    statsCaption: {
        fontSize: 15
    },
    statsNumber: {
        fontSize: 25,
        fontWeight: "bold"
    },
    selectCountryText: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 15,
        marginRight: 10,
        marginBottom: 5
    },
    flag: {
        width: 45,
        height: 30
    },
    countryText: {
        fontSize: 20,
        marginLeft: 10,
        flex: 1
    },
})

export default Statistics;