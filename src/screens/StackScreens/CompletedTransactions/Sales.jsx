import { FlatList, View, TouchableOpacity, Platform } from "react-native";
import React, { useEffect } from "react";
import { styles } from "./styles";
import { SharedStyles, Fontscales } from "../../../styles";
import { Text } from "../../../components/common";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { GetCompletedOrders } from "../../../Redux/actions/Market/Completed";
import { baseURL } from "../../../utils/request";
import { Lodaing } from "../../../components/primary";

export const Sales = () => {
  const { navigate } = useNavigation();

  const state = useSelector((state) => state.completedOrder);

  const dispatch = useDispatch();

  useEffect(() => {
    let sub = true;
    if (sub) {
      dispatch(GetCompletedOrders());
    }
  }, []);

  const RenderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigate("SaleDetail", {
            item: item,
          });
        }}
        style={styles.eachContainer}
      >
        <View style={styles.imageContainer}>
          <Image
            cachePolicy={"memory-disk"}
            source={{
              uri: `${baseURL + item.products[0]?.product?.images[0]?.image}`,
            }}
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
                text={item.products[0].product.title}
              />
              <Text
                numberOfLines={1}
                ellipsizeMode={"tail"}
                textStyle={{
                  fontFamily: "Outfit_400Regular",
                  fontSize: scale.fontPixel(10),
                }}
                text={item?.seller?.brand_name}
              />
            </View>
            <Text
              numberOfLines={2}
              ellipsizeMode={"tail"}
              textStyle={[
                Fontscales.labelSmallRegular,
                {
                  width: "100%",
                },
              ]}
              text={`Arrived on \n ${"Not Provided"}`}
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
                Fontscales.labelSmallRegular,
                {
                  color: colors.mainPrimary,
                  width: "100%",
                },
              ]}
              text={item.tracking_number}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      {state.loading ? <Lodaing /> : null}
      <View
        style={[
          SharedStyles.container,
          {
            paddingBottom:
              Platform.OS === "ios"
                ? scale.pixelSizeVertical(30)
                : scale.pixelSizeVertical(1),
          },
        ]}
      >
        <FlatList
          data={state.data}
          renderItem={({ item, index }) => (
            <RenderItem item={item} index={index} />
          )}
          contentContainerStyle={{}}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
};
