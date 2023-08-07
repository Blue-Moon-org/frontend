import { StyleSheet } from "react-native";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";

export const styles = StyleSheet.create({
  imageContainer: {
    height: scale.heightPixel(44),
    width: scale.widthPixel(44),
    borderRadius: scale.fontPixel(8),
  },
  messageText: {
    marginBottom: scale.fontPixel(1),
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: scale.fontPixel(8),
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: scale.pixelSizeVertical(24),
  },
  profilePictureContainer: {
    height: scale.heightPixel(56),
    width: scale.widthPixel(56),
    borderRadius: scale.fontPixel(8),
  },
  profilePicture: {
    height: "100%",
    width: "100%",
    borderRadius: scale.fontPixel(8),
  },
  message: {
    fontFamily: "Outfit_400Regular",
    fontSize: scale.fontPixel(11),
    fontWeight: 400,
  },
  messagesContainer: {
    width: "68%",
  },
  timeAgo: {
    fontFamily: "Outfit_400Regular",
    fontSize: scale.fontPixel(9),
    marginBottom: scale.pixelSizeVertical(5),
  },
  noOfMessagesContainer: {
    backgroundColor: colors.mainPrimary,
    paddingVertical: scale.pixelSizeVertical(4),
    paddingHorizontal: scale.pixelSizeHorizontal(5),
    borderRadius: scale.fontPixel(4),
  },
  text: {
    fontFamily: "Outfit_400Regular",
    fontSize: scale.fontPixel(10),
    fontWeight: "400",
    marginBottom: scale.pixelSizeVertical(5),
    color: "white",
  },
  timeContainer: {
    alignItems: "flex-end",
  },
});
