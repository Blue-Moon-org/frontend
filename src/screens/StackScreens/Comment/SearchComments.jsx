import { View, FlatList } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { scale } from "../../../utils/scale";
import { Fontscales, SharedStyles } from "../../../styles";
import { CommentList } from "./CommentList";
import { useDispatch, useSelector } from "react-redux";
import { fetchComment } from "../../../Redux/actions/Post/CommentList";
import { ErrorMore, LoadMore } from "../../../components/primary";
import { Lodaing } from "../../../components/primary";

export const SearchComments = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.commentList);

  const [page, updatePage] = useState(1);

  const { navigate, setOptions } = useNavigation();
  setOptions({
    headerShown: true,
    title: "Comment",
    headerTitleAlign: "left",
    headerTitleAllowFontScaling: true,
    headerTitleStyle: Fontscales.paragraphLargeMedium,
    headerLeft: () => (
      <MaterialCommunityIcons
        onPress={() => navigate("Search")}
        style={{ marginLeft: scale.pixelSizeHorizontal(16) }}
        name="keyboard-backspace"
        size={scale.fontPixel(24)}
        color="black"
      />
    ),
  });

  useEffect(() => {
    let sub = true;

    if (sub) {
      dispatch(fetchComment(page, route.params?.item?.id, navigate));
    }

    return () => (sub = false);
  }, [page]);

  const fetchMoreComment = useCallback(() => {
    if (state.isListEnd === null) {
      return;
    } else {
      if (state.moreLoading === false) {
        updatePage(page + 1);
      }
    }
  }, [state.isListEnd]);

  return (
    <>
      {state.loading ? <Lodaing /> : null}
      <View
        style={[
          SharedStyles.container,
          {
            backgroundColor: "#DBDBDB",
          },
        ]}
      >
        <FlatList
          renderItem={({ item, index }) => (
            <CommentList item={item} index={index} />
          )}
          showsVerticalScrollIndicator={false}
          data={state.data}
          contentContainerStyle={
            {
              // paddingVertical: scale.pixelSizeVertical(20),
            }
          }
          keyExtractor={(item) => item.id}
          onEndReached={() => fetchMoreComment()}
          onEndReachedThreshold={0.5}
          scrollEventThrottle={16}
          // ListEmptyComponent={() => <HomeListComponentEmpty state={state} />}
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
