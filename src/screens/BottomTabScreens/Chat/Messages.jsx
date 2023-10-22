import {
  FlatList,
  Platform,
  RefreshControl,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Text } from "../../../components/common";
import { Fontscales } from "../../../styles";
import { messagesData } from "./data";
import { scale } from "../../../utils/scale";
import { Image } from "expo-image";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../constants/colorpallette";

export const Messages = ({ user }) => {
  const { navigate } = useNavigation();
  const renderMessages = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() =>
          navigate("RootStack", {
            screen: "Chat",
          })
        }
        style={styles.messageContainer}
      >
        <View style={styles.profilePictureContainer}>
          <Image
            source={{ uri: item.profilePicture }}
            style={styles.profilePicture}
            contentFit="cover"
            cachePolicy={"memory-disk"}
          />
        </View>
        <View style={styles.messagesContainer}>
          <Text
            text={item.name}
            textStyle={[
              Fontscales.paragraphMediumRegular,
              { marginBottom: scale.pixelSizeVertical(4) },
            ]}
          />
          <Text
            ellipsizeMode={"tail"}
            numberOfLines={2}
            text={item.text}
            textStyle={styles.message}
          />
        </View>
        <View style={styles.timeContainer}>
          <Text text={"25 mins"} textStyle={styles.timeAgo} />
          <View style={styles.noOfMessagesContainer}>
            <Text text={"2"} textStyle={styles.text} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const [refresh, setRefresh] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  }, []);

  return (
    <View>
      <View>
        <FlatList
          data={messagesData}
          renderItem={renderMessages}
          showsVerticalScrollIndicator={false}
          key={(item, index) => item.id}
          contentContainerStyle={{
            marginTop: scale.pixelSizeVertical(10),
          }}
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={onRefresh}
              color={colors.blackText}
              colors={
                Platform.OS === "android"
                  ? [colors.mainPrimary, colors.blackText, colors.fadedPrimary]
                  : colors.mainPrimary
              }
              tintColor={colors.mainPrimary}
            />
          }
        />
      </View>
    </View>
  );
};
