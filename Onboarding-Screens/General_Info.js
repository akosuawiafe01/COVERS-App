                                                    // OnboardingScreen 3: General Info 

import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

import { Card, Button, TextInput, } from 'react-native-paper'
import { FlatList } from 'react-native-gesture-handler'

const generalInfo = [ 
 {key: "Background", title: "Background", info: "Citizens are advised to provide accurate information to this applicationto support the government and health services in managing and accurately containing the spread of coronavirus."},
 {key: "Collection of your Information",title: "Collection of your Information",  info: "We may collect information about you in avariety of ways. The information we may collect via the Application depends on the content and materials you use, and includes: "},
 {key: "Personal Information", title: "Personal Information", info: "Demographic and other personally identifiable information that you voluntarily give to us while using this application is anonymized and is only made available to the relevant authorities in case of emergency."},
 {key: "Geo-Location Information",title: "Geo-Location Information", info: "We may request access or permission to track location-based information from your mobile device, either conciously while you are using the application to provide location-based services. If you wish to change our access or permissions you may do so in your device's settings."},
 {key: "Mobile Device Access", title: "Mobile Device Access", info: "We may request access or permission to certain features from your mobile device, including your mobile device's bluetooth, gps. If you wish to change our access or permissions you may do so in your device's settings."},
 {key: "Push Notifications",title: "Push Notifications", info: "We may request access or permission to send you push notifications regarding your account or the application. If you wish to opt-out from recieving these types of communications, you may turn them off in the app's settings. "},
 {key: "Use of your Information", title: "Use of your Information", info: " Having accurate information about you permits us to pride you with a smooth, efficient and customized experience."},
 {key: "Disclosure of your Information", title: "Disclosure of your Information", info: null},
 {key: "Options Regarding your Information", title: "Options Regarding your Information", info: null},
 {key: "Contact Us", title: "Contact Us", info: "If you have questions or comment about this Privacy Policy, please contact us..."}]


const General_Info = ({navigation}) => {

    const FlatListItem = ({ title, info }) => {
        return(
            <View styles={{paddingLeft: 10, flex: 1}}>
    
                <Text style={styles.title} >{ title }</Text>
    
                <Text>{ info }</Text>
    
            </View>
        )
    }
    

    return(

        <View>

         <FlatList
         data={generalInfo}
         renderItem={({item}) => 
        <FlatListItem title={item.title} info={item.info} />
         }
         />  

         

         <Button color={"#006211"} mode={"contained"} onPress={navigation.navigate("Home")} >Let's get started...</Button>
            
        </View> 
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

    }, 
    title: {
        color: "#006211",
        fontSize: 20,
        fontWeight: "bold",

        
    }
})


export default General_Info;



                        