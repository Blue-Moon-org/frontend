import { FlatList, View } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { Text, Button } from "../../../components/common";
import { postSearchResultData } from "./data";
import { Fontscales } from "../../../styles";
import { scale } from "../../../utils/scale";
import { styles } from "./styles";
import { colors } from "../../../constants/colorpallette";
import { Image } from "expo-image";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  ErrorMore,
  LoadMore,
  SearchLoading,
} from "../../../components/primary";
import PostList from "./PostList";
import { useDispatch } from "react-redux";
import { postSearch } from "../../../Redux/actions/Post/search";

export const Post = ({ post, searchText }) => {
  //   loadingMorePost: false,
  // dataPost: [],
  // loadingPost: true,
  // errorPost: "",
  // isListEndPost: null,
  // errorMorePost: "",

  const dispatch = useDispatch();

  const [page, updatePage] = useState(1);

  useEffect(() => {
    let subscribe = true;

    if (subscribe) {
      if (subscribe) {
        if (searchText.length < 3) {
          return;
        } else {
          dispatch(postSearch(searchText, page, "navigate"));
        }
      }
    }

    return () => (subscribe = false);
  }, [page]);

  const fetchMoreFeeds = useCallback(() => {
    if (post.isListEndPost === null) {
      return;
    } else {
      if (post.loadingMorePost === false) {
        updatePage(page + 1);
      }
    }
  }, [post.isListEndPost]);

  return (
    <>
      {post.loadingPost ? <SearchLoading /> : null}
      <View>
        <Text textStyle={Fontscales.labelSmallMedium} text={"Posts"} />
        <View>
          <FlatList
            data={post.dataPost?.response?.data?.data}
            renderItem={({ item, index }) => (
              <PostList item={item} index={index} />
            )}
            showsVerticalScrollIndicator={false}
            // columnWrapperStyle={{ gap: scale.pixelSizeHorizontal(10) }}
            keyExtractor={(item, index) => item.id}
            // ListEmptyComponent={() => <HomeListComponentEmpty state={state} />}
            contentContainerStyle={{
              marginTop: scale.pixelSizeVertical(4),
              // width: "100%",
            }}
            onEndReachedThreshold={0.5}
            scrollEventThrottle={16}
            onEndReached={() => fetchMoreFeeds()}
            ListFooterComponent={() =>
              post.errorMorePost ? (
                <ErrorMore state={post} />
              ) : (
                <LoadMore loading={post.loadingMorePost} />
              )
            }
          />
        </View>
      </View>
    </>
  );
};
