import { View, FlatList } from "react-native";
import React, { useCallback } from "react";
import { scale } from "../../../utils/scale";
import { HomeRenderItems } from "../Renders/HomeRenderItems";
import {
  HomeListComponentEmpty,
  LoadMore,
  Error,
  ErrorMore,
} from "../../../components/primary";
import { fetchFeeds } from "../../../Redux/actions";
import { useDispatch } from "react-redux";

export const Fits = ({ nativeData, state, page, updatePage, type }) => {
  const dispatch = useDispatch();

  const fetchMoreFeeds = useCallback(() => {
    if (state.isListEndNative === null) {
      return;
    } else {
      if (state.moreLoadingNative === false) {
        updatePage(page++);
        dispatch(fetchFeeds(type, page, "navigate"));
      }
    }
  }, [page, state.isListEndNative]);

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={nativeData}
        renderItem={({ item, index }) => (
          <HomeRenderItems item={item} index={index} />
        )}
        columnWrapperStyle={{ gap: scale.pixelSizeHorizontal(17) }}
        keyExtractor={(item, index) => item.id}
        ListEmptyComponent={() => <HomeListComponentEmpty state={state} />}
        contentContainerStyle={{
          marginTop: scale.pixelSizeVertical(10),
          // width: "100%",
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
      />
    </View>
  );
};
