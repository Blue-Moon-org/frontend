import { View, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { styles } from "../Home/styles";
import { AntDesign } from "@expo/vector-icons";
import { Text } from "../../../components/common";
import { baseURL } from "../../../utils/request";
import { scale } from "../../../utils/scale";
import { fetchLikes } from "../../../Redux/actions";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../../Context";

export const HomeRenderItems = ({
  item,
  index,
  separator,
  profile,
  designerDetail,
  personalProfile,
}) => {
  const { navigate } = useNavigation();

  const dispatch = useDispatch();

  const [hasLike, updatLike] = useState(item?.user_has_liked);

  const { currentUser } = useContext(AuthContext);

  const likeHanlder = (id) => {
    updatLike(!hasLike);
    dispatch(fetchLikes(id));
  };

  // const state = useSelector((state) => state.like);

  const _detailHandler = () => {
    personalProfile === true
      ? navigate("RootStack", {
          screen: "PersonalProfilePostDetail",
          params: {
            item,
            hasLike,
          },
        })
      : profile
      ? navigate("ProfilePostDetail", {
          item,
          hasLike,
          designerDetail,
        })
      : navigate("RootStack", {
          screen: "PostDetail",
          params: {
            item,
            hasLike,
          },
        });
  };

  return (
    <TouchableOpacity
      onPress={() => _detailHandler()}
      activeOpacity={0.8}
      style={styles.itemContainer}
    >
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
          name={hasLike ? "heart" : "hearto"}
          size={scale.fontPixel(18)}
          color={"white"}
          style={styles.likeIcon}
          onPress={() => likeHanlder(item.id)}
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
    </TouchableOpacity>
  );
};
