import React from 'react'
import { View, Image } from 'react-native'
import { Entypo, Ionicons, Feather, AntDesign, EvilIcons } from '@expo/vector-icons'

//Bottum Tabs 
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

//Onboarding screens
import General_Info from '../Screens/Onboarding-Screens/General_Info'
import Get_Started from '../Screens/Onboarding-Screens/Get_Started'
import Verification from '../Screens/Onboarding-Screens/Verification'


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


const stackOptions = {
    headerLeft: () => 
                <View style={{margin: 5}} >
                <Image style={{width: 50, height: 50, borderRadius: 25 }} source={require('../assets/COVID19-1.jpg')}  />
                </View>,
                headerRight: () => 
                <View style={{margin: 5}}>
                <Feather name="bell" size={30}  />
                </View>
}


const OnboardingStack = () => {
    return(
        <Stack.Navigator >
 
        <Stack.Screen name="Get_Started" component={Get_Started} 
           options={stackOptions} 

       />

       <Stack.Screen name="General_Info" component={General_Info} />
       <Stack.Screen name="Verification" component={Verification} />

   </Stack.Navigator>  
    )
}

const HomeStack = () => {

        return(
        <Stack.Navigator >
 
         <Stack.Screen name="Home" component={Home} 
            options={stackOptions} 

        />

        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Notification" component={Notification} />

    </Stack.Navigator>
    )
}


const ReportStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Report" 
            component={Report} 
          options={stackOptions} 
    
            />
            <Stack.Screen name="MakeReport" component={MakeReport} />
            <Stack.Screen name="CaseReports" component={CaseReports} />
            <Stack.Screen name="DisplayReports" component={DisplayReports} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Notification" component={Notification} />
        </Stack.Navigator>
    )
}


const VitalsStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Vitals" 
            component={Vitals} 
         options={stackOptions} 
         />

        <Stack.Screen name="LogSymptoms" component={LogSymptoms} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Notification" component={Notification} />

        </Stack.Navigator>
    )
}



const SettingsStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Settings" 
            component={Settings} 
            options={stackOptions} 
    
            />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Notification" component={Notification} />

        </Stack.Navigator>
    )
}





const BottumTab = ( ) => {
    return(
        <Tab.Navigator 
        initialRouteName="Get_Started"
        tabBarOptions={{
            activeTintColor: "#006211",
            headerRight: ({ focused }) => ( <Entypo  focused={focused} name="home" size={20} />),
            headerStyle: {
                backgroundColor: "#006211"
            }
        }}
        >
            <Tab.Screen 
            name="Get_Started" 
            component={OnboardingStack}  
            options={{
                tabBarLabel:"Home",
                tabBarColor: "#006211",
                tabBarIcon: ({ focused }) => ( <Entypo  focused={focused} name="home" size={20} />),

            }} 
                
             />

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