import { View, FlatList, ScrollView, Platform } from "react-native";
import React from "react";
import { Fontscales, SharedStyles } from "../../../styles";
import { Text } from "../../../components/common";
import { scale } from "../../../utils/scale";
import { dataFits } from "../../BottomTabScreens/Home/data";
import { styles } from "./styles";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";

export const Catalogue = () => {
  const render = ({ item, index }) => {
    return (
      <View
        style={[
          styles.imageContainer,
          {
            marginRight:
              dataFits.length - 1 === index
                ? scale.pixelSizeHorizontal(1)
                : scale.pixelSizeHorizontal(16),
          },
        ]}
      >
        <Image
          style={styles.image}
          source={{ uri: item.imageUrl }}
          contentFit="cover"
          cachePolicy={"memory-disk"}
        />
      </View>
    );
  };
  return (
    <View
      style={[
        SharedStyles.container,
        {
          paddingBottom:
            Platform.OS === "ios"
              ? scale.pixelSizeVertical(30)
              : scale.pixelSizeVertical(1),
        },
      ]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          text={"My no 1 catalogue"}
          textStyle={[
            Fontscales.labelSmallMedium,
            {
              marginVertical: scale.pixelSizeVertical(10),
            },
          ]}
        />
        <FlatList
          data={dataFits}
          renderItem={render}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginVertical: scale.pixelSizeVertical(5),
          }}
          horizontal
        />
        <Text text={"Show all"} textStyle={styles.showAll} />

        <Text
          text={"Catalogue 02"}
          textStyle={[
            Fontscales.labelSmallMedium,
            {
              marginVertical: scale.pixelSizeVertical(10),
            },
          ]}
        />
        <FlatList
          data={dataFits}
          renderItem={render}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginVertical: scale.pixelSizeVertical(5),
          }}
          horizontal
        />
        <Text text={"Show all"} textStyle={styles.showAll} />

        <Text
          text={"Catalogue 03"}
          textStyle={[
            Fontscales.labelSmallMedium,
            {
              marginVertical: scale.pixelSizeVertical(10),
            },
          ]}
        />
        <FlatList
          data={dataFits}
          renderItem={render}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginVertical: scale.pixelSizeVertical(5),
          }}
          horizontal
        />
        <Text text={"Show all"} textStyle={styles.showAll} />
        <Text
          text={"New catalogue"}
          textStyle={[
            Fontscales.labelSmallMedium,
            {
              marginVertical: scale.pixelSizeVertical(10),
            },
          ]}
        />
        <FlatList
          data={dataFits}
          renderItem={render}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginVertical: scale.pixelSizeVertical(5),
          }}
          horizontal
        />
        <Text text={"Show all"} textStyle={styles.showAll} />
        <Text
          text={"Latest catalogue"}
          textStyle={[
            Fontscales.labelSmallMedium,
            {
              marginVertical: scale.pixelSizeVertical(10),
            },
          ]}
        />
        <FlatList
          data={dataFits}
          renderItem={render}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginVertical: scale.pixelSizeVertical(5),
          }}
          horizontal
        />
        <Text text={"Show all"} textStyle={styles.showAll} />
      </ScrollView>
    </View>
  );
};
