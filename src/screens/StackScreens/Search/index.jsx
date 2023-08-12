import { View } from "react-native";
import React from "react";
import {
  KeyBoardAvoidingWrapper,
  Text,
  TextInput,
} from "../../../components/common";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Fontscales, SharedStyles } from "../../../styles";
import { colors } from "../../../constants/colorpallette";
import { scale } from "../../../utils/scale";
import {
  designerSearchResultData,
  othersSearchResultData,
  styleSearchResultData,
} from "./data";
export const Search = () => {
  return (
    <View style={SharedStyles.container}>
      <KeyBoardAvoidingWrapper>
        <View>
          <View style={styles.textInputContainer}>
            <Ionicons
              name="search-outline"
              size={scale.fontPixel(24)}
              color={colors.blackText}
              style={styles.icon}
            />
            <TextInput
              returnKeyType="search"
              onSubmitEditing={() => {}}
              style={[styles.textInput, Fontscales.labelSmallRegular]}
              placeholder="Search for anything"
            />
          </View>
          <Text
            text={"Designers"}
            textStyle={[
              Fontscales.labelSmallMedium,
              {
                marginTop: scale.pixelSizeVertical(20),
                marginBottom: scale.pixelSizeVertical(8),
              },
            ]}
          />
          <View style={styles.container}>
            {designerSearchResultData.map((item, index) => {
              return (
                <Text
                  key={index}
                  text={item.name}
                  textStyle={[
                    Fontscales.labelSmallRegular,
                    {
                      marginBottom: scale.pixelSizeVertical(12),
                    },
                  ]}
                />
              );
            })}
          </View>
          <Text text={"Show all"} textStyle={styles.showAll} />
          <Text
            text={"Styles"}
            textStyle={[
              Fontscales.labelSmallMedium,
              {
                marginTop: scale.pixelSizeVertical(20),
                marginBottom: scale.pixelSizeVertical(8),
              },
            ]}
          />
          <View style={styles.container}>
            {styleSearchResultData.map((item, index) => {
              return (
                <Text
                  key={index}
                  text={item.styleName}
                  textStyle={[
                    Fontscales.labelSmallRegular,
                    {
                      marginBottom: scale.pixelSizeVertical(12),
                    },
                  ]}
                />
              );
            })}
          </View>
          <Text text={"Show all"} textStyle={styles.showAll} />
          <Text
            text={"Others"}
            textStyle={[
              Fontscales.labelSmallMedium,
              {
                marginTop: scale.pixelSizeVertical(20),
                marginBottom: scale.pixelSizeVertical(8),
              },
            ]}
          />
          <View style={styles.container}>
            {othersSearchResultData.map((item, index) => {
              return (
                <Text
                  key={index}
                  text={item.title}
                  textStyle={[
                    Fontscales.labelSmallRegular,
                    {
                      marginBottom: scale.pixelSizeVertical(12),
                    },
                  ]}
                />
              );
            })}
          </View>
          <Text text={"Show all"} textStyle={styles.showAll} />
        </View>
      </KeyBoardAvoidingWrapper>
    </View>
  );
};
