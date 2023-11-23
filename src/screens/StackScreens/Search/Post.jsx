import { FlatList, View } from "react-native";
import React from "react";
import { Text, Button } from "../../../components/common";
import { postSearchResultData } from "./data";
import { Fontscales } from "../../../styles";
import { scale } from "../../../utils/scale";
import { styles } from "./styles";
import { colors } from "../../../constants/colorpallette";
import { Image } from "expo-image";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { SearchLoading } from "../../../components/primary";
import PostList from "./PostList";

export const Post = ({ post }) => {
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
            contentContainerStyle={{}}
          />
        </View>
      </View>
    </>
  );
};
