import { colors } from "../../../constants/colorpallette";
import { scale } from "../../../utils/scale";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  skipText: {
    textTransform: "lowercase",
    textAlign: "right",
    paddingVertical: scale.pixelSizeVertical(16),
  },
  renderDataController: {
    width: scale.widthPixel(361),
  },
  image: {
    width: scale.widthPixel(290),
    height: scale.heightPixel(300),
    marginBottom: scale.pixelSizeVertical(60),
  },
  mainText: {
    color: colors.blackText,
  },
  coloredMainText: {
    color: colors.mainPrimary,
  },
  subText: {
    paddingTop: scale.pixelSizeVertical(22),
  },
  control: {
    marginBottom: scale.pixelSizeVertical(55),
    width: "100%",
    backgroundColor: "transparent",
  },
  rowControl: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.mainPrimary,
    position: "absolute",
    padding: scale.fontPixel(14),
    borderRadius: scale.fontPixel(30),
  },
  googleSignInButton: {
    backgroundColor: colors.mainPrimary,
    paddingHorizontal: scale.pixelSizeHorizontal(30),
    paddingVertical: scale.pixelSizeVertical(12),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: scale.fontPixel(8),
  },
  googleSignUpText: {
    color: "white",
    paddingLeft: scale.pixelSizeHorizontal(10),
  },
});
