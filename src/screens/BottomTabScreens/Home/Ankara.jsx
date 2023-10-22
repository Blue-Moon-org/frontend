import { View, FlatList } from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import { scale } from "../../../utils/scale";
import { HomeRenderItems } from "../Renders/HomeRenderItems";
import {
  HomeListComponentEmpty,
  LoadMore,
  Error,
  ErrorMore,
} from "../../../components/primary";
import { fetchFeedsAnkara } from "../../../Redux/actions/Post/Feeds";
import { useDispatch, useSelector } from "react-redux";
import { Lodaing } from "../../../components/primary";

export const Ankara = ({}) => {
  const dispatch = useDispatch();

  const [page, updatePage] = useState(1);

  const state = useSelector((state) => state.fetchFeedsAnkara);

  useEffect(() => {
    let subscribe = true;

    if (subscribe) {
      dispatch(fetchFeedsAnkara("Ankara", page, "navigate"));
    }

    return () => (subscribe = false);
  }, [page]);

  const fetchMoreFeeds = useCallback(() => {
    if (state.isListEndWomen === null) {
      return;
    } else {
      if (state.moreLoadingAnkara === false) {
        updatePage(page + 1);
      }
    }
  }, [state.isListEndAnkara]);

  return (
    <View style={{ flex: 1 }}>
      {state.loadingAnkara ? <Lodaing /> : null}
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={state.dataAnkara}
        renderItem={({ item, index }) => (
          <HomeRenderItems item={item} index={index} />
        )}
        columnWrapperStyle={{ gap: scale.pixelSizeHorizontal(10) }}
        keyExtractor={(item, index) => item.id}
        ListEmptyComponent={() => <HomeListComponentEmpty state={state} />}
        contentContainerStyle={{
          marginTop: scale.pixelSizeVertical(4),
          // height: "100%",
        }}
        onEndReachedThreshold={16}
        onEndReached={() => fetchMoreFeeds()}
        ListFooterComponent={() =>
          state.moreErrorAnkara ? (
            <ErrorMore state={state} />
          ) : (
            <LoadMore loading={state.moreLoadingAnkara} />
          )
        }
      />
      {/* <View style={{ height: scale.heightPixel(30) }} /> */}
    </View>
  );
};
