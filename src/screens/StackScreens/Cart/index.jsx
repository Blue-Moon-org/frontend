import { FlatList, View } from "react-native";
import React from "react";
import { Button, Text } from "../../../components/common";
import { Fontscales, SharedStyles } from "../../../styles";
import { styles } from "./styles";
import { scale } from "../../../utils/scale";
import { Image } from "expo-image";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../../constants/colorpallette";
import { useNavigation } from "@react-navigation/native";


const data = [
  {
    id: 1,
    dressName: "High Quality Caftan",
    brandName: "E-Ward Fits",
    length: "5 yards",
    price: "40000",
    imageUrl:
      "https://img.freepik.com/premium-photo/perfect-perfect-3d-beautiful-feminine-blouse_849761-14415.jpg?size=626&ext=jpg&ga=GA1.2.70578014.1688424585&semt=sph",
  },
  {
    id: 2,
    dressName: "High Quality Caftan",
    brandName: "E-Ward Fits",
    length: "2 pcs",
    price: "17625",
    imageUrl:
      "https://img.freepik.com/premium-photo/perfect-perfect-3d-beautiful-feminine-blouse_849761-14415.jpg?size=626&ext=jpg&ga=GA1.2.70578014.1688424585&semt=sph",
  },
];

export const Cart = () => {
  let naira = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    notation: "compact",
    compactDisplay: "short",
    useGrouping: true,
  });

  const { navigate } = useNavigation();

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.cartContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: item.imageUrl }}
            cachePolicy={"memory-disk"}
            contentFit="cover"
          />
        </View>

        <View style={styles.priceSide}>
          <Text
            text={item.dressName}
            textStyle={Fontscales.headingSmallMedium}
            numberOfLines={1}
            ellipsizeMode={"tail"}
          />
          <Text text={item.brandName} textStyle={styles.text} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: scale.pixelSizeVertical(8),
              alignItems: "baseline",
            }}
          >
            <Text text={item.length} textStyle={Fontscales.labelSmallMedium} />
            <Text
              text={naira.format(item.price)}
              textStyle={[
                Fontscales.labelLargeRegular,
                {
                  color: colors.mainPrimary,
                },
              ]}
            />
          </View>
        </View>

        <Feather
          name="x"
          size={scale.fontPixel(20)}
          color={colors.mainPrimary}
          style={styles.x}
        />
      </View>
    );
  };

  return (
    <View style={SharedStyles.container}>
      <View style={{ marginBottom: scale.heightPixel(200) }}>
        <FlatList
          contentContainerStyle={{
            marginTop: scale.pixelSizeVertical(10),
          }}
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View style={styles.totalExpense}>
        <View style={styles.expenseContainer}>
          <View style={styles.expense}>
            <Text text={"Sub total"} textStyle={Fontscales.labelSmallRegular} />
            <Text
              text={naira.format(57625)}
              textStyle={Fontscales.labelSmallRegular}
            />
          </View>
          <View style={styles.expense}>
            <Text
              text={"Delivery fee"}
              textStyle={Fontscales.labelSmallRegular}
            />
            <Text
              text={naira.format(5000)}
              textStyle={Fontscales.labelSmallRegular}
            />
          </View>
        </View>
        <View style={styles.totalContainer}>
          <Text text={"Total"} textStyle={Fontscales.labelMediumBold} />
          <Text
            text={naira.format(62625)}
            textStyle={Fontscales.labelMediumBold}
          />
        </View>
        <Button
          // onPress={() => navigate("Checkout")}
          containerStyle={styles.btnContainer}
          textStyle={[
            Fontscales.labelSmallRegular,
            {
              color: "white",
            },
          ]}
          title={"Checkout"}
        />
      </View>
    </View>
  );
};
