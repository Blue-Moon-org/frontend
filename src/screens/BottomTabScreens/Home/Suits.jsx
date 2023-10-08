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
import { fetchFeedsWomen } from "../../../Redux/actions/Post/Feeds";
import { useDispatch, useSelector } from "react-redux";

export const Suits = () => {
  const dispatch = useDispatch();

  const [page, updatePage] = useState(1);

  const state = useSelector((state) => state.fetchFeedsWomen);

  // dataWomen: [],
  // moreLoadingWomen: false,
  // isListEndWomen: "",
  // moreErrorWomen: false,
  // errorWomen: "",
  // loadingWomen: false,

  useEffect(() => {
    let subscribe = true;

    if (subscribe) {
      dispatch(fetchFeedsWomen("Women", page, "navigate"));
    }

    return () => (subscribe = false);
  }, [page]);

  const fetchMoreFeeds = useCallback(() => {
    if (state.isListEndWomen === null) {
      return;
    } else {
      if (state.moreLoadingWomen === false) {
        updatePage(page + 1);
      }
    }
  }, [state.isListEndWomen]);

  return (
    <>
      {state.loadingWomen ? <Lodaing /> : null}
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={state.dataWomen}
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
            state.moreErrorWomen ? (
              <ErrorMore state={state} />
            ) : (
              <LoadMore loading={state.moreErrorWomen} />
            )
          }
        />
        {/* <View style={{ height: scale.heightPixel(30) }} /> */}
      </View>
    </>
  );
};
