import { FlatList, View } from "react-native";
import React from "react";
import { Text } from "../../../components/common";
import { Fontscales } from "../../../styles";
import { pendingOrderData } from "./data";
import { Image } from "expo-image";
import { scale } from "../../../utils/scale";
import { styles } from "./styles";

export const PendingOrders = () => {
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={[
          styles.imageContainer,
          {
            marginRight: index + 1 === 10 ? 0 : scale.pixelSizeHorizontal(16),
          },
        ]}
      >
        <Image
          style={styles.image}
          source={{ uri: item.profilePicture }}
          cachePolicy={"memory-disk"}
          contentFit="cover"
        />
      </View>
    );
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text
          text={"Pending orders"}
          textStyle={[Fontscales.labelSmallMedium]}
        />
        <Text
          onPress={() => {}}
          text={"View all"}
          textStyle={[Fontscales.labelSmallMedium]}
        />
      </View>
      <FlatList
        contentContainerStyle={{
          marginVertical: scale.pixelSizeVertical(15),
        }}
        data={pendingOrderData.slice(0, 12)}
        horizontal
        renderItem={renderItem}
        key={(item, index) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
