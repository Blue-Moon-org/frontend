import { TouchableOpacity, View, Linking, Platform, Alert } from "react-native";
import { Text } from "../../../components/common";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Fontscales, SharedStyles } from "../../../styles";
import { colors } from "../../../constants/colorpallette";
import { scale } from "../../../utils/scale";
import { Buyer } from "./Buyer";
import { Designer } from "./Designer";
import { useDispatch, useSelector } from "react-redux";
import { userRegistration } from "../../../Redux/actions";
import { useNavigation } from "@react-navigation/native";
import { Lodaing } from "../../../components/primary";
import * as Location from "expo-location";

export const Register = () => {
  const [accountId, updateAccountId] = useState(1);
  const [locDel, updateLocDel] = useState({
    location: "",
    address: "",
  });

  const { navigate, addListener } = useNavigation();

  const data = [
    {
      id: 1,
      name: "Buyer’s Account",
    },
    {
      id: 2,
      name: "Designer’s Account",
    },
  ];
  const phone = useSelector((state) => state.phone);
  const email = useSelector((state) => state.email);

  const [buyersState, updateBuyersState] = useState({
    showPassword: false,
    policy: false,
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    error: registerData?.error?.message,
    accountType: "Buyer",
    coords: locDel?.location?.coords,
    country: locDel?.address[0]?.country,
    city: locDel?.address[0]?.city,
    address: locDel?.address[0]?.address,
    region: locDel?.address[0]?.region,
    subRegion: locDel?.address[0]?.subregion,
  });

  const dispatch = useDispatch();
  const registerData = useSelector((state) => state.registerState);

  const submitBuyersAccount = () => {
    if (buyersState.firstName === "" && buyersState.lastName === "") {
      updateBuyersState({
        ...buyersState,
        error: "Name fields cannot be blank",
      });
    } else if (/^\S+@\S+\.\S+$/.test(buyersState.email) === false) {
      updateBuyersState({
        ...buyersState,
        error: "Invalid email",
      });
    } else if (buyersState.address === "") {
      updateBuyersState({
        ...buyersState,
        error: "Address must be filled",
      });
    } else if (buyersState.phoneNumber === "") {
      updateBuyersState({
        ...buyersState,
        error: "Phone number not valid",
      });
    } else if (buyersState.phoneNumber.length < 11) {
      updateBuyersState({
        ...buyersState,
        error: "Phone number should not be less than 11, starting with 0",
      });
    } else if (
      buyersState.password === "" &&
      buyersState.confirmPassword === ""
    ) {
      updateBuyersState({
        ...buyersState,
        error: "Passwords must not be blank",
      });
    } else if (
      buyersState.password.length < 8 &&
      buyersState.confirmPassword.length < 8
    ) {
      updateBuyersState({
        ...buyersState,
        error: "Passwords must not be less than 8",
      });
    } else if (
      buyersState.password.length < 8 &&
      buyersState.confirmPassword.length < 8
    ) {
      updateBuyersState({
        ...buyersState,
        error: "Passwords must not be less than 8 characters",
      });
    } else if (buyersState.password !== buyersState.confirmPassword) {
      updateBuyersState({
        ...buyersState,
        error: "Passwords doesn't match",
      });
    } else if (buyersState.policy === false) {
      updateBuyersState({
        ...buyersState,
        error: "Privacy policy must be read and checked",
      });
    } else if (locDel.location === "") {
      updateBuyersState({
        ...buyersState,
        error: `Unable to find your location, ${(
          <TouchableOpacity
            accessibilityActions={0.8}
            onPress={() => {
              if (Platform.OS === "ios") {
                Linking.openURL("app-settings:");
              } else {
                Linking.openSettings();
              }
            }}
          >
            <Text
              textStyle={{
                backgroundColor: colors.grey2,
                fontSize: scale.fontPixel(12),
                fontFamily: "Outfit_400Regular",
              }}
              text={"Please click here to grant permission to your location"}
            />
          </TouchableOpacity>
        )}`,
      });
    } else if (phone.phoneStatus === null || email.emailStatus === null) {
      updateBuyersState({
        ...buyersState,
        error: `Please check your internet connection`,
      });
    } else if (phone.phoneStatus === false || email.emailStatus === false) {
      updateBuyersState({
        ...buyersState,
        error: `Email or Phone Number already exist`,
      });
    } else {
      updateBuyersState({
        ...buyersState,
        error: null,
      });
      dispatch(userRegistration(buyersState, navigate));
    }
  };

  const pers = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync({
      accuracy: "fine",
    });
    if (status !== "granted") {
      Alert.alert(
        "Location Alert",
        "You may not be able to use some features with location access denied",
        [
          {
            text: "Open settings",
            onPress: () => {
              if (Platform.OS === "ios") {
                Linking.openURL("app-settings:");
              } else {
                Linking.openSettings();
              }
            },
          },
        ]
      );
      return;
    }

    const location = await Location.getCurrentPositionAsync({
      accuracy: 3,
    });
    updateLocDel({
      ...locDel,
      location: location,
    });
    await Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    })
      .then((res) => {
        updateLocDel({
          ...locDel,
          address: res,
        });
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  useEffect(() => {
    addListener("focus", () => {
      pers();
    });
  }, []);

  const [designersState, updateDesignersState] = useState({
    showPassword: false,
    policy: false,
    fullName: "",
    brandName: "",
    email: "",
    address: "",
    phoneNumber: "",
    otherContact: "",
    password: "",
    confirmPassword: "",
    error: registerData?.error?.message,
    accountType: "Designer",
    coords: locDel?.location?.coords,
    country: locDel?.address[0]?.country,
    city: locDel?.address[0]?.city,
    address: locDel?.address[0]?.address,
    region: locDel?.address[0]?.region,
    subRegion: locDel?.address[0]?.subregion,
  });

  const submitDesignersAccount = () => {
    if (designersState.fullName === "" && designersState.brandName === "") {
      updateDesignersState({
        ...designersState,
        error: "Name fields cannot be blank",
      });
    } else if (/^\S+@\S+\.\S+$/.test(designersState.email) === false) {
      updateDesignersState({
        ...designersState,
        error: "Invalid email",
      });
    } else if (designersState.address === "") {
      updateDesignersState({
        ...designersState,
        error: "Address must be filled",
      });
    } else if (designersState.phoneNumber === "") {
      updateDesignersState({
        ...designersState,
        error: "Phone number not valid",
      });
    } else if (designersState.phoneNumber.length < 11) {
      updateDesignersState({
        ...designersState,
        error: "Phone number must not be less than 11, starting with 0",
      });
    } else if (
      designersState.password === "" &&
      designersState.confirmPassword === ""
    ) {
      updateDesignersState({
        ...designersState,
        error: "Passwords must not be blank",
      });
    } else if (
      designersState.password.length < 8 &&
      designersState.confirmPassword.length < 8
    ) {
      updateDesignersState({
        ...designersState,
        error: "Passwords must not be less than 8 characters",
      });
    } else if (designersState.password !== designersState.confirmPassword) {
      updateDesignersState({
        ...designersState,
        error: "Passwords don't match",
      });
    } else if (designersState.policy === false) {
      updateDesignersState({
        ...designersState,
        error: "Privacy policy must be read and checked",
      });
    } else if (locDel.location === "") {
      updateBuyersState({
        ...buyersState,
        error: `Unable to find your location, ${(
          <TouchableOpacity
            accessibilityActions={0.8}
            onPress={() => {
              if (Platform.OS === "ios") {
                Linking.openURL("app-settings:");
              } else {
                Linking.openSettings();
              }
            }}
          >
            <Text
              textStyle={{
                backgroundColor: colors.grey2,
                fontSize: scale.fontPixel(12),
                fontFamily: "Outfit_400Regular",
              }}
              text={"Please click here to grant permission to your location"}
            />
          </TouchableOpacity>
        )}`,
      });
    } else if (phone.phoneStatus === null || email.emailStatus === null) {
      updateBuyersState({
        ...buyersState,
        error: `Please check your internet connection`,
      });
    } else if (phone.phoneStatus === false || email.emailStatus === false) {
      updateBuyersState({
        ...buyersState,
        error: `Email or Phone Number already exist`,
      });
    } else {
      updateDesignersState({
        ...designersState,
        error: null,
      });
      dispatch(userRegistration(designersState, navigate));
    }
  };

  return (
    <>
      {registerData.loading ? <Lodaing /> : null}
      <SafeAreaView style={[SharedStyles.container]}>
        <Text
          textStyle={[styles.headerText, Fontscales.headingLargeBold]}
          text={"Register for an \nAccount"}
        />
        <Text
          textStyle={[styles.subText, Fontscales.paragraphSmallMedium]}
          text={"Create a buyer’s or designer’s account"}
        />

        <View style={styles.headerOptionContainer}>
          {data.map((item, index) => {
            return (
              <TouchableOpacity
                disabled={registerData.loading}
                activeOpacity={0.8}
                style={[
                  styles.options,
                  {
                    borderColor:
                      item.id === accountId ? colors.mainPrimary : colors.grey2,
                  },
                ]}
                onPress={() => updateAccountId(item.id)}
                key={item.id}
              >
                <Text
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                  textStyle={[
                    styles.optionsText,
                    {
                      color:
                        item.id === accountId
                          ? colors.mainPrimary
                          : colors.grey1,
                      opacity: registerData.loading ? 0.6 : 1,
                      paddingLeft:
                        item.id === 1
                          ? scale.pixelSizeHorizontal(8)
                          : scale.pixelSizeHorizontal(5),
                    },
                  ]}
                  text={item.name}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        {accountId === 1 ? (
          <Buyer
            pers={pers}
            buyersState={buyersState}
            updateBuyersState={updateBuyersState}
            submitBuyersAccount={submitBuyersAccount}
            registerData={registerData}
          />
        ) : (
          <Designer
            pers={pers}
            designersState={designersState}
            updateDesignersState={updateDesignersState}
            submitDesignersAccount={submitDesignersAccount}
            registerData={registerData}
          />
        )}
      </SafeAreaView>
    </>
  );
};
