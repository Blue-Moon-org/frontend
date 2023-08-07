import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import {
  PostDetail,
  MarketDetail,
  Cart,
  Checkout,
} from "../screens/StackScreens";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { scale } from "../utils/scale";
import { Text } from "../components/common";
import { Fontscales } from "../styles";
import { colors } from "../constants/colorpallette";

const Stack = createSharedElementStackNavigator();

export const RootStack = () => {
  const { goBack, navigate } = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Post",
          headerTitleAlign: "left",
          headerTitleAllowFontScaling: true,
          headerTitleStyle: Fontscales.paragraphLargeMedium,
          headerLeft: () => (
            <MaterialCommunityIcons
              onPress={() => goBack()}
              style={{ marginLeft: scale.pixelSizeHorizontal(16) }}
              name="keyboard-backspace"
              size={scale.fontPixel(24)}
              color="black"
            />
          ),
        }}
        name="PostDetail"
        component={PostDetail}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: "About",
          headerTitleAlign: "left",
          headerTitleAllowFontScaling: true,
          headerTitleStyle: Fontscales.paragraphLargeMedium,
          headerLeft: () => (
            <MaterialCommunityIcons
              onPress={() => goBack()}
              style={{ marginLeft: scale.pixelSizeHorizontal(16) }}
              name="keyboard-backspace"
              size={scale.fontPixel(24)}
              color="black"
            />
          ),
        }}
        name="MarketDetail"
        component={MarketDetail}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Cart",
          headerTitleAlign: "left",
          headerTitleAllowFontScaling: true,
          headerTitleStyle: Fontscales.paragraphLargeMedium,
          headerLeft: () => (
            <MaterialCommunityIcons
              onPress={() => goBack()}
              style={{ marginLeft: scale.pixelSizeHorizontal(16) }}
              name="keyboard-backspace"
              size={scale.fontPixel(24)}
              color="black"
            />
          ),
          headerRight: () => (
            <Text
              text={"Add more items"}
              textStyle={{
                fontFamily: "Outfit_500Medium",
                fontSize: scale.fontPixel(12),
                fontWeight: "500",
                color: colors.mainPrimary,
                marginRight: scale.pixelSizeHorizontal(16),
              }}
              onPress={() =>
                navigate("BottomTabStack", {
                  screen: "Market",
                })
              }
            />
          ),
        }}
        name="Cart"
        component={Cart}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Checkout",
          headerTitleAlign: "left",
          headerTitleAllowFontScaling: true,
          headerTitleStyle: Fontscales.paragraphLargeMedium,
          headerLeft: () => (
            <MaterialCommunityIcons
              onPress={() => navigate("Cart")}
              style={{ marginLeft: scale.pixelSizeHorizontal(16) }}
              name="keyboard-backspace"
              size={scale.fontPixel(24)}
              color="black"
            />
          ),
        }}
        name="Checkout"
        component={Checkout}
      />
    </Stack.Navigator>
  );
};
