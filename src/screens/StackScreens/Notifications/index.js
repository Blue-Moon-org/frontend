import { View, FlatList } from "react-native";
import React from "react";
import { SharedStyles } from "../../../styles";
import { Text } from "../../../components/common";
import { styles } from "./styles";
import { colors } from "../../../constants/colorpallette";
import { scale } from "../../../utils/scale";

export const Notification = () => {
  const data = [
    {
      id: 1,
      type: "comment",
      title: "crop smaller cent refused ",
      body: "whether personal aside subject buffalo past allow chart avoid specific vegetable youth dirt rough sleep diagram every wide nest time beneath blood already trap",
      time: "2/15/2060",
    },
    {
      id: 2,
      type: "like",
      title: "element express clothes ",
      body: "particular per hearing element distance union return tower careful hurry railroad glass movie creature gently upper while slow close not soap flies steep influence",
      time: "10/14/2106",
    },
    {
      id: 3,
      type: "order",
      title: "club deal purpose instrument",
      body: "history meet temperature finger upper fewer into dirty balance till anyway prevent took forget consist proper slowly scale stepped thee pen post gather mile",
      time: "3/7/2046",
    },
    {
      id: 4,
      type: "comment",
      body: "art slide must nose immediately",
      time: "4/6/2060",
      title:
        "late his fox stiff toward different grade excited rose bent support provide hot somebody consonant earth theory vessels upon character land pull rabbit among",
    },
    {
      id: 5,
      type: "comment",
      body: "field pilot fun instead forward individual map village jet part star took giant western throughout empty having explanation send further drop pick keep beyond",
      time: "12/7/2056",
      title: "field pilot fun instead forward ",
    },
    {
      id: 6,
      type: "comment-read",
      body: "include both try cross therefore kept frozen wagon scene nervous aboard snake put lovely arm younger pure leave attack past meat square activity great",
      time: "2/13/2061",
      title: "else settle rest spend",
    },
  ];

  const RenderItem = ({ item, index }) => {
    return (
      <View
        style={[
          styles.innerContainer,
          {
            backgroundColor:
              item.type === "comment"
                ? "#F6D6AA"
                : item.type === "order"
                ? "#BEE5FA"
                : item.type === "like"
                ? "#F19319"
                : colors.grey3,
          },
        ]}
      >
        <Text text={item?.title} textStyle={styles.title} />
        <Text text={item?.body} textStyle={styles.body} />
        <Text text={item?.time} textStyle={styles.time} />
      </View>
    );
  };
  return (
    <View style={SharedStyles.container}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <RenderItem item={item} index={index} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginVertical: scale.pixelSizeVertical(10),
        }}
      />
    </View>
  );
};
