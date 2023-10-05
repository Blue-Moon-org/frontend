import { View } from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { colors } from "../../../constants/colorpallette";
import { scale } from "../../../utils/scale";
import { SafeAreaView } from "react-native-safe-area-context";
import { Fontscales, SharedStyles } from "../../../styles";
import { Text } from "../../../components/common";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const PersonalInfo = () => {
  const { navigate, goBack } = useNavigation();
  const [user, updateUser] = useState("");

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("user");
      updateUser(JSON.parse(jsonValue));
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
  }, [user]);

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
        <Text text={"Full name"} textStyle={Fontscales.labelSmallMedium} />
        <Text
          text={user.fullname}
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
          text={user.phone}
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
          text={user.email}
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
          text={user.sex ?? "-"}
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
          text={user?.address ?? "-"}
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
          text={user?.secondaryAddress ? user?.secondaryAddress : "-"}
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
