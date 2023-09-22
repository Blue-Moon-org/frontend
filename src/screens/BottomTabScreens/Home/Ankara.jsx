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

export const Ankara = ({ ankaraData, state, page, updatePage, type }) => {
  const dispatch = useDispatch();

  const fetchMoreFeeds = useCallback(() => {
    if (state.isListEndWomen === null) {
      return;
    } else {
      if (state.moreLoadingWomen === false) {
        updatePage(page++);
        dispatch(fetchFeeds(type, page, "navigate"));
      }
    }
  }, [page, state.isListEndWomen]);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={ankaraData}
        renderItem={({ item, index }) => (
          <HomeRenderItems item={item} index={index} />
        )}
        columnWrapperStyle={{ gap: scale.pixelSizeHorizontal(17) }}
        keyExtractor={(item, index) => item.id}
        ListEmptyComponent={() => <HomeListComponentEmpty state={state} />}
        contentContainerStyle={{
          marginTop: scale.pixelSizeVertical(10),
          // height: "100%",
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
      {/* <View style={{ height: scale.heightPixel(30) }} /> */}
    </View>
  );
};
