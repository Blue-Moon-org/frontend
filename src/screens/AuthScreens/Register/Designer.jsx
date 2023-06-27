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

export const Designer = ({
  updateDesignersState,
  designersState,
  submitDesignersAccount,
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
              <Text text={"Full Name"} textStyle={styles.label} />
              <TextInput
                textInputStyle={{}}
                //    inputState={}
                //   editable={}
                onChangeText={(text) =>
                  updateDesignersState({ ...designersState, fullName: text })
                }
                placeholder={"Enter your first name"}
                textContentType={"givenName"}
                autoComplete={"name-given"}
                autoFocus={true}
                value={designersState.fullName}
              />
            </View>

            <View style={{ width: "48%" }}>
              <Text text={"Brand Name"} textStyle={styles.label} />
              <TextInput
                textInputStyle={{}}
                autoComplete={"username"}
                //    inputState={}
                //   editable={}
                onChangeText={(text) =>
                  updateDesignersState({ ...designersState, brandName: text })
                }
                placeholder={"Enter your last last"}
                textContentType={"familyName"}
                value={designersState.brandName}
              />
            </View>
          </View>

          <Text text={"Email"} textStyle={styles.label} />
          <TextInput
            textInputStyle={[styles.inputSpace]}
            //    inputState={}
            //   editable={}
            onChangeText={(text) =>
              updateDesignersState({ ...designersState, email: text })
            }
            placeholder={"example@newmail.com"}
            textContentType={"name"}
            value={designersState.email}
            autoComplete={"email"}
          />

          <Text text={"Address"} textStyle={styles.label} />
          <TextInput
            textInputStyle={[styles.inputSpace]}
            //    inputState={}
            //   editable={}
            onChangeText={(text) =>
              updateDesignersState({ ...designersState, address: text })
            }
            placeholder={"Enter your address"}
            textContentType={"addressCity"}
            value={designersState.address}
            autoComplete={"street-address"}
          />

          <View style={styles.subContainer}>
            <View style={{ width: "48%" }}>
              <Text text={"Phone Number"} textStyle={styles.label} />
              <TextInput
                textInputStyle={{}}
                //    inputState={}
                //   editable={}
                onChangeText={(text) =>
                  updateDesignersState({ ...designersState, phoneNumber: text })
                }
                autoComplete={"tel-device"}
                placeholder={"+XXX XXX XXXX XXX"}
                value={designersState.phoneNumber}
                textContentType={"telephoneNumber"}
              />
            </View>

            <View style={{ width: "48%" }}>
              <Text text={"Other Contact"} textStyle={styles.label} />
              <TextInput
                textInputStyle={{}}
                //    inputState={}
                //   editable={}
                onChangeText={(text) =>
                  updateDesignersState({
                    ...designersState,
                    otherContact: text,
                  })
                }
                value={designersState.otherContact}
                autoComplete={"tel-device"}
                placeholder={"+XXX XXX XXXX XXX"}
                textContentType={"telephoneNumber"}
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
                  onChangeText={(text) =>
                    updateDesignersState({
                      ...designersState,
                      password: text,
                    })
                  }
                  placeholder={"************"}
                  textContentType={"password"}
                  value={designersState.password}
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
                  onChangeText={(text) =>
                    updateDesignersState({
                      ...designersState,
                      confirmPassword: text,
                    })
                  }
                  placeholder={"************"}
                  textContentType={"password"}
                  value={designersState.confirmPassword}
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

          <View style={styles.errContainer}>
            <Text
              style={{
                color: "red",
              }}
              text={designersState.error ?? registerData.error.message}
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
              title={"Add Specialties"}
              containerStyle={styles.btnContainer}
              onPress={() => submitDesignersAccount()}
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
