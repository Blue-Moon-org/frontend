import { View, FlatList } from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import { scale } from "../../../utils/scale";
import { HomeRenderItems } from "../Renders/HomeRenderItems";
import {
  HomeListComponentEmpty,
  LoadMore,
  Error,
  ErrorMore,
  Lodaing,
} from "../../../components/primary";
import { fetchFeedsNative } from "../../../Redux/actions/Post/Feeds";
import { useDispatch, useSelector } from "react-redux";

export const Fits = ({}) => {
  const dispatch = useDispatch();

  const [page, updatePage] = useState(1);

  const state = useSelector((state) => state.fetchFeedsNative);

  // dataNative: [],
  // moreLoadingNative: false,
  // isListEndNative: "",
  // moreErrorNative: false,
  // errorNative: "",
  // loadingNative: false,

  useEffect(() => {
    let subscribe = true;

    if (subscribe) {
      dispatch(fetchFeedsNative("Native", page, "navigate"));
    }

    return () => (subscribe = false);
  }, [page]);

  const fetchMoreFeeds = useCallback(() => {
    if (state.isListEndNative === null) {
      return;
    } else {
      if (state.moreLoadingNative === false) {
        updatePage(page + 1);
      }
    }
  }, [state.isListEndNative]);

  return (
    <>
      {state.loadingNative ? <Lodaing /> : null}
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={state.dataNative}
          renderItem={({ item, index }) => (
            <HomeRenderItems item={item} index={index} />
          )}
          columnWrapperStyle={{ gap: scale.pixelSizeHorizontal(17) }}
          keyExtractor={(item, index) => item.id}
          ListEmptyComponent={() => <HomeListComponentEmpty state={state} />}
          contentContainerStyle={{
            marginTop: scale.pixelSizeVertical(4),
            // width: "100%",
          }}
          onEndReachedThreshold={16}
          onEndReached={() => fetchMoreFeeds()}
          ListFooterComponent={() =>
            state.moreErrorNative ? (
              <ErrorMore state={state} />
            ) : (
              <LoadMore loading={state.moreLoadingNative} />
            )
          }
        />
      </View>
    </>
  );
};
