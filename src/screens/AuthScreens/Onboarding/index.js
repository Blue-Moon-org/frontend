import { FlatList, View, Text as MainText, Animated } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale } from "../../../utils/scale";
import { Image } from "expo-image";
import { data } from "./onboardData";
import { styles } from "./styles";
import { Fontscales, SharedStyles } from "../../../styles";
import { Text } from "../../../components/common";
import { Control } from "./Control";

export const Onbording = () => {
  const RenderComponents = ({ item, index }) => {
    return (
      <View style={styles.renderDataController}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            cachePolicy={"memory-disk"}
            contentFit="contain"
            source={item.image}
            style={styles.image}
          />
        </View>
        <MainText
          ellipsizeMode="tail"
          numberOfLines={3}
          style={[styles.mainText, Fontscales.headingLargeBold]}
        >
          {item.mainText}{" "}
          <Text style={styles.coloredMainText} text={item.coloredMainText} />
        </MainText>
        <Text
          ellipsizeMode="tail"
          numberOfLines={5}
          textStyle={[Fontscales.paragraphMediumRegular, styles.subText]}
          text={item.subText}
        />
      </View>
    );
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollx = useRef(new Animated.Value(0)).current;
  const slideref = useRef(null);

  const viewableItemChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const scrollControl = () => {
    if (currentIndex < data.length - 1) {
      slideref.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      return;
    }
  };

  return (
    <SafeAreaView style={SharedStyles.container}>
      <Text
        onPress={() => {}}
        textStyle={[styles.skipText, Fontscales.paragraphMediumRegular]}
        text={"Skip"}
      />
      <FlatList
        data={data}
        renderItem={RenderComponents}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        horizontal
        snapToAlignment="center"
        contentContainerStyle={{
          marginTop: scale.pixelSizeVertical(15),
        }}
        onViewableItemsChanged={viewableItemChanged}
        keyExtractor={(item) => item.id}
        scrollEventThrottle={16}
        viewabilityConfig={viewConfig}
        ref={slideref}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollx } } }],
          {
            useNativeDriver: false,
          }
        )}
      />
      <Control
        percentage={(currentIndex + 1) * (100 / data.length)}
        scrollTo={scrollControl}
        currentIndex={currentIndex}
      />
    </SafeAreaView>
  );
};
