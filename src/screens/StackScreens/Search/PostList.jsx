import { TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Text, Button } from "../../../components/common";
import { Fontscales } from "../../../styles";
import { scale } from "../../../utils/scale";
import { styles } from "./styles";
import { colors } from "../../../constants/colorpallette";
import { Image } from "expo-image";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { baseURL } from "../../../utils/request";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Follow } from "../../../Redux/actions/Follow";
import { fetchLikes } from "../../../Redux/actions";

const PostList = ({ item, index }) => {
  // console.warn(item);
  const [follow, updateFollow] = useState(item?.user.is_following);
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const [likeValues, updateLikeValues] = useState({
    likeCount: item?.likes,
    like: item?.user_has_liked,
  });

  const _handleLike = () => {
    dispatch(fetchLikes(item?.id));
    updateLikeValues({
      ...likeValues,
      likeCount: likeValues.like
        ? likeValues.likeCount - 1
        : likeValues.likeCount + 1,
      like: !likeValues.like,
    });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigate("SearchPostDetail", { item })}
      style={{
        backgroundColor: colors.grey2,
        paddingHorizontal: scale.pixelSizeHorizontal(9),
        paddingVertical: scale.pixelSizeVertical(9),
        width: "100%",
        height: scale.heightPixel(140),
        marginTop: scale.pixelSizeVertical(15),
        borderRadius: scale.fontPixel(8),
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={styles.MimageContainer}>
        <Image
          style={styles.Mimage}
          contentFit="cover"
          cachePolicy={"memory-disk"}
          source={{ uri: `${baseURL + item?.images[0]?.image}` }}
        />
      </View>
      <View style={{ width: "65%" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: scale.fontPixel(7),
            alignItems: "center",
          }}
        >
          <Text
            text={item?.owner?.brand_name}
            textStyle={Fontscales.labelSmallMedium}
          />
          {item?.user?.id === item?.owner?.id ? null : (
            <Button
              onPress={() => {
                updateFollow(!follow);
                dispatch(Follow(item?.owner?.id));
              }}
              textStyle={Fontscales.paragraphSmallRegular}
              title={follow ? "Following" : "Follow"}
              containerStyle={{
                paddingHorizontal: scale.pixelSizeHorizontal(10),
                paddingVertical: scale.pixelSizeVertical(3),
                backgroundColor: follow
                  ? colors.lightPrimary
                  : colors.mainPrimary,
                borderRadius: scale.fontPixel(4),
              }}
            />
          )}
        </View>
        <Text
          text={item?.body}
          numberOfLines={4}
          ellipsizeMode={"tail"}
          textStyle={Fontscales.paragraphSmallRegular}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: scale.fontPixel(12),
          }}
        >
          <AntDesign
            name={likeValues.like ? "heart" : "hearto"}
            size={scale.fontPixel(18)}
            color="black"
            style={{
              marginRight: scale.pixelSizeHorizontal(5),
            }}
            onPress={() => _handleLike()}
          />
          <Text
            text={likeValues.likeCount}
            textStyle={Fontscales.paragraphSmallRegular}
          />

          <AntDesign
            onPress={() => navigate("SearchComments", { item })}
            name="message1"
            size={scale.fontPixel(18)}
            color="black"
            style={{
              marginHorizontal: scale.pixelSizeHorizontal(5),
            }}
          />
          <Text
            text={item?.no_comments}
            textStyle={Fontscales.paragraphSmallRegular}
          />
          <Ionicons
            name="ios-send-outline"
            size={scale.fontPixel(18)}
            color="black"
            style={{
              marginHorizontal: scale.pixelSizeHorizontal(5),
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PostList;
