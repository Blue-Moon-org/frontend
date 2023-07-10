import { View, TouchableOpacity } from "react-native";
import { AppHeader } from "../../../components/primary";
import { SharedStyles } from "../../../styles";
import { Text } from "../../../components/common";
import { Feature } from "./Feature";
import { Fontscales } from "../../../styles";
import { styles } from "./styles";
import { topData } from "./data";
import { colors } from "../../../constants/colorpallette";
import { scale } from "../../../utils/scale";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { All } from "./All";
import { Men } from "./Men";
import { Women } from "./Women";
import { Children } from "./Children";

export const Market = () => {
  const [type, updateType] = useState("All");
  return (
    <View style={SharedStyles.container}>
      <AppHeader />
      <View style={styles.featuredContainer}>
        <Feature />
      </View>
      <View style={styles.headerContainer}>
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
          <TouchableOpacity activeOpacity={0.8} style={styles.plusSign}>
            <Feather name="plus" size={scale.fontPixel(20)} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {type === "All" ? (
          <All />
        ) : type === "Men" ? (
          <Men />
        ) : type === "Women" ? (
          <Women />
        ) : (
          <Children />
        )}
      </View>
    </View>
  );
};
