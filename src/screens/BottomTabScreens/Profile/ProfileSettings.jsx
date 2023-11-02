import { View, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { ProfileHeader } from "../../../components/primary";
import { SafeAreaView } from "react-native-safe-area-context";
import { SharedStyles, Fontscales } from "../../../styles";
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { Text } from "../../../components/common";
import { useNavigation } from "@react-navigation/native";
import { scale } from "../../../utils/scale";
import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userLogout } from "../../../Redux/actions/loginActions";
import { useDispatch, useSelector } from "react-redux";

export const ProfileSettings = () => {
  const { navigate, replace } = useNavigation();

  const [user, updateUser] = useState("");

  const dispatch = useDispatch();

  const state = useSelector((state) => state.logoutState);

  // console.warn(state);

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

  const _logoutHandler = async () => {
    dispatch(userLogout("", navigate, replace));
  };

  return (
    <SafeAreaView style={SharedStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileHeader designer={false} user={user} />
        <Text text={"Profile"} textStyle={[Fontscales.labelSmallMedium]} />

        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigate("PersonalInfo")}
            style={styles.btn}
            activeOpacity={0.7}
          >
            <AntDesign name="user" size={scale.fontPixel(20)} color="black" />
            <Text
              textStyle={[
                Fontscales.labelSmallMedium,
                { marginLeft: scale.pixelSizeHorizontal(10) },
              ]}
              text={"Personal information"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate("BizInfo")}
            style={styles.btn}
            activeOpacity={0.7}
          >
            <AntDesign
              name="shoppingcart"
              size={scale.fontPixel(20)}
              color="black"
            />
            <Text
              textStyle={[
                Fontscales.labelSmallMedium,
                { marginLeft: scale.pixelSizeHorizontal(10) },
              ]}
              text={"Business information"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigate("RootStack", {
                screen: "ClassifiedActiveOrders",
              })
            }
            style={styles.btn}
            activeOpacity={0.7}
          >
            <MaterialCommunityIcons
              name="clipboard-clock-outline"
              size={scale.fontPixel(20)}
              color="black"
            />
            <Text
              textStyle={[
                Fontscales.labelSmallMedium,
                { marginLeft: scale.pixelSizeHorizontal(10) },
              ]}
              text={"Active orders"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigate("RootStack", {
                screen: "Sales",
              })
            }
            style={styles.btn}
            activeOpacity={0.7}
          >
            <Ionicons
              name="checkmark-done-circle-outline"
              size={scale.fontPixel(20)}
              color="black"
            />
            <Text
              textStyle={[
                Fontscales.labelSmallMedium,
                { marginLeft: scale.pixelSizeHorizontal(10) },
              ]}
              text={"Completed sales"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigate("RootStack", {
                screen: "Catalogue",
              })
            }
            style={styles.btn}
            activeOpacity={0.7}
          >
            <AntDesign name="staro" size={scale.fontPixel(20)} color="black" />
            <Text
              textStyle={[
                Fontscales.labelSmallMedium,
                { marginLeft: scale.pixelSizeHorizontal(10) },
              ]}
              text={"Catalogue"}
            />
          </TouchableOpacity>
        </View>

        <Text text={"General"} textStyle={[Fontscales.labelSmallMedium]} />

        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigate("Notification")}
            style={styles.btn}
            activeOpacity={0.7}
          >
            <Ionicons
              name="globe-outline"
              size={scale.fontPixel(20)}
              color="black"
            />
            <Text
              textStyle={[
                Fontscales.labelSmallMedium,
                { marginLeft: scale.pixelSizeHorizontal(10) },
              ]}
              text={"Notifications"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate("Feedback")}
            style={styles.btn}
            activeOpacity={0.7}
          >
            <Ionicons
              name="help-circle-outline"
              size={scale.fontPixel(20)}
              color="black"
            />
            <Text
              textStyle={[
                Fontscales.labelSmallMedium,
                { marginLeft: scale.pixelSizeHorizontal(10) },
              ]}
              text={"Feedback"}
            />
          </TouchableOpacity>
        </View>

        <Text text={"Legal"} textStyle={[Fontscales.labelSmallMedium]} />

        <View style={styles.container}>
          <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
            <Ionicons
              name="md-book-outline"
              size={scale.fontPixel(20)}
              color="black"
            />
            <Text
              textStyle={[
                Fontscales.labelSmallMedium,
                { marginLeft: scale.pixelSizeHorizontal(10) },
              ]}
              text={"Privacy policy"}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
            <SimpleLineIcons
              name="notebook"
              size={scale.fontPixel(20)}
              color="black"
            />
            <Text
              textStyle={[
                Fontscales.labelSmallMedium,
                { marginLeft: scale.pixelSizeHorizontal(10) },
              ]}
              text={"Terms and conditions"}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
            <Ionicons
              name="md-book-outline"
              size={scale.fontPixel(20)}
              color="black"
            />
            <Text
              textStyle={[
                Fontscales.labelSmallMedium,
                { marginLeft: scale.pixelSizeHorizontal(10) },
              ]}
              text={"Close account"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => _logoutHandler()}
            style={styles.btn}
            activeOpacity={0.7}
          >
            <SimpleLineIcons
              name="notebook"
              size={scale.fontPixel(20)}
              color="black"
            />
            <Text
              textStyle={[
                Fontscales.labelSmallMedium,
                { marginLeft: scale.pixelSizeHorizontal(10) },
              ]}
              text={"Log out"}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: scale.pixelSizeVertical(80),
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
