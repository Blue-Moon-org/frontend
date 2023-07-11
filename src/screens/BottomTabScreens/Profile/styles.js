import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colorpallette";
import { scale } from "../../../utils/scale";

export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.grey2,
    width: "100%",
    height: scale.heightPixel(102),
    borderRadius: scale.fontPixel(9),
  },
  background2: {
    backgroundColor: colors.grey2,
    width: "100%",
    height: scale.heightPixel(80),
    borderRadius: scale.fontPixel(9),
    marginTop: scale.pixelSizeVertical(10),
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
  itemContainer: {
    width: "30%",
    height: scale.heightPixel(182),
    borderRadius: scale.fontPixel(10),
    marginBottom: scale.pixelSizeVertical(20),
    backgroundColor: colors.mainPrimary,
  },
  innerContainer: {
    height: "73%",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,

    elevation: 8,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: scale.fontPixel(10),
    borderWidth: 1,
    borderColor: colors.mainPrimary,
  },
  likeIcon: {
    position: "absolute",
    right: scale.pixelSizeHorizontal(8),
    top: scale.pixelSizeHorizontal(8),
  },
  text: {
    fontSize: scale.fontPixel(13),
    marginBottom: scale.pixelSizeVertical(2),
    fontFamily: "Outfit_500Medium",
    color: "white",
  },
  bottomContainer: {
    paddingHorizontal: scale.pixelSizeHorizontal(6),
    marginTop: scale.pixelSizeVertical(4),
  },
  subText: {
    fontSize: scale.fontPixel(9),
    color: "white",
    marginBottom: scale.pixelSizeVertical(5),
    fontFamily: "Outfit_500Medium",
  },
});
