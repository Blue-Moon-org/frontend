import { View } from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { colors } from "../../../constants/colorpallette";
import { scale } from "../../../utils/scale";
import { SafeAreaView } from "react-native-safe-area-context";
import { Fontscales, SharedStyles } from "../../../styles";
import { Text } from "../../../components/common";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const PersonalInfo = () => {
  const { navigate, goBack } = useNavigation();
  return (
    <SafeAreaView style={SharedStyles.container}>
      <Ionicons
        onPress={() => goBack()}
        name="md-arrow-back-sharp"
        size={scale.fontPixel(24)}
        color={colors.blackText}
        style={{ marginTop: scale.pixelSizeVertical(8) }}
      />
      <View style={styles.topContainer}>
        <Text
          text={"Personal Information"}
          textStyle={Fontscales.headingLargeBold}
        />
        <AntDesign
          onPress={() => {
            navigate("PersonalInfoEdit");
          }}
          name="edit"
          size={scale.fontPixel(20)}
          color={colors.blackText}
        />
      </View>
      <View style={styles.detailContainer}>
        <Text text={"Username"} textStyle={Fontscales.labelSmallMedium} />
        <Text
          text={"slivker"}
          textStyle={[
            Fontscales.labelSmallMedium,
            {
              color: "#848495",
            },
          ]}
        />
      </View>
      <View style={styles.detailContainer}>
        <Text text={"Phone"} textStyle={Fontscales.labelSmallMedium} />
        <Text
          text={"08076565434"}
          textStyle={[
            Fontscales.labelSmallMedium,
            {
              color: "#848495",
            },
          ]}
        />
      </View>
      <View style={styles.detailContainer}>
        <Text text={"Email"} textStyle={Fontscales.labelSmallMedium} />
        <Text
          text={"Example@gmail.com"}
          textStyle={[
            Fontscales.labelSmallMedium,
            {
              color: "#848495",
            },
          ]}
        />
      </View>
      <View style={styles.detailContainer}>
        <Text text={"Gender"} textStyle={Fontscales.labelSmallMedium} />
        <Text
          text={"male"}
          textStyle={[
            Fontscales.labelSmallMedium,
            {
              color: "#848495",
            },
          ]}
        />
      </View>
      <View style={styles.detailContainer}>
        <Text
          text={"Primary Address"}
          textStyle={Fontscales.labelSmallMedium}
        />
        <Text
          text={"Ikotun Lagos, Nigeria"}
          textStyle={[
            Fontscales.labelSmallMedium,
            {
              color: "#848495",
            },
          ]}
        />
      </View>
      <View style={styles.detailContainer}>
        <Text
          text={"Secondary Address"}
          textStyle={Fontscales.labelSmallMedium}
        />
        <Text
          text={"Lekki Lagos, Nigeria"}
          textStyle={[
            Fontscales.labelSmallMedium,
            {
              color: "#848495",
            },
          ]}
        />
      </View>
    </SafeAreaView>
  );
};
