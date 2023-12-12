import { View, FlatList } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { scale } from "../../../utils/scale";
import { Fontscales, SharedStyles } from "../../../styles";
import { ReviewList } from "./ReviewList";
import { useDispatch, useSelector } from "react-redux";
import { GetReviews } from "../../../Redux/actions/Market/review";
import { ErrorMore, LoadMore } from "../../../components/primary";
import { Lodaing } from "../../../components/primary";

export const Reviews = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reviews);

  // console.warn(state);

  const [page, updatePage] = useState(1);
  // console.warn(route.params.designerDetail);

  const { navigate, setOptions } = useNavigation();
  setOptions({
    headerShown: true,
    title: "Reviews",
    headerTitleAlign: "left",
    headerTitleAllowFontScaling: true,
    headerTitleStyle: Fontscales.paragraphLargeMedium,
    headerLeft: () => (
      <MaterialCommunityIcons
        onPress={() =>
          route.params.designerDetail
            ? navigate("ProfileMarketDetail", {
                item: route.params.item,
                hasLike: route.params.hasLike,
                designerDetail: route.params.designerDetail,
              })
            : navigate("MarketDetail", {
                item: route.params.item,
                hasLike: route.params.hasLike,
              })
        }
        style={{ marginLeft: scale.pixelSizeHorizontal(16) }}
        name="keyboard-backspace"
        size={scale.fontPixel(24)}
        color="black"
      />
    ),
  });

  //   dataReview: null,
  // errorReview: "",
  // moreErrorReview: "",
  // loadingReview: false,
  // moreLoadingReview: false,
  // reviewIsListEnd: "",

  useEffect(() => {
    let sub = true;

    if (sub) {
      dispatch(GetReviews(page, route.params?.item?.id, navigate));
    }

    return () => (sub = false);
  }, [page]);

  const fetchMoreComment = useCallback(() => {
    if (state.reviewIsListEnd === null) {
      return;
    } else {
      if (state.moreLoadingReview === false) {
        updatePage(page + 1);
      }
    }
  }, [state.reviewIsListEnd]);

  console.warn(state);

  return (
    <>
      {state.loadingReview ? <Lodaing /> : null}
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
            <ReviewList item={item} index={index} />
          )}
          showsVerticalScrollIndicator={false}
          data={state.dataReview}
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
            state.moreErrorReview ? (
              <ErrorMore state={state} />
            ) : (
              <LoadMore loading={state.moreLoadingReview} />
            )
          }
        />
      </View>
    </>
  );
};
