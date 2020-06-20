import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableNativeFeedback, Modal } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Card } from 'react-native-paper'

import SettingsFeed from '../Components/SettingsFeeds'
import ModalComponent from '../Components/Modal'

const settingsFeed = [
    { key: 'self_assessment', title: "Self Assessment", feed: 'Ascertain your COVID-19 risk using our screening tool' },
    { key: 'faqs', title: "FAQs", feed: "Get answers to frequently Asked Questions" },
    { key: 'centers', title: "Testing Centers ", feed: "View Testing Centers near you " },
    { key: 'details', title: " Personal Details", feed: " View and update your personal details" },
    { key: 'audio', title: "Audio", feed: "Listen to audios" },
    { key: 'privacy', title: "Privacy Policy ", feed: " View our Privacy Policy" },
    { key: 'share', title: " Share", feed: "Share this app with family and friends " }
]

const Settings = () => {
    const [currentModal, setCurrentModal] = React.useState();
    const closeModal = () => setCurrentModal(null); 
    return (
        <>
            <View style={{ flex: 1 }} >
                <FlatList
                    data={settingsFeed}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) =>
                        <TouchableNativeFeedback onPress={() => { 
                            setCurrentModal(item.key);
                        }}>
                            <View>
                                <SettingsFeed item={item} />
                            </View>
                        </TouchableNativeFeedback>

                    } />
            </View>
            {/* Put your modals here*/}
            <Modal visible={currentModal === 'self_assessment'} onRequestClose={closeModal}>
                <Text>Self Assessment</Text>
            </Modal>
            <Modal visible={currentModal === 'faqs'} onRequestClose={closeModal}>
                <Text>FAQs</Text>
            </Modal>
            <Modal visible={currentModal === 'centers'} onRequestClose={closeModal}>
                <Text>Testing Centers</Text>
            </Modal>
            <Modal visible={currentModal === 'details'} onRequestClose={closeModal}>
                <Text>Testing Centers</Text>
            </Modal>
            <Modal visible={currentModal === 'audio'} onRequestClose={closeModal}>
                <Text>Testing Centers</Text>
            </Modal>
            <Modal visible={currentModal === 'privacy'} onRequestClose={closeModal}>
                <Text>Testing Centers</Text>
            </Modal>
            <Modal visible={currentModal === 'share'} onRequestClose={closeModal}>
                <Text>Testing Centers</Text>
            </Modal>
            
        </>
    )
}

export default Settings;