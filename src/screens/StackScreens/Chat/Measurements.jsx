import { View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { EvilIcons } from "@expo/vector-icons";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";
import { Button, Text } from "../../../components/common";

export const Measurements = ({
  isMeasurementModalActive,
  setIsMeasurementModalActive,
}) => {
  return (
    <View style={styles.measurementsContainer}>
      <EvilIcons
        name="close"
        size={scale.fontPixel(24)}
        color={colors.mainPrimary}
        style={styles.closeIcon}
        onPress={() => setIsMeasurementModalActive(false)}
      />
      <View style={styles.pickerInputContainer}>
        <Text text={"MeasurementsText"} />
        <Text text={"MeasurementsText"} />
      </View>
      <View style={styles.measurementsButtons}>
        <Text textStyle={styles.addMore} text={"Add more"} />
        <Button
          title={"Send"}
          containerStyle={styles.buttonContainer}
          textStyle={styles.btnText}
          onPress={() => setIsMeasurementModalActive(false)}
        />
      </View>
    </View>
  );
};
