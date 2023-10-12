import { StyleSheet } from "react-native";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";

export const styles = StyleSheet.create({
  Input: {
    // height: scale.heightPixel(47),
    borderRadius: scale.fontPixel(5),
    paddingVertical: scale.pixelSizeVertical(4),
    borderWidth: scale.widthPixel(1),
    fontFamily: "Outfit_400Regular",
    fontSize: scale.fontPixel(13),
    paddingHorizontal: scale.pixelSizeHorizontal(16),
    paddingVertical: scale.pixelSizeVertical(14),
    borderColor: "#F0F0F0",
    backgroundColor: colors.grey2,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlignVertical: "top",
  },
  TextInput: {
    marginBottom: scale.pixelSizeVertical(15),
    backgroundColor: colors.grey2,
  },
  btnContainer: {
    backgroundColor: colors.mainPrimary,
    paddingHorizontal: scale.pixelSizeHorizontal(40),
    paddingVertical: scale.pixelSizeVertical(12),
    borderRadius: scale.fontPixel(8),
    alignSelf: "center",
    marginTop: scale.pixelSizeVertical(30),
  },
});
