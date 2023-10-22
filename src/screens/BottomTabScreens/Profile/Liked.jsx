import { View, FlatList } from "react-native";
import React, { useEffect, useState, useCallback, useContext } from "react";
import { scale } from "../../../utils/scale";
import { useDispatch, useSelector } from "react-redux";
import { fetchSelfLike } from "../../../Redux/actions/ProfileSection";
import {
  HomeListComponentEmpty,
  LoadMore,
  Error,
  ErrorMore,
  Lodaing,
} from "../../../components/primary";
import { HomeRenderItems } from "../Renders/HomeRenderItems";
import { AuthContext } from "../../../Context";

export const Liked = ({ detail, designerDetail }) => {
  const dispatch = useDispatch();

  const [page, updatePage] = useState(1);

  const state = useSelector((state) => state.like);
  const { currentUser } = useContext(AuthContext);

  // dataSelfLike: [],
  // moreLoadingSelfLike: false,
  // isListEndSelfLike: "",
  // moreErrorSelfLike: false,
  // errorSelfLike: "",
  // loadingSelfLike: false,

  useEffect(() => {
    let subscribe = true;

    if (subscribe) {
      dispatch(fetchSelfLike(detail?.id ?? currentUser?.id, page, "navigate"));
    }

    return () => (subscribe = false);
  }, [page]);

  const fetchMoreFeeds = useCallback(() => {
    if (state.isListEndSelfLike === null) {
      return;
    } else {
      if (state.moreLoadingSelfLike === false) {
        updatePage(page + 1);
      }
    }
  }, [state.isListEndSelfLike]);

  return (
    <>
      {state.loadingSelfLike ? <Lodaing /> : null}
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={state.dataSelfLike}
          renderItem={({ item, index, separators }) => (
            <HomeRenderItems
              item={item}
              index={index}
              personalProfile={true}
              separator={separators}
              designerDetail={designerDetail}
            />
          )}
          columnWrapperStyle={{ gap: scale.pixelSizeHorizontal(10) }}
          keyExtractor={(item, index) => item.id}
          contentContainerStyle={{
            marginTop: scale.pixelSizeVertical(10),
            // width: "100%",
          }}
          ListEmptyComponent={() => <HomeListComponentEmpty state={state} />}
          onEndReachedThreshold={0.5}
          scrollEventThrottle={16}
          onEndReached={() => fetchMoreFeeds()}
          ListFooterComponent={() =>
            state.moreErrorSelfLike ? (
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
