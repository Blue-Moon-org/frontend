import { View, TextInput, ActivityIndicator } from "react-native";
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

export const PostDetail = () => {
  const { navigate } = useNavigation();
  const route = useRoute();

  const dispatch = useDispatch();

  const [values, updateValue] = useState({
    comment: "",
  });

  const _commentHandler = () => {
    dispatch(addComment(values.comment, route?.params?.item?.id, navigate));
  };

  const state = useSelector((state) => state.comment);
  const posDel = useSelector((state) => state.postDetail);
  const fav = useSelector((state) => state.favourite);

  useEffect(() => {
    let sub = true;
    if (sub) {
      dispatch(postDetail(route.params?.item?.id));
    }
    return () => (sub = false);
  }, [route.params?.item?.id]);
  const detail = useSelector((state) => state.postDetail);
  const allData = useSelector((state) => state.fetchFeedsAll);

  // let active = "";
  const _handleFav = () => {
    // makeIsFav(!isFav);
    // active = true;
    // console.warn("object");
    dispatch(addFavourite(route.params?.item?.id, allData.dataAll, navigate));
    // dispatch(postDetail(route.params?.item?.id));
  };
  console.warn(route?.params?.item);

  const [isFav, makeIsFav] = useState(route.params.item.user_has_favorited);
  const [favCount, updateFavCount] = useState(route.params.item.favs);

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
                      uri: "https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-139608.jpg?size=626&ext=jpg&ga=GA1.1.70578014.1688424585&semt=ais",
                    }}
                    style={styles.userProfile}
                    contentFit="cover"
                    cachePolicy={"memory-disk"}
                  />
                </View>
                <View style={styles.userdetailContainer}>
                  <Text
                    text={"E-Ward Fits"}
                    numberOfLines={1}
                    ellipsizeMode={"tail"}
                    textStyle={[styles.brandName, Fontscales.headingSmallBold]}
                  />
                  <Text
                    text={"Esther Howard"}
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
                    name={route.params?.hasLike ? "heart" : "hearto"}
                    size={scale.fontPixel(16)}
                    color={colors.blackText}
                  />
                  <Text
                    text={route.params?.item?.likes}
                    numberOfLines={1}
                    ellipsizeMode={"tail"}
                    textStyle={styles.likeShareText}
                  />
                </View>
                <View style={styles.iconTextContainer}>
                  <Feather
                    name="send"
                    size={scale.fontPixel(16)}
                    color={colors.blackText}
                  />
                  <Text
                    text={route.params?.item.favs}
                    numberOfLines={1}
                    ellipsizeMode={"tail"}
                    textStyle={styles.likeShareText}
                  />
                </View>
                <AntDesign
                  name={
                    route.params?.item.user_has_favorited ? "star" : "staro"
                  }
                  size={scale.fontPixel(16)}
                  color={colors.blackText}
                  onPress={() => {
                    _handleFav();
                  }}
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
