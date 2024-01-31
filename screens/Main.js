import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from "../Bottomnavigation/Home";

const Tab = createBottomTabNavigator()

const Main = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />#
        </Tab.Navigator>
    )
}
export default Main;