import { StyleSheet } from "react-native";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";

export const styles = StyleSheet.create({
  cartContainer: {
    height: scale.heightPixel(90),
    width: "100%",
    marginBottom: scale.pixelSizeVertical(16),
    backgroundColor: "#FEF8F1",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: "1%",
  },
  imageContainer: {
    height: "100%",
    width: "25%",
    borderRadius: scale.fontPixel(8),
  },
  priceSide: {
    marginLeft: "2%",
    width: "72%",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: scale.fontPixel(8),
  },
  x: {
    position: "absolute",
    right: "1%",
    top: scale.pixelSizeVertical(10),
  },
  text: {
    fontFamily: "Outfit_400Regular",
    fontSize: scale.fontPixel(10),
    fontWeight: 400,
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
