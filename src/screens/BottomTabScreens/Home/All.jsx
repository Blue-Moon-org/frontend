import { View, FlatList } from "react-native";
import React, { useCallback, useEffect } from "react";
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
    // if (state.isListEnd === false && state.moreLoading === false) {
    //   updatePage(page++);
    //   console.warn(state.isListEnd);
    //   dispatch(fetchFeeds(type, page, "navigate"));
    // }
  }, [page]);

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={postData?.posts}
        renderItem={({ item, index }) => (
          <HomeRenderItems item={item} index={index} />
        )}
        columnWrapperStyle={{ gap: scale.pixelSizeHorizontal(17) }}
        keyExtractor={(item, index) => item.id}
        ListEmptyComponent={() => <HomeListComponentEmpty state={state} />}
        contentContainerStyle={{
          marginTop: scale.pixelSizeVertical(5),
          // width: "100%",
        }}
        onEndReachedThreshold={0.6}
        onEndReached={() => fetchMoreFeeds()}
        ListFooterComponent={() =>
          state.moreError ? (
            <ErrorMore state={state} />
          ) : (
            <LoadMore loading={state.moreLoading} />
          )
        }
      />
    </View>
  );
};
