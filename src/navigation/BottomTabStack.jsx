import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import { Chat, Find, Home, Market, Profile } from "../screens/BottomTabScreens";

const Tab = createMaterialBottomTabNavigator();
export const BottomTabStack = () => {
  return (
    <Tab.Navigator initialRouteName="Home"
    // backBehavior=""
    // activeColor=""
    // barStyle
    // compact
    // inactiveColor=""
    
    screenOptions={{}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Market" component={Market} />
      <Tab.Screen name="Find" component={Find} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
