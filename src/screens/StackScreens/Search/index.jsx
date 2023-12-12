import { ScrollView, TouchableOpacity, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import {
  Button,
  KeyBoardAvoidingWrapper,
  Text,
  TextInput,
} from "../../../components/common";
import { styles } from "./styles";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Fontscales, SharedStyles } from "../../../styles";
import { colors } from "../../../constants/colorpallette";
import { scale } from "../../../utils/scale";
import { searchFilterData } from "./data";
import { useDispatch, useSelector } from "react-redux";
import {
  postSearch,
  latestSeatch,
  peopleSearch,
  productSeatch,
} from "../../../Redux/actions/Post/search";
import { Post } from "./Post";
import { Market } from "./Market";
import { Designer } from "./Designer";

export const Search = () => {
  const [filter, setFilter] = useState("Designers");
  const [searchText, updateSearchText] = useState("");
  const dispatch = useDispatch();

  const submitSearch = () => {
    if (searchText.length < 3) return;
    if (filter === "Designers") {
      dispatch(peopleSearch(searchText, 1, "navigate"));
    } else if (filter === "Posts") {
      dispatch(postSearch(searchText, 1, "navigate"));
    } else if (filter === "Market") {
      dispatch(productSeatch(searchText, 1, "navigate"));
    } else {
      null;
    }
  };

  // useEffect(() => {
  //   let sub = true;
  //   if (sub) {
  //     submitSearch();
  //   }

  //   return () => (sub = false);
  // }, [filter]);

  const latest = useSelector((state) => state.latest);
  const post = useSelector((state) => state.post);
  const people = useSelector((state) => state.people);
  const product = useSelector((state) => state.product);

  return (
    <View style={SharedStyles.container}>
      <View style={{ height: 120 }}>
        {/* <KeyBoardAvoidingWrapper offset={scale.heightPixel(105)}> */}

        <View style={styles.textInputContainer}>
          <Ionicons
            name="search-outline"
            size={scale.fontPixel(24)}
            color={colors.blackText}
            style={styles.icon}
          />
          <TextInput
            returnKeyType="search"
            clearButtonMode="while-editing"
            onSubmitEditing={() => submitSearch()}
            style={[styles.textInput, Fontscales.labelSmallRegular]}
            placeholder="Search for anything"
            value={searchText}
            onChangeText={(text) => {
              updateSearchText(text);
            }}
          />
        </View>
        <View>
          <ScrollView
            horizontal
            contentContainerStyle={{
              marginTop: scale.pixelSizeVertical(15),
              // marginBottom: scale.pixelSizeVertical(30),
            }}
            showsHorizontalScrollIndicator={false}
          >
            {searchFilterData.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => setFilter(item.name)}
                  key={index}
                  style={{
                    marginRight:
                      searchFilterData.length === index + 1
                        ? scale.pixelSizeHorizontal(0)
                        : scale.pixelSizeHorizontal(8),
                    backgroundColor:
                      item.name === filter
                        ? colors.mainPrimary
                        : colors.lightPrimary,
                    paddingVertical: scale.pixelSizeVertical(6),
                    paddingHorizontal: scale.pixelSizeVertical(9),
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius: scale.fontPixel(15),
                    marginBottom: scale.pixelSizeVertical(15),
                  }}
                >
                  <MaterialIcons
                    name="design-services"
                    size={scale.fontPixel(14)}
                    color="white"
                  />
                  <Text
                    textStyle={{
                      textAlign: "center",
                      fontFamily: "Outfit_500Medium",
                      fontSize: scale.fontPixel(10),
                      marginLeft: scale.pixelSizeHorizontal(3),
                      color: "white",
                    }}
                    text={item.name}
                  />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* </KeyBoardAvoidingWrapper> */}
      </View>
      <View
        style={{
          height: scale.height - scale.heightPixel(235),
          paddingBottom: scale.heightPixel(30),
        }}
      >
        {filter === "Designers" ? (
          <Designer people={people} searchText={searchText} />
        ) : filter === "Posts" ? (
          <Post post={post} searchText={searchText} />
        ) : filter === "Market" ? (
          <Market product={product} searchText={searchText} />
        ) : (
          ""
        )}
      </View>

      {/* <Text
            text={"Latest"}
            textStyle={[
              Fontscales.labelSmallMedium,
              {
                marginTop: scale.pixelSizeVertical(20),
                marginBottom: scale.pixelSizeVertical(8),
              },
            ]}
          />
          <View style={styles.container}>
            {latest.loadingLatest ? (
              <ActivityIndicator size={25} color={colors.mainPrimary} />
            ) : (
              latest.dataLatest?.response?.data?.data
                ?.slice(0, 9)
                .map((item, index) => {
                  return (
                    <Text
                      key={index}
                      text={item.body}
                      textStyle={[
                        Fontscales.labelSmallRegular,
                        {
                          marginBottom: scale.pixelSizeVertical(12),
                        },
                      ]}
                    />
                  );
                })
            )}
          </View>
          <Text text={"Show all"} textStyle={styles.showAll} />
          <Text
            text={"Designers & Buyers"}
            textStyle={[
              Fontscales.labelSmallMedium,
              {
                marginTop: scale.pixelSizeVertical(20),
                marginBottom: scale.pixelSizeVertical(8),
              },
            ]}
          />
          <View style={styles.container}>
            {people.loadingPeople ? (
              <ActivityIndicator size={25} color={colors.mainPrimary} />
            ) : (
              people.dataPeople?.response?.data?.data
                ?.slice(0, 9)
                .map((item, index) => {
                  return (
                    <Text
                      key={index}
                      text={item.fullname}
                      textStyle={[
                        Fontscales.labelSmallRegular,
                        {
                          marginBottom: scale.pixelSizeVertical(12),
                        },
                      ]}
                    />
                  );
                })
            )}
          </View>

          <Text text={"Show all"} textStyle={styles.showAll} />
          <Text
            text={"Products"}
            textStyle={[
              Fontscales.labelSmallMedium,
              {
                marginTop: scale.pixelSizeVertical(20),
                marginBottom: scale.pixelSizeVertical(8),
              },
            ]}
          />
          <View style={styles.container}>
            {product.loadingProduct ? (
              <ActivityIndicator size={25} color={colors.mainPrimary} />
            ) : (
              product.dataProduct?.response?.data?.data
                ?.slice(0, 9)
                .map((item, index) => {
                  return (
                    <Text
                      key={index}
                      text={item.title}
                      textStyle={[
                        Fontscales.labelSmallRegular,
                        {
                          marginBottom: scale.pixelSizeVertical(12),
                        },
                      ]}
                    />
                  );
                })
            )}
          </View>
          <Text text={"Show all"} textStyle={styles.showAll} />
          <Text
            text={"Posts"}
            textStyle={[
              Fontscales.labelSmallMedium,
              {
                marginTop: scale.pixelSizeVertical(20),
                marginBottom: scale.pixelSizeVertical(8),
              },
            ]}
          />
          <View style={styles.container}>
            {post.loadingPost ? (
              <ActivityIndicator size={25} color={colors.mainPrimary} />
            ) : (
              post.dataPost?.response?.data?.data
                ?.slice(0, 9)
                .map((item, index) => {
                  return (
                    <Text
                      key={index}
                      text={item.body}
                      textStyle={[
                        Fontscales.labelSmallRegular,
                        {
                          marginBottom: scale.pixelSizeVertical(12),
                        },
                      ]}
                    />
                  );
                })
            )}
          </View>
          <Text text={"Show all"} textStyle={styles.showAll} /> */}
    </View>
  );
};
