import { StyleSheet } from "react-native";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";

export const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    marginVertical: scale.pixelSizeVertical(10),
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailContainer: {
    flexDirection: "row",
    backgroundColor: colors.grey2,
    justifyContent: "space-between",
    paddingHorizontal: scale.pixelSizeHorizontal(8),
    paddingVertical: scale.pixelSizeVertical(10),
    marginTop: scale.pixelSizeVertical(10),
    borderRadius: scale.fontPixel(8),
  },
  imageConatiner: {
    alignItems: "center",
    justifyContent: "center",
    height: scale.heightPixel(120),
    marginTop: scale.pixelSizeVertical(20),
  },
  imageEditConatiner: {
    height: "100%",
    width: scale.widthPixel(120),
    backgroundColor: colors.lightPrimary,
    borderRadius: scale.fontPixel(60),
  },
  image: {
    height: "100%",
    width: "100%",
    backgroundColor: colors.lightPrimary,
    borderRadius: scale.fontPixel(60),
  },
  iconEdit: {
    position: "absolute",
    zIndex: 10,
    bottom: 0,
    right: scale.pixelSizeHorizontal(10),
  },
  text: {
    fontFamily: "Outfit_500Medium",
    fontSize: scale.fontPixel(10),
    marginBottom: scale.pixelSizeVertical(8),
    paddingLeft: scale.pixelSizeHorizontal(7),
  },
  textInputContainer: {
    marginTop: scale.pixelSizeVertical(15),
  },
  btnContainer: {
    alignSelf: "center",
    backgroundColor: colors.mainPrimary,
    paddingHorizontal: scale.pixelSizeHorizontal(30),
    paddingVertical: scale.pixelSizeVertical(10),
    borderRadius: scale.fontPixel(8),
    marginTop: scale.pixelSizeVertical(30),
  },
});
