import { FlatList, View } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { Text } from "../../../components/common";
import { Fontscales } from "../../../styles";
import { scale } from "../../../utils/scale";
import {
  ErrorMore,
  LoadMore,
  SearchLoading,
} from "../../../components/primary";
import DesignerList from "./DesignerList";
import { useDispatch } from "react-redux";
import { peopleSearch } from "../../../Redux/actions/Post/search";

export const Designer = ({ people, searchText }) => {
  const dispatch = useDispatch();

  //     loadingMorePeople: true,
  // loadingPeople: false,
  // errorPeople: "",
  // isListEndPeople: null,
  // errorMorePeople: "",

  const [page, updatePage] = useState(1);

  useEffect(() => {
    let subscribe = true;

    if (subscribe) {
      if (searchText.length < 3) {
        return;
      } else {
        dispatch(peopleSearch(searchText, page, "navigate"));
      }
    }

    return () => (subscribe = false);
  }, [page]);

  const fetchMoreFeeds = useCallback(() => {
    if (people.isListEndPeople === null) {
      return;
    } else {
      if (people.loadingMorePeople === false) {
        updatePage(page + 1);
      }
    }
  }, [people.isListEndPeople]);

  return (
    <>
      {people.loadingPeople ? <SearchLoading /> : null}
      <View>
        <Text textStyle={Fontscales.labelSmallMedium} text={"Designers"} />
        <View>
          <FlatList
            data={people.dataPeople?.response?.data?.data}
            renderItem={({ item, index }) => (
              <DesignerList item={item} index={index} />
            )}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item.id}
            // ListEmptyComponent={() => <HomeListComponentEmpty state={state} />}
            contentContainerStyle={{
              marginTop: scale.pixelSizeVertical(4),
            }}
            onEndReachedThreshold={0.5}
            scrollEventThrottle={16}
            onEndReached={() => fetchMoreFeeds()}
            ListFooterComponent={() =>
              people.errorMorePeople ? (
                <ErrorMore state={people} />
              ) : (
                <LoadMore loading={people.loadingMorePeople} />
              )
            }
          />
        </View>
      </View>
    </>
  );
};
