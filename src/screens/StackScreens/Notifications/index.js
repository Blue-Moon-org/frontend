import { View, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Fontscales, SharedStyles } from "../../../styles";
import { Text } from "../../../components/common";
import { styles } from "./styles";
import { colors } from "../../../constants/colorpallette";
import { scale } from "../../../utils/scale";
import { useDispatch, useSelector } from "react-redux";
import { Lodaing } from "../../../components/primary";
import { notification } from "../../../Redux/actions/Notification";
import { useNavigation } from "@react-navigation/native";

export const Notification = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.notification);

  const { navigate } = useNavigation();

  useEffect(() => {
    let sub = true;
    if (sub) {
      dispatch(notification());
    }
  }, []);
  console.warn(state.data[0]?.detail?.products);

  const RenderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          item?.notification_type === "P"
            ? navigate("PostDetailNoti", { item })
            : item?.notification_type === "NO"
            ? navigate("NotiOrderDetail", {
                orderId: item?.detail?.tracking_number,
                item: item?.detail,
                productItem: item?.detail?.products,
              })
            : ""
        }
        style={[
          styles.innerContainer,
          {
            backgroundColor:
              item.type === "comment"
                ? "#F6D6AA"
                : item.type === "order"
                ? "#BEE5FA"
                : item.type === "like"
                ? "#F19319"
                : colors.grey3,
          },
        ]}
      >
        <Text text={item?.comments} textStyle={styles.body} />
        <Text text={item?.title} textStyle={styles.title} />
        <Text text={item?.created_time_ago} textStyle={styles.time} />
      </TouchableOpacity>
    );
  };

  // orderId: item.tracking_number,
  // item: params.item,
  // productItem: item,
  return (
    <>
      {state.loading ? <Lodaing /> : null}
      <View style={SharedStyles.container}>
        <FlatList
          data={state.data}
          renderItem={({ item, index }) => (
            <RenderItem item={item} index={index} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginVertical: scale.pixelSizeVertical(10),
            paddingBottom: scale.pixelSizeVertical(15),
          }}
          ListEmptyComponent={() =>
            !state.loading && (
              <View style={{ width: "100%" }}>
                <Text
                  text={"No new notifications "}
                  textStyle={[
                    Fontscales.headingSmallRegular,
                    {
                      alignItems: "center",
                    },
                  ]}
                />
              </View>
            )
          }
        />
      </View>
    </>
  );
};
