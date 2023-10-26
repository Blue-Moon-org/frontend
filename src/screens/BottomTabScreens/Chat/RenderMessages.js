import { View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Text } from "../../../components/common";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { Image } from "expo-image";
import { Fontscales } from "../../../styles";
import { scale } from "../../../utils/scale";
import { baseURL } from "../../../utils/request";
import { renderTimestamp } from "../../../utils/Socket/timeStampConverter";

const RenderMessages = ({ item, index }) => {
  const { navigate } = useNavigation();

  const otherUser = item.participants.filter((each) => each.owner === false);
  // console.warn(item);
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigate("RootStack", {
          screen: "Chat",
          params: {
            item,
            otherUser,
          },
        })
      }
      style={styles.messageContainer}
    >
      <View style={styles.profilePictureContainer}>
        <Image
          source={{ uri: `${baseURL + otherUser[0]?.profile_pic}` }}
          style={styles.profilePicture}
          contentFit="cover"
          cachePolicy={"memory-disk"}
        />
      </View>
      <View style={styles.messagesContainer}>
        <Text
          text={otherUser[0]?.fullname}
          textStyle={[
            Fontscales.paragraphMediumRegular,
            { marginBottom: scale.pixelSizeVertical(8) },
          ]}
        />
        {item.msg_type === "text" ? (
          <Text
            ellipsizeMode={"tail"}
            numberOfLines={1}
            text={item.last_message ? item.last_message.content : " "}
            textStyle={styles.message}
          />
        ) : (
          <Text
            ellipsizeMode={"tail"}
            numberOfLines={1}
            text={"Measurement"}
            textStyle={styles.message}
          />
        )}
      </View>
      <View style={styles.timeContainer}>
        <Text
          text={
            item.last_message.timestamp
              ? renderTimestamp(item.last_message.timestamp)
              : ""
          }
          textStyle={styles.timeAgo}
        />
        {/* <View style={styles.noOfMessagesContainer}>
          <Text text={"2"} textStyle={styles.text} />
        </View> */}
      </View>
    </TouchableOpacity>
  );
};

export default RenderMessages;
