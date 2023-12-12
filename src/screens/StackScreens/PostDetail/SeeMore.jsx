import { View } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Text } from "../../../components/common";
import { baseURL } from "../../../utils/request";
import { scale } from "../../../utils/scale";
import { fetchLikes } from "../../../Redux/actions";
import { useDispatch } from "react-redux";

export const SeeMore = ({ item, index }) => {
  const [like, updateLike] = useState(item.user_has_liked);
  const dispatch = useDispatch();

  const likeHandler = () => {
    updateLike(!like);
    dispatch(fetchLikes(item.id, ""));
  };

  return (
    <View key={index} style={styles.itemContainer}>
      <View style={styles.innerContainer}>
        <Image
          source={{
            uri: `${baseURL + item?.images[0]?.image}`,
          }}
          contentFit="cover"
          cachePolicy={"memory-disk"}
          style={styles.image}
        />
        <AntDesign
          name={like ? "heart" : "hearto"}
          size={scale.fontPixel(18)}
          color={"white"}
          style={styles.likeIcon}
          onPress={() => likeHandler()}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text
          textStyle={styles.text}
          ellipsizeMode={"tail"}
          numberOfLines={1}
          text={item?.title}
        />
        <Text
          text={item?.body}
          textStyle={styles.subText}
          ellipsizeMode={"tail"}
          numberOfLines={2}
        />
      </View>
    </View>
  );
};
