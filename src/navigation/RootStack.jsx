import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { PostDetail, MarketDetail, Cart } from "../screens/StackScreens";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { scale } from "../utils/scale";
import { Fontscales } from "../styles";

const Stack = createSharedElementStackNavigator();

export const RootStack = () => {
  const { goBack } = useNavigation();

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
        }}
        name="Cart"
        component={Cart}
      />
    </Stack.Navigator>
  );
};
