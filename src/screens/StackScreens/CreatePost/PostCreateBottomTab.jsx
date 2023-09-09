import { Alert, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import { Text } from "../../../components/common";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { styles } from "./styles";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";
import * as ImagePicker from "expo-image-picker";

export const PostCreateBottomTab = ({
  handleSheetChanges,
  bottomSheetRef,
  snapPoints,
  state,
  setState,
  handleClosePress,
}) => {
  const _galleryHandler = async () => {
    handleClosePress();
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: false,
        base64: true,
        // exif: true,
        quality: 1,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        selectionLimit: 4,
        allowsMultipleSelection: true,
      });
      if (!result.canceled) {
        setState({
          ...state,
          Images: [
            {
              image: "",
            },
            {
              image: result.assets[0]?.uri,
            },
            {
              image: result.assets[1]?.uri,
            },
            {
              image: result.assets[2]?.uri,
            },
            {
              image: result.assets[3]?.uri,
            },
          ],
        });
      }
    } catch (error) {
      popUp(error);
    }
  };

  const popUp = (error) => {
    Alert.alert("Photos Alert", error?.message, [
      {
        text: "Close",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Try again",
        onPress: () => {
          _galleryHandler();
        },
      },
    ]);
  };

  // const _cameraHandler = () => {
  //   console.warn("object");
  // };
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.modalContainer}>
          {/* <TouchableOpacity
            onPress={() => _cameraHandler()}
            activeOpacity={0.8}
            style={styles.cameraContainer}
          >
            <Feather
              name="camera"
              size={scale.fontPixel(23)}
              color={colors.grey1}
            />
            <Text text={"Camera"} textStyle={styles.text} />
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => _galleryHandler()}
            activeOpacity={0.8}
            style={styles.galleryContainer}
          >
            <MaterialIcons
              name="photo-library"
              size={scale.fontPixel(23)}
              color={colors.grey1}
            />
            <Text text={"Gallery"} textStyle={styles.text} />
          </TouchableOpacity>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};
