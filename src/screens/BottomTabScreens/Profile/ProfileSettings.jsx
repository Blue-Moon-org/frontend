import { View, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { ProfileHeader } from "../../../components/primary";
import { SafeAreaView } from "react-native-safe-area-context";
import { SharedStyles, Fontscales } from "../../../styles";
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { Text } from "../../../components/common";
import { useNavigation } from "@react-navigation/native";
import { scale } from "../../../utils/scale";
import { styles } from "./styles";

export const ProfileSettings = () => {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={SharedStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileHeader designer={false} />
        <Text text={"Profile"} textStyle={[Fontscales.labelSmallMedium]} />

        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigate("PersonalInfo")}
            style={styles.btn}
            activeOpacity={0.7}
          >
            <AntDesign name="user" size={scale.fontPixel(20)} color="black" />
            <Text
              textStyle={[
                Fontscales.labelSmallMedium,
                { marginLeft: scale.pixelSizeHorizontal(10) },
              ]}
              text={"Personal information"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate("BizInfo")}
            style={styles.btn}
            activeOpacity={0.7}
          >
            <AntDesign
              name="shoppingcart"
              size={scale.fontPixel(20)}
              color="black"
            />
            <Text
              textStyle={[
                Fontscales.labelSmallMedium,
                { marginLeft: scale.pixelSizeHorizontal(10) },
              ]}
              text={"Business information"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigate("RootStack", {
                screen: "ActiveOrders",
              })
            }
            style={styles.btn}
            activeOpacity={0.7}
          >
            <MaterialCommunityIcons
              name="clipboard-clock-outline"
              size={scale.fontPixel(20)}
              color="black"
            />
            <Text
              textStyle={[
                Fontscales.labelSmallMedium,
                { marginLeft: scale.pixelSizeHorizontal(10) },
              ]}
              text={"Active orders"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigate("RootStack", {
                screen: "Sales",
              })
            }
            style={styles.btn}
            activeOpacity={0.7}
          >
            <Ionicons
              name="checkmark-done-circle-outline"
              size={scale.fontPixel(20)}
              color="black"
            />
            <Text
              textStyle={[
                Fontscales.labelSmallMedium,
                { marginLeft: scale.pixelSizeHorizontal(10) },
              ]}
              text={"Completed sales"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigate("RootStack", {
                screen: "Catalogue",
              })
            }
            style={styles.btn}
            activeOpacity={0.7}
          >
            <AntDesign name="staro" size={scale.fontPixel(20)} color="black" />
            <Text
              textStyle={[
                Fontscales.labelSmallMedium,
                { marginLeft: scale.pixelSizeHorizontal(10) },
              ]}
              text={"Catalogue"}
            />
          </TouchableOpacity>
        </View>

        <Text text={"General"} textStyle={[Fontscales.labelSmallMedium]} />

        <View style={styles.container}>
          <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
            <Ionicons
              name="globe-outline"
              size={scale.fontPixel(20)}
              color="black"
            />
            <Text
              textStyle={[
                Fontscales.labelSmallMedium,
                { marginLeft: scale.pixelSizeHorizontal(10) },
              ]}
              text={"Languages"}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
            <Ionicons
              name="help-circle-outline"
              size={scale.fontPixel(20)}
              color="black"
            />
            <Text
              textStyle={[
                Fontscales.labelSmallMedium,
                { marginLeft: scale.pixelSizeHorizontal(10) },
              ]}
              text={"Help and support"}
            />
          </TouchableOpacity>
        </View>

        <Text text={"Legal"} textStyle={[Fontscales.labelSmallMedium]} />

        <View style={styles.container}>
          <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
            <Ionicons
              name="md-book-outline"
              size={scale.fontPixel(20)}
              color="black"
            />
            <Text
              textStyle={[
                Fontscales.labelSmallMedium,
                { marginLeft: scale.pixelSizeHorizontal(10) },
              ]}
              text={"Privacy policy"}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
            <SimpleLineIcons
              name="notebook"
              size={scale.fontPixel(20)}
              color="black"
            />
            <Text
              textStyle={[
                Fontscales.labelSmallMedium,
                { marginLeft: scale.pixelSizeHorizontal(10) },
              ]}
              text={"Terms and conditions"}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
            <Ionicons
              name="md-book-outline"
              size={scale.fontPixel(20)}
              color="black"
            />
            <Text
              textStyle={[
                Fontscales.labelSmallMedium,
                { marginLeft: scale.pixelSizeHorizontal(10) },
              ]}
              text={"Close account"}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
            <SimpleLineIcons
              name="notebook"
              size={scale.fontPixel(20)}
              color="black"
            />
            <Text
              textStyle={[
                Fontscales.labelSmallMedium,
                { marginLeft: scale.pixelSizeHorizontal(10) },
              ]}
              text={"Log out"}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: scale.pixelSizeVertical(80),
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
