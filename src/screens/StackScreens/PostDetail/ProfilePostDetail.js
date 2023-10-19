import { View, TextInput, ActivityIndicator, Keyboard } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { Fontscales, SharedStyles } from "../../../styles";
import { Image } from "expo-image";
import { KeyBoardAvoidingWrapper, Text } from "../../../components/common";
import { AntDesign, Feather } from "@expo/vector-icons";
import { colors } from "../../../constants/colorpallette";
import { scale } from "../../../utils/scale";
import { dataFits } from "../../BottomTabScreens/Home/data";
import { useNavigation, useRoute } from "@react-navigation/native";
import { baseURL } from "../../../utils/request";
import { addComment } from "../../../Redux/actions/Post/AddComment";
import { useSelector, useDispatch } from "react-redux";
import { addFavourite } from "../../../Redux/actions/Post/FavoritePost";
import { postDetail } from "../../../Redux/actions/Post/PostDetail";
import { fetchLikes } from "../../../Redux/actions";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const ProfilePostDetail = () => {
  const { navigate, setOptions } = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  setOptions({
    headerShown: true,
    title: "Post",
    headerTitleAlign: "left",
    headerTitleAllowFontScaling: true,
    headerTitleStyle: Fontscales.paragraphLargeMedium,
    headerLeft: () => (
      <MaterialCommunityIcons
        onPress={() =>
          navigate("DesignerProfile", {
            designerDetail: route.params.designerDetail,
          })
        }
        style={{ marginLeft: scale.pixelSizeHorizontal(16) }}
        name="keyboard-backspace"
        size={scale.fontPixel(24)}
        color="black"
      />
    ),
  });

  const [values, updateValue] = useState({
    comment: "",
  });

  const [favValues, updateFavValues] = useState({
    count: route.params?.item?.favs,
    fav: route.params?.item?.user_has_favorited,
  });

  const [likeValues, updateLikeValues] = useState({
    likeCount: route.params?.item?.likes,
    like: route.params?.item?.user_has_liked,
  });

  const _commentHandler = () => {
    dispatch(addComment(values.comment, route?.params?.item?.id, navigate));
    Keyboard.dismiss();
    updateValue({ ...values, comment: "" });
  };

  const state = useSelector((state) => state.comment);

  useEffect(() => {
    let sub = true;
    if (sub) {
      dispatch(postDetail(route.params?.item?.id));
    }
    return () => (sub = false);
  }, [route.params?.item?.id]);
  // const detail = useSelector((state) => state.postDetail);
  // const allData = useSelector((state) => state.fetchFeedsAll);
  // const posDel = useSelector((state) => state.postDetail);
  // dispatch(postDetail(route.params?.item?.id));
  // dispatch(postDetail(route.params?.item?.id));
  // let active = "";
  // const fav = useSelector((state) => state.favourite);

  const _handleFav = () => {
    dispatch(addFavourite(route.params?.item?.id, navigate));
    updateFavValues({
      ...favValues,
      count: favValues.fav ? favValues.count - 1 : favValues.count + 1,
      fav: !favValues.fav,
    });
  };

  const _handleLike = () => {
    dispatch(fetchLikes(route.params?.item?.id));
    updateLikeValues({
      ...likeValues,
      likeCount: likeValues.like
        ? likeValues.likeCount - 1
        : likeValues.likeCount + 1,
      like: !likeValues.like,
    });
  };

  return (
    <View style={SharedStyles.container}>
      <KeyBoardAvoidingWrapper offset={scale.heightPixel(105)}>
        <View>
          <View style={styles.detailContainer}>
            <View style={styles.imagesContainer}>
              <View style={styles.mainImageContainer}>
                <Image
                  cachePolicy={"memory-disk"}
                  source={{
                    uri: `${baseURL + route.params?.item?.images[0]?.image}`,
                  }}
                  style={styles.mainImage}
                  contentFit="cover"
                />
              </View>
              <View style={styles.sideImageContainer}>
                <Image
                  source={{
                    uri: `${baseURL + route.params?.item?.images[1]?.image}`,
                  }}
                  style={styles.sideImage}
                  contentFit="cover"
                />
                <Image
                  source={{
                    uri: `${baseURL + route.params?.item?.images[2]?.image}`,
                  }}
                  style={styles.sideImage}
                  contentFit="cover"
                />
                <Image
                  source={{
                    uri: `${baseURL + route.params?.item?.images[3]?.image}`,
                  }}
                  style={styles.sideImage}
                  contentFit="cover"
                />
              </View>
            </View>

            <View style={styles.profilecontainer}>
              <View style={styles.imageText}>
                <View style={styles.userProfileContainer}>
                  <Image
                    source={{
                      uri: `${baseURL + route.params.item.owner.brand_image}`,
                    }}
                    style={styles.userProfile}
                    contentFit="cover"
                    cachePolicy={"memory-disk"}
                  />
                </View>
                <View style={styles.userdetailContainer}>
                  <Text
                    text={route.params.item.owner.brand_name ?? "Not provided"}
                    numberOfLines={1}
                    ellipsizeMode={"tail"}
                    textStyle={[styles.brandName, Fontscales.headingSmallBold]}
                  />
                  <Text
                    text={route.params.item.owner.fullname}
                    numberOfLines={1}
                    ellipsizeMode={"tail"}
                    textStyle={[
                      styles.userName,
                      Fontscales.paragraphSmallRegular,
                    ]}
                  />
                </View>
              </View>

              <View style={styles.reactionIcons}>
                <View style={styles.iconTextContainer}>
                  <AntDesign
                    name={likeValues.like ? "heart" : "hearto"}
                    size={scale.fontPixel(16)}
                    color={colors.blackText}
                    onPress={() => _handleLike()}
                  />
                  <Text
                    text={likeValues.likeCount}
                    numberOfLines={1}
                    ellipsizeMode={"tail"}
                    textStyle={styles.likeShareText}
                  />
                </View>
                <AntDesign
                  name={favValues.fav ? "star" : "staro"}
                  size={scale.fontPixel(16)}
                  color={colors.blackText}
                  onPress={() => {
                    _handleFav();
                  }}
                />
                <Text
                  text={favValues.count}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                  textStyle={styles.likeShareText}
                />
                <Feather
                  style={styles.likeShareText}
                  name="send"
                  size={scale.fontPixel(16)}
                  color={colors.blackText}
                />
              </View>
            </View>
            <View style={styles.aboutContainer}>
              <Text
                text={route.params?.item.title}
                textStyle={[Fontscales.headingSmallBold]}
                ellipsizeMode={"tail"}
                numberOfLines={1}
              />
              <Text
                text={route.params?.item.body}
                textStyle={Fontscales.paragraphSmallRegular}
                numberOfLines={2}
                ellipsizeMode={"tail"}
              />
            </View>

            <View style={styles.commentContainer}>
              <View style={styles.inputSendContainer}>
                <TextInput
                  keyboardType="default"
                  autoComplete="off"
                  textContentType="none"
                  placeholder="Leave a comment"
                  placeholderTextColor={colors.blackText}
                  style={styles.input}
                  value={values.comment}
                  onChangeText={(text) =>
                    updateValue({
                      ...values,
                      comment: text,
                    })
                  }
                  multiline={false}
                />
                {state.loading ? (
                  <ActivityIndicator
                    size={scale.fontPixel(16)}
                    color={colors.mainPrimary}
                  />
                ) : (
                  <Feather
                    onPress={() => _commentHandler()}
                    name="send" //add loading
                    size={scale.fontPixel(16)}
                    disabled={values?.comment?.length < 1 ? true : false}
                    color={
                      values?.comment?.length < 1
                        ? "lightgray"
                        : colors.blackText
                    }
                  />
                )}
              </View>
            </View>
            <Text
              onPress={() =>
                navigate("Comments", {
                  item: route.params.item,
                  hasLike: route.params?.item.likes,
                  designerDetail: route.params.designerDetail,
                })
              }
              ellipsizeMode={"tail"}
              numberOfLines={1}
              textStyle={styles.comment}
              text={`view ${route.params?.item?.no_comments} comments`}
            />
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
                        source={{ uri: item?.imageUrl }}
                        contentFit="cover"
                        cachePolicy={"memory-disk"}
                        style={styles.image}
                      />
                      <AntDesign
                        name={item?.like ? "heart" : "hearto"}
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
                        text={item?.name}
                      />
                      <Text
                        text={item?.subText}
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
  );
};
