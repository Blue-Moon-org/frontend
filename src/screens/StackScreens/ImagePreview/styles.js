import { StyleSheet, StatusBar } from "react-native";
import { scale } from "../../../utils/scale";

export const styles = StyleSheet.create({
  icon: {
    left: scale.pixelSizeHorizontal(12),
    position: "absolute",
    top: StatusBar.currentHeight + scale.pixelSizeVertical(15),
    left: 0,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: scale.heightPixel(450),
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
