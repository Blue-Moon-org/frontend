import { StyleSheet } from "react-native";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";

export const styles = StyleSheet.create({
  imagePickerContainer: {
    height: scale.heightPixel(110),
    width: "100%",
    backgroundColor: "#F6D6AA",
    borderRadius: scale.fontPixel(8),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: scale.pixelSizeVertical(10),
  },
  container: {
    paddingTop: scale.pixelSizeVertical(10),
    height: "100%",
  },
  imageContainer: {
    height: scale.heightPixel(110),
    width: "100%",
    backgroundColor: "#F6D6AA",
    borderRadius: scale.fontPixel(8),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: scale.pixelSizeVertical(10),
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: scale.fontPixel(8),
  },
  mapItemsContainer: {
    flexDirection: "row",
    width: "100%",
    // justifyContent: "space-between",
    flexWrap: "wrap",
    gap: scale.pixelSizeHorizontal(12),
  },
  btnContainer: {
    alignSelf: "center",
    marginTop: scale.pixelSizeVertical(35),
    backgroundColor: colors.mainPrimary,
    paddingVertical: scale.pixelSizeVertical(13),
    paddingHorizontal: scale.pixelSizeHorizontal(30),
    borderRadius: scale.fontPixel(5),
  },
  textAreaInput: {
    borderRadius: scale.fontPixel(5),
    paddingVertical: scale.pixelSizeVertical(4),
    borderWidth: scale.widthPixel(1),
    fontFamily: "Outfit_400Regular",
    fontSize: scale.fontPixel(13),
    paddingHorizontal: scale.pixelSizeHorizontal(16),
    // paddingVertical: scale.pixelSizeVertical(14),
    borderColor: "#F6D6AA",
  },
  modalContainer: {
    backgroundColor: colors.lightPrimary,
    height: "100%",
    paddingVertical: scale.pixelSizeVertical(20),
    paddingHorizontal: scale.pixelSizeHorizontal(16),
    borderTopRightRadius: scale.fontPixel(8),
    borderTopLeftRadius: scale.fontPixel(8),
    flexDirection: "row",
    alignContent: "center",
  },
  text: {
    fontFamily: "Outfit_400Regular",
    fontSize: scale.fontPixel(13),
    color: colors.grey1,
    marginTop: scale.pixelSizeVertical(3),
  },
  cameraContainer: {
    alignItems: "center",
    marginRight: -scale.pixelSizeHorizontal(30),
  },
  galleryContainer: {
    alignItems: "center",
  },
});
