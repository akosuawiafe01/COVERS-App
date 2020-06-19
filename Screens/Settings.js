import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Card } from 'react-native-paper'

import SettingsFeed from '../Components/SettingsFeeds'

const settingsFeed = [
    {key:1, title:"Self Assessment", feed:'Ascertain your COVID-19 risk using our screening tool'},
    {key: 2, title: "FAQs", feed: "Get answers to frequently Asked Questions"},
    {key: 3, title: "Testing Centers ", feed: "View Testing Centers near you "},
    {key: 4, title: " Personal Details", feed: " View and update your personal details"},
    {key: 5, title: "Audio", feed: "Listen to audios"},
    {key: 6, title: "Privacy Policy ", feed: " View our Privacy Policy"},
    {key: 7, title: " Share", feed: "Share this app with family and friends "}
    ]

const Settings = () => {
    return(
        <View style={{flex:1}} >
            

            <FlatList
            data={settingsFeed}
            key={settingsFeed.key}
            renderItem={({item}) => <SettingsFeed item={item} /> }
            />

     
    </View>
    )
}

export default Settings;