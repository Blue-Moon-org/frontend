import { StyleSheet } from "react-native";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";

export const styles = StyleSheet.create({
  eachContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    marginVertical: scale.pixelSizeVertical(8),
    backgroundColor: "#FEF8F1",
    paddingVertical: scale.pixelSizeVertical(5),
    borderRadius: scale.fontPixel(8),
  },
  selectedIndicator: {
    marginLeft: scale.pixelSizeHorizontal(4),
  },
  homeTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "85%",
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    // width: "60%",
  },
  iconContainer: {
    backgroundColor: colors.mainPrimary,
    height: scale.pixelSizeVertical(55),
    width: scale.pixelSizeHorizontal(55),
    borderRadius: scale.fontPixel(8),
    alignItems: "center",
    justifyContent: "center",
  },
  totalExpense: {
    height: scale.heightPixel(200),
    position: "absolute",
    paddingBottom: scale.pixelSizeVertical(40),
    bottom: 0,
    width: "100%",
    alignSelf: "center",
    paddingTop: scale.pixelSizeVertical(5),
    backgroundColor: "white",
  },
  expenseContainer: {
    backgroundColor: colors.grey2,
    borderRadius: scale.fontPixel(8),
  },
  expense: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scale.pixelSizeHorizontal(8),
    paddingVertical: scale.pixelSizeVertical(8),
  },
  totalContainer: {
    backgroundColor: colors.mainPrimary,
    marginTop: scale.pixelSizeVertical(16),
    borderRadius: scale.fontPixel(8),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scale.pixelSizeHorizontal(8),
    paddingVertical: scale.pixelSizeVertical(7),
  },
  btnContainer: {
    backgroundColor: colors.mainPrimary,
    alignSelf: "center",
    marginTop: scale.pixelSizeVertical(22),
    paddingVertical: scale.pixelSizeVertical(10),
    paddingHorizontal: scale.pixelSizeHorizontal(40),
    borderRadius: scale.fontPixel(8),
  },
});
