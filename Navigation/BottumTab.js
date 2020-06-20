import React from 'react'
import { View, Image } from 'react-native'
import { Entypo, Ionicons, Feather, AntDesign, EvilIcons } from '@expo/vector-icons'

//Bottum Tabs 
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'


//Screens
import Home from '../Screens/Home'
import Settings from '../Screens/Settings'
import Report from '../Screens/Report'
import Vitals from '../Screens/Vitals'
import Profile from '../Screens/Profile'
import Notification from '../Screens/Notification'
import MakeReport from '../Screens/MakeReport'
import CaseReports from '../Screens/CaseReports'
import DisplayReports from '../Screens/DisplayReports'
import LogSymptoms from '../Screens/LogSymptoms'



const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const HomeStack = () => {

        return(
        <Stack.Navigator >
 
         <Stack.Screen name="Home" component={Home} 
            options={{
                
                headerLeft: () => 
                <View style={{margin: 5}} >
                <Image style={{width: 50, height: 50, borderRadius: 25 }} source={require('../assets/COVID19-1.jpg')}  />
                </View>,
                headerRight: () => 
                <View style={{margin: 5}}>
                <Feather name="bell" size={30}  />
                </View>
                
            }} 

        />

        <Stack.Screen name="Profile" component={Profile} />

    </Stack.Navigator>
    )
}


const ReportStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Report" 
            component={Report} 
            options={{
                
                headerLeft: () => 
                <View style={{margin: 5}} >
                <Image onPress={() => console.log("Image tapped")} style={{width: 50, height: 50, borderRadius: 25 }} source={require('../assets/COVID19-1.jpg')}  />
                </View>,
                headerRight: () => 
                <View style={{margin: 5}}>
                <Feather name="bell" size={30} onPress={({navigation  }) => navigation.navigate(Notification)}/>
                </View>
            }} 
    
            />
            <Stack.Screen name="MakeReport" component={MakeReport} />
            <Stack.Screen name="CaseReports" component={CaseReports} />
            <Stack.Screen name="DisplayReports" component={DisplayReports} />
        </Stack.Navigator>
    )
}


const VitalsStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Vitals" 
            component={Vitals} 
            options={{
                
                headerLeft: () => 
                <View style={{margin: 5}} >
                <Image style={{width: 50, height: 50, borderRadius: 25 }} source={require('../assets/COVID19-1.jpg')}  />
                </View>,
                headerRight: () => 
                <View style={{margin: 5}}>
                <Feather name="bell" size={30}  />
                </View>
            }} />

        <Stack.Screen name="LogSymptoms" component={LogSymptoms} />


        </Stack.Navigator>
    )
}



const SettingsStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Settings" 
            component={Settings} 
            options={{
                
                headerLeft: () => 
                <View style={{margin: 5}} >
                <Image style={{width: 50, height: 50, borderRadius: 25 }} source={require('../assets/COVID19-1.jpg')}  />
                </View>,
                headerRight: () => 
                <View style={{margin: 5}}>
                <Feather name="bell" size={30}  />
                </View>
            }} 
    
            />
        </Stack.Navigator>
    )
}





const BottumTab = ( ) => {
    return(
        <Tab.Navigator 
        initialRouteName="Home"
        tabBarOptions={{
            activeTintColor: "#006211",
            headerRight: ({ focused }) => ( <Entypo  focused={focused} name="home" size={20} />),
            headerStyle: {
                backgroundColor: "#006211"
            }
        }}
        >
            <Tab.Screen 
            name="Home" 
            component={HomeStack}  
            options={{
                tabBarLabel:"Home",
                tabBarColor: "#006211",
                tabBarIcon: ({ focused }) => ( <Entypo  focused={focused} name="home" size={20} />),

            }} 
                
             />
            <Tab.Screen 
            name="Report" 
            component={ReportStack} 
            options={{
                tabBarLabel:"Report",
                tabBarColor: "#006281",
                tabBarIcon: ({ focused }) => (<Ionicons  focused={focused} name="ios-paper-plane" size={20} />)}}
            />
            <Tab.Screen 
            name="Vitals" 
            component={VitalsStack} 
            options={{
                tabBarLabel:"Vitals",
                tabBarColor: "#099999",
                tabBarIcon: ({ focused }) => (<Feather focused={focused}  name="activity" size={20} />)}}
            />
            <Tab.Screen 
            name="Settings" 
            component={SettingsStack} 
            options={{
                tabBarLabel: "Settings",
                tabBarColor: "#04f291",
                tabBarIcon: ({focused}) => (<Ionicons focused={focused} name="ios-settings" size={20} />)}} 
            />


        </Tab.Navigator>
    )
}



export default BottumTab;