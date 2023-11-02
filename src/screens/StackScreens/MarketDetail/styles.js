import { StyleSheet } from "react-native";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";

export const styles = StyleSheet.create({
  detailContainer: {
    height: scale.heightPixel(430),
    marginTop: scale.pixelSizeVertical(13),
    backgroundColor: colors.grey2,
    padding: scale.pixelSizeVertical(16),
    borderRadius: scale.fontPixel(10),
  },
  imagesContainer: {
    flexDirection: "row",
    height: "69%",
    justifyContent: "space-between",
  },
  mainImageContainer: {
    width: "66%",
    borderRadius: scale.fontPixel(4),
  },
  mainImage: {
    width: "100%",
    height: "100%",
    borderRadius: scale.fontPixel(4),
  },
  sideImageContainer: {
    width: "28%",
    justifyContent: "space-between",
    borderRadius: scale.fontPixel(4),
  },
  sideImage: {
    width: "100%",
    height: "100%",
    borderRadius: scale.fontPixel(4),
  },
  sideImageCont: {
    width: "100%",
    height: "30%",
    borderRadius: scale.fontPixel(4),
  },
  profilecontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "9%",
    marginTop: "3%",
  },
  userProfileContainer: {
    height: "100%",
    width: scale.widthPixel(40),
    borderRadius: scale.fontPixel(4),
    marginRight: scale.pixelSizeHorizontal(8),
    backgroundColor: colors.mainPrimary,
  },
  imageText: {
    flexDirection: "row",
    alignItems: "flex-start",
    maxWidth: "60%",
  },
  reactionIcons: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "40%",
    backgroundColor: colors.mainPrimary,
    justifyContent: "center",
    paddingHorizontal: scale.pixelSizeHorizontal(12),
    paddingVertical: scale.pixelSizeVertical(6),
    borderRadius: scale.fontPixel(4),
  },
  cartText: {
    fontSize: scale.fontPixel(10),
    color: "white",
    fontFamily: "Outfit_500Medium",
    marginLeft: scale.pixelSizeHorizontal(5),
  },
  userProfile: {
    width: "100%",
    height: "100%",
    borderRadius: scale.fontPixel(4),
  },

  aboutContainer: {
    marginTop: "4%",
  },

  seeMoreContainer: {
    marginTop: scale.pixelSizeVertical(16),
    paddingBottom: scale.pixelSizeVertical(40),
  },
  userdetailContainer: {
    width: "72%",
  },
  outter: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  itemContainer: {
    width: "30%",
    height: scale.heightPixel(182),
    borderRadius: scale.fontPixel(10),
    marginBottom: scale.pixelSizeVertical(20),
    backgroundColor: colors.mainPrimary,
    shadowColor: "#000",
    marginTop: scale.pixelSizeVertical(16),
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
