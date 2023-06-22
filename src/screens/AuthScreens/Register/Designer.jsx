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
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../../constants/colorpallette";
import { useNavigation } from "@react-navigation/native";

export const Designer = ({ updateDesignersState, designersState }) => {
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
                //    inputState={}
                //   editable={}
                // onChangeText={}
                placeholder={"Enter your first name"}
                textContentType={"givenName"}
                // autoComplete={"name-given"}
                autoFocus={true}
                // value={""}
              />
            </View>

            <View style={{ width: "48%" }}>
              <Text text={"Brand Name"} textStyle={styles.label} />
              <TextInput
                textInputStyle={{}}
                autoComplete={"username"}
                //    inputState={}
                //   editable={}
                // onChangeText={}
                placeholder={"Enter your last last"}
                textContentType={"familyName"}
                // value={""}
              />
            </View>
          </View>

          <Text text={"Email"} textStyle={styles.label} />
          <TextInput
            textInputStyle={[styles.inputSpace]}
            //    inputState={}
            //   editable={}
            // onChangeText={}
            placeholder={"example@newmail.com"}
            textContentType={"name"}
            // value={""}
            autoComplete={"email"}
          />

          <Text text={"Address"} textStyle={styles.label} />
          <TextInput
            textInputStyle={[styles.inputSpace]}
            //    inputState={}
            //   editable={}
            // onChangeText={}
            placeholder={"Enter your address"}
            textContentType={"addressCity"}
            // value={""}
            autoComplete={"street-address"}
          />

          <View style={styles.subContainer}>
            <View style={{ width: "48%" }}>
              <Text text={"Phone Number"} textStyle={styles.label} />
              <TextInput
                textInputStyle={{}}
                //    inputState={}
                //   editable={}
                // onChangeText={}
                placeholder={"+XXX XXX XXXX XXX"}
                textContentType={"givenName"}
                // autoComplete={"name-given"}
                // value={""}
              />
            </View>

            <View style={{ width: "48%" }}>
              <Text text={"Other Contact"} textStyle={styles.label} />
              <TextInput
                textInputStyle={{}}
                autoComplete={"username"}
                //    inputState={}
                //   editable={}
                // onChangeText={}
                placeholder={"+XXX XXX XXXX XXX"}
                textContentType={"familyName"}
                // value={""}
              />
            </View>
          </View>

          <View style={styles.subContainer}>
            <View style={{ width: "48%" }}>
              <Text text={"Password"} textStyle={styles.label} />
              <View style={styles.showPassword}>
                <TextInput
                  textInputStyle={styles.textInputStyle}
                  //    inputState={}
                  //   editable={}
                  // onChangeText={}
                  placeholder={"************"}
                  textContentType={"givenName"}
                  // autoComplete={"name-given"}
                  // value={""}
                  clearButtonMode={false}
                  secureTextEntry={!designersState.showPassword}
                />
                <MaterialCommunityIcons
                  name={
                    designersState.showPassword
                      ? "eye-outline"
                      : "eye-off-outline"
                  }
                  size={scale.fontPixel(18)}
                  color={colors.blackText}
                  onPress={() =>
                    updateDesignersState({
                      ...designersState,
                      showPassword: !designersState.showPassword,
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
                  autoComplete={"name-family"}
                  //    inputState={}
                  //   editable={}
                  // onChangeText={}
                  placeholder={"************"}
                  textContentType={"familyName"}
                  // value={""}
                  clearButtonMode={false}
                  secureTextEntry={!designersState.showPassword}
                />
                <MaterialCommunityIcons
                  name={
                    designersState.showPassword
                      ? "eye-outline"
                      : "eye-off-outline"
                  }
                  size={scale.fontPixel(18)}
                  color={colors.blackText}
                  onPress={() =>
                    updateDesignersState({
                      ...designersState,
                      showPassword: !designersState.showPassword,
                    })
                  }
                />
              </View>
            </View>
          </View>

          <View style={styles.checkText}>
            <MaterialCommunityIcons
              name={
                !designersState.policy
                  ? "checkbox-blank-outline"
                  : "checkbox-marked"
              }
              size={scale.fontPixel(20)}
              color={colors.fadedPrimary}
              onPress={() =>
                updateDesignersState({
                  ...designersState,
                  policy: !designersState.policy,
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

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: scale.pixelSizeVertical(20),
            }}
          >
            <Button
              textStyle={styles.btnTextStyle}
              title={"Add Specialties"}
              containerStyle={styles.btnContainer}
            />
          </View>

          <View style={{ paddingTop: scale.pixelSizeVertical(40) }}>
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
