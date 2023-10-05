import { ScrollView, View } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Fontscales, SharedStyles } from "../../../styles";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";
import {
  Button,
  KeyBoardAvoidingWrapper,
  Text,
  TextInput,
} from "../../../components/common";
import { Image } from "expo-image";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userUpadte } from "../../../Redux/actions/DetailsUpdate";

export const PersonalInfoEdit = () => {
  const { goBack, navigate } = useNavigation();
  const dispatch = useDispatch();

  const [user, updateUser] = useState({
    profilePicture: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    primaryAddress: "",
    secondaryAddress: "",
  });

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("user");

      let result = JSON.parse(jsonValue);
      updateUser({
        profilePicture: "",
        firstName: result.firstname,
        lastName: result.lastname,
        email: result.email,
        phoneNumber: result.phone,
        primaryAddress: result.address ?? "",
        secondaryAddress: "",
      });
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    let sub = true;
    if (sub) {
      getData();
    }

    return () => (sub = false);
  }, []);

  const update = useSelector((state) => state.update);
  // console.warn(update);

  const _updateHandler = () => {
    if (user.firstName === "") {
      console.warn("err");
    } else if (user.lastName === "") {
      console.warn("err");
    } else if (user.email === "") {
      console.warn("err");
    } else if (user.phoneNumber === "" || user.phoneNumber.length < 10) {
      console.warn("err");
    } else if (user.primaryAddress === "") {
      console.warn("err");
    } else {
      dispatch(userUpadte(user, navigate));
    }
  };

  const _galleryHandler = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: false,
        base64: true,
        quality: 1,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        selectionLimit: 1,
        allowsMultipleSelection: false,
        exif: true,
        orderedSelection: true,
        aspect: [3, 4],
      });
      if (!result.canceled) {
        updateUser({
          ...user,
          profilePicture: result.assets[0],
        });
      }
    } catch (error) {
      popUp(error);
    }
  };

  return (
    <SafeAreaView style={SharedStyles.container}>
      <KeyBoardAvoidingWrapper offset={scale.heightPixel(5)}>
        <View>
          <Ionicons
            onPress={() => goBack()}
            name="md-arrow-back-sharp"
            size={scale.fontPixel(24)}
            color={colors.blackText}
            style={{ marginTop: scale.pixelSizeVertical(8) }}
          />
          <Text
            text={"Personal Information Edit"}
            textStyle={[
              Fontscales.labelLargeMedium,
              {
                marginVertical: scale.pixelSizeVertical(12),
              },
            ]}
          />
          <View style={styles.imageConatiner}>
            <View style={styles.imageEditConatiner}>
              <Image
                style={styles.image}
                source={{
                  uri: user.profilePicture?.uri,
                }}
                contentFit="cover"
                cachePolicy={"memory-disk"}
              />

              <MaterialCommunityIcons
                name="image-edit"
                size={scale.fontPixel(28)}
                color={colors.grey1}
                style={styles.iconEdit}
                onPress={() => _galleryHandler()}
              />
            </View>
          </View>

          <View style={styles.textInputContainer}>
            <Text textStyle={styles.text} text={"First name"} />
            <TextInput
              value={user.firstName}
              onChangeText={(text) => {
                updateUser({ ...user, firstName: text });
              }}
              placeholder={"Slyvester"}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text textStyle={styles.text} text={"Last name"} />
            <TextInput
              value={user.lastName}
              onChangeText={(text) => {
                updateUser({ ...user, lastName: text });
              }}
              placeholder={"stallone"}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text textStyle={styles.text} text={"Email"} />
            <TextInput
              value={user.email}
              onChangeText={(text) => {
                updateUser({ ...user, email: text });
              }}
              placeholder={"Example@gmail.com"}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text textStyle={styles.text} text={"Phone"} />
            <TextInput
              value={user.phoneNumber}
              onChangeText={(text) => {
                updateUser({ ...user, phoneNumber: text });
              }}
              placeholder={"09145654542"}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text textStyle={styles.text} text={"Primary Address"} />
            <TextInput
              value={user.primaryAddress}
              onChangeText={(text) => {
                updateUser({ ...user, primaryAddress: text });
              }}
              placeholder={"Ikotun Lagos, Nigeria"}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text textStyle={styles.text} text={"Secondary Address"} />
            <TextInput
              value={user.secondaryAddress}
              onChangeText={(text) => {
                updateUser({ ...user, secondaryAddress: text });
              }}
              placeholder={"Lekki Lagos, Nigeria"}
            />
          </View>

          <Button
            title={"Submit"}
            onPress={() => _updateHandler()}
            containerStyle={styles.btnContainer}
            textStyle={styles.btnText}
          />
        </View>
      </KeyBoardAvoidingWrapper>
    </SafeAreaView>
  );
};
