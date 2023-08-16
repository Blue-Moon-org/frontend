import { scale } from "../../../utils/scale";
import { StyleSheet, Platform } from "react-native";
import { colors } from "../../../constants/colorpallette";

export const styles = StyleSheet.create({
  interactContainer: {
    position: "absolute",
  },
  mainContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  container: {
    paddingHorizontal: scale.pixelSizeHorizontal(16),
    flex: 1,
  },
  galleryImageContainer: {
    height: scale.heightPixel(30),
    width: scale.widthPixel(30),
    marginLeft: scale.pixelSizeHorizontal(8),
    marginRight: scale.pixelSizeHorizontal(12),
  },
  galleryImage: {
    height: "100%",
    width: "100%",
  },
  rulerPenImageContainer: {
    height: scale.heightPixel(30),
    width: scale.widthPixel(30),
    marginRight: scale.pixelSizeHorizontal(12),
    alignItems: "center",
    justifyContent: "center",
  },
  rulerPenImage: {
    height: "100%",
    width: "100%",
  },
  interactionTabs: {
    flexDirection: "row",
    marginHorizontal: scale.pixelSizeHorizontal(16),
    alignItems: "center",
  },
  textInputSendContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.grey2,
    width: "77%",
    borderRadius: scale.fontPixel(8),
    justifyContent: "space-between",
    overflow: "hidden",
    // maxHeight: scale.heightPixel(60),
  },
  textInput: {
    paddingLeft: scale.pixelSizeHorizontal(12),
    width: "83%",
  },
  sendIconContainer: {
    backgroundColor: colors.mainPrimary,
    // paddingVertical: scale.pixelSizeVertical(8),
    paddingHorizontal: scale.pixelSizeHorizontal(12),
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: scale.fontPixel(8),
    borderBottomLeftRadius: scale.fontPixel(8),
  },
});
