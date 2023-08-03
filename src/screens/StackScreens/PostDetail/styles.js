import { StyleSheet } from "react-native";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";

export const styles = StyleSheet.create({
  detailContainer: {
    height: scale.heightPixel(530),
    marginTop: scale.pixelSizeVertical(15),
    backgroundColor: colors.grey2,
    padding: scale.pixelSizeVertical(16),
    borderRadius: scale.fontPixel(10),
  },
  imagesContainer: {
    flexDirection: "row",
    height: "60%",
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
    height: "30%",
    borderRadius: scale.fontPixel(4),
  },
  profilecontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "10%",
    marginTop: "3%",
  },
  userProfileContainer: {
    height: "100%",
    width: scale.widthPixel(40),
    borderRadius: scale.fontPixel(4),
    marginRight: scale.pixelSizeHorizontal(8),
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
  },
  userProfile: {
    width: "100%",
    height: "100%",
    borderRadius: scale.fontPixel(4),
  },
  iconTextContainer: {
    marginRight: scale.pixelSizeHorizontal(8),
    flexDirection: "row",
  },
  likeShareText: {
    fontFamily: "Outfit_400Regular",
    fontSize: scale.fontPixel(12),
    fontWeight: 400,
    lineHeight: scale.fontPixel(15),
    marginLeft: scale.pixelSizeHorizontal(6),
  },
  aboutContainer: {
    marginTop: "3%",
  },
  inputSendContainer: {
    backgroundColor: "#DBDBDB",
    flexDirection: "row",
    height: scale.heightPixel(32),
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale.pixelSizeHorizontal(10),
    marginTop: "4%",
  },
  input: {
    height: "100%",
    width: "90%",
    fontFamily: "Outfit_400Regular",
    fontSize: scale.fontPixel(12),
    lineHeight: scale.fontPixel(15),
    marginLeft: scale.pixelSizeHorizontal(6),
  },
  comment: {
    fontFamily: "Outfit_400Regular",
    fontSize: scale.fontPixel(12),
    fontWeight: 400,
    lineHeight: scale.fontPixel(15),
    marginLeft: scale.pixelSizeHorizontal(6),
    color: colors.mainPrimary,
    textAlign: "right",
    marginTop: "3%",
  },
});
