import { StyleSheet } from "react-native";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";

export const styles = StyleSheet.create({
  eachContainer: {
    height: scale.heightPixel(80),
    marginVertical: scale.pixelSizeVertical(8),
    borderRadius: scale.fontPixel(8),
    flexDirection: "row",
    backgroundColor: "#FEF8F1",
  },
  imageContainer: {
    width: "25%",
    height: "100%",
    borderRadius: scale.fontPixel(8),
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: scale.fontPixel(8),
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "75%",
  },
  iconTextContainer: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginVertical: scale.pixelSizeVertical(10),
    marginRight: scale.fontPixel(8),
  },
  textContainer: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginVertical: scale.pixelSizeVertical(5),
    marginLeft: scale.fontPixel(8),
  },
  topContainer: {
    flexDirection: "row",
    marginTop: scale.pixelSizeVertical(10),
  },
  detailImageContainer: {
    height: scale.heightPixel(90),
    width: "25%",
    borderRadius: scale.fontPixel(8),
  },
  orderImage: {
    height: "100%",
    width: "100%",
    borderRadius: scale.fontPixel(8),
  },
  detailTextContainer: {
    marginLeft: scale.pixelSizeHorizontal(8),
    marginTop: scale.pixelSizeVertical(6),
    justifyContent: "space-between",
  },
  iconsContainer: {
    marginBottom: scale.pixelSizeVertical(6),
    flexDirection: "row",
  },
  chatIconContainer: {
    backgroundColor: colors.mainPrimary,
    height: scale.heightPixel(25),
    width: scale.widthPixel(25),
    alignItems: "center",
    justifyContent: "center",
    marginRight: scale.pixelSizeHorizontal(8),
    borderRadius: scale.fontPixel(6),
  },
  callIconContainer: {
    backgroundColor: "#F6D6AA",
    height: scale.heightPixel(25),
    width: scale.widthPixel(25),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale.fontPixel(6),
  },
  orderDetailContainer: {
    backgroundColor: colors.grey2,
    padding: scale.fontPixel(8),
    marginBottom: -scale.pixelSizeVertical(12),
    borderRadius: scale.fontPixel(8),
    marginTop: scale.pixelSizeVertical(8),
  },
  eachDetailContainer: {
    flexDirection: "row",
    marginBottom: scale.pixelSizeVertical(12),
    justifyContent: "space-between",
  },
  reportText: {
    marginTop: scale.pixelSizeVertical(32),
    textAlign: "right",
    fontFamily: "Outfit_500Medium",
    fontSize: scale.fontPixel(10),
    color: colors.mainPrimary,
  },
  reportTex: {
    fontFamily: "Outfit_400Regular",
    fontSize: scale.fontPixel(10),
    color: colors.blackText,
  },
  mainStepContainer: {
    flexDirection: "row",
    marginTop: scale.pixelSizeVertical(40),
  },
  stepsContainer: {
    width: scale.widthPixel(40),
    alignItems: "center",
  },
  topBottomContainer: {
    backgroundColor: colors.mainPrimary,
    height: scale.heightPixel(30),
    width: scale.widthPixel(30),
    borderRadius: scale.fontPixel(8),
    alignItems: "center",
    justifyContent: "center",
  },
  line1: {
    backgroundColor: colors.mainPrimary,
    height: scale.heightPixel(28),
    width: scale.widthPixel(4),
  },
  topBottomTextContainer: {
    height: scale.heightPixel(30),
    borderRadius: scale.fontPixel(8),
    justifyContent: "center",
  },
  bottomTextContainer: {
    height: scale.heightPixel(24),
    borderRadius: scale.fontPixel(4),
    marginTop: scale.pixelSizeVertical(24),
    justifyContent: "center",
  },
});
