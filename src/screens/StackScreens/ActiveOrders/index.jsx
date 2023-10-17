import { View, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Fontscales, SharedStyles } from "../../../styles";
import { styles } from "./styles";
import { Image } from "expo-image";
import { Text } from "../../../components/common";
import { Ionicons } from "@expo/vector-icons";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { GetOrders } from "../../../Redux/actions/Market/GetOrders";
import { Lodaing } from "../../../components/primary";
import { baseURL } from "../../../utils/request";

export const ActiveOrders = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.activeOrder);

  const { navigate, addListener } = useNavigation();

  useEffect(() => {
    addListener("focus", () => {
      dispatch(GetOrders(navigate));
    });
    // let sub = true;
    // if (sub) {
    // }

    // return () => (sub = false);
  }, []);
  // console.warn(state?.data?.map((each) => each.order.order_products));

  // const RenderItem = ({ item, index }) => {
  //   console.warn(item.map((e) => e.product.id));
  //   return (
  //     <TouchableOpacity
  //       activeOpacity={0.8}
  //       onPress={() =>
  //         navigate("OrderDetail", {
  //           orderId: item.tracking_number,
  //           item: item,
  //         })
  //       }
  //       style={styles.eachContainer}
  //     >
  //       <View style={styles.imageContainer}>
  //         <Image
  //           cachePolicy={"memory-disk"}
  //           source={{
  //             uri: `${
  //               baseURL + item.map((each) => each.product?.images[0]?.image)
  //             }`,
  //           }}
  //           contentFit="cover"
  //           style={styles.image}
  //         />
  //       </View>
  //       <View style={styles.innerContainer}>
  //         <View style={styles.textContainer}>
  //           <View>
  //             <Text
  //               numberOfLines={1}
  //               ellipsizeMode={"tail"}
  //               textStyle={Fontscales.headingSmallMedium}
  //               text={item?.product?.title}
  //             />
  //             <Text
  //               numberOfLines={1}
  //               ellipsizeMode={"tail"}
  //               textStyle={{
  //                 fontFamily: "Outfit_400Regular",
  //                 fontSize: scale.fontPixel(10),
  //               }}
  //               text={item?.product?.owner}
  //             />
  //           </View>
  //           <Text
  //             textStyle={Fontscales.labelSmallRegular}
  //             text={`Quantity : ${item?.order?.order_products?.map(
  //               (each) => each?.quantity
  //             )}`}
  //           />
  //         </View>
  //         <View style={styles.iconTextContainer}>
  //           <Ionicons
  //             name="chevron-forward"
  //             size={scale.fontPixel(20)}
  //             color={colors.mainPrimary}
  //           />
  //           <Text
  //             numberOfLines={1}
  //             ellipsizeMode={"tail"}
  //             textStyle={[
  //               Fontscales.labelLargeRegular,
  //               {
  //                 color: colors.mainPrimary,
  //               },
  //             ]}
  //             text={item?.tracking_number}
  //           />
  //         </View>
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };
  return (
    <>
      {state.loading ? <Lodaing /> : null}
      <View style={SharedStyles.container}>
        <View
          style={{
            paddingBottom:
              Constants.statusBarHeight > 30
                ? scale.pixelSizeVertical(30)
                : scale.pixelSizeVertical(1),
          }}
        >
          {state.data?.response?.data?.data?.order_items?.map((each) =>
            each.order.order_products.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.8}
                  onPress={() =>
                    navigate("OrderDetail", {
                      orderId: item.final_price,
                      item: item,
                      data: state.data?.response.data?.data.order_items,
                    })
                  }
                  style={styles.eachContainer}
                >
                  <View style={styles.imageContainer}>
                    <Image
                      cachePolicy={"memory-disk"}
                      source={{
                        uri: `${baseURL + item.product?.images[0]?.image}`,
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
                          text={item?.product?.title}
                        />
                        <Text
                          numberOfLines={1}
                          ellipsizeMode={"tail"}
                          textStyle={{
                            fontFamily: "Outfit_400Regular",
                            fontSize: scale.fontPixel(10),
                          }}
                          text={item?.product?.owner}
                        />
                      </View>
                      <Text
                        textStyle={Fontscales.labelSmallRegular}
                        text={`Quantity : ${item?.quantity}`}
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
                        text={item?.tracking_number}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })
          )}
          {/* {state.data?.response?.data?.data?.order_items?.map((each) =>
            each.order.order_products.map((e) => e)
          )} */}
        </View>
      </View>
    </>
  );
};
