import { StyleSheet } from "react-native";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";

export const styles = StyleSheet.create({
  headerText: {
    paddingTop: scale.pixelSizeVertical(30),
  },
  subText: {
    color: colors.mainPrimary,
    marginTop: scale.pixelSizeVertical(10),
  },
  label: {
    fontSize: scale.fontPixel(14),
    fontFamily: "Outfit_500Medium",
    lineHeight: scale.heightPixel(15),
    paddingBottom: scale.pixelSizeVertical(8),
    paddingLeft: scale.pixelSizeHorizontal(5),
  },
  inputContainer: {
    marginTop: scale.pixelSizeVertical(27),
  },
  inputSpace: {
    marginBottom: scale.pixelSizeVertical(16),
  },
  textInputStyle: {
    width: "90%",
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    paddingRight: scale.pixelSizeHorizontal(7),
  },
  showPassword: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#F0F0F0",
    borderWidth: scale.fontPixel(1),
    borderRadius: scale.fontPixel(5),
    height: scale.heightPixel(47),
    justifyContent: "space-between",
    paddingRight: scale.pixelSizeHorizontal(16),
  },
  condtionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: scale.pixelSizeVertical(20),
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberMeText: {
    marginLeft: scale.pixelSizeHorizontal(6),
    fontSize: scale.fontPixel(14),
    fontFamily: "Outfit_400Regular",
    lineHeight: scale.heightPixel(14),
  },
  forgotPassword: {
    fontSize: scale.fontPixel(14),
    fontFamily: "Outfit_400Regular",
    lineHeight: scale.heightPixel(14),
    color: colors.mainPrimary,
  },
  outterContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: scale.pixelSizeVertical(50),
  },
  innerContainer: {
    backgroundColor: colors.mainPrimary,
    paddingHorizontal: scale.pixelSizeHorizontal(40),
    paddingVertical: scale.pixelSizeVertical(12),
    borderRadius: scale.fontPixel(8),
  },
  btnTextStyle: {
    color: "white",
  },
  bottomTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingBottom: scale.pixelSizeVertical(25),
  },
  bottomText: {
    marginLeft: scale.pixelSizeHorizontal(6),
    fontSize: scale.fontPixel(14),
    fontFamily: "Outfit_400Regular",
    lineHeight: scale.heightPixel(14),
  },
  signUpText: {
    color: colors.mainPrimary,
  },
});
