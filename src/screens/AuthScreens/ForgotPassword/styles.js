import { StyleSheet } from "react-native";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";

export const styles = StyleSheet.create({
  headerText: {
    marginTop: scale.pixelSizeVertical(30),
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
    marginTop: scale.pixelSizeVertical(35),
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
  image: {
    width: scale.widthPixel(110),
    height: scale.heightPixel(103),
    // borderColor: "red",
    // borderWidth: 1,
  },
  imageContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    height: scale.heightPixel(170),
    width: "100%",
    // borderColor: "red",
    // borderWidth: 1,
  },
  titleText: {
    marginTop: scale.pixelSizeVertical(50),
  },
  subText: {
    marginTop: scale.pixelSizeVertical(10),
    color: colors.mainPrimary,
  },
  pressableContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  innerView: {
    // borderColor: colors.mainPrimary,
    width: "13%",
    borderRadius: scale.fontPixel(5),
    borderWidth: scale.fontPixel(2),
    padding: scale.pixelSizeVertical(12),
  },
  innerText: {
    textAlign: "center",
  },
  textInputStyle: {
    opacity: 0,
    height: 1,
    width: 1,
    backgroundColor: "red",
    borderColor: "red",
    borderWidth: 1,
    position: "absolute",
    zIndex: -19,
  },
  otpContainer: {
    marginTop: scale.pixelSizeVertical(40),
  },
  btnContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: scale.pixelSizeVertical(64),
  },
  timeBtnContainer: {
    backgroundColor: colors.lightPrimary,
    width: "45%",
    paddingVertical: scale.pixelSizeVertical(12),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale.fontPixel(10),
  },
  timeBtnText: {
    color: "white",
  },
  verifyBtnText: {
    color: "white",
  },
  VerifyBtnContainer: {
    backgroundColor: colors.mainPrimary,
    width: "45%",
    paddingVertical: scale.pixelSizeVertical(12),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale.fontPixel(10),
  },
  subContainer: {
    justifyContent: "space-between",
    marginBottom: scale.pixelSizeVertical(16),
  },
  inputSpace: {
    marginBottom: scale.pixelSizeVertical(16),
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
  textInputStyle: {
    width: "90%",
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    paddingRight: scale.pixelSizeHorizontal(7),
  },
  textInputStyleHidden: {
    opacity: 0,
    height: 1,
    width: 1,
    backgroundColor: "red",
    borderColor: "red",
    borderWidth: 1,
    position: "absolute",
    zIndex: -19,
  },
  errorText: {
    fontSize: scale.fontPixel(13),
    fontFamily: "Outfit_400Regular",
    lineHeight: scale.heightPixel(5),
    paddingTop: scale.pixelSizeVertical(12),
    paddingLeft: scale.pixelSizeHorizontal(5),
    color: colors.error,
  },
  errorText: {
    fontSize: scale.fontPixel(13),
    fontFamily: "Outfit_400Regular",
    lineHeight: scale.heightPixel(15),
    paddingTop: scale.pixelSizeVertical(12),
    paddingLeft: scale.pixelSizeHorizontal(5),
    color: colors.error,
  },
});
