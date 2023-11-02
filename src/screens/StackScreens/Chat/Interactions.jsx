import { Pressable, View, TextInput } from "react-native";
import React, { useState } from "react";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "../../../constants/colorpallette";
import { scale } from "../../../utils/scale";
import * as ImagePicker from "expo-image-picker";
import { chatImage } from "../../../Redux/actions/Chat/ChatImage";
import { useDispatch } from "react-redux";

export const Interactions = ({
  id,
  isMeasurementModalActive,
  setIsMeasurementModalActive,
  updateMsg,
  msg,
  _messageHandler,
  innerRef,
  userId,
  room_name,
  progress,
  updateProgress,
}) => {
  const [height, updateHeight] = useState(scale.heightPixel(40));
  // console.warn(image);
  const dispatch = useDispatch();

  const onUploadProgress = (e) => {
    var Percentage = Math.round((e.loaded / e.total) * 100);
    updateProgress(Percentage);
    // console.log(
    //   "Upload progress: " + Math.round((e.loaded / e.total) * 100) + "%"
    // );
  };
  const _galleryHandler = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: false,
        base64: true,
        quality: 1,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        selectionLimit: 5,
        allowsMultipleSelection: true,
        exif: true,
        orderedSelection: true,
      });
      if (!result.canceled) {
        dispatch(
          chatImage(
            id,
            result.assets,
            innerRef,
            userId,
            room_name,
            onUploadProgress
          )
        );
      }
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <View style={styles.interactionTabs}>
      <Pressable
        onPress={() => _galleryHandler()}
        style={styles.galleryImageContainer}
      >
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
          onChangeText={(text) => {
            updateMsg(text.trimStart());
          }}
          value={msg}
        />

        <Pressable
          style={[
            styles.sendIconContainer,
            {
              height:
                height < scale.heightPixel(40) ? scale.heightPixel(40) : height,
              backgroundColor:
                msg.length < 1 ? colors.grey1 : colors.mainPrimary,
            },
          ]}
          disabled={msg.length < 1 || msg === " " ? true : false}
          onPress={() => _messageHandler()}
        >
          <Feather name="send" size={scale.fontPixel(20)} color="black" />
        </Pressable>
      </View>
    </View>
  );
};
