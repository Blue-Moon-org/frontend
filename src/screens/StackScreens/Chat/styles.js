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
    borderRadius: scale.fontPixel(4),
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
  meMessageContainer: {
    alignSelf: "flex-end",
    maxWidth: "70%",
    backgroundColor: "#F19319",
    marginBottom: scale.pixelSizeVertical(16),
    paddingHorizontal: scale.pixelSizeHorizontal(7),
    paddingVertical: scale.pixelSizeVertical(7),
    borderRadius: scale.fontPixel(8),
  },
  youMessageContainer: {
    alignSelf: "flex-start",
    maxWidth: "70%",
    backgroundColor: "#FAE8D1",
    marginBottom: scale.pixelSizeVertical(16),
    paddingHorizontal: scale.pixelSizeHorizontal(8),
    paddingVertical: scale.pixelSizeVertical(7),
    borderRadius: scale.fontPixel(8),
  },
  meMessage: {
    fontFamily: "Outfit_400Regular",
    fontSize: scale.fontPixel(12),
    color: "white",
  },
  meMessageTime: {
    color: "white",
    textAlign: "right",
    fontFamily: "Outfit_400Regular",
    fontSize: scale.fontPixel(9),
    paddingTop: scale.fontPixel(2),
  },
  youMessage: {
    fontFamily: "Outfit_400Regular",
    fontSize: scale.fontPixel(12),
    color: colors.blackText,
  },
  youMessageTime: {
    color: colors.blackText,
    textAlign: "right",
    fontFamily: "Outfit_400Regular",
    fontSize: scale.fontPixel(9),
    paddingTop: scale.fontPixel(2),
  },
  newDayContainer: {
    alignSelf: "center",
    backgroundColor: colors.grey1,
    marginBottom: scale.pixelSizeVertical(12),
    paddingHorizontal: scale.pixelSizeHorizontal(10),
    paddingVertical: scale.pixelSizeHorizontal(5),
    borderRadius: scale.fontPixel(12),
  },
  newDayTime: {
    fontFamily: "Outfit_400Regular",
    fontSize: scale.fontPixel(10),
    color: "white",
  },
  measurementsContainer: {
    paddingHorizontal: scale.pixelSizeHorizontal(16),
    paddingVertical: scale.pixelSizeHorizontal(8),
    backgroundColor: "#FAE8D1",
    marginBottom: Platform.OS === "android" ? scale.pixelSizeVertical(20) : 1,
    marginHorizontal: scale.pixelSizeHorizontal(16),
    borderRadius: scale.fontPixel(8),
  },
  closeIcon: {
    textAlign: "right",
    marginBottom: scale.pixelSizeVertical(16),
  },
  measurementsButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: scale.pixelSizeVertical(8),
  },
  addMore: {
    fontFamily: "Outfit_400Regular",
    fontSize: scale.fontPixel(10),
    color: colors.mainPrimary,
  },
  buttonContainer: {
    backgroundColor: colors.mainPrimary,
    paddingVertical: scale.pixelSizeVertical(5),
    paddingHorizontal: scale.pixelSizeHorizontal(17),
    borderRadius: scale.fontPixel(8),
  },
  btnText: {
    fontFamily: "Outfit_400Regular",
    fontSize: scale.fontPixel(12),
    color: "white",
  },
  pickerInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: scale.pixelSizeVertical(16),
  },
});
