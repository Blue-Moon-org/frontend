import { FlatList, View } from "react-native";
import React from "react";
import { Text } from "../../../components/common";
import { Fontscales } from "../../../styles";
import { messagesData } from "./data";
import { scale } from "../../../utils/scale";
import { Image } from "expo-image";
import { styles } from "./styles";

export const Messages = () => {
  const renderMessages = ({ item, index }) => {
    return (
      <View>
        <View>
          <Image
            source={{ uri: item.profilePicture }}
            style={styles.profilePicture}
            contentFit="cover"
            cachePolicy={"memory-disk"}
            
          />
        </View>
        <View></View>
        <View></View>
      </View>
    );
  };
  return (
    <View>
      <Text text={"Messages"} textStyle={[Fontscales.labelLargeRegular]} />

      <FlatList
        data={messagesData}
        renderItem={renderMessages}
        showsVerticalScrollIndicator={false}
        key={(item, index) => item.id}
        contentContainerStyle={{
          marginVertical: scale.pixelSizeVertical(15),
        }}
      />
    </View>
  );
};
