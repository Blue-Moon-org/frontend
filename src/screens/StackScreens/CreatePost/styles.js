import { StyleSheet } from "react-native";
import { scale } from "../../../utils/scale";

export const styles = StyleSheet.create({
  imagePickerContainer: {
    height: scale.heightPixel(110),
    width: "31%",
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
    width: "31%",
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
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});
