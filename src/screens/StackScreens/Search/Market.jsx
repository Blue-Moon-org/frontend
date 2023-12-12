import { FlatList, View } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { Text } from "../../../components/common";
import { Fontscales } from "../../../styles";
import {
  ErrorMore,
  LoadMore,
  SearchLoading,
} from "../../../components/primary";
import MarketList from "./MarketList";
import { useDispatch } from "react-redux";
import { productSeatch } from "../../../Redux/actions/Post/search";
import { scale } from "../../../utils/scale";

export const Market = ({ product, searchText }) => {
  //   loadingProduct: true,
  // dataProduct: [],
  // loadingMoreProduct: false,
  // errorProduct: "",
  // isListEndProduct: null,
  // errorMoreProduct: "",

  const dispatch = useDispatch();

  const [page, updatePage] = useState(1);

  useEffect(() => {
    let subscribe = true;

    if (subscribe) {
      if (subscribe) {
        if (searchText.length < 3) {
          return;
        } else {
          dispatch(productSeatch(searchText, page, "navigate"));
        }
      }
    }

    return () => (subscribe = false);
  }, [page]);

  const fetchMoreFeeds = useCallback(() => {
    if (product.isListEndProduct === null) {
      return;
    } else {
      if (product.loadingMoreProduct === false) {
        updatePage(page + 1);
      }
    }
  }, [product.isListEndProduct]);

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
            keyExtractor={(item, index) => item.id}
            // ListEmptyComponent={() => <HomeListComponentEmpty state={state} />}
            contentContainerStyle={{
              marginTop: scale.pixelSizeVertical(4),
            }}
            onEndReachedThreshold={0.5}
            scrollEventThrottle={16}
            onEndReached={() => fetchMoreFeeds()}
            ListFooterComponent={() =>
              product.errorMoreProduct ? (
                <ErrorMore state={product} />
              ) : (
                <LoadMore loading={product.loadingMoreProduct} />
              )
            }
          />
        </View>
      </View>
    </>
  );
};
