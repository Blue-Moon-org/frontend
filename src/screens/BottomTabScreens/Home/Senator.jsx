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
import { fetchFeedsMen } from "../../../Redux/actions/Post/Feeds";
import { useDispatch, useSelector } from "react-redux";

export const Senator = () => {
  const dispatch = useDispatch();

  const [page, updatePage] = useState(1);

  const state = useSelector((state) => state.fetchFeedsMen);

  useEffect(() => {
    let subscribe = true;

    if (subscribe) {
      dispatch(fetchFeedsMen("All", page, "navigate"));
    }

    return () => (subscribe = false);
  }, [page]);

  const fetchMoreFeeds = useCallback(() => {
    if (state.isListEndMen === null) {
      return;
    } else {
      if (state.moreLoadingMen === false) {
        updatePage(page + 1);
      }
    }
  }, [state.isListEndMen]);

  return (
    <>
      {state.loadingMen ? <Lodaing /> : null}
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={state.dataMen}
          renderItem={({ item, index }) => (
            <HomeRenderItems item={item} index={index} />
          )}
          columnWrapperStyle={{ gap: scale.pixelSizeHorizontal(10) }}
          keyExtractor={(item, index) => item.id}
          ListEmptyComponent={() => <HomeListComponentEmpty state={state} />}
          contentContainerStyle={{
            marginTop: scale.pixelSizeVertical(10),

            // width: "100%",
          }}
          onEndReachedThreshold={16}
          onEndReached={() => fetchMoreFeeds()}
          ListFooterComponent={() =>
            state.moreErrorMen ? (
              <ErrorMore state={state} />
            ) : (
              <LoadMore loading={state.moreLoadingMen} />
            )
          }
        />
      </View>
    </>
  );
};
