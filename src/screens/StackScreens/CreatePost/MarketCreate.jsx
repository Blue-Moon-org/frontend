import {
  View,
  TouchableOpacity,
  TextInput as Input,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
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
import { colors } from "../../../constants/colorpallette";
import { createMarket } from "../../../Redux/actions/Market/MarketCreate";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Lodaing } from "../../../components/primary";

export const MarketCreate = () => {
  const [height, updateHeight] = useState(scale.heightPixel(47));

  const bottomSheetRef = useRef();
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

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
        id: 1,
      },
    ],
    title: "",
    caption: "",
    category: "",
    price: "",
    error: "",
    stock: "",
  });

  const placeholder = {
    label: "Select a category...",
    value: null,
    color: "#9EA0A4",
  };
  const items = [
    { label: "Men", value: "Men" },
    { label: "Women", value: "Women" },
    { label: "Native", value: "Native" },
    { label: "Ankara", value: "Ankara" },
  ];
  // console.warn(state.Images[1].image.fileName);

  const popUp = (error) => {
    Alert.alert("Photos Alert", error, [
      {
        text: "Close",
        onPress: () => {},
        style: "cancel",
      },
      // {
      //   text: "Try again",
      //   onPress: () => {
      // _galleryHandler();
      // },
      // },
    ]);
  };
  const marCreate = useSelector((state) => state.marketCreate);

  const createPostHandler = () => {
    if (
      state?.Images[1]?.image === undefined ||
      state?.Images[2]?.image === undefined ||
      state?.Images[3]?.image === undefined ||
      state?.Images[4]?.image === undefined
    ) {
      popUp("You're to select 4 Photos");
    } else if (state.title === "") {
      popUp("Title field may not be empty");
    } else if (state.caption === "") {
      popUp("Caption field may not be empty");
    } else if (state.category === "") {
      popUp("Categoty field may not be empty");
    } else if (state.price === "" || state.price === 0) {
      popUp("Price field may not be empty");
    } else {
      dispatch(createMarket(state, navigate));
      handleClosePress();
    }
  };

  return (
    <>
      {marCreate.loading ? <Lodaing /> : null}
      <TouchableWithoutFeedback
        onPress={() => handleClosePress()}
        activeOpacity={1}
      >
        <View style={[SharedStyles.container, styles.container]}>
          <KeyBoardAvoidingWrapper offset={scale.heightPixel(106)}>
            <View>
              <View style={styles.mapItemsContainer}>
                {state?.Images?.map((item, index) => {
                  return (
                    <View key={index} style={{ width: "30%" }}>
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
                            source={item?.image}
                            contentFit="cover"
                            style={styles.image}
                            cachePolicy={"memory-disk"}
                          />
                        </View>
                      )}
                    </View>
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
                onChangeText={(text) => {
                  setState({
                    ...state,
                    title: text,
                  });
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
                  updateHeight(e?.nativeEvent?.contentSize.height)
                }
                multiline={true}
                onChangeText={(text) => {
                  setState({
                    ...state,
                    caption: text,
                  });
                }}
              />
              <TextInput
                onFocus={() => handleClosePress()}
                placeholder={"Price"}
                inputState={"create"}
                style={styles.titleInput}
                keyboardType={"numeric"}
                textInputStyle={{
                  marginBottom: scale.pixelSizeVertical(6),
                  marginTop: scale.pixelSizeVertical(20),
                }}
                onChangeText={(text) => {
                  const newText = text.replace(/[^\d]/g, "");
                  setState({
                    ...state,
                    price: newText,
                  });
                }}
                value={state.price}
              />
              <TextInput
                onFocus={() => handleClosePress()}
                placeholder={"Stock"}
                inputState={"create"}
                style={styles.titleInput}
                keyboardType={"numeric"}
                textInputStyle={{
                  marginBottom: scale.pixelSizeVertical(6),
                  marginTop: scale.pixelSizeVertical(20),
                }}
                onChangeText={(text) => {
                  const newText = text.replace(/[^\d]/g, "");
                  setState({
                    ...state,
                    stock: newText,
                  });
                }}
                value={state.stock}
              />
              <RNPickerSelect
                style={{
                  iconContainer: {
                    opacity: 0,
                  },
                  viewContainer: {
                    borderColor: colors.lightPrimary,
                    borderWidth: scale.fontPixel(1),
                    marginTop: scale.pixelSizeVertical(15),
                    borderRadius: scale.fontPixel(6),
                    height: scale.heightPixel(47),
                    justifyContent: "center",
                    paddingLeft:
                      Platform.OS === "ios" ? scale.pixelSizeHorizontal(20) : 0,
                  },
                  placeholder: {
                    fontFamily: "Outfit_400Regular",
                    fontSize: scale.fontPixel(14),
                    color: colors.grey1,
                  },
                  done: {
                    fontFamily: "Outfit_400Regular",
                    fontSize: scale.fontPixel(14),
                    color: colors.grey1,
                  },
                  inputIOS: {
                    fontFamily: "Outfit_400Regular",
                    fontSize: scale.fontPixel(14),
                    color: colors.grey1,
                  },
                  inputAndroid: {
                    fontFamily: "Outfit_400Regular",
                    fontSize: scale.fontPixel(14),
                    color: colors.grey1,
                  },
                }}
                placeholder={placeholder}
                onValueChange={(value) =>
                  setState({ ...state, category: value })
                }
                items={items}
                value={state.category}
              />
              <Button
                title={"Post"}
                textStyle={[
                  Fontscales.labelSmallRegular,
                  {
                    color: "white",
                  },
                ]}
                containerStyle={styles.btnContainer}
                onPress={() => createPostHandler()}
              />
            </View>
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
