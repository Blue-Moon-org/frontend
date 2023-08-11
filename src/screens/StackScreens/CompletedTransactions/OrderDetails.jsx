import { Platform, ScrollView, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SharedStyles, Fontscales } from "../../../styles";
import { Image } from "expo-image";
import { Text } from "../../../components/common";
import { styles } from "./styles";
import { scale } from "../../../utils/scale";

export const OrderDetails = () => {
  const { setOptions } = useNavigation();

  const route = useRoute();

  const item = route.params.item;

  setOptions({
    title: `Order ${item.orderId}`,
  });

  return (
    <View
      style={[
        SharedStyles.container,
        {
          paddingBottom:
            Platform.OS === "ios"
              ? scale.pixelSizeVertical(30)
              : scale.pixelSizeVertical(10),
        },
      ]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.detailImageContainer}>
          <Image
            cachePolicy={"memory-disk"}
            contentFit="cover"
            style={styles.detailImage}
            source={{ uri: item.productImage }}
          />
        </View>
        <View style={styles.section}>
          <Text
            textStyle={Fontscales.headingSmallBold}
            text={"Product Name :"}
          />
          <Text
            textStyle={Fontscales.paragraphMediumRegular}
            text={item.productName}
          />
        </View>
        <View style={styles.section}>
          <Text textStyle={Fontscales.headingSmallBold} text={"Order ID :"} />
          <Text
            textStyle={Fontscales.paragraphMediumRegular}
            text={item.orderId}
          />
        </View>
        <View style={styles.section}>
          <Text
            textStyle={Fontscales.headingSmallBold}
            text={"Designer's Brand :"}
          />
          <Text
            text={item.designer}
            textStyle={Fontscales.paragraphMediumRegular}
          />
        </View>
        <View style={styles.section}>
          <Text
            textStyle={Fontscales.headingSmallBold}
            text={"Designer's Name :"}
          />
          <Text
            textStyle={Fontscales.paragraphMediumRegular}
            text={item.designerName}
          />
        </View>
        <View style={styles.section}>
          <Text
            textStyle={Fontscales.headingSmallBold}
            text={"Buyer's Name :"}
          />
          <Text
            textStyle={Fontscales.paragraphMediumRegular}
            text={item.buyerName}
          />
        </View>
        <View style={styles.section}>
          <Text textStyle={Fontscales.headingSmallBold} text={"Rating :"} />
          <Text
            textStyle={Fontscales.paragraphMediumRegular}
            text={item.rating}
          />
        </View>
        <View style={styles.section}>
          <Text
            textStyle={Fontscales.headingSmallBold}
            text={"Date Ordered :"}
          />
          <Text
            textStyle={Fontscales.paragraphMediumRegular}
            text={item.dateOrdered}
          />
        </View>
        <View style={styles.section}>
          <Text
            textStyle={Fontscales.headingSmallBold}
            text={"Date Delivered :"}
          />
          <Text
            textStyle={Fontscales.paragraphMediumRegular}
            text={item.dateArrived}
          />
        </View>
        <View style={styles.section}>
          <Text
            textStyle={Fontscales.headingSmallBold}
            text={"Product Price :"}
          />
          <Text
            textStyle={Fontscales.paragraphMediumRegular}
            text={item.productPrice}
          />
        </View>
        <View style={styles.section}>
          <Text
            textStyle={Fontscales.headingSmallBold}
            text={"Delivery Price :"}
          />
          <Text text={item.deliveryFee} />
        </View>
        <View style={styles.section}>
          <Text
            textStyle={Fontscales.headingSmallBold}
            text={"Total Amount Paid :"}
          />
          <Text text={item.totalAmountPaid} />
        </View>
        <View style={styles.section}>
          <Text
            textStyle={Fontscales.headingSmallBold}
            text={"Product Description :"}
          />
          <Text text={item.productDescription} />
        </View>
      </ScrollView>
    </View>
  );
};
