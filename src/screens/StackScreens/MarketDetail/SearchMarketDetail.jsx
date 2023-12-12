import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
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
import { CarouselImageDisplay, LoadMore } from "../../../components/primary";
import { seeMoreMarket } from "../../../Redux/actions/Post/SeeMoreMarket";
import { SeeMore } from "../PostDetail/SeeMore";

export const SearchMarketDetail = () => {
  const route = useRoute();
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

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

  useEffect(() => {
    let sub = true;
    if (sub) {
      dispatch(seeMoreMarket(route.params?.item?.id));
    }
    return () => (sub = false);
  }, [route.params?.item?.id]);

  const state = useSelector((state) => state.seeMoreMarket);

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
                <TouchableOpacity
                  onPress={() =>
                    navigate("DesignerProfile", {
                      designerDetail: route.params.item.owner,
                    })
                  }
                  activeOpacity={0.9}
                  style={styles.imageText}
                >
                  <View style={styles.userProfileContainer}>
                    <Image
                      source={{
                        uri: `${baseURL + route.params.item?.owner.brand_image}`,
                      }}
                      style={styles.userProfile}
                      contentFit="cover"
                      cachePolicy={"memory-disk"}
                    />
                  </View>
                  <View style={styles.userdetailContainer}>
                    <Text
                      text={
                        route.params.item?.owner?.brand_name ?? "Not provided"
                      }
                      numberOfLines={1}
                      ellipsizeMode={"tail"}
                      textStyle={[
                        styles.brandName,
                        Fontscales.headingSmallBold,
                      ]}
                    />
                    <Text
                      text={route.params.item?.owner.fullname ?? "Not Provided"}
                      numberOfLines={1}
                      ellipsizeMode={"tail"}
                      textStyle={[
                        styles.userName,
                        Fontscales.paragraphSmallRegular,
                      ]}
                    />
                  </View>
                </TouchableOpacity>

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
                          : "cart-outline"
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
                          : "Add to cart"
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
                text={
                  state.data?.length < 1
                    ? "No Recommendations for this post"
                    : "See more like this"
                }
                textStyle={Fontscales.paragraphMediumRegular}
              />
              <View style={styles.outter}>
                {state?.loading ? (
                  <LoadMore loading={state.loading} />
                ) : state.data === null ? null : (
                  state?.data?.map((item, index) => (
                    <SeeMore item={item} index={index} />
                  ))
                )}
              </View>
            </View>
          </View>
        </KeyBoardAvoidingWrapper>
      </View>
    </>
  );
};
