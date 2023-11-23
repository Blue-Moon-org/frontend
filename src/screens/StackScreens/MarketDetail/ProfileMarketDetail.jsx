import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { Fontscales, SharedStyles } from "../../../styles";
import { Image } from "expo-image";
import { KeyBoardAvoidingWrapper, Text } from "../../../components/common";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { scale } from "../../../utils/scale";
import { dataFits } from "../../BottomTabScreens/Home/data";
import { useNavigation, useRoute } from "@react-navigation/native";
import { baseURL } from "../../../utils/request";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../../Redux/actions/Market/AddToCart";
import { colors } from "../../../constants/colorpallette";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CarouselImageDisplay } from "../../../components/primary";

export const ProfileMarketDetail = () => {
  const route = useRoute();
  const { navigate, setOptions, goBack } = useNavigation();
  const dispatch = useDispatch();

  setOptions({
    headerShown: true,
    title: "Post",
    headerTitleAlign: "left",
    headerTitleAllowFontScaling: true,
    headerTitleStyle: Fontscales.paragraphLargeMedium,
    headerLeft: () => (
      <MaterialCommunityIcons
        onPress={() => goBack()}
        style={{ marginLeft: scale.pixelSizeHorizontal(16) }}
        name="keyboard-backspace"
        size={scale.fontPixel(24)}
        color="black"
      />
    ),
  });

  const _cartHandler = () => {
    dispatch(AddToCart(route.params.item.slug, navigate));
  };

  const { loading, error, data } = useSelector((state) => state.cartView);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImagePreview, setShowImagePreview] = useState(false);

  const imagePreviewHandler = (number) => {
    setCurrentIndex(number);
    setShowImagePreview(true);
  };

  return (
    <>
      {showImagePreview && (
        <CarouselImageDisplay
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          item={route.params?.item?.images}
          setShowImagePreview={setShowImagePreview}
          showImagePreview={showImagePreview}
        />
      )}
      <View style={SharedStyles.container}>
        <KeyBoardAvoidingWrapper>
          <View>
            <View style={styles.detailContainer}>
              <View style={styles.imagesContainer}>
                <View style={styles.mainImageContainer}>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => imagePreviewHandler(0)}
                  >
                    <Image
                      cachePolicy={"memory-disk"}
                      source={{
                        uri: `${
                          baseURL + route.params?.item?.images[0]?.image
                        }`,
                      }}
                      style={styles.mainImage}
                      contentFit="cover"
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.sideImageContainer}>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => imagePreviewHandler(1)}
                    style={styles.sideImageCont}
                  >
                    <Image
                      source={{
                        uri: `${
                          baseURL + route.params?.item?.images[1]?.image
                        }`,
                      }}
                      style={styles.sideImage}
                      contentFit="cover"
                      cachePolicy={"memory-disk"}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => imagePreviewHandler(2)}
                    style={styles.sideImageCont}
                  >
                    <Image
                      source={{
                        uri: `${
                          baseURL + route.params?.item?.images[2]?.image
                        }`,
                      }}
                      style={styles.sideImage}
                      contentFit="cover"
                      cachePolicy={"memory-disk"}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => imagePreviewHandler(3)}
                    style={styles.sideImageCont}
                  >
                    <Image
                      source={{
                        uri: `${
                          baseURL + route.params?.item?.images[3]?.image
                        }`,
                      }}
                      style={styles.sideImage}
                      contentFit="cover"
                      cachePolicy={"memory-disk"}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.profilecontainer}>
                <View style={styles.imageText}>
                  <View style={styles.userProfileContainer}>
                    <Image
                      source={{
                        uri: `${baseURL + route.params.item.user.brand_image}`,
                      }}
                      style={styles.userProfile}
                      contentFit="cover"
                      cachePolicy={"memory-disk"}
                    />
                  </View>
                  <View style={styles.userdetailContainer}>
                    <Text
                      text={
                        route.params.item?.user?.brand_name ?? "Not provided"
                      }
                      numberOfLines={1}
                      ellipsizeMode={"tail"}
                      textStyle={[
                        styles.brandName,
                        Fontscales.headingSmallBold,
                      ]}
                    />
                    <Text
                      text={route.params.item.user.fullname ?? "Not Provided"}
                      numberOfLines={1}
                      ellipsizeMode={"tail"}
                      textStyle={[
                        styles.userName,
                        Fontscales.paragraphSmallRegular,
                      ]}
                    />
                  </View>
                </View>

                {loading === false ? (
                  <TouchableOpacity
                    onPress={() => _cartHandler()}
                    activeOpacity={1}
                    style={styles.reactionIcons}
                  >
                    <Ionicons
                      name={
                        data
                          ? data.find(
                              (e) => e.product.id === route.params.item.id
                            )
                            ? "cart"
                            : "cart-outline"
                          : null
                      }
                      color={"white"}
                      size={scale.fontPixel(20)}
                    />
                    <Text
                      text={
                        data
                          ? data.find(
                              (e) => e.product.id === route.params.item.id
                            )
                            ? "In cart"
                            : "Add to cart"
                          : null
                      }
                      textStyle={styles.cartText}
                      numberOfLines={1}
                      ellipsizeMode={"tail"}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    disabled={true}
                    activeOpacity={1}
                    style={styles.reactionIcons}
                  >
                    <ActivityIndicator
                      color={"white"}
                      size={scale.fontPixel(20)}
                    />
                    <Text
                      text={!data && "Checking"}
                      textStyle={styles.cartText}
                      numberOfLines={1}
                      ellipsizeMode={"tail"}
                    />
                  </TouchableOpacity>
                )}
              </View>
              <View style={styles.aboutContainer}>
                <Text
                  text={route.params?.item.title}
                  textStyle={[Fontscales.headingSmallBold]}
                  ellipsizeMode={"tail"}
                  numberOfLines={1}
                />
                <Text
                  text={route.params?.item.description}
                  textStyle={Fontscales.paragraphSmallRegular}
                  numberOfLines={2}
                  ellipsizeMode={"tail"}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigate("Reviews")}
                style={{
                  alignSelf: "flex-end",
                  flexDirection: "row",
                  marginTop: scale.pixelSizeVertical(7),
                  alignItems: "center",
                }}
              >
                <Text
                  textStyle={[
                    Fontscales.paragraphSmallRegular,
                    {
                      color: colors.mainPrimary,
                      fontSize: scale.fontPixel(11),
                      marginRight: scale.pixelSizeHorizontal(5),
                    },
                  ]}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                  text={"See product reviews from buyers"}
                />
                <AntDesign
                  name="arrowright"
                  size={scale.fontPixel(13)}
                  color={colors.mainPrimary}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.seeMoreContainer}>
              <Text
                text={"See more like this"}
                textStyle={Fontscales.paragraphMediumRegular}
              />
              <View style={styles.outter}>
                {dataFits.map((item, index) => {
                  return (
                    <View key={index} style={styles.itemContainer}>
                      <View style={styles.innerContainer}>
                        <Image
                          source={{ uri: item.imageUrl }}
                          contentFit="cover"
                          cachePolicy={"memory-disk"}
                          style={styles.image}
                        />
                        <AntDesign
                          name={item.like ? "heart" : "hearto"}
                          size={scale.fontPixel(18)}
                          color={"white"}
                          style={styles.likeIcon}
                        />
                      </View>
                      <View style={styles.bottomContainer}>
                        <Text
                          textStyle={styles.text}
                          ellipsizeMode={"tail"}
                          numberOfLines={1}
                          text={item.name}
                        />
                        <Text
                          text={item.subText}
                          textStyle={styles.subText}
                          ellipsizeMode={"tail"}
                          numberOfLines={2}
                        />
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </KeyBoardAvoidingWrapper>
      </View>
    </>
  );
};
