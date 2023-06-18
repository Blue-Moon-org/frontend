import { StyleSheet } from "react-native";
import { layout } from "../utils/scale";

export const Fontscales = StyleSheet.create({
  // heading

  headingSmallRegular: {
    fontSize: layout.size.h3,
    lineHeight: layout.lineSize.lh3,
    fontWeight: "400",
  },
  headingSmallMedium: {
    fontSize: layout.size.h3,
    lineHeight: layout.lineSize.lh3,
    fontWeight: "500",
  },
  headingSmallBold: {
    fontSize: layout.size.h3,
    lineHeight: layout.lineSize.lh3,
    fontWeight: "700",
  },

  headingLargeRegular: {
    fontSize: layout.size.h1,
    lineHeight: layout.lineSize.lh1,
    fontWeight: "400",
  },
  headingLargeRegular: {
    fontSize: layout.size.h1,
    lineHeight: layout.lineSize.lh1,
    fontWeight: "500",
  },
  headingLargeBold: {
    fontSize: layout.size.h1,
    lineHeight: layout.lineSize.lh1,
    fontWeight: "700",
  },

  // paragraph

  paragraphSmallRegular: {
    fontSize: layout.size.h5,
    lineHeight: layout.lineSize.lh5,
    fontWeight: "400",
  },
  paragraphSmallMedium: {
    fontSize: layout.size.h5,
    lineHeight: layout.lineSize.lh5,
    fontWeight: "500",
  },
  paragraphSmallBold: {
    fontSize: layout.size.h5,
    lineHeight: layout.lineSize.lh5,
    fontWeight: "700",
  },

  paragraphMediumRegular: {
    fontSize: layout.size.h4,
    lineHeight: layout.lineSize.lh4,
    fontWeight: "400",
  },
  paragraphMediumRegular: {
    fontSize: layout.size.h4,
    lineHeight: layout.lineSize.lh4,
    fontWeight: "500",
  },
  paragraphMediumBold: {
    fontSize: layout.size.h4,
    lineHeight: layout.lineSize.lh4,
    fontWeight: "700",
  },

  paragraphLargeRegular: {
    fontSize: layout.size.h2,
    lineHeight: layout.lineSize.lh2,
    fontWeight: "400",
  },
  paragraphLargeRegular: {
    fontSize: layout.size.h2,
    lineHeight: layout.lineSize.lh2,
    fontWeight: "500",
  },
  paragraphLargeBold: {
    fontSize: layout.size.h2,
    lineHeight: layout.lineSize.lh2,
    fontWeight: "700",
  },

  //   label

  labelSmallRegular: {
    fontSize: layout.size.h5,
    lineHeight: layout.lineSize.lh5,
    fontWeight: "400",
  },
  labelSmallMedium: {
    fontSize: layout.size.h5,
    lineHeight: layout.lineSize.lh5,
    fontWeight: "500",
  },
  labelSmallBold: {
    fontSize: layout.size.h5,
    lineHeight: layout.lineSize.lh5,
    fontWeight: "700",
  },

  labelMediumRegular: {
    fontSize: layout.size.h4,
    lineHeight: layout.lineSize.lh4,
    fontWeight: "400",
  },
  labelMediumRegular: {
    fontSize: layout.size.h4,
    lineHeight: layout.lineSize.lh4,
    fontWeight: "500",
  },
  labelMediumBold: {
    fontSize: layout.size.h4,
    lineHeight: layout.lineSize.lh4,
    fontWeight: "700",
  },

  labelLargeRegular: {
    fontSize: layout.size.h3,
    lineHeight: layout.lineSize.lh3,
    fontWeight: "400",
  },
  labelLargeRegular: {
    fontSize: layout.size.h3,
    lineHeight: layout.lineSize.lh3,
    fontWeight: "500",
  },
  labelLargeBold: {
    fontSize: layout.size.h3,
    lineHeight: layout.lineSize.lh3,
    fontWeight: "700",
  },

  // Tabs
  tabInactive: {
    fontSize: layout.size.h4,
    lineHeight: layout.lineSize.lh4,
    fontWeight: "400",
  },
  tabActive: {
    fontSize: layout.size.h4,
    lineHeight: layout.lineSize.lh4,
    fontWeight: "700",
  },

  //   others

  container: {
    flex: 1,
    paddingHorizontal: layout.pixelSizeHorizontal(16),
  },
});
