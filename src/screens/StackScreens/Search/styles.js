import { StyleSheet } from "react-native";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";

export const styles = StyleSheet.create({
  textInputContainer: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: colors.grey2,
    height: scale.heightPixel(50),
    alignItems: "center",
    paddingLeft: scale.pixelSizeHorizontal(10),
    borderRadius: scale.fontPixel(10),
    marginTop: scale.pixelSizeVertical(10),
  },
  icon: {},
  textInput: {
    paddingLeft: scale.pixelSizeHorizontal(8),
    width: "100%",
  },
  icon: {},
  container: {
    backgroundColor: colors.grey2,
    padding: scale.pixelSizeHorizontal(8),
    borderRadius: scale.fontPixel(8),
  },
  showAll: {
    marginTop: scale.pixelSizeVertical(5),
    marginBottom: scale.pixelSizeVertical(2),
    textAlign: "right",
    fontFamily: "Outfit_500Medium",
    fontSize: scale.fontPixel(10),
    color: colors.mainPrimary,
  },
  DContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: scale.pixelSizeVertical(15),
  },
  DImageContainer: {
    height: scale.heightPixel(60),
    width: "20%",
    borderRadius: scale.fontPixel(6),
  },
  DImage: {
    height: "100%",
    width: "100%",
    borderRadius: scale.fontPixel(6),
  },
  MimageContainer: {
    height: "100%",
    width: "30%",
    borderRadius: scale.fontPixel(8),
  },
  Mimage: {
    height: "100%",
    width: "100%",
    borderRadius: scale.fontPixel(8),
  },
});
