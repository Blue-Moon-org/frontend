import { Platform, ScrollView, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SharedStyles, Fontscales } from "../../../styles";
import { Image } from "expo-image";
import { Text } from "../../../components/common";
import { styles } from "./styles";
import { scale } from "../../../utils/scale";
import { baseURL } from "../../../utils/request";

export const OrderDetails = () => {
  const { setOptions } = useNavigation();

  const route = useRoute();

  const item = route.params.item;

  setOptions({
    title: `Order ${item.tracking_number}`,
  });

  let naira = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    notation: "compact",
    compactDisplay: "short",
    useGrouping: true,
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
            source={{
              uri: baseURL + item.products[0]?.product?.images[0]?.image,
            }}
          />
        </View>
        <View style={styles.section}>
          <Text
            textStyle={Fontscales.headingSmallBold}
            text={"Product Name :"}
          />
          <Text
            textStyle={Fontscales.paragraphMediumRegular}
            text={item.products[0]?.product?.title}
          />
        </View>
        <View style={styles.section}>
          <Text textStyle={Fontscales.headingSmallBold} text={"Order ID :"} />
          <Text
            textStyle={Fontscales.paragraphMediumRegular}
            text={item.tracking_number}
          />
        </View>
        <View style={styles.section}>
          <Text
            textStyle={Fontscales.headingSmallBold}
            text={"Designer's Brand :"}
          />
          <Text
            text={item.seller?.brand_name}
            textStyle={Fontscales.paragraphMediumRegular}
          />
        </View>
        <View style={styles.section}>
          <Text
            textStyle={Fontscales.headingSmallBold}
            text={"Designer's Name : "}
          />
          <Text
            textStyle={Fontscales.paragraphMediumRegular}
            text={item.seller?.fullname}
          />
        </View>
        <View style={styles.section}>
          <Text
            textStyle={Fontscales.headingSmallBold}
            text={"Buyer's Name :"}
          />
          <Text
            textStyle={Fontscales.paragraphMediumRegular}
            text={item.user.fullname}
          />
        </View>
        <View style={styles.section}>
          <Text textStyle={Fontscales.headingSmallBold} text={"Rating :"} />
          <Text
            textStyle={Fontscales.paragraphMediumRegular}
            text={item.rating ?? "Not Provided"}
          />
        </View>
        <View style={styles.section}>
          <Text
            textStyle={Fontscales.headingSmallBold}
            text={"Date Ordered :"}
          />
          <Text
            textStyle={Fontscales.paragraphMediumRegular}
            text={item.dateOrdered ?? "Not Provided"}
          />
        </View>
        <View style={styles.section}>
          <Text
            textStyle={Fontscales.headingSmallBold}
            text={"Date Delivered :"}
          />
          <Text
            textStyle={Fontscales.paragraphMediumRegular}
            text={item.dateArrived ?? "Not Provided"}
          />
        </View>
        <View style={styles.section}>
          <Text
            textStyle={Fontscales.headingSmallBold}
            text={"Product Price :"}
          />
          <Text
            textStyle={Fontscales.paragraphMediumRegular}
            text={naira.format(item.products[0]?.product.price)}
          />
        </View>
        <View style={styles.section}>
          <Text
            textStyle={Fontscales.headingSmallBold}
            text={"Delivery Price :"}
          />
          <Text
            textStyle={Fontscales.paragraphMediumRegular}
            text={item.deliveryFee ?? "Not Provided"}
          />
        </View>
        <View style={styles.section}>
          <Text
            textStyle={Fontscales.headingSmallBold}
            text={"Total Amount Paid : "}
          />
          <Text
            textStyle={Fontscales.paragraphMediumRegular}
            text={
              item.deliveryFee
                ? item.deliveryFee + item.products[0]?.product.price
                : item.products[0]?.product.price
            }
          />
        </View>
        <View style={styles.section}>
          <Text
            textStyle={Fontscales.headingSmallBold}
            text={"Product Description :"}
          />
          <Text text={item.products[0]?.product?.description} />
        </View>
      </ScrollView>
    </View>
  );
};
