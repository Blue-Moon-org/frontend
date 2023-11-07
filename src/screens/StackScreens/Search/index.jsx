import { ScrollView, TouchableOpacity, View } from "react-native";
import React, { useCallback, useState } from "react";
import {
  Button,
  KeyBoardAvoidingWrapper,
  Text,
  TextInput,
} from "../../../components/common";
import { styles } from "./styles";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Fontscales, SharedStyles } from "../../../styles";
import { colors } from "../../../constants/colorpallette";
import { scale } from "../../../utils/scale";
import {
  designerSearchResultData,
  marketSearchResultData,
  postSearchResultData,
  searchFilterData,
  sellerSearchResultData,
} from "./data";
import { ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  postSearch,
  latestSeatch,
  peopleSearch,
  productSeatch,
} from "../../../Redux/actions/Post/search";
import { Image } from "expo-image";

export const Search = () => {
  const [filter, setFilter] = useState("Designers");
  const [searchText, updateSearchText] = useState("");
  const dispatch = useDispatch();

  const submitSearch = useCallback(() => {
    if (searchText.length <= 2) return;
    if (filter === "Designers") {
      dispatch(postSearch(searchText, 1, "navigate"));
    } else if (filter === "Seller") {
      dispatch(peopleSearch(searchText, 1, "navigate"));
    } else if (filter === "Posts") {
      dispatch(latestSeatch(searchText, 1, "navigate"));
    } else if (filter === "Market") {
      dispatch(productSeatch(searchText, 1, "navigate"));
    } else {
      null;
    }
  }, [filter]);

  const latest = useSelector((state) => state.latest);
  const post = useSelector((state) => state.post);
  const people = useSelector((state) => state.people);
  const product = useSelector((state) => state.product);

  return (
    <View style={SharedStyles.container}>
      <KeyBoardAvoidingWrapper offset={scale.heightPixel(105)}>
        <View>
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
          <ScrollView
            horizontal
            contentContainerStyle={{ marginTop: scale.pixelSizeVertical(15) }}
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

          {filter === "Designers" ? (
            <View>
              <Text
                textStyle={Fontscales.labelSmallMedium}
                text={"Designers"}
              />
              {designerSearchResultData.map((item, each) => {
                return (
                  <View style={styles.DContainer}>
                    <View style={styles.DImageContainer}>
                      <Image
                        style={styles.DImage}
                        source={{ uri: item.imageUrl }}
                      />
                    </View>
                    <View
                      style={{
                        width: "78%",
                        backgroundColor: colors.grey2,
                        paddingLeft: scale.pixelSizeHorizontal(4),
                        paddingBottom: scale.pixelSizeVertical(8),
                        borderRadius: scale.fontPixel(8),
                        paddingVertical: scale.pixelSizeVertical(8),
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          paddingRight: scale.pixelSizeHorizontal(10),
                          alignItems: "center",
                          paddingVertical: scale.pixelSizeVertical(5),
                          borderRadius: scale.fontPixel(4),
                          backgroundColor: colors.grey2,
                        }}
                      >
                        <Text
                          textStyle={Fontscales.labelSmallMedium}
                          text={item.name}
                        />
                        <Button
                          textStyle={Fontscales.paragraphSmallRegular}
                          title={item.isFollowing ? "Following" : "Follow"}
                          containerStyle={{
                            paddingHorizontal: scale.pixelSizeHorizontal(10),
                            paddingVertical: scale.pixelSizeVertical(3),
                            backgroundColor: item.isFollowing
                              ? colors.lightPrimary
                              : colors.mainPrimary,
                            borderRadius: scale.fontPixel(4),
                          }}
                        />
                      </View>
                      <Text
                        textStyle={Fontscales.paragraphSmallRegular}
                        text={item.text}
                        numberOfLines={2}
                        ellipsizeMode={"tail"}
                      />
                    </View>
                  </View>
                );
              })}
            </View>
          ) : filter === "Seller" ? (
            <View>
              <Text textStyle={Fontscales.labelSmallMedium} text={"Sellers"} />
              {sellerSearchResultData.map((item, each) => {
                return (
                  <View style={styles.DContainer}>
                    <View style={styles.DImageContainer}>
                      <Image
                        style={styles.DImage}
                        source={{ uri: item.imageUrl }}
                      />
                    </View>
                    <View
                      style={{
                        width: "78%",
                        backgroundColor: colors.grey2,
                        paddingLeft: scale.pixelSizeHorizontal(4),
                        paddingBottom: scale.pixelSizeVertical(14),
                        borderRadius: scale.fontPixel(8),
                        paddingVertical: scale.pixelSizeVertical(8),
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          paddingRight: scale.pixelSizeHorizontal(10),
                          alignItems: "center",
                          paddingVertical: scale.pixelSizeVertical(5),
                          borderRadius: scale.fontPixel(4),
                          backgroundColor: colors.grey2,
                        }}
                      >
                        <Text
                          textStyle={Fontscales.labelSmallMedium}
                          text={item.name}
                        />
                        <Button
                          textStyle={Fontscales.paragraphSmallRegular}
                          title={item.isFollowing ? "Following" : "Follow"}
                          containerStyle={{
                            paddingHorizontal: scale.pixelSizeHorizontal(10),
                            paddingVertical: scale.pixelSizeVertical(3),
                            backgroundColor: item.isFollowing
                              ? colors.lightPrimary
                              : colors.mainPrimary,
                            borderRadius: scale.fontPixel(4),
                          }}
                        />
                      </View>
                      <Text
                        textStyle={Fontscales.paragraphSmallRegular}
                        text={item.text}
                        numberOfLines={2}
                        ellipsizeMode={"tail"}
                      />
                    </View>
                  </View>
                );
              })}
            </View>
          ) : filter === "Posts" ? (
            <View>
              <Text textStyle={Fontscales.labelSmallMedium} text={"Posts"} />
              {postSearchResultData.map((item, each) => {
                return (
                  <View
                    style={{
                      backgroundColor: colors.grey2,
                      paddingHorizontal: scale.pixelSizeHorizontal(9),
                      paddingVertical: scale.pixelSizeVertical(9),
                      width: "100%",
                      height: scale.heightPixel(140),
                      marginTop: scale.pixelSizeVertical(15),
                      borderRadius: scale.fontPixel(8),
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={styles.MimageContainer}>
                      <Image
                        style={styles.Mimage}
                        contentFit="cover"
                        cachePolicy={"memory-disk"}
                        source={{ uri: item.imageUrl }}
                      />
                    </View>
                    <View style={{ width: "65%" }}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginBottom: scale.fontPixel(7),
                          alignItems: "center",
                        }}
                      >
                        <Text
                          text={item.brandName}
                          textStyle={Fontscales.labelSmallMedium}
                        />
                        <Button
                          textStyle={Fontscales.paragraphSmallRegular}
                          title={item.isFollowing ? "Following" : "Follow"}
                          containerStyle={{
                            paddingHorizontal: scale.pixelSizeHorizontal(10),
                            paddingVertical: scale.pixelSizeVertical(3),
                            backgroundColor: item.isFollowing
                              ? colors.lightPrimary
                              : colors.mainPrimary,
                            borderRadius: scale.fontPixel(4),
                          }}
                        />
                      </View>
                      <Text
                        text={item.text}
                        numberOfLines={4}
                        ellipsizeMode={"tail"}
                        textStyle={Fontscales.paragraphSmallRegular}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginTop: scale.fontPixel(12),
                        }}
                      >
                        <AntDesign
                          name="hearto"
                          size={scale.fontPixel(14)}
                          color="black"
                          style={{
                            marginRight: scale.pixelSizeHorizontal(5),
                          }}
                        />
                        <Text
                          text={item.like}
                          textStyle={Fontscales.paragraphSmallRegular}
                        />

                        <AntDesign
                          name="message1"
                          size={scale.fontPixel(14)}
                          color="black"
                          style={{
                            marginHorizontal: scale.pixelSizeHorizontal(5),
                          }}
                        />
                        <Text
                          text={item.comment}
                          textStyle={Fontscales.paragraphSmallRegular}
                        />
                        <Ionicons
                          name="ios-send-outline"
                          size={scale.fontPixel(14)}
                          color="black"
                          style={{
                            marginHorizontal: scale.pixelSizeHorizontal(5),
                          }}
                        />
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          ) : filter === "Market" ? (
            <View>
              <Text text={"Market"} />
              {marketSearchResultData.map((item, each) => {
                return (
                  <View
                    style={{
                      backgroundColor: colors.grey2,
                      paddingHorizontal: scale.pixelSizeHorizontal(9),
                      paddingVertical: scale.pixelSizeVertical(9),
                      width: "100%",
                      height: scale.heightPixel(140),
                      marginTop: scale.pixelSizeVertical(15),
                      borderRadius: scale.fontPixel(8),
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={styles.MimageContainer}>
                      <Image
                        style={styles.Mimage}
                        contentFit="cover"
                        cachePolicy={"memory-disk"}
                        source={{ uri: item.imageUrl }}
                      />
                    </View>
                    <View style={{ width: "65%" }}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginBottom: scale.fontPixel(7),
                          alignItems: "center",
                        }}
                      >
                        <Text
                          text={item.brandName}
                          textStyle={Fontscales.labelSmallMedium}
                        />
                        <Button
                          textStyle={Fontscales.paragraphSmallRegular}
                          title={item.isFollowing ? "Following" : "Follow"}
                          containerStyle={{
                            paddingHorizontal: scale.pixelSizeHorizontal(10),
                            paddingVertical: scale.pixelSizeVertical(3),
                            backgroundColor: item.isFollowing
                              ? colors.lightPrimary
                              : colors.mainPrimary,
                            borderRadius: scale.fontPixel(4),
                          }}
                        />
                      </View>
                      <Text
                        text={item.text}
                        numberOfLines={4}
                        ellipsizeMode={"tail"}
                        textStyle={Fontscales.paragraphSmallRegular}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginTop: scale.fontPixel(12),
                        }}
                      >
                        <AntDesign
                          name="hearto"
                          size={scale.fontPixel(14)}
                          color="black"
                          style={{
                            marginRight: scale.pixelSizeHorizontal(5),
                          }}
                        />
                        <Text
                          text={item.like}
                          textStyle={Fontscales.paragraphSmallRegular}
                        />

                        <AntDesign
                          name="message1"
                          size={scale.fontPixel(14)}
                          color="black"
                          style={{
                            marginHorizontal: scale.pixelSizeHorizontal(5),
                          }}
                        />
                        <Text
                          text={item.comment}
                          textStyle={Fontscales.paragraphSmallRegular}
                        />
                        <Ionicons
                          name="ios-send-outline"
                          size={scale.fontPixel(14)}
                          color="black"
                          style={{
                            marginHorizontal: scale.pixelSizeHorizontal(5),
                          }}
                        />
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          ) : (
            ""
          )}
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
      </KeyBoardAvoidingWrapper>
    </View>
  );
};
