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
  headerOptionContainer: {
    marginTop: scale.pixelSizeVertical(20),
    flexDirection: "row",
    width: scale.widthPixel(280),
  },
  options: {
    borderBottomWidth: scale.widthPixel(2),
    flexDirection: "row",
    justifyContent: "space-between",
    width: scale.widthPixel(140),
  },
  optionsText: {
    fontSize: scale.fontPixel(10),
    fontFamily: "Outfit_500Medium",
    lineHeight: scale.heightPixel(15),
    paddingBottom: scale.pixelSizeVertical(6),
  },
  label: {
    fontSize: scale.fontPixel(14),
    fontFamily: "Outfit_500Medium",
    lineHeight: scale.heightPixel(15),
    paddingBottom: scale.pixelSizeVertical(8),
    paddingLeft: scale.pixelSizeHorizontal(5),
  },
  textInputStyle: {
    width: "90%",
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    paddingRight: scale.pixelSizeHorizontal(7),
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: scale.pixelSizeVertical(16),
  },
  inputSpace: {
    marginBottom: scale.pixelSizeVertical(16),
  },
  checkText: {
    flexDirection: "row",
    marginTop: scale.pixelSizeVertical(5),
  },
  baseCheckText: {
    paddingHorizontal: scale.pixelSizeHorizontal(10),
  },
  editableCheckText: {
    color: colors.mainPrimary,
  },
  textScale: {
    fontSize: scale.fontPixel(13),
    fontFamily: "Outfit_400Regular",
    lineHeight: scale.heightPixel(15),
    paddingBottom: scale.pixelSizeVertical(8),
    paddingLeft: scale.pixelSizeHorizontal(5),
  },
  btnTextStyle: {
    color: "white",
  },
  btnContainer: {
    backgroundColor: colors.mainPrimary,
    paddingHorizontal: scale.pixelSizeHorizontal(40),
    paddingVertical: scale.pixelSizeVertical(12),
    borderRadius: scale.fontPixel(8),
  },
  scroll: {
    flex: 1,
    marginTop: scale.pixelSizeVertical(12),
    height: "100%",
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
});
