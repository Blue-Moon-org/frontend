import {
  TouchableOpacity,
  View,
  Alert,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  Button,
  KeyBoardAvoidingWrapper,
  Text,
  TextInput,
} from "../../../components/common";
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
import StarRating from "react-native-star-rating-widget";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { baseURL } from "../../../utils/request";
import { addComment } from "../../../Redux/actions/Post/AddComment";
import { useDispatch, useSelector } from "react-redux";
import { TrackOrders } from "../../../Redux/actions/Market/OrderTracking";
import { CheckOrder } from "../../../Redux/actions/Market/GetOrders";
import { Lodaing } from "../../../components/primary";
import { createChat } from "../../../Redux/actions/Chat/ChatCreate";

export const OrderDetail = () => {
  const { navigate, setOptions } = useNavigation();
  const dispatch = useDispatch();

  const { params } = useRoute();

  const [user, updateUser] = useState("");
  const [comment, setComment] = useState("");
  const state = useSelector((state) => state.trackOrder);
  const status = useSelector((state) => state.status);
  // console.warn(status);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("user");
      updateUser(JSON.parse(jsonValue));
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    let sub = true;
    if (sub) {
      getData();
      dispatch(CheckOrder(params.item.tracking_number, navigate));
    }

    return () => (sub = false);
  }, [params.item.tracking_number]);

  setOptions({
    title: `Order ${params.item.tracking_number}`,
    headerLeft: () => (
      <MaterialCommunityIcons
        onPress={() =>
          navigate("ActiveOrders", {
            item: params.item,
          })
        }
        style={{ marginLeft: scale.pixelSizeHorizontal(16) }}
        name="keyboard-backspace"
        size={scale.fontPixel(24)}
        color="black"
      />
    ),
  });

  const [rating, setRating] = useState(0);

  const _locationUpdate = (type) => {
    dispatch(TrackOrders(params?.item?.id, type, navigate));
  };

  const alert = (type) =>
    Alert.alert(
      "Tracking Order",
      "Are you sure the package has reached this location?",
      [
        {
          text: "No",
          onPress: () => {},
          style: "cancel",
        },
        { text: "Yes", onPress: () => _locationUpdate(type) },
      ]
    );

  let naira = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    notation: "compact",
    compactDisplay: "short",
    useGrouping: true,
  });

  const _commentHandler = () => {
    if (comment === "") {
      return;
    } else {
      dispatch(
        addComment(
          comment,
          params.item?.order?.order_products
            ?.map((each) => each?.product.id)
            .toString(),
          navigate
        )
      );
      Keyboard.dismiss();
    }
  };

  // console.warn(params.item.seller);

  const _createChatHandler = () => {
    dispatch(createChat(params.item.seller.id, navigate));
  };

  const createChatData = useSelector((state) => state.createChat);

  return (
    <>
      {createChatData.loading ? <Lodaing /> : null}
      <View style={[SharedStyles.container, styles.container]}>
        <KeyBoardAvoidingWrapper offset={scale.heightPixel(105)}>
          <>
            <View style={styles.topContainer}>
              <View style={styles.detailImageContainer}>
                <Image
                  style={styles.orderImage}
                  cachePolicy={"memory-disk"}
                  contentFit="cover"
                  source={{
                    uri: `${
                      baseURL + params.productItem?.product.images[0]?.image
                    }`,
                  }}
                />
              </View>
              <View style={styles.detailTextContainer}>
                <View>
                  <Text
                    textStyle={Fontscales.headingSmallMedium}
                    text={params?.productItem?.product.title}
                    numberOfLines={1}
                    ellipsizeMode={"tail"}
                  />
                  <Text
                    textStyle={{
                      fontFamily: "Outfit_400Regular",
                      fontSize: scale.fontPixel(10),
                    }}
                    text={params?.item?.seller?.brand_name}
                  />
                </View>
                <View style={styles.iconsContainer}>
                  <TouchableOpacity
                    style={styles.chatIconContainer}
                    activeOpacity={0.8}
                    disabled={params.item.seller.id === user.id ? true : false}
                    onPress={() => _createChatHandler()}
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
                    disabled={params.item.seller.id === user.id ? true : false}
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
                  disabled={
                    status.statuData?.order_status === "Pending" ||
                    status.statuData?.order_status === "Processing" ||
                    status.statuData?.order_status === "Dispatched" ||
                    status.statuData?.order_status === "Shipped" ||
                    status.statuData?.order_status === "Delivered" ||
                    state.data?.data?.order_status === "Pending" ||
                    state.data?.data?.order_status === "Processing" ||
                    state.data?.data?.order_status === "Dispatched" ||
                    state.data?.data?.order_status === "Shipped" ||
                    state.data?.data?.order_status === "Delivered" ||
                    user.account_type === "Buyer"
                      ? true
                      : false
                  }
                  onPress={() => alert("Pending")}
                  activeOpacity={0.8}
                  style={[
                    styles.topBottomContainer,
                    {
                      backgroundColor:
                        status.statuData?.order_status === "Pending" ||
                        status.statuData?.order_status === "Processing" ||
                        status.statuData?.order_status === "Dispatched" ||
                        status.statuData?.order_status === "Shipped" ||
                        status.statuData?.order_status === "Delivered" ||
                        state.data?.data?.order_status === "Pending" ||
                        state.data?.data?.order_status === "Processing" ||
                        state.data?.data?.order_status === "Dispatched" ||
                        state.data?.data?.order_status === "Shipped" ||
                        state.data?.data?.order_status === "Delivered"
                          ? colors.mainPrimary
                          : colors.grey2,
                    },
                  ]}
                >
                  {status.statusLoading || state.loading ? (
                    <ActivityIndicator
                      color={colors.blackText}
                      size={scale.fontPixel(19)}
                    />
                  ) : (
                    <MaterialCommunityIcons
                      name="cart-check"
                      size={scale.fontPixel(18)}
                      color="white"
                    />
                  )}
                </TouchableOpacity>
                <View
                  style={[
                    styles.line1,
                    {
                      backgroundColor:
                        status.statuData?.order_status === "Processing" ||
                        status.statuData?.order_status === "Dispatched" ||
                        status.statuData?.order_status === "Shipped" ||
                        status.statuData?.order_status === "Delivered" ||
                        state.data?.data?.order_status === "Processing" ||
                        state.data?.data?.order_status === "Dispatched" ||
                        state.data?.data?.order_status === "Shipped" ||
                        state.data?.data?.order_status === "Delivered"
                          ? colors.mainPrimary
                          : colors.grey2,
                    },
                  ]}
                />
                <TouchableOpacity
                  disabled={
                    status.statuData?.order_status === "Processing" ||
                    status.statuData?.order_status === "Dispatched" ||
                    status.statuData?.order_status === "Shipped" ||
                    status.statuData?.order_status === "Delivered" ||
                    state.data?.data?.order_status === "Processing" ||
                    state.data?.data?.order_status === "Dispatched" ||
                    state.data?.data?.order_status === "Shipped" ||
                    state.data?.data?.order_status === "Delivered" ||
                    user.account_type === "Buyer"
                      ? true
                      : false
                  }
                  activeOpacity={0.8}
                  onPress={() => alert("Processing")}
                  style={{
                    backgroundColor:
                      status.statuData?.order_status === "Processing" ||
                      status.statuData?.order_status === "Dispatched" ||
                      status.statuData?.order_status === "Shipped" ||
                      status.statuData?.order_status === "Delivered" ||
                      state.data?.data?.order_status === "Processing" ||
                      state.data?.data?.order_status === "Dispatched" ||
                      state.data?.data?.order_status === "Shipped" ||
                      state.data?.data?.order_status === "Delivered"
                        ? colors.mainPrimary
                        : colors.grey2,
                    height: 16,
                    width: 16,
                    borderRadius: 4,
                  }}
                />
                <View
                  style={[
                    styles.line1,
                    {
                      backgroundColor:
                        status.statuData?.order_status === "Dispatched" ||
                        status.statuData?.order_status === "Shipped" ||
                        status.statuData?.order_status === "Delivered" ||
                        state.data?.data?.order_status === "Dispatched" ||
                        state.data?.data?.order_status === "Shipped" ||
                        state.data?.data?.order_status === "Delivered"
                          ? colors.mainPrimary
                          : colors.grey2,
                    },
                  ]}
                />
                <TouchableOpacity
                  disabled={
                    status.statuData?.order_status === "Dispatched" ||
                    status.statuData?.order_status === "Shipped" ||
                    status.statuData?.order_status === "Delivered" ||
                    state.data?.data?.order_status === "Dispatched" ||
                    state.data?.data?.order_status === "Shipped" ||
                    state.data?.data?.order_status === "Delivered" ||
                    user.account_type === "Buyer"
                      ? true
                      : false
                  }
                  activeOpacity={0.8}
                  onPress={() => alert("Dispatched")}
                  style={{
                    backgroundColor:
                      status.statuData?.order_status === "Dispatched" ||
                      status.statuData?.order_status === "Shipped" ||
                      status.statuData?.order_status === "Delivered" ||
                      state.data?.data?.order_status === "Dispatched" ||
                      state.data?.data?.order_status === "Shipped" ||
                      state.data?.data?.order_status === "Delivered"
                        ? colors.mainPrimary
                        : colors.grey2,
                    height: 16,
                    width: 16,
                    borderRadius: 4,
                  }}
                />
                <View
                  style={[
                    styles.line1,
                    {
                      backgroundColor:
                        status.statuData?.order_status === "Shipped" ||
                        status.statuData?.order_status === "Delivered" ||
                        state.data?.data?.order_status === "Shipped" ||
                        state.data?.data?.order_status === "Delivered"
                          ? colors.mainPrimary
                          : colors.grey2,
                    },
                  ]}
                />
                <TouchableOpacity
                  disabled={
                    status.statuData?.order_status === "Shipped" ||
                    status.statuData?.order_status === "Delivered" ||
                    state.data?.data?.order_status === "Shipped" ||
                    state.data?.data?.order_status === "Delivered" ||
                    user.account_type === "Buyer"
                      ? true
                      : false
                  }
                  activeOpacity={0.8}
                  onPress={() => alert("Shipped")}
                  style={{
                    backgroundColor:
                      status.statuData?.order_status === "Shipped" ||
                      status.statuData?.order_status === "Delivered" ||
                      state.data?.data?.order_status === "Shipped" ||
                      state.data?.data?.order_status === "Delivered"
                        ? colors.mainPrimary
                        : colors.grey2,
                    height: 16,
                    width: 16,
                    borderRadius: 4,
                  }}
                />
                <View
                  style={[
                    styles.line1,
                    {
                      backgroundColor:
                        status.statuData?.order_status === "Delivered" ||
                        state?.data?.data?.order_status === "Delivered"
                          ? colors.mainPrimary
                          : colors.grey2,
                    },
                  ]}
                />
                <TouchableOpacity
                  disabled={
                    status.statuData?.order_status === "Delivered" ||
                    state?.data?.data?.order_status === "Delivered" ||
                    user.account_type === "Buyer"
                      ? true
                      : false
                  }
                  activeOpacity={0.8}
                  onPress={() => alert("Delivered")}
                  style={[
                    styles.topBottomContainer,
                    {
                      backgroundColor:
                        status.statuData?.order_status === "Delivered" ||
                        state?.data?.data?.order_status === "Delivered"
                          ? colors.mainPrimary
                          : colors.grey2,
                    },
                  ]}
                >
                  <AntDesign
                    name="home"
                    size={scale.fontPixel(18)}
                    color="white"
                  />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  width: "70%",
                  marginLeft: scale.pixelSizeHorizontal(7),
                }}
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
                  <Text
                    text={"Home"}
                    textStyle={[Fontscales.labelNormalRegular]}
                  />
                  <Text
                    text={"4517 Washington Ave. Manchester, Kentucky 39495"}
                    textStyle={styles.reportTex}
                  />
                </View>
              </View>
            </View>
            {user.account_type === "Buyer" && status.statuData.order_status ? (
              <View>
                <View style={styles.ratingContainer}>
                  <Text
                    text={"Rate the Service"}
                    textStyle={Fontscales.labelMediumBold}
                  />
                  <StarRating
                    style={{ marginTop: scale.pixelSizeVertical(15) }}
                    rating={rating}
                    maxStars={5}
                    starSize={scale.fontPixel(24)}
                    color={colors.mainPrimary}
                    emptyColor={colors.grey1}
                    enableHalfStar={true}
                    enableSwiping={true}
                    animationConfig={{
                      scale: scale.fontPixel(1),
                      duration: 200,
                      delay: 150,
                    }}
                    onChange={(newRating) => {
                      setRating(newRating);
                    }}
                  />
                </View>
                <TextInput
                  placeholder={"Leave a review"}
                  textInputStyle={styles.textInput}
                  value={comment}
                  onChangeText={(text) => {
                    setComment(text);
                  }}
                />
                <Button
                  title={"Submit"}
                  textStyle={Fontscales.labelSmallMedium}
                  containerStyle={styles.btnContainer}
                  onPress={() => _commentHandler()}
                />
              </View>
            ) : null}

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
                <Text
                  textStyle={Fontscales.labelMediumRegular}
                  text={"Order ID"}
                />
                <Text
                  textStyle={Fontscales.labelMediumRegular}
                  text={params?.item?.tracking_number ?? "N/A"}
                />
              </View>
              <View style={styles.eachDetailContainer}>
                <Text
                  textStyle={Fontscales.labelMediumRegular}
                  text={"Cloth ordered"}
                />
                <Text
                  textStyle={Fontscales.labelMediumRegular}
                  text={params?.productItem?.product?.title}
                />
              </View>
              <View style={styles.eachDetailContainer}>
                <Text
                  textStyle={Fontscales.labelMediumRegular}
                  text={"Designer’s name"}
                />
                <Text
                  textStyle={Fontscales.labelMediumRegular}
                  text={params?.productItem?.product?.owner}
                />
              </View>
              <View style={styles.eachDetailContainer}>
                <Text
                  textStyle={Fontscales.labelMediumRegular}
                  text={"Order amount"}
                />
                <Text
                  textStyle={Fontscales.labelMediumRegular}
                  text={naira.format(params?.productItem?.product?.price)}
                />
              </View>
            </View>
            <Text
              onPress={() => {}}
              textStyle={styles.reportText}
              text={"Report a problem"}
            />
          </>
        </KeyBoardAvoidingWrapper>
      </View>
    </>
  );
};
