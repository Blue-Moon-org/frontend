import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SharedStyles, Fontscales } from "../../../styles";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../../constants/colorpallette";
import { scale } from "../../../utils/scale";
import {
  KeyBoardAvoidingWrapper,
  Text,
  TextInput,
  Button,
} from "../../../components/common";
import { Image } from "expo-image";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userUpadte } from "../../../Redux/actions/DetailsUpdate";
import { Lodaing } from "../../../components/primary";
import { Picker as SelectPicker } from "@react-native-picker/picker";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";

export const BizInfoEdit = () => {
  const { goBack } = useNavigation();
  const dispatch = useDispatch();

  const [user, updateUser] = useState({
    brandImage: "",
    fullName: "",
    brandName: "",
    email: "",
    phoneNumber: "",
    address: "",
    sex: "",
    aboutBusiness: "",
  });

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("user");

      let result = JSON.parse(jsonValue);
      updateUser({
        brandImage: "",
        fullName: `${result.firstname} ${result.lastname}`,
        brandName: result.brand_name,
        email: result.email,
        phoneNumber: result.phone,
        address: result.address,
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

  const _updateHandler = () => {
    if (user.fullName === "") {
      console.warn("err");
    } else if (user.address === "") {
      console.warn("err");
    } else if (/^\S+@\S+\.\S+$/.test(user.email) === false) {
      console.warn("err");
    } else if (user.phoneNumber === "" || user.phoneNumber.length < 11) {
      console.warn("err");
    } else if (user.sex === "") {
      console.warn("err");
    } else {
      dispatch(userUpadte(user, goBack));
    }
  };
  const update = useSelector((state) => state.update);

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
          brandImage: result?.assets[0],
        });
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <>
      {update.loading ? <Lodaing /> : null}
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
              text={"Business Information Edit"}
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
                    uri: user.brandImage?.uri,
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
              <Text textStyle={styles.text} text={"Business name"} />
              <TextInput
                value={user.brandName}
                placeholder={"Slyvester clothing"}
                onChangeText={(text) => {
                  updateUser({ ...user, brandName: text });
                }}
              />
            </View>
            <View style={styles.textInputContainer}>
              <Text textStyle={styles.text} text={"Full name"} />
              <TextInput
                onChangeText={(text) => {
                  updateUser({ ...user, fullName: text });
                }}
                value={user.fullName}
                placeholder={"Full name"}
              />
            </View>
            <View style={styles.textInputContainer}>
              <Text textStyle={styles.text} text={"Phone"} />
              <TextInput
                onChangeText={(text) => {
                  updateUser({ ...user, phoneNumber: text });
                }}
                maxLength={11}
                value={user.phoneNumber}
                placeholder={"09145654542"}
              />
            </View>
            <View style={styles.textInputContainer}></View>
            <View style={styles.textInputContainer}>
              <Text textStyle={styles.text} text={"Address"} />
              <TextInput
                onChangeText={(text) => {
                  updateUser({ ...user, address: text });
                }}
                placeholder={"Lekki Lagos, Nigeria"}
                value={user.address}
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
    </>
  );
};
