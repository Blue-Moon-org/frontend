import { StyleSheet } from "react-native";
import { layout } from "../utils/scale";

export const SharedStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: layout.pixelSizeHorizontal(16),
  },
});
