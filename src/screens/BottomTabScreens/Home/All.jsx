import { View, FlatList } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { scale } from "../../../utils/scale";
import {
  HomeListComponentEmpty,
  LoadMore,
  Error,
  ErrorMore,
  Lodaing,
} from "../../../components/primary";
import { HomeRenderItems } from "../Renders/HomeRenderItems";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeeds } from "../../../Redux/actions";

export const All = () => {
  const dispatch = useDispatch();

  const [page, updatePage] = useState(1);

  const state = useSelector((state) => state.fetchFeedsAll);

  //  dataAll: [],
  // moreLoadingAll: false,
  // isListEndAll: "",
  // moreErrorAll: false,
  // errorAll: "",
  // loadingAll: false,

  useEffect(() => {
    let subscribe = true;

    if (subscribe) {
      dispatch(fetchFeeds("All", page, "navigate"));
    }

    return () => (subscribe = false);
  }, [page]);

  const fetchMoreFeeds = useCallback(() => {
    if (state.isListEndAll === null) {
      return;
    } else {
      if (state.moreLoadingAll === false) {
        updatePage(page + 1);
      }
    }
  }, [state.isListEndAll]);

  return (
    <>
      {state.loadingAll ? <Lodaing /> : null}
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={state.dataAll}
          renderItem={({ item, index }) => (
            <HomeRenderItems item={item} index={index} />
          )}
          columnWrapperStyle={{ gap: scale.pixelSizeHorizontal(10) }}
          keyExtractor={(item, index) => item.id}
          ListEmptyComponent={() => <HomeListComponentEmpty state={state} />}
          contentContainerStyle={{
            marginTop: scale.pixelSizeVertical(4),
            // width: "100%",
          }}
          onEndReachedThreshold={0.5}
          scrollEventThrottle={16}
          onEndReached={() => fetchMoreFeeds()}
          ListFooterComponent={() =>
            state.moreErrorAll ? (
              <ErrorMore state={state} />
            ) : (
              <LoadMore loading={state.moreLoadingAll} />
            )
          }
        />
      </View>
    </>
  );
};
