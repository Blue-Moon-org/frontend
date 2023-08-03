import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfileHeader } from "../../../components/primary";
import { styles } from "./styles";
import { Fontscales, SharedStyles } from "../../../styles";
import { Text } from "../../../components/common";
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { scale } from "../../../utils/scale";
import { ScrollView } from "react-native";

export const BuyerProfile = () => {
  return (
    <SafeAreaView style={[SharedStyles.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileHeader buyer={true} />
        <Text text={"Profile"} textStyle={[Fontscales.labelSmallMedium]} />

        <View style={styles.container}>
          <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
            <AntDesign name="user" size={scale.fontPixel(20)} color="black" />
            <Text
              textStyle={[
                Fontscales.labelSmallMedium,
                { marginLeft: scale.pixelSizeHorizontal(10) },
              ]}
              text={"Personal information"}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
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
              text={"Cart"}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
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

          <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
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
              text={"Completed purchases"}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
            <AntDesign name="staro" size={scale.fontPixel(20)} color="black" />
            <Text
              textStyle={[
                Fontscales.labelSmallMedium,
                { marginLeft: scale.pixelSizeHorizontal(10) },
              ]}
              text={"Favorites"}
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
