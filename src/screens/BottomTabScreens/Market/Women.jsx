import { View, FlatList } from "react-native";
import React, { useCallback } from "react";
import { scale } from "../../../utils/scale";
import {
  HomeListComponentEmpty,
  LoadMore,
  Error,
  ErrorMore,
} from "../../../components/primary";
import { useNavigation } from "@react-navigation/native";
import { MarketRenderItems } from "../Renders/MarketRenderItems";
import { useDispatch } from "react-redux";
import { fetchMarkets } from "../../../Redux/actions/Market/MarketList";

export const Women = ({ page, updatePage, state, data, type }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const fetchMoreFeeds = useCallback(() => {
    if (state.isListEndWomen === null) {
      return;
    } else {
      if (state.moreLoadingWomen === false) {
        updatePage(page++);
        dispatch(fetchMarkets(type, page, navigate));
      }
    }
  }, [page, state.isListEndWomen]);

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={data}
        renderItem={({ item, index, separator }) => (
          <MarketRenderItems item={item} index={index} separator={separator} />
        )}
        columnWrapperStyle={{ gap: scale.pixelSizeHorizontal(17) }}
        keyExtractor={(item, index) => item.id}
        contentContainerStyle={{
          marginTop: scale.pixelSizeVertical(5),
        }}
        onEndReachedThreshold={16}
        onEndReached={() => fetchMoreFeeds()}
        ListFooterComponent={() =>
          state.moreError ? (
            <ErrorMore state={state} />
          ) : (
            <LoadMore loading={state.moreLoadingMen} />
          )
        }
        ListEmptyComponent={() => <HomeListComponentEmpty state={state} />}
      />
    </View>
  );
};
