import { TouchableOpacity, View, Alert } from "react-native";
import React, { useState } from "react";
import { Text } from "../../../components/common";
import { styles } from "./styles";
import { SharedStyles } from "../../../styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image } from "expo-image";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { scale } from "../../../utils/scale";
import { Fontscales } from "../../../styles";
import { colors } from "../../../constants/colorpallette";

export const OrderDetail = () => {
  const { navigate, setOptions } = useNavigation();

  const { params } = useRoute();

  setOptions({
    title: `Order ${params.orderId}`,
  });

  const [reach, setReach] = useState(1);

  const alert = () =>
    Alert.alert(
      "Tracking Order",
      "Are you sure the package has reached this location?",
      [
        {
          text: "No",
          onPress: () => {},
          style: "cancel",
        },
        { text: "Yes", onPress: () => setReach(reach + 1) },
      ]
    );

  return (
    <View style={SharedStyles.container}>
      <View style={styles.topContainer}>
        <View style={styles.detailImageContainer}>
          <Image
            style={styles.orderImage}
            cachePolicy={"memory-disk"}
            contentFit="cover"
            source={{
              uri: "https://img.freepik.com/free-photo/portrait-women-outdoors-african-attire-fashion_23-2150572691.jpg?size=626&ext=jpg&ga=GA1.2.70578014.1688424585&semt=sph",
            }}
          />
        </View>
        <View style={styles.detailTextContainer}>
          <View>
            <Text
              textStyle={Fontscales.headingSmallMedium}
              text={"High Quality Caftan"}
              numberOfLines={1}
              ellipsizeMode={"tail"}
            />
            <Text
              textStyle={{
                fontFamily: "Outfit_400Regular",
                fontSize: scale.fontPixel(10),
              }}
              text={"E-Ward Fits"}
            />
          </View>
          <View style={styles.iconsContainer}>
            <TouchableOpacity
              style={styles.chatIconContainer}
              activeOpacity={0.8}
            >
              <Ionicons
                name="chatbox-ellipses-outline"
                size={scale.fontPixel(18)}
                color={"white"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.callIconContainer}
              activeOpacity={0.8}
            >
              <Ionicons
                name="call-outline"
                size={scale.fontPixel(18)}
                color={"white"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.mainStepContainer}>
        <View style={styles.stepsContainer}>
          <TouchableOpacity
            disabled={reach >= 1 ? true : false}
            onPress={() => alert()}
            activeOpacity={0.8}
            style={[
              styles.topBottomContainer,
              {
                backgroundColor: reach >= 1 ? colors.mainPrimary : colors.grey2,
              },
            ]}
          >
            <MaterialCommunityIcons
              name="cart-check"
              size={scale.fontPixel(18)}
              color="white"
            />
          </TouchableOpacity>
          <View
            style={[
              styles.line1,
              {
                backgroundColor: reach > 1 ? colors.mainPrimary : colors.grey2,
              },
            ]}
          />
          <TouchableOpacity
            disabled={reach >= 2 ? true : false}
            activeOpacity={0.8}
            onPress={() => alert()}
            style={{
              backgroundColor: reach >= 2 ? colors.mainPrimary : colors.grey2,
              height: 16,
              width: 16,
              borderRadius: 4,
            }}
          />
          <View
            style={[
              styles.line1,
              {
                backgroundColor: reach > 2 ? colors.mainPrimary : colors.grey2,
              },
            ]}
          />
          <TouchableOpacity
            disabled={reach >= 3 ? true : false}
            activeOpacity={0.8}
            onPress={() => alert()}
            style={{
              backgroundColor: reach >= 3 ? colors.mainPrimary : colors.grey2,
              height: 16,
              width: 16,
              borderRadius: 4,
            }}
          />
          <View
            style={[
              styles.line1,
              {
                backgroundColor: reach > 3 ? colors.mainPrimary : colors.grey2,
              },
            ]}
          />
          <TouchableOpacity
            disabled={reach >= 4 ? true : false}
            activeOpacity={0.8}
            onPress={() => alert()}
            style={{
              backgroundColor: reach >= 4 ? colors.mainPrimary : colors.grey2,
              height: 16,
              width: 16,
              borderRadius: 4,
            }}
          />
          <View
            style={[
              styles.line1,
              {
                backgroundColor: reach > 4 ? colors.mainPrimary : colors.grey2,
              },
            ]}
          />
          <TouchableOpacity
            disabled={reach >= 5 ? true : false}
            activeOpacity={0.8}
            onPress={() => alert()}
            style={[
              styles.topBottomContainer,
              {
                backgroundColor:
                  reach === 5 ? colors.mainPrimary : colors.grey2,
              },
            ]}
          >
            <AntDesign name="home" size={scale.fontPixel(18)} color="white" />
          </TouchableOpacity>
        </View>

        <View
          style={{ width: "70%", marginLeft: scale.pixelSizeHorizontal(7) }}
        >
          <View style={styles.topBottomTextContainer}>
            <Text
              text={"Order received"}
              textStyle={[Fontscales.labelNormalRegular]}
            />
          </View>
          <View
            style={[
              styles.bottomTextContainer,
              {
                marginTop: scale.pixelSizeVertical(28),
              },
            ]}
          >
            <Text
              text={"In production"}
              textStyle={[Fontscales.labelNormalRegular]}
            />
            <Text
              text={"Contact the designer for details about production"}
              textStyle={styles.reportTex}
            />
          </View>
          <View
            style={[
              styles.bottomTextContainer,
              {
                marginTop: scale.pixelSizeVertical(22),
              },
            ]}
          >
            <Text
              text={"Order picked up"}
              textStyle={[Fontscales.labelNormalRegular]}
            />
            <Text
              text={"Contact the designer for driver’s details"}
              textStyle={styles.reportTex}
            />
          </View>
          <View
            style={[
              styles.bottomTextContainer,
              {
                marginTop: scale.pixelSizeVertical(20),
              },
            ]}
          >
            <Text
              text={"Order is on delivery"}
              textStyle={[Fontscales.labelNormalRegular]}
            />
            <Text
              text={"Your order is not yet on delivery"}
              textStyle={styles.reportTex}
            />
          </View>
          <View style={styles.bottomTextContainer}>
            <Text text={"Home"} textStyle={[Fontscales.labelNormalRegular]} />
            <Text
              text={"4517 Washington Ave. Manchester, Kentucky 39495"}
              textStyle={styles.reportTex}
            />
          </View>
        </View>
      </View>
      <Text
        textStyle={[
          Fontscales.labelSmallMedium,
          {
            marginTop: scale.pixelSizeVertical(33),
          },
        ]}
        text={"Order details"}
      />
      <View style={styles.orderDetailContainer}>
        <View style={styles.eachDetailContainer}>
          <Text textStyle={Fontscales.labelMediumRegular} text={"Order ID"} />
          <Text textStyle={Fontscales.labelMediumRegular} text={"#353R669"} />
        </View>
        <View style={styles.eachDetailContainer}>
          <Text
            textStyle={Fontscales.labelMediumRegular}
            text={"Cloth ordered"}
          />
          <Text
            textStyle={Fontscales.labelMediumRegular}
            text={"1x Caftan fit"}
          />
        </View>
        <View style={styles.eachDetailContainer}>
          <Text
            textStyle={Fontscales.labelMediumRegular}
            text={"Designer’s name"}
          />
          <Text
            textStyle={Fontscales.labelMediumRegular}
            text={"E - Ward Fits"}
          />
        </View>
        <View style={styles.eachDetailContainer}>
          <Text
            textStyle={Fontscales.labelMediumRegular}
            text={"Order amount"}
          />
          <Text
            textStyle={Fontscales.labelMediumRegular}
            text={"#40, 000.00"}
          />
        </View>
      </View>
      <Text
        onPress={() => {}}
        textStyle={styles.reportText}
        text={"Report a problem"}
      />
    </View>
  );
};