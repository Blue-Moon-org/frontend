import { FlatList, View } from "react-native";
import React, { useEffect } from "react";
import { Button, Text } from "../../../components/common";
import { Fontscales, SharedStyles } from "../../../styles";
import { styles } from "./styles";
import { scale } from "../../../utils/scale";
import { Image } from "expo-image";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../../constants/colorpallette";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { CartView } from "../../../Redux/actions/Market/CartView";
import { Lodaing } from "../../../components/primary";
import { AddToCart } from "../../../Redux/actions/Market/AddToCart";
import { baseURL } from "../../../utils/request";

export const Cart = () => {
  const { navigate } = useNavigation();

  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cartView);

  // useEffect(() => {
  //   let sub = true;
  //   if (sub) {
  //     dispatch(CartView(navigate));
  //   }

  //   return () => (sub = false);
  // }, []);

  let sum = 0;
  let deliveryFee = 0;

  cartData?.data?.forEach((value) => {
    sum += value?.product?.price;
  });

  let naira = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    notation: "compact",
    compactDisplay: "short",
    useGrouping: true,
  });

  const _removeHandler = (item) => {
    dispatch(AddToCart(item?.product.slug, navigate));
    dispatch(CartView(navigate));
  };

  const RenderItem = ({ item, index }) => {
    return (
      <View style={styles.cartContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: `${baseURL + item?.product?.images[0]?.image}` }}
            cachePolicy={"memory-disk"}
            contentFit="cover"
          />
        </View>

        <View style={styles.priceSide}>
          <Text
            text={item?.product.title}
            textStyle={Fontscales.headingSmallMedium}
            numberOfLines={1}
            ellipsizeMode={"tail"}
          />
          <Text text={item?.product.owner} textStyle={styles.text} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: scale.pixelSizeVertical(8),
              alignItems: "baseline",
            }}
          >
            <Text
              text={item?.quantity}
              textStyle={Fontscales.labelSmallMedium}
            />
            <Text
              text={naira.format(item?.product?.price)}
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
          onPress={() => _removeHandler(item)}
        />
      </View>
    );
  };

  return (
    <>
      {cartData.loading ? <Lodaing /> : null}
      <View style={SharedStyles.container}>
        <View style={{ marginBottom: scale.heightPixel(200) }}>
          <FlatList
            contentContainerStyle={{
              marginTop: scale.pixelSizeVertical(10),
            }}
            data={cartData.data}
            renderItem={({ item, index, separators }) => (
              <RenderItem item={item} index={index} />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View style={styles.totalExpense}>
          <View style={styles.expenseContainer}>
            <View style={styles.expense}>
              <Text
                text={"Sub total"}
                textStyle={Fontscales.labelSmallRegular}
              />
              <Text
                text={naira.format(sum)}
                textStyle={Fontscales.labelSmallRegular}
              />
            </View>
            <View style={styles.expense}>
              <Text
                text={"Delivery fee"}
                textStyle={Fontscales.labelSmallRegular}
              />
              <Text
                text={naira.format(deliveryFee)}
                textStyle={Fontscales.labelSmallRegular}
              />
            </View>
          </View>
          <View style={styles.totalContainer}>
            <Text text={"Total"} textStyle={Fontscales.labelMediumBold} />
            <Text
              text={naira.format(sum + deliveryFee)}
              textStyle={Fontscales.labelMediumBold}
            />
          </View>
          <Button
            onPress={() => navigate("Checkout", { sum, deliveryFee })}
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
    </>
  );
};
