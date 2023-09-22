import { View, FlatList } from "react-native";
import React, { useCallback } from "react";
import { scale } from "../../../utils/scale";
import {
  HomeListComponentEmpty,
  LoadMore,
  Error,
  ErrorMore,
} from "../../../components/primary";
import { HomeRenderItems } from "../Renders/HomeRenderItems";
import { fetchFeeds } from "../../../Redux/actions";
import { useDispatch } from "react-redux";

export const All = ({ postData, state, page, updatePage, type }) => {
  const dispatch = useDispatch();

  const fetchMoreFeeds = useCallback(() => {
    if (state.isListEndAll === null) {
      return;
    } else {
      if (state.moreLoadingAll === false) {
        updatePage(page++);
        dispatch(fetchFeeds(type, page, "navigate"));
      }
    }
  }, [page, state.isListEndAll]);

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={postData}
        renderItem={({ item, index }) => (
          <HomeRenderItems item={item} index={index} />
        )}
        columnWrapperStyle={{ gap: scale.pixelSizeHorizontal(17) }}
        keyExtractor={(item, index) => item.id}
        ListEmptyComponent={() => <HomeListComponentEmpty state={state} />}
        contentContainerStyle={{
          marginTop: scale.pixelSizeVertical(2),
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
      />
    </View>
  );
};
