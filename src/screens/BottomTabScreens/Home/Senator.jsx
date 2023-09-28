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

export const Senator = ({ MenData, state, page, updatePage, type }) => {
  const dispatch = useDispatch();

  const fetchMoreFeeds = useCallback(() => {
    if (state.isListEndMen === null) {
      return;
    } else {
      if (state.moreLoadingMen === false) {
        updatePage(page++);
        dispatch(fetchFeeds(type, page, "navigate"));
      }
    }
  }, [page, state.isListEndMen]);
  // console.warn(state.moreLoading, state.isListEndAll, page);

  // console.warn(state.isListEnd);
  // console.warn(state.moreLoading, state.isListEndMen, men);

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={MenData}
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
