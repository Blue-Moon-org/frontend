import {
  View,
  TouchableOpacity,
  TextInput as Input,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState, useRef, useMemo, useCallback } from "react";
import { Fontscales, SharedStyles } from "../../../styles";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { scale } from "../../../utils/scale";
import { Image } from "expo-image";
import {
  Button,
  KeyBoardAvoidingWrapper,
  TextInput,
} from "../../../components/common";
import { PostCreateBottomTab } from "./PostCreateBottomTab";
import RNPickerSelect from "react-native-picker-select";

export const PostCreate = () => {
  const [height, updateHeight] = useState(scale.heightPixel(47));

  const bottomSheetRef = useRef();

  const snapPoints = useMemo(
    () => [scale.heightPixel(120), scale.heightPixel(130)],
    []
  );

  const handleSheetChanges = useCallback((index) => {
    // console.warn("handleSheetChanges", index);
  }, []);

  const handleClosePress = () => bottomSheetRef.current.close();
  const handleOpenModal = useCallback(() => {
    Keyboard.dismiss();
    bottomSheetRef.current?.present();
  }, []);

  const [state, setState] = useState({
    Images: [
      {
        image: "",
      },
    ],
    title: "",
    caption: "",
    category: "",
  });
  console.warn(state.category);

  const placeholder = {
    label: "Select a category...",
    value: null,
    color: "#9EA0A4",
  };
  const items = [
    { label: "All", value: "All" },
    { label: "Men", value: "Men" },
    //   { label: "Women", value: "Women" },
    //   { label: "Native", value: "Native" },
    //   { label: "Ankara", value: "Ankara" },
  ];

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => handleClosePress()}
        activeOpacity={1}
      >
        <View style={[SharedStyles.container, styles.container]}>
          <KeyBoardAvoidingWrapper offset={scale.heightPixel(106)}>
            <>
              <View style={styles.mapItemsContainer}>
                {state?.Images?.map((item, index) => {
                  return (
                    <>
                      {index === 0 ? (
                        <TouchableOpacity
                          style={styles.imagePickerContainer}
                          activeOpacity={0.8}
                          key={index}
                          onPress={() => handleOpenModal()}
                        >
                          <Ionicons
                            name="add-outline"
                            size={scale.fontPixel(30)}
                            color="white"
                          />
                        </TouchableOpacity>
                      ) : (
                        <View style={styles.imageContainer} key={index}>
                          <Image
                            source={item.image}
                            contentFit="cover"
                            style={styles.image}
                            cachePolicy={"memory-disk"}
                          />
                        </View>
                      )}
                    </>
                  );
                })}
              </View>
              <TextInput
                onFocus={() => handleClosePress()}
                placeholder={"Add title"}
                inputState={"create"}
                style={styles.titleInput}
                textInputStyle={{
                  marginBottom: scale.pixelSizeVertical(16),
                  marginTop: scale.pixelSizeVertical(40),
                }}
              />
              <Input
                onFocus={() => handleClosePress()}
                placeholder={"Add caption"}
                inputState={"create"}
                style={[
                  styles.textAreaInput,
                  {
                    height:
                      height < scale.heightPixel(47)
                        ? scale.heightPixel(47)
                        : height,
                    maxHeight: scale.pixelSizeVertical(90),
                  },
                ]}
                onContentSizeChange={(e) =>
                  updateHeight(e.nativeEvent.contentSize.height)
                }
                multiline={true}
              />
              {/* <RNPickerSelect
                // style={{
                //   borderColor: "red",
                //   borderWidth: 1,
                // }}
                // placeholder={placeholder}
                // onValueChange={(value) =>
                //   setState({ ...state, category: value })
                // }
                // items={items}
                // value={state.category}
              /> */}
              <Button
                title={"Post"}
                textStyle={[
                  Fontscales.labelSmallRegular,
                  {
                    color: "white",
                  },
                ]}
                containerStyle={styles.btnContainer}
                onPress={() => handleClosePress()}
              />
            </>
          </KeyBoardAvoidingWrapper>
        </View>
      </TouchableWithoutFeedback>
      <PostCreateBottomTab
        snapPoints={snapPoints}
        bottomSheetRef={bottomSheetRef}
        handleSheetChanges={handleSheetChanges}
        handleClosePress={handleClosePress}
        setState={setState}
        state={state}
      />
    </>
  );
};
