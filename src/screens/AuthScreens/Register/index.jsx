import { TouchableOpacity, View } from "react-native";
import { Text } from "../../../components/common";
import React, { useState } from "react";
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

export const Register = () => {
  const [accountId, updateAccountId] = useState(1);

  const { navigate } = useNavigation();

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
    } else if (
      buyersState.password === "" &&
      buyersState.confirmPassword === ""
    ) {
      updateBuyersState({
        ...buyersState,
        error: "Passwords must not be blank",
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
    } else {
      updateBuyersState({
        ...buyersState,
        error: null,
      });
      dispatch(userRegistration(buyersState, navigate));
    }
  };

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
    } else if (
      designersState.password === "" &&
      designersState.confirmPassword === ""
    ) {
      updateDesignersState({
        ...designersState,
        error: "Passwords must not be blank",
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
            buyersState={buyersState}
            updateBuyersState={updateBuyersState}
            submitBuyersAccount={submitBuyersAccount}
            registerData={registerData}
          />
        ) : (
          <Designer
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
