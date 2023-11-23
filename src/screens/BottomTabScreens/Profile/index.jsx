import { View, TouchableOpacity, Platform } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { ProfileHeader } from "../../../components/primary";
import { SharedStyles } from "../../../styles";
import { styles } from "./styles";
import { topData } from "./data";
import { Text } from "../../../components/common";
import { colors } from "../../../constants/colorpallette";
import { scale } from "../../../utils/scale";
import { Posts } from "./Posts";
import { ForSale } from "./ForSale";
import { Liked } from "./Liked";
import Constants from "expo-constants";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { fetchRating } from "../../../Redux/actions/Post/Rating";
import { AuthContext } from "../../../Context";
import { Fontscales } from "../../../styles";

export const Profile = () => {
  const [type, updateType] = useState("Posts");
  const dispatch = useDispatch();

  const { currentUser } = useContext(AuthContext);

  const rating = useSelector((state) => state.rating);

  useEffect(() => {
    let sub = true;
    if (sub) {
      dispatch(fetchRating(currentUser?.id, navigate));
    }
  }, [currentUser?.id]);

  const { navigate } = useNavigation();
  const [user, updateUser] = useState("");

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
    }

    return () => (sub = false);
  }, [user]);

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
        key={value}
        style={{
          flexDirection: "row",
          marginTop: scale.pixelSizeVertical(5),
        }}
      >
        {stars}
      </View>
    );
  };

  return (
    <SafeAreaView style={[SharedStyles.container]}>
      <View
        style={{
          height:
            Platform.OS === "ios"
              ? scale.heightPixel(350) + add
              : scale.height * 0.39,
          zIndex: 2,
        }}
      >
        <ProfileHeader designer={true} user={user} />
        <View style={styles.background} />
        <View style={styles.background2}>
          {/* <View> */}
          <View style={styles.leftSide}>
            <Text
              text={rating.data?.rating ?? "-"}
              textStyle={styles.ratingText}
            />
            {Rating(rating.data?.rating ?? 0)}
          </View>

          <View style={styles.rightSide}>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View style={styles.followerContainer}>
                <Text
                  text={rating.data?.data?.followers_count ?? "-"}
                  textStyle={Fontscales.headingLargeBold}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                />
                <Text
                  text={"Followers"}
                  textStyle={Fontscales.paragraphSmallRegular}
                />
              </View>
              <View style={styles.followingContainer}>
                <Text
                  text={rating.data?.data?.following_count ?? "-"}
                  textStyle={Fontscales.headingLargeBold}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                />
                <Text
                  text={"Following"}
                  textStyle={Fontscales.paragraphSmallRegular}
                />
              </View>
            </View>
            {/* <Button
            
              title={1 + 1 === 3 ? "Following" : "Follow"}
              textStyle={Fontscales.labelSmallRegular}
              containerStyle={{
                backgroundColor:
                  1 + 1 === 3 ? colors.lightPrimary : colors.mainPrimary,
                alignSelf: "center",
                marginTop: scale.pixelSizeVertical(8),
                paddingVertical: scale.pixelSizeVertical(7),
                paddingHorizontal: scale.pixelSizeHorizontal(17),
                borderRadius: scale.fontPixel(8),
              }}
            /> */}
          </View>
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
                        item.name === type ? colors.mainPrimary : colors.grey1,
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
              ? scale.height - scale.heightPixel(500) - add
              : scale.height * 0.4611, //611
        }}
      >
        {type === "Posts" ? (
          <Posts />
        ) : type === "For Sale" ? (
          <ForSale />
        ) : (
          <Liked />
        )}
      </View>
    </SafeAreaView>
  );
};
