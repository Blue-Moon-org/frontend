import { StyleSheet, View, Animated } from "react-native";
import React, { useRef, useCallback } from "react";
import { scale } from "../../utils/scale";
import { baseURL } from "../../utils/request";
import { ImageZoom } from "@likashefqet/react-native-image-zoom";
import { colors } from "../../constants/colorpallette";
import { AntDesign } from "@expo/vector-icons";

const CarouselImageDisplay = ({
  item,
  currentIndex,
  setCurrentIndex,
  setShowImagePreview,
}) => {
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / scale.width);
    setCurrentIndex(currentIndex);
  };

  const ref = useRef(new Animated.Value(0));
  const RenderImages = ({ item, index }) => {
    return (
      <View style={styles.imageContainer}>
        <ImageZoom
          source={{ uri: `${baseURL + item.image}` }}
          style={styles.image}
          minScale={1}
          maxScale={5}
          resizeMode="contain"
          isPanEnabled={true}
          isPinchEnabled={true}
        />
      </View>
    );
  };
  // const translation = useRef(new Animated.Value(0)).current;

  const RenderDots = () => {
    // const width = ref?.current?.interpolate({
    //   inputRange: [0, 50, 100],
    //   outputRange: [scale.fontPixel(5), scale.fontPixel(8), scale.fontPixel(5)],
    //   extrapolate: "clamp",
    // });
    // console.warn(width);
    return item.map((_, index) => {
      return (
        <View
          key={index}
          style={{
            backgroundColor:
              currentIndex === index ? colors.mainPrimary : "white",
            height: scale.heightPixel(7),
            width: scale.fontPixel(7),
            bottom: scale.pixelSizeVertical(30),
            marginRight: scale.fontPixel(5),
            gap: 10,
            borderRadius: 100 / 2,
          }}
        />
      );
    });
  };

  return (
    <View style={styles.carouselContainer}>
      <AntDesign
        name="close"
        size={scale.fontPixel(30)}
        color={"white"}
        style={{
          alignSelf: "flex-end",
          position: "absolute",
          right: scale.pixelSizeHorizontal(20),
          top: scale.pixelSizeVertical(10),
          zIndex: 100,
        }}
        onPress={() => setShowImagePreview(false)} //
      />
      <Animated.FlatList
        onLayout={useCallback(() => {
          ref.current?.scrollToIndex({ animated: true, index: currentIndex });
        }, [])}
        ref={ref}
        renderItem={({ item, index }) => (
          <RenderImages item={item} index={index} />
        )}
        data={item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
        }}
        snapToAlignment={"center"}
        pagingEnabled
        onMomentumScrollEnd={updateCurrentSlideIndex}
      />
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <RenderDots />
      </View>
    </View>
  );
};

export default CarouselImageDisplay;

const styles = StyleSheet.create({
  carouselContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#00000090",
    left: 0,
    height: "100%",
    zIndex: 1,
  },
  imageContainer: {
    // width: "1oo%",
    maxHeight: scale.heightPixel(400),
    width: scale.width,
    height: scale.heightPixel(600),
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
