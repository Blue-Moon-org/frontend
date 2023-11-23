import { FlatList, View } from "react-native";
import React from "react";
import { Text } from "../../../components/common";
import { Fontscales } from "../../../styles";
import { SearchLoading } from "../../../components/primary";
import MarketList from "./MarketList";

export const Market = ({ product }) => {
  return (
    <>
      {product.loadingProduct ? <SearchLoading /> : null}
      <View>
        <Text textStyle={Fontscales.labelSmallMedium} text={"Market"} />
        <View>
          <FlatList
            data={product.dataProduct.response?.data?.data}
            renderItem={({ item, index }) => (
              <MarketList item={item} index={index} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{}}
          />
        </View>
      </View>
    </>
  );
};
