import { StyleSheet } from "react-native";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
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
  skip: {
    position: "absolute",
    top: scale.pixelSizeVertical(10),
    right: scale.pixelSizeHorizontal(10),
    marginTop: Constants.statusBarHeight + scale.pixelSizeVertical(5),
  },
  titleText: {
    marginTop: scale.pixelSizeVertical(50),
  },
  headerText: {},
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
  errorText: {
    fontSize: scale.fontPixel(13),
    fontFamily: "Outfit_400Regular",
    lineHeight: scale.heightPixel(15),
    paddingTop: scale.pixelSizeVertical(12),
    paddingLeft: scale.pixelSizeHorizontal(5),
    color: colors.error,
  },
});
