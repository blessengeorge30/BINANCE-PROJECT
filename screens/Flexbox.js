import React from "react";
import { Text, View, Image } from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from "../Bottomnavigation/Home";
import Search from "../Bottomnavigation/Search";
import Notification from "../Bottomnavigation/Notifications";
import Profile from "../Bottomnavigation/Profile";
import Discover from "../Bottomnavigation/Discover";
import Icon from 'react-native-vector-icons/AntDesign';




const Tab = createBottomTabNavigator()

const Flexbox = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    height: 68,
                    backgroundColor: 'black'
                },
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "grey",
                // tabBarActiveBackgroundColor:'white',
                // tabBarInactiveBackgroundColor:'gray',
                // tabBarActiveBackgroundColor:'green',
                tabBarItemStyle: {
                    marginTop: 5,
                    marginBottom: 10
                },
            }} >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={25} color="white"/>
                        ),
                    tabBarLabelStyle: {
                        marginBottom: 5,
                        marginTop: 1,

                    },
                }} />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="search1" size={25} color="white"/>
                        ),
                    tabBarLabelStyle: {
                        marginBottom: 5,
                        marginTop: 1,
                    },
                }} />
                 <Tab.Screen
                name="Discover"
                component={Discover}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="barschart" size={25} color="white"/>
                        ),
                    tabBarLabelStyle: {
                        marginBottom: 5,
                        marginTop: 1,

                    },
                }} />
            <Tab.Screen
                name="Notifiaction"
                component={Notification}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="inbox" size={25} color="white"/>
                        ),
                    tabBarLabelStyle: {
                        marginBottom: 5,
                        marginTop: 1,

                    },
                }} />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" size={25} color="white"/>
                        ),
                    tabBarLabelStyle: {
                        marginBottom: 5,
                        marginTop: 1,

                    },
                }}
            />
        </Tab.Navigator>

    )
}
export default Flexbox;