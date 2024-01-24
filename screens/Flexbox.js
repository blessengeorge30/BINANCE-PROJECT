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

const HomeIcon = () => (
    <Image
      source={require("../assets/Homeicon.png")}
      style={{ width: 25, height: 25, tintColor: "white" }}
    />
  );
  const ExploreIcon = () => (
    <Image
      source={require("../assets/search1.png")}
      style={{ width: 20, height: 20, tintColor: "white" }}
    />
  );
  const DiscoverIcon = () => (
    <Image
      source={require("../assets/discover.png")}
      style={{ width: 24, height: 24,  }}
    />
  );
  const NotifiactionIcon = () => (
    <Image
      source={require("../assets/Notificationicon.png")}
      style={{ width: 24, height: 24, tintColor: "white" }}
    />
  );
  const AccountIcon = () => (
    <Image
      source={require("../assets/manageuser.png")}
      style={{ width: 22, height: 22, tintColor: "white" }}
    />
  );

const Flexbox = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    borderTopLeftRadius:15,
                    borderTopRightRadius:15,
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
                        <HomeIcon />
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
                        <ExploreIcon />
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
                        <DiscoverIcon />
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
                        <NotifiactionIcon />
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
                        <AccountIcon />
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