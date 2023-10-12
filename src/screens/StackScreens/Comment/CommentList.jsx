import { View } from "react-native";
import React, { useState } from "react";
import { Image } from "expo-image";
import { styles } from "./styles";
import { Text } from "../../../components/common";
import { AntDesign } from "@expo/vector-icons";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";

export const CommentList = ({ item, index }) => {
  const [like, updateLike] = useState(item.isLike);
  return (
    <View style={{ marginVertical: scale.pixelSizeVertical(16) }}>
      <View style={styles.row}>
        <View style={styles.imageContaner}>
          <Image
            source={{
              uri:
                item.imageUri ??
                "https://img.freepik.com/free-photo/blue-user-icon-symbol-website-admin-social-login-element-concept-white-background-3d-rendering_56104-1217.jpg?w=2000&t=st=1697046872~exp=1697047472~hmac=1275d29abfabed47c1ef7cad096553bbbc74f7d7ac3587234d05b70eacc230ac",
            }}
            cachePolicy={"memory-disk"}
            style={styles.image}
          />
        </View>

        <View style={styles.commentProfile}>
          <Text
            text={item.owner}
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
              name={like ? "hearto" : "heart"}
              size={scale.fontPixel(12)}
              color={like ? "black" : colors.mainPrimary}
              onPress={() => updateLike(!like)}
            />
            <Text
              textStyle={[
                styles.name,
                {
                  marginLeft: scale.pixelSizeHorizontal(6),
                },
              ]}
              text={`${22} likes`}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
