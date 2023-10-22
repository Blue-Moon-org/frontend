import { View, FlatList } from "react-native";
import React, { useEffect, useState, useCallback, useContext } from "react";
import { scale } from "../../../utils/scale";
import { useDispatch, useSelector } from "react-redux";
import { fetchSelfPosts } from "../../../Redux/actions/ProfileSection";
import {
  HomeListComponentEmpty,
  LoadMore,
  Error,
  ErrorMore,
  Lodaing,
} from "../../../components/primary";
import { HomeRenderItems } from "../../BottomTabScreens/Renders/HomeRenderItems";
import { AuthContext } from "../../../Context";

export const Posts = ({ detail, designerDetail }) => {
  const dispatch = useDispatch();

  const [page, updatePage] = useState(1);

  const state = useSelector((state) => state.selfPost);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    let subscribe = true;

    if (subscribe) {
      dispatch(fetchSelfPosts(detail?.id ?? currentUser?.id, page, "navigate"));
    }

    return () => (subscribe = false);
  }, [page]);

  const fetchMoreFeeds = useCallback(() => {
    if (state.isListEndPost === null) {
      return;
    } else {
      if (state.moreLoadingPost === false) {
        updatePage(page + 1);
      }
    }
  }, [state.isListEndPost]);

  return (
    <>
      {state.loadingPost ? <Lodaing /> : null}
      <View style={{}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={state.dataPost}
          renderItem={({ item, index, separators }) => (
            <HomeRenderItems
              item={item}
              index={index}
              profile={true}
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
            state.moreErrorPost ? (
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

// />
