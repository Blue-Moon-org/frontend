import { View, TextInput as Input } from "react-native";
import React from "react";
import { styles } from "./styles";
import { EvilIcons } from "@expo/vector-icons";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";
import { Button, Text } from "../../../components/common";
import { Fontscales } from "../../../styles";
import { ScrollView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";

export const Measurements = ({
  isMeasurementModalActive,
  setIsMeasurementModalActive,
  measurs,
  setMeasurs,
  _measureHandler,
}) => {
  //  ***************Add delete button
  return (
    <ScrollView style={styles.measurementsContainer}>
      <Text
        onPress={() => {
          if (measurs.slice(-1)[0].id <= 7) {
            measurs.push({
              part: "",
              size: "",
              id: measurs.slice(-1)[0].id + 1,
            });
          } else {
            Toast.show({
              type: "warn",
              text1: "Warning",
              text2: " Cannot take more than 8 measurement at a time",
              position: "bottom",
            });
          }
        }}
        textStyle={styles.addMore}
        text={"Add more"}
      />
      {measurs.map((item, index) => {
        return (
          <View key={item.id} style={styles.pickerInputContainer}>
            <View style={styles.cover}>
              <Input
                onChangeText={(text) => {
                  const newMeasures = [...measurs];
                  newMeasures[index].part = text;
                  setMeasurs(newMeasures);
                }}
                style={[styles.poptextInput, Fontscales.labelSmallMedium]}
                value={measurs[index].part}
                keyboardType="default"
                placeholder="Body part"
              />
            </View>
            <View style={styles.cover}>
              <Input
                onChangeText={(text) => {
                  const newMeasures = [...measurs];
                  newMeasures[index].size = text;
                  setMeasurs(newMeasures);
                }}
                style={[styles.poptextInput, Fontscales.labelSmallMedium]}
                value={measurs[index].size}
                keyboardType="numeric"
                placeholder="size"
              />
            </View>
          </View>
        );
      })}
      <View style={styles.measurementsButtons}>
        <EvilIcons
          name="close"
          size={scale.fontPixel(24)}
          color={colors.mainPrimary}
          style={styles.closeIcon}
          onPress={() => setIsMeasurementModalActive(false)}
        />
        <Button
          title={"Send"}
          containerStyle={styles.buttonContainer}
          textStyle={styles.btnText}
          onPress={() => _measureHandler()}
        />
      </View>
    </ScrollView>
  );
};

{
  /* <TouchableOpacity
                onPress={() => {
                  setMeasurs([...measurs, (measurs[index].name = "")]);
                  setIdCheck(idCheck === item.id ? 0 : item.id);
                }}
                style={styles.pickerContainer}
                activeOpacity={0.8}
              >
                <Text
                  text={"Select a body part"}
                  textStyle={[
                    Fontscales.labelSmallRegular,
                    {
                      color: "white",
                    },
                  ]}
                />
                <Entypo
                  name="chevron-thin-down"
                  size={scale.fontPixel(16)}
                  color="white"
                />
              </TouchableOpacity>
              {item.id === idCheck && (
                <View style={styles.eachTextContainer}>
                  {dataMeas.map((each, index) => (
                    <Text
                      key={each.id}
                      onPress={() => {
                        setSelectedValue(each.name);
                        setIdCheck(0);
                      }}
                      text={each.name}
                      textStyle={styles.eachText}
                    />
                  ))}
                </View>
              )} */
}
