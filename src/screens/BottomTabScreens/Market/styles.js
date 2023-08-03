import { StyleSheet } from "react-native";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";

export const styles = StyleSheet.create({
  backgroundColor: {
    height: scale.heightPixel(110),
    width: "100%",
    backgroundColor: colors.mainPrimary,
    borderRadius: scale.fontPixel(10),
  },
  featuredContainer: {
    marginTop: -scale.pixelSizeVertical(10),
    marginBottom: scale.pixelSizeVertical(20),
  },
  headerOptionContainer: {
    flexDirection: "row",
    width: scale.widthPixel(200),
    marginBottom: scale.pixelSizeVertical(10),
  },
  itemsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: scale.pixelSizeVertical(15),
  },
  options: {
    borderBottomWidth: scale.widthPixel(2),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 25,
  },
  optionsText: {
    fontSize: scale.fontPixel(10),
    fontFamily: "Outfit_500Medium",
    lineHeight: scale.heightPixel(15),
    paddingBottom: scale.pixelSizeVertical(6),
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  plusSign: {
    backgroundColor: colors.mainPrimary,
    paddingVertical: scale.pixelSizeVertical(3),
    paddingHorizontal: scale.pixelSizeHorizontal(3),
    borderRadius: scale.fontPixel(6),
  },
  itemContainer: {
    width: "30%",
    height: scale.heightPixel(182),
    borderRadius: scale.fontPixel(10),
    marginBottom: scale.pixelSizeVertical(20),
    backgroundColor: colors.mainPrimary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
  
    elevation: 8,
  },
  innerContainer: {
    height: "73%",
    width: "100%",
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
