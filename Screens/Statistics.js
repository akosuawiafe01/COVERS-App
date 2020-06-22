import React, { useState } from 'react'
import { View, Image, Text, StyleSheet, TouchableNativeFeedback, ActivityIndicator, Dimensions } from 'react-native'
import { TextInput } from 'react-native-paper'
import { Ionicons, Foundation, Entypo } from '@expo/vector-icons';

import CountriesModal from '../Components/CountriesModal'

//Graph data should be placed here
import { GET_COUNTRY_STATS } from '../graphQL/Query'

import { useQuery, useMutation } from '@apollo/react-hooks';

const { width, height } = Dimensions.get("screen")




const Statistics = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({
        "id": "77",
        "name": "Ghana",
        "flag": "https://disease.sh/assets/img/flags/gh.png"
    });

    // const [countStats, updateCountStats] = useQuery(COUNTRY_STATS);
    const { loading, data, error } = useQuery(GET_COUNTRY_STATS, {
        variables: { country: selectedCountry.name }
    });


    const setCountryStats = () => {
        //    return(
        setConfirmedStats(data.country.result.cases),
            setRecoveredStats(data.country.result.recovered),
            setDeathStats(data.country.result.deaths),
            setActiveStats(data.country.result.active),
            setCriticalStats(data.country.result.critical),
            setTestsStats(data.country.result.tests)
        //    )

    }

    const [confirmedStat, setConfirmedStats] = useState(0)
    const [recovStat, setRecoveredStats] = useState(0)
    const [deathStat, setDeathStats] = useState(0)
    const [activeStat, setActiveStats] = useState(0)
    const [criticalStat, setCriticalStats] = useState(0)
    const [testsStat, setTestsStats] = useState(0)

    React.useEffect(() => {
        if (data)
            setCountryStats();
    }, [data]); 

    return (
        <View style={{ ...styles.container, alignContent: "center", justifyContent: "center" }}>


            <View style={{ paddingHorizontal: 10 }}>

                <Text style={styles.selectCountryText}>Select country:</Text>

                <TouchableNativeFeedback onPress={() => {
                    setModalVisible(true);
                }}>
                    <View style={[styles.card, { flexDirection: 'row', alignItems: 'center', marginBottom: 10 }]}>
                        <Image source={{ uri: selectedCountry.flag }} style={styles.flag} />
                        <Text style={{ flex: 1, marginLeft: 10 }} >
                            {selectedCountry.name}
                        </Text>
                        <Entypo name='chevron-small-down' size={20} />
                    </View>

                </TouchableNativeFeedback>


                {loading ? <ActivityIndicator large color="#006211" /> :
                    data ?

                        <View style={styles.card}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                <Foundation name='graph-bar' size={22} color='green' />
                                <Text style={{ fontSize: 22, marginLeft: 10 }}>Statistics</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1, borderRightColor: '#e0e0e0', borderRightWidth: 1 }}>
                                    <View style={{ marginBottom: 10 }}>
                                        <Text style={styles.statsCaption}>Confirmed</Text>
                                        <Text style={styles.statsNumber}> {confirmedStat} </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.statsCaption}>Active</Text>
                                        <Text style={styles.statsNumber}> {activeStat} </Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, paddingLeft: 5, borderRightColor: '#e0e0e0', borderRightWidth: 1 }}>
                                    <View style={{ marginBottom: 10 }}>
                                        <Text style={styles.statsCaption}>Recovered</Text>
                                        <Text style={styles.statsNumber}> {recovStat} </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.statsCaption}>Critical</Text>
                                        <Text style={styles.statsNumber}> {criticalStat} </Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, paddingLeft: 5 }}>
                                    <View style={{ marginBottom: 10 }}>
                                        <Text style={styles.statsCaption}>Deaths</Text>
                                        <Text style={styles.statsNumber}> {deathStat} </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.statsCaption}>Tests</Text>
                                        <Text style={styles.statsNumber}> {testsStat} </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        : <Text> No data </Text>


                }

            </View>



            <CountriesModal visible={modalVisible} onRequestClose={() => setModalVisible(false)}
                onSelectCountry={(country) => {
                    setSelectedCountry(country);
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