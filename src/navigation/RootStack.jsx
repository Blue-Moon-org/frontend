import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import {
  PostDetail,
  MarketDetail,
  Cart,
  Checkout,
  ActiveOrders,
  OrderDetail,
  Catalogue,
  Order,
  Sales,
  SaleDetail,
  OrderDetails,
  Favorites,
  Search,
  Chat,
  MarketCreate,
  PostCreate,
  BizInfo,
  BizInfoEdit,
  PersonalInfo,
  PersonalInfoEdit,
} from "../screens/StackScreens";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { scale } from "../utils/scale";
import { Text } from "../components/common";
import { Fontscales } from "../styles";
import { colors } from "../constants/colorpallette";
import { ProfileSettings } from "../screens/BottomTabScreens";
import { TouchableOpacity } from "react-native";

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
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Active Orders",
          headerTitleAlign: "left",
          headerTitleAllowFontScaling: true,
          headerTitleStyle: Fontscales.paragraphLargeMedium,
          headerLeft: () => (
            <MaterialCommunityIcons
              onPress={() => navigate("ProfileSettings")}
              style={{ marginLeft: scale.pixelSizeHorizontal(16) }}
              name="keyboard-backspace"
              size={scale.fontPixel(24)}
              color="black"
            />
          ),
          headerRight: () => (
            <Text
              text={"Go to cart"}
              textStyle={{
                fontFamily: "Outfit_500Medium",
                fontSize: scale.fontPixel(12),
                fontWeight: "500",
                color: colors.mainPrimary,
                marginRight: scale.pixelSizeHorizontal(16),
              }}
              onPress={() => navigate("Cart")}
            />
          ),
        }}
        name="ActiveOrders"
        component={ActiveOrders}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Catalogue",
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
            <TouchableOpacity
              onPress={() => {}}
              activeOpacity={0.8}
              style={{
                backgroundColor: colors.mainPrimary,
                paddingVertical: scale.pixelSizeVertical(4),
                paddingHorizontal: scale.pixelSizeHorizontal(4),
                marginRight: scale.pixelSizeHorizontal(16),
                borderRadius: scale.fontPixel(4),
              }}
            >
              <AntDesign name="plus" size={scale.fontPixel(16)} color="white" />
            </TouchableOpacity>
          ),
        }}
        name="Catalogue"
        component={Catalogue}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Active Orders",
          headerTitleAlign: "left",
          headerTitleAllowFontScaling: true,
          headerTitleStyle: Fontscales.paragraphLargeMedium,
          headerLeft: () => (
            <MaterialCommunityIcons
              onPress={() => navigate("ActiveOrders")}
              style={{ marginLeft: scale.pixelSizeHorizontal(16) }}
              name="keyboard-backspace"
              size={scale.fontPixel(24)}
              color="black"
            />
          ),
        }}
        name="OrderDetail"
        component={OrderDetail}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitleAlign: "left",
          headerTitleAllowFontScaling: true,
          headerTitleStyle: Fontscales.paragraphLargeMedium,
          headerLeft: () => (
            <MaterialCommunityIcons
              onPress={() => navigate("Sales")}
              style={{ marginLeft: scale.pixelSizeHorizontal(16) }}
              name="keyboard-backspace"
              size={scale.fontPixel(24)}
              color="black"
            />
          ),
        }}
        name="SaleDetail"
        component={SaleDetail}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitleAlign: "left",
          headerTitleAllowFontScaling: true,
          headerTitleStyle: Fontscales.paragraphLargeMedium,
          headerLeft: () => (
            <MaterialCommunityIcons
              onPress={() => navigate("Order")}
              style={{ marginLeft: scale.pixelSizeHorizontal(16) }}
              name="keyboard-backspace"
              size={scale.fontPixel(24)}
              color="black"
            />
          ),
        }}
        name="OrderDetails"
        component={OrderDetails}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Completed sales",
          headerTitleAlign: "left",
          headerTitleAllowFontScaling: true,
          headerTitleStyle: Fontscales.paragraphLargeMedium,
          headerLeft: () => (
            <MaterialCommunityIcons
              onPress={() => navigate("ProfileSettings")}
              style={{ marginLeft: scale.pixelSizeHorizontal(16) }}
              name="keyboard-backspace"
              size={scale.fontPixel(24)}
              color="black"
            />
          ),
        }}
        name="Sales"
        component={Sales}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Completed orders",
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
        name="Order"
        component={Order}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Favorites ♥︎",
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
        name="Favorites"
        component={Favorites}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Search",
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
        name="Search"
        component={Search}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Create Market",
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
        name="MarketCreate"
        component={MarketCreate}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Create Post",
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
        name="PostCreate"
        component={PostCreate}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ProfileSettings"
        component={ProfileSettings}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Chat"
        component={Chat}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="BizInfo"
        component={BizInfo}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="BizInfoEdit"
        component={BizInfoEdit}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="PersonalInfo"
        component={PersonalInfo}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="PersonalInfoEdit"
        component={PersonalInfoEdit}
      />
    </Stack.Navigator>
  );
};
