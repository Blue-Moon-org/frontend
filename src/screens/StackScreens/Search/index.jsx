import { ScrollView, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import {
  KeyBoardAvoidingWrapper,
  Text,
  TextInput,
} from "../../../components/common";
import { styles } from "./styles";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Fontscales, SharedStyles } from "../../../styles";
import { colors } from "../../../constants/colorpallette";
import { scale } from "../../../utils/scale";
import {
  designerSearchResultData,
  othersSearchResultData,
  styleSearchResultData,
  searchFilterData,
} from "./data";

export const Search = () => {
  const [filter, setFilter] = useState("");
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
          <ScrollView
            horizontal
            contentContainerStyle={{ marginTop: scale.pixelSizeVertical(10) }}
            showsHorizontalScrollIndicator={false}
          >
            {searchFilterData.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => setFilter(item.name)}
                  key={index}
                  style={{
                    marginRight:
                      searchFilterData.length === index + 1
                        ? scale.pixelSizeHorizontal(0)
                        : scale.pixelSizeHorizontal(8),
                    backgroundColor:
                      item.name === filter
                        ? colors.mainPrimary
                        : colors.lightPrimary,
                    paddingVertical: scale.pixelSizeVertical(5),
                    paddingHorizontal: scale.pixelSizeVertical(9),
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius: scale.fontPixel(15),
                  }}
                >
                  <MaterialIcons
                    name="design-services"
                    size={scale.fontPixel(14)}
                    color="white"
                  />
                  <Text
                    textStyle={{
                      textAlign: "center",
                      fontFamily: "Outfit_500Medium",
                      fontSize: scale.fontPixel(10),
                      marginLeft: scale.pixelSizeHorizontal(3),
                      color: "white",
                    }}
                    text={item.name}
                  />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
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
