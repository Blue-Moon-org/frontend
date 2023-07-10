import { StyleSheet } from "react-native";
import { scale } from "../../../utils/scale";

export const styles = StyleSheet.create({
  imageContainer: {
    height: scale.heightPixel(44),
    width: scale.widthPixel(44),
    borderRadius: scale.fontPixel(8),
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
});
