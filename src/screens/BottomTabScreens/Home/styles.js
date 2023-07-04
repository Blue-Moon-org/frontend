import { StyleSheet } from "react-native";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";

export const styles = StyleSheet.create({
  featuredContainer: {
    marginTop: scale.pixelSizeVertical(5),
  },
  itemsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: scale.pixelSizeVertical(15),
  },
  backgroundColor: {
    height: scale.heightPixel(110),
    width: "47%",
    backgroundColor: colors.mainPrimary,
    borderRadius: scale.fontPixel(10),
  },
  headerOptionContainer: {
    marginTop: scale.pixelSizeVertical(20),
    flexDirection: "row",
    width: scale.widthPixel(200),
    marginTop: scale.pixelSizeVertical(32),
  },
  options: {
    borderBottomWidth: scale.widthPixel(2),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 25,
    // width: scale.widthPixel(40),
  },
  optionsText: {
    fontSize: scale.fontPixel(10),
    fontFamily: "Outfit_500Medium",
    lineHeight: scale.heightPixel(15),
    paddingBottom: scale.pixelSizeVertical(6),
  },
});
