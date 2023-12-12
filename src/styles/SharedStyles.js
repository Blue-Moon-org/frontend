import { StyleSheet } from "react-native";
import { scale } from "../utils/scale";
import { colors } from "../constants/colorpallette";

export const SharedStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale.pixelSizeHorizontal(16),
    backgroundColor: "white",
    paddingBottom: scale.pixelSizeVertical(15),
  },
});
