import { Pressable, View, TextInput } from "react-native";
import React, { useState } from "react";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { Image } from "expo-image";
import { images } from "../../../constants/images";
import { styles } from "./styles";
import { colors } from "../../../constants/colorpallette";
import { scale } from "../../../utils/scale";

export const Interactions = ({
  isMeasurementModalActive,
  setIsMeasurementModalActive,
}) => {
  const [height, updateHeight] = useState(scale.heightPixel(40));
  return (
    <View style={styles.interactionTabs}>
      <Pressable style={styles.galleryImageContainer}>
        <Feather
          name="image"
          size={scale.fontPixel(30)}
          color={colors.mainPrimary}
        />
      </Pressable>
      <Pressable
        onPress={() => setIsMeasurementModalActive(!isMeasurementModalActive)}
        style={[
          styles.rulerPenImageContainer,
          {
            backgroundColor: isMeasurementModalActive
              ? colors.mainPrimary
              : "transparent",
          },
        ]}
      >
        <FontAwesome5
          name="pencil-ruler"
          size={scale.fontPixel(20)}
          color={isMeasurementModalActive ? "white" : colors.mainPrimary}
        />
      </Pressable>

      <View
        style={[
          styles.textInputSendContainer,
          {
            height:
              height < scale.heightPixel(40) ? scale.heightPixel(40) : height,
            maxHeight: scale.pixelSizeVertical(60),
          },
        ]}
      >
        <TextInput
          // editable={isMeasurementModalActive ? false : true}
          multiline={isMeasurementModalActive ? false : true}
          placeholder="Message"
          style={[
            styles.textInput,
            {
              height:
                height < scale.heightPixel(40) ? scale.heightPixel(40) : height,
              maxHeight: scale.pixelSizeVertical(60),
            },
          ]}
          onContentSizeChange={(e) =>
            updateHeight(e.nativeEvent.contentSize.height)
          }
        />

        <Pressable
          style={[
            styles.sendIconContainer,
            {
              height:
                height < scale.heightPixel(40) ? scale.heightPixel(40) : height,
            },
          ]}
        >
          <Feather name="send" size={scale.fontPixel(20)} color="black" />
        </Pressable>
      </View>
    </View>
  );
};
