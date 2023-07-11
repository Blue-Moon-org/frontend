import { TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Fontscales, SharedStyles } from "../../../styles";
import { Text } from "../../../components/common";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { AppHeader } from "../../../components/primary";
import { Feature } from "./Feature";
import { topData } from "./data";
import { colors } from "../../../constants/colorpallette";
import { scale } from "../../../utils/scale";
import { Ankara } from "./Ankara";
import { Fits } from "./Fits";
import { Suits } from "./Suits";
import { Senator } from "./Senator";
import { All } from "./All";
import { Feather } from "@expo/vector-icons";

export const Home = () => {
  const { setOptions, navigate, goBack, setParams, isFocused } =
    useNavigation();

  const [type, updateType] = useState("All");

  return (
    <View style={SharedStyles.container}>
      <AppHeader />
      <Text
        text={"Featured"}
        textStyle={[styles.featuredText, Fontscales.labelSmallMedium]}
      />
      <View style={styles.featuredContainer}>
        <Feature />
      </View>

      <View style={styles.headerOptionContainer}>
        {topData.map((item, index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.options,
                {
                  borderColor:
                    item.name === type ? colors.mainPrimary : colors.grey2,
                },
              ]}
              onPress={() => updateType(item.name)}
              key={item.id}
            >
              <Text
                numberOfLines={1}
                ellipsizeMode={"tail"}
                textStyle={[
                  styles.optionsText,
                  {
                    color:
                      item.name === type ? colors.mainPrimary : colors.grey1,
                    paddingLeft:
                      item.name === type
                        ? scale.pixelSizeHorizontal(5)
                        : scale.pixelSizeHorizontal(5),
                  },
                ]}
                text={item.name}
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <View>
        {
          type === "All" ? (
            <All />
          ) : type === "Senator" ? (
            <Senator />
          ) : type === "Suits" ? (
            <Suits />
          ) : type === "Fit" ? (
            <Fits />
          ) : (
            <Ankara />
          )
        }
        <TouchableOpacity activeOpacity={0.8} style={styles.plusSign}>
          <Feather name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
