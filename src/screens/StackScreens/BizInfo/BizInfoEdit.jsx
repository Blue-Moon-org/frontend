import { View } from "react-native";
import React from "react";
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

export const BizInfoEdit = () => {
  const { navigate, goBack } = useNavigation();

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
                  uri: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.70578014.1688424585&semt=sph",
                }}
                contentFit="cover"
                cachePolicy={"memory-disk"}
              />
              <MaterialCommunityIcons
                name="image-edit"
                size={scale.fontPixel(28)}
                color={colors.grey1}
                style={styles.iconEdit}
              />
            </View>
          </View>
          <View style={styles.textInputContainer}>
            <Text textStyle={styles.text} text={"Business name"} />
            <TextInput placeholder={"Slyvester stallone"} />
          </View>
          <View style={styles.textInputContainer}>
            <Text textStyle={styles.text} text={"About Business"} />
            <TextInput placeholder={"Caftan expert"} />
          </View>
          <View style={styles.textInputContainer}>
            <Text textStyle={styles.text} text={"Phone"} />
            <TextInput placeholder={"09145654542"} />
          </View>
          <View style={styles.textInputContainer}>
            <Text textStyle={styles.text} text={"Email "} />
            <TextInput placeholder={"Example@gmail.com"} />
          </View>
          <View style={styles.textInputContainer}>
            <Text textStyle={styles.text} text={"Secondary Address"} />
            <TextInput placeholder={"Lekki Lagos, Nigeria"} />
          </View>

          <Button
            title={"Submit"}
            onPress={() => {}}
            containerStyle={styles.btnContainer}
            textStyle={styles.btnText}
          />
        </View>
      </KeyBoardAvoidingWrapper>
    </SafeAreaView>
  );
};
