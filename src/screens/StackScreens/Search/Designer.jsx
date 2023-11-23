import { FlatList, View } from "react-native";
import React from "react";
import { Text, Button } from "../../../components/common";
import { designerSearchResultData } from "./data";
import { Fontscales } from "../../../styles";
import { scale } from "../../../utils/scale";
import { styles } from "./styles";
import { colors } from "../../../constants/colorpallette";
import { Image } from "expo-image";
import { SearchLoading } from "../../../components/primary";
import DesignerList from "./DesignerList";

export const Designer = ({ people }) => {
  console.warn(people.dataPeople);
  return (
    <>
      {people.loadingPeople ? <SearchLoading /> : null}
      <View>
        <Text textStyle={Fontscales.labelSmallMedium} text={"Designers"} />
        <View>
          <FlatList
            data={people.dataPeople?.response?.data?.data}
            renderItem={({ item, index }) => (
              <DesignerList item={item} index={index} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{}}
          />
        </View>
      </View>
    </>
  );
};
