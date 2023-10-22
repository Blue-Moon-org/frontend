import { View, TouchableOpacity, Platform } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { Lodaing, ProfileHeader } from "../../../components/primary";
import { SharedStyles } from "../../../styles";
import { styles } from "./styles";
import { topData } from "../../BottomTabScreens/Profile/data";
import { Text } from "../../../components/common";
import { colors } from "../../../constants/colorpallette";
import { scale } from "../../../utils/scale";
import { ForSale } from "./ForSale";
import { Posts } from "./Posts";
import { Liked } from "./Liked";
import Constants from "expo-constants";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AuthContext } from "../../../Context";
import { fetchRating } from "../../../Redux/actions/Post/Rating";
import { useDispatch, useSelector } from "react-redux";

export const DesignerProfile = () => {
  const [type, updateType] = useState("Posts");
  const dispatch = useDispatch();

  const { navigate } = useNavigation();
  const { params } = useRoute();

  const { currentUser } = useContext(AuthContext);

  const rating = useSelector((state) => state.rating);

  useEffect(() => {
    let sub = true;
    if (sub) {
      dispatch(fetchRating(currentUser?.id, navigate));
    }
  }, [currentUser?.id]);

  const add =
    Platform.OS === "ios" && Constants.statusBarHeight < 30
      ? scale.heightPixel(40)
      : scale.heightPixel(1);

  const STAR_COUNT = 5;

  const Rating = (value) => {
    const stars = Array.from({ length: STAR_COUNT }, () => (
      <FontAwesome
        style={{ paddingHorizontal: scale.pixelSizeHorizontal(3) }}
        name="star-o"
        size={scale.fontPixel(17)}
        color={colors.mainPrimary}
      />
    ));
    let i;
    for (i = 0; i < value; i++) {
      // this will loop Math.floor(value) times
      stars[i] = (
        <FontAwesome
          style={{ paddingHorizontal: scale.pixelSizeHorizontal(3) }}
          name="star"
          size={scale.fontPixel(17)}
          color={colors.mainPrimary}
        />
      );
    }

    if (value % 1 != 0)
      // if value is a decimal, add a half star
      stars[i - 1] = (
        <FontAwesome
          name="star-half-full"
          style={{ paddingHorizontal: scale.pixelSizeHorizontal(3) }}
          size={scale.fontPixel(17)}
          color={colors.mainPrimary}
        />
      );
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: scale.pixelSizeVertical(5),
        }}
      >
        {stars}
      </View>
    );
  };

  const createChatData = useSelector((state) => state.createChat);

  return (
    <>
      {createChatData.loading ? <Lodaing /> : null}
      <SafeAreaView style={[SharedStyles.container]}>
        <View
          style={{
            height:
              Platform.OS === "ios"
                ? scale.heightPixel(375) + add
                : scale.height * 0.42,
            zIndex: 2,
          }}
        >
          <ProfileHeader
            detail={params.designerDetail}
            designer={false}
            client={true}
          />
          <View style={styles.background} />
          <View style={styles.background2}>
            {/* <View style={styles.leftSide}> */}
            <Text text={rating.data ?? 0} textStyle={styles.ratingText} />
            {Rating(rating.data ?? 0)}
            {/* <TouchableOpacity
              onPress={() => navigate("Reviews")}
              style={styles.review}
              activeOpacity={0.8}
            >
              <Text text={`274 reviews`} textStyle={styles.reviewText} />
              <Ionicons
                name="ios-arrow-forward"
                size={scale.fontPixel(16)}
                color={colors.mainPrimary}
              />
            </TouchableOpacity> */}
            {/* </View> */}
            {/* <View>{Rating(3.1)}</View> */}
          </View>
          <View style={styles.headerOptionContainer}>
            {topData.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[
                    styles.options,
                    {
                      borderColor:
                        item.name === type ? colors.mainPrimary : colors.grey2,
                    },
                  ]}
                  onPress={() => updateType(item.name)}
                  key={item.id}
                >
                  <Text
                    numberOfLines={1}
                    ellipsizeMode={"tail"}
                    textStyle={[
                      styles.optionsText,
                      {
                        color:
                          item.name === type
                            ? colors.mainPrimary
                            : colors.grey1,
                        paddingLeft:
                          item.name === type
                            ? scale.pixelSizeHorizontal(5)
                            : scale.pixelSizeHorizontal(5),
                      },
                    ]}
                    text={item.name}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View
          style={{
            height:
              Platform.OS === "ios"
                ? scale.height - scale.heightPixel(455) - add
                : scale.height * 0.53,
          }}
        >
          {type === "Posts" ? (
            <Posts
              detail={params.designerDetail}
              designerDetail={params.designerDetail}
            />
          ) : type === "For Sale" ? (
            <ForSale
              detail={params.designerDetail}
              designerDetail={params.designerDetail}
            />
          ) : (
            <Liked
              detail={params.designerDetail}
              designerDetail={params.designerDetail}
            />
          )}
        </View>
      </SafeAreaView>
    </>
  );
};
