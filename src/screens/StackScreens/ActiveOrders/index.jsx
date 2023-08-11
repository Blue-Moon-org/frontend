import { View, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Fontscales, SharedStyles } from "../../../styles";
import { styles } from "./styles";
import { Image } from "expo-image";
import { Text } from "../../../components/common";
import { Ionicons } from "@expo/vector-icons";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";

export const ActiveOrders = () => {
  const activeOrderData = [
    {
      id: 1,
      title: "High Quality Caftan",
      brandName: "E-Ward Fits",
      arrival: "2 days",
      orderId: "#353R669",
      imageUrl:
        "https://img.freepik.com/free-photo/portrait-women-outdoors-african-attire-fashion_23-2150572691.jpg?size=626&ext=jpg&ga=GA1.2.70578014.1688424585&semt=sph",
    },
    {
      id: 2,
      title: "High Quality Caftan",
      brandName: "E-Ward Fits",
      arrival: "2 days",
      orderId: "#353R669",
      imageUrl:
        "https://img.freepik.com/free-photo/portrait-women-outdoors-african-attire-fashion_23-2150572691.jpg?size=626&ext=jpg&ga=GA1.2.70578014.1688424585&semt=sph",
    },
    {
      id: 3,
      title: "High Quality Caftan",
      brandName: "E-Ward Fits",
      arrival: "2 days",
      orderId: "#353R669",
      imageUrl:
        "https://img.freepik.com/free-photo/portrait-women-outdoors-african-attire-fashion_23-2150572691.jpg?size=626&ext=jpg&ga=GA1.2.70578014.1688424585&semt=sph",
    },
  ];

  const { navigate } = useNavigation();

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigate("OrderDetail", {
            orderId: item.orderId,
          })
        }
        style={styles.eachContainer}
      >
        <View style={styles.imageContainer}>
          <Image
            cachePolicy={"memory-disk"}
            source={{ uri: item.imageUrl }}
            contentFit="cover"
            style={styles.image}
          />
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.textContainer}>
            <View>
              <Text
                numberOfLines={1}
                ellipsizeMode={"tail"}
                textStyle={Fontscales.headingSmallMedium}
                text={item.title}
              />
              <Text
                numberOfLines={1}
                ellipsizeMode={"tail"}
                textStyle={{
                  fontFamily: "Outfit_400Regular",
                  fontSize: scale.fontPixel(10),
                }}
                text={item.brandName}
              />
            </View>
            <Text
              textStyle={Fontscales.labelSmallRegular}
              text={`Arrives in ${item.arrival}`}
            />
          </View>
          <View style={styles.iconTextContainer}>
            <Ionicons
              name="chevron-forward"
              size={scale.fontPixel(20)}
              color={colors.mainPrimary}
            />
            <Text
              numberOfLines={1}
              ellipsizeMode={"tail"}
              textStyle={[
                Fontscales.labelLargeRegular,
                {
                  color: colors.mainPrimary,
                },
              ]}
              text={item.orderId}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={SharedStyles.container}>
      <View
        style={{
          paddingBottom:
            Constants.statusBarHeight > 30
              ? scale.pixelSizeVertical(30)
              : scale.pixelSizeVertical(1),
        }}
      >
        <FlatList
          data={activeOrderData}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
        />
      </View>
    </View>
  );
};
