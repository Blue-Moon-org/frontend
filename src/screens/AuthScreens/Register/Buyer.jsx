import { View, Text as BaseText } from "react-native";
import React from "react";
import {
  Text,
  TextInput,
  Button,
  KeyBoardAvoidingWrapper,
} from "../../../components/common";
import { styles } from "./styles";
import { scale } from "../../../utils/scale";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../../constants/colorpallette";
import { useNavigation } from "@react-navigation/native";

export const Buyer = ({
  updateBuyersState,
  buyersState,
  submitBuyersAccount,
  registerData,
}) => {
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        marginTop: scale.pixelSizeVertical(12),
      }}
    >
      <KeyBoardAvoidingWrapper>
        <View>
          <View style={styles.subContainer}>
            <View style={{ width: "48%" }}>
              <Text text={"First Name"} textStyle={styles.label} />
              <TextInput
                textInputStyle={{}}
                //  inputState={}
                // editable={}
                onChangeText={(text) =>
                  updateBuyersState({
                    ...buyersState,
                    firstName: text,
                  })
                }
                placeholder={"Enter your first name"}
                textContentType={"givenName"}
                autoComplete={"name-given"}
                autoFocus={true}
                value={buyersState.firstName}
              />
            </View>

            <View style={{ width: "48%" }}>
              <Text text={"Last Name"} textStyle={styles.label} />
              <TextInput
                textInputStyle={{}}
                autoComplete={"name-family"}
                //    inputState={}
                //   editable={}
                onChangeText={(text) =>
                  updateBuyersState({
                    ...buyersState,
                    lastName: text,
                  })
                }
                placeholder={"Enter your last name"}
                textContentType={"familyName"}
                value={buyersState.lastName}
              />
            </View>
          </View>

          <Text text={"Email"} textStyle={styles.label} />
          <TextInput
            textInputStyle={[styles.inputSpace]}
            //    inputState={}
            //   editable={}
            onChangeText={(text) => {
              updateBuyersState({
                ...buyersState,
                email: text,
              });
            }}
            placeholder={"example@newmail.com"}
            textContentType={"emailAddress"}
            value={buyersState.email}
            autoComplete={"email"}
            keyboardType={"email-address"}
          />

          <Text text={"Address"} textStyle={styles.label} />
          <TextInput
            textInputStyle={[styles.inputSpace]}
            //    inputState={}
            //   editable={}
            onChangeText={(text) =>
              updateBuyersState({
                ...buyersState,
                address: text,
              })
            }
            placeholder={"Enter your address"}
            textContentType={"addressCity"}
            value={buyersState.address}
            autoComplete={"street-address"}
          />

          <Text text={"Phone Number"} textStyle={styles.label} />
          <TextInput
            textInputStyle={[styles.inputSpace]}
            //    inputState={}
            //   editable={}
            onChangeText={(text) =>
              updateBuyersState({
                ...buyersState,
                phoneNumber: text,
              })
            }
            keyboardType={"phone-pad"}
            placeholder={"+XXX XXX XXXX XXX"}
            textContentType={"telephoneNumber"}
            value={buyersState.phoneNumber}
            autoComplete={"tel-device"}
          />

          <View style={styles.subContainer}>
            <View style={{ width: "48%" }}>
              <Text text={"Password"} textStyle={styles.label} />
              <View style={styles.showPassword}>
                <TextInput
                  textInputStyle={styles.textInputStyle}
                  //    inputState={}
                  //   editable={}
                  onChangeText={(text) => {
                    const textReplace = text.replace(/ +/g, "");
                    updateBuyersState({
                      ...buyersState,
                      password: textReplace,
                    });
                  }}
                  placeholder={"************"}
                  textContentType={"password"}
                  value={buyersState.password}
                  clearButtonMode={false}
                  secureTextEntry={!buyersState.showPassword}
                />
                <MaterialCommunityIcons
                  name={
                    buyersState.showPassword ? "eye-outline" : "eye-off-outline"
                  }
                  size={scale.fontPixel(18)}
                  color={colors.blackText}
                  onPress={() =>
                    updateBuyersState({
                      ...buyersState,
                      showPassword: !buyersState.showPassword,
                    })
                  }
                />
              </View>
            </View>

            <View style={{ width: "48%" }}>
              <Text text={"Confirm Password"} textStyle={styles.label} />
              <View style={styles.showPassword}>
                <TextInput
                  textInputStyle={styles.textInputStyle}
                  autoComplete={"password"}
                  //    inputState={}
                  //   editable={}
                  onChangeText={(text) => {
                    const textReplace = text.replace(/ +/g, "");
                    updateBuyersState({
                      ...buyersState,
                      confirmPassword: textReplace,
                    });
                  }}
                  placeholder={"************"}
                  textContentType={"password"}
                  value={buyersState.confirmPassword}
                  clearButtonMode={false}
                  secureTextEntry={!buyersState.showPassword}
                />
                <MaterialCommunityIcons
                  name={
                    buyersState.showPassword ? "eye-outline" : "eye-off-outline"
                  }
                  size={scale.fontPixel(18)}
                  color={colors.blackText}
                  onPress={() =>
                    updateBuyersState({
                      ...buyersState,
                      showPassword: !buyersState.showPassword,
                    })
                  }
                />
              </View>
            </View>
          </View>

          <View style={styles.checkText}>
            <MaterialCommunityIcons
              name={
                !buyersState.policy
                  ? "checkbox-blank-outline"
                  : "checkbox-marked"
              }
              size={scale.fontPixel(20)}
              color={colors.fadedPrimary}
              onPress={() =>
                updateBuyersState({
                  ...buyersState,
                  policy: !buyersState.policy,
                })
              }
            />
            <BaseText style={[styles.baseCheckText, styles.textScale]}>
              By ticking this box, you’ve agreed to out{" "}
              <Text
                textStyle={styles.editableCheckText}
                text={"terms, condition"}
              />{" "}
              and{" "}
              <Text
                textStyle={styles.editableCheckText}
                text={"private policy"}
              />
            </BaseText>
          </View>

          <View style={styles.errContainer}>
            <Text
              textStyle={styles.errorText}
              text={buyersState.error ?? registerData.error.message}
            />
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: scale.pixelSizeVertical(15),
            }}
          >
            <Button
              textStyle={styles.btnTextStyle}
              title={"Register"}
              containerStyle={styles.btnContainer}
              onPress={() => submitBuyersAccount()}
            />
          </View>

          <View style={{ paddingTop: scale.pixelSizeVertical(23) }}>
            <BaseText style={[styles.textScale, { textAlign: "center" }]}>
              Already a user?{" "}
              <Text
                textStyle={styles.editableCheckText}
                onPress={() => {
                  navigate("Login");
                }}
                text={"Login"}
              />
            </BaseText>
          </View>
        </View>
      </KeyBoardAvoidingWrapper>
    </View>
  );
};
