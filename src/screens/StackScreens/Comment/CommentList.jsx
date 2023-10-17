import { View } from "react-native";
import React, { useState } from "react";
import { Image } from "expo-image";
import { styles } from "./styles";
import { Text } from "../../../components/common";
import { AntDesign } from "@expo/vector-icons";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";
import { baseURL } from "../../../utils/request";
import { useDispatch } from "react-redux";
import { fetchCommentLikes } from "../../../Redux/actions/Post/Like";

export const CommentList = ({ item, index }) => {
  const dispatch = useDispatch();

  const [like, updateLike] = useState(item.user_has_liked);
  const [likeCount, updateLikeCount] = useState(item.likes);

  const _commentLike = () => {
    dispatch(fetchCommentLikes(item.id, "navigate"));
    updateLike(!like);
    updateLikeCount(like ? likeCount - 1 : likeCount + 1);
  };

  return (
    <View style={{ marginVertical: scale.pixelSizeVertical(16) }}>
      <View style={styles.row}>
        <View style={styles.imageContaner}>
          <Image
            source={{
              uri: `${baseURL + item.owner.image}`,
            }}
            cachePolicy={"memory-disk"}
            style={styles.image}
          />
        </View>

        <View style={styles.commentProfile}>
          <Text
            text={
              item.owner.fullname ??
              `${item.owner.firstname}``${item.owner.lastname}`
            }
            textStyle={[
              styles.name,
              {
                marginBottom: scale.pixelSizeVertical(6),
              },
            ]}
          />
          <Text text={item.body} textStyle={styles.body} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign
              name={like ? "heart" : "hearto"}
              size={scale.fontPixel(16)}
              color={like ? colors.mainPrimary : "black"}
              onPress={() => _commentLike()}
            />
            <Text
              textStyle={[
                styles.name,
                {
                  marginLeft: scale.pixelSizeHorizontal(6),
                },
              ]}
              text={`${likeCount} likes`}
            />
          </View>
          <Text
            textStyle={[
              styles.time,
              {
                marginLeft: scale.pixelSizeHorizontal(6),
              },
            ]}
            text={`${item.created.slice(0, 10)}`}
          />
        </View>
      </View>
    </View>
  );
};
