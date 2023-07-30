import React from "react";
import {
  Chat,
  Find,
  Home,
  Market,
  Profile,
  BuyerProfile,
} from "../screens/BottomTabScreens";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { Platform, View } from "react-native";
import { colors } from "../constants/colorpallette";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { scale } from "../utils/scale";
import { Text } from "../components/common";
import { Fontscales } from "../styles";

const Tab = createBottomTabNavigator();
export const BottomTabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      sceneContainerStyle={{
        backgroundColor: "transparent",
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.mainPrimary,
        tabBarAllowFontScaling: true,
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: "#37374055",
        tabBarLabelStyle: {},
        tabBarStyle: {
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: Platform.OS === "android" ? 16.0 : 10.0,
          elevation: Platform.OS === "android" ? 12 : 10,
          borderTopLeftRadius: scale.fontPixel(21),
          borderTopRightRadius: scale.fontPixel(21),
          backgroundColor: "#fff",
          position: "absolute",
          bottom: 0,
          width: "100%",
          height:
            Platform.OS === "ios"
              ? scale.heightPixel(92)
              : scale.heightPixel(75),
          zIndex: 0,
        },
      }}
    >
      <Tab.Screen
        options={{
          title: "Home",
          tabBarLabel: ({ color, focused }) => (
            <Text
              text={"Home"}
              textStyle={[
                Fontscales.labelSmallMedium,
                {
                  color: color,
                  paddingBottom:
                    Platform.OS === "android" ? scale.pixelSizeVertical(5) : 0,
                },
              ]}
            />
          ),
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: "transparent",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <View
                style={{
                  borderTopColor: focused ? color : "white",
                  borderTopWidth: 3,
                }}
              />
              <Feather
                name="home"
                size={24}
                style={{
                  marginBottom: scale.pixelSizeVertical(8),
                }}
                color={color}
              />
            </View>
          ),
          tabBarAccessibilityLabel: "home",
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          title: "Market",
          tabBarLabel: ({ color, focused }) => (
            <Text
              text={"Market"}
              textStyle={[
                Fontscales.labelSmallMedium,
                {
                  color: color,
                  paddingBottom:
                    Platform.OS === "android" ? scale.pixelSizeVertical(5) : 0,
                },
              ]}
            />
          ),
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: "transparent",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <View
                style={{
                  borderTopColor: focused ? color : "white",
                  borderTopWidth: 3,
                }}
              />
              <Feather
                name="shopping-bag"
                size={24}
                color={color}
                style={{
                  marginBottom: scale.pixelSizeVertical(8),
                }}
              />
            </View>
          ),
          tabBarAccessibilityLabel: "home",
        }}
        name="Market"
        component={Market}
      />
      <Tab.Screen
        options={{
          title: "Find",
          tabBarLabel: ({ color, focused }) => (
            <Text
              text={"Find"}
              textStyle={[
                Fontscales.labelSmallMedium,
                {
                  color: color,
                  paddingBottom:
                    Platform.OS === "android" ? scale.pixelSizeVertical(5) : 0,
                },
              ]}
            />
          ),
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: "transparent",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <View
                style={{
                  borderTopColor: focused ? color : "white",
                  borderTopWidth: 3,
                }}
              />
              <Ionicons
                name="location-outline"
                style={{
                  marginBottom: scale.pixelSizeVertical(8),
                }}
                size={24}
                color={color}
              />
            </View>
          ),
          tabBarAccessibilityLabel: "home",
        }}
        name="Find"
        component={Find}
      />
      <Tab.Screen
        options={{
          title: "Chat",
          tabBarLabel: ({ color, focused }) => (
            <Text
              text={"Chat"}
              textStyle={[
                Fontscales.labelSmallMedium,
                {
                  color: color,
                  paddingBottom:
                    Platform.OS === "android" ? scale.pixelSizeVertical(5) : 0,
                },
              ]}
            />
          ),
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: "transparent",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <View
                style={{
                  borderTopColor: focused ? color : "white",
                  borderTopWidth: 3,
                }}
              />
              <Ionicons
                name="ios-chatbubble-ellipses-outline"
                size={24}
                style={{
                  marginBottom: scale.pixelSizeVertical(8),
                }}
                color={color}
              />
            </View>
          ),
          tabBarAccessibilityLabel: "home",
        }}
        name="Chat"
        component={Chat}
      />
      <Tab.Screen
        options={{
          title: "Profile",
          tabBarLabel: ({ color, focused }) => (
            <Text
              text={"Profile"}
              textStyle={[
                Fontscales.labelSmallMedium,
                {
                  color: color,
                  paddingBottom:
                    Platform.OS === "android" ? scale.pixelSizeVertical(5) : 0,
                },
              ]}
            />
          ),
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: "transparent",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <View
                style={{
                  borderTopColor: focused ? color : "white",
                  borderTopWidth: 3,
                }}
              />
              <AntDesign
                name="user"
                size={24}
                color={color}
                style={{
                  marginBottom: scale.pixelSizeVertical(8),
                }}
              />
            </View>
          ),
          tabBarAccessibilityLabel: "home",
        }}
        name="Profile"
        component={1 + 2 === 2 ? BuyerProfile : Profile}
      />
    </Tab.Navigator>
  );
};
