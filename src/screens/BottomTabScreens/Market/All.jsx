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

export const All = ({ page, type, updatePage, data, state }) => {
  const { navigate } = useNavigation();

  const dispatch = useDispatch();

  const fetchMoreFeeds = useCallback(() => {
    if (state.isListEndAll === null) {
      return;
    } else {
      if (state.moreLoadingAll === false) {
        updatePage(page++);
        dispatch(fetchMarkets(type, page, navigate));
      }
    }
  }, [page, state.isListEndAll]);

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
          // width: "100%",
        }}
        onEndReachedThreshold={0.5}
        scrollEventThrottle={16}
        onEndReached={() => fetchMoreFeeds()}
        ListFooterComponent={() =>
          state.moreError ? (
            <ErrorMore state={state} />
          ) : (
            <LoadMore loading={state.moreLoadingAll} />
          )
        }
        ListEmptyComponent={() => <HomeListComponentEmpty state={state} />}
      />
    </View>
  );
};
