import { View, FlatList } from "react-native";
import React, { useEffect, useState, useCallback, useContext } from "react";
import { scale } from "../../../utils/scale";
import { useDispatch, useSelector } from "react-redux";
import { fetchForSale } from "../../../Redux/actions/ProfileSection";
import {
  HomeListComponentEmpty,
  LoadMore,
  Error,
  ErrorMore,
  Lodaing,
} from "../../../components/primary";
import { MarketRenderItems } from "../Renders/MarketRenderItems";
import { AuthContext } from "../../../Context";

export const ForSale = ({ detail, designerDetail }) => {
  const dispatch = useDispatch();

  const [page, updatePage] = useState(1);

  const state = useSelector((state) => state.forSale);
  const { currentUser } = useContext(AuthContext);

  //   dataForSale: [],
  // moreLoadingSale: false,
  // isListEndSale: "",
  // moreErrorSale: false,
  // errorForSale: "",
  // loadingForSale: false,

  useEffect(() => {
    let subscribe = true;

    if (subscribe) {
      dispatch(fetchForSale(detail?.id ?? currentUser?.id, page, "navigate"));
    }

    return () => (subscribe = false);
  }, [page]);

  const fetchMoreFeeds = useCallback(() => {
    if (state.isListEndSale === null) {
      return;
    } else {
      if (state.moreLoadingSale === false) {
        updatePage(page + 1);
      }
    }
  }, [state.isListEndSale]);

  return (
    <>
      {state.loadingForSale ? <Lodaing /> : null}
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={state.dataForSale}
          renderItem={({ item, index, separators, designerDetail }) => (
            <MarketRenderItems
              index={index}
              item={item}
              personalProfile={true}
              separator={separators}
              designerDetail={designerDetail}
            />
          )}
          columnWrapperStyle={{ gap: scale.pixelSizeHorizontal(10) }}
          keyExtractor={(item, index) => item.id}
          contentContainerStyle={{
            marginTop: scale.pixelSizeVertical(10),
          }}
          ListEmptyComponent={() => <HomeListComponentEmpty state={state} />}
          onEndReachedThreshold={0.5}
          scrollEventThrottle={16}
          onEndReached={() => fetchMoreFeeds()}
          ListFooterComponent={() =>
            state.moreErrorSale ? (
              <ErrorMore state={state} />
            ) : (
              <LoadMore loading={state.moreLoadingSale} />
            )
          }
        />
      </View>
    </>
  );
};
