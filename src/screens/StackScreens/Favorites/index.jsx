import { FlatList, View } from "react-native";
import React, { useState, useEffect } from "react";
import { SharedStyles, Fontscales } from "../../../styles";
import { Text } from "../../../components/common";
import { Image } from "expo-image";
import Constants from "expo-constants";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";
import { fetchFavs } from "../../../Redux/actions/Post/Fav";
import { useDispatch, useSelector } from "react-redux";
import { baseURL } from "../../../utils/request";
import { addFavourite } from "../../../Redux/actions/Post/FavoritePost";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Favorites = () => {
  const dataUpate = (id) => {
    const filterData = dataFavs?.filter((item) => {
      return item.id !== id;
    });

    dispatch(addFavourite(id));

    updateDataFavs(filterData);
  };

  const { navigate } = useNavigation();
  const RenderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigate("PostDetail", { item })}
        style={styles.eachContainer}
      >
        <View style={styles.imageContainer}>
          <Image
            cachePolicy={"memory-disk"}
            source={{ uri: `${baseURL + item?.images[0]?.image}` }}
            contentFit="cover"
            style={styles.image}
          />
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.textContainer}>
            <View>
              <Text
                numberOfLines={1}
                ellipsizeMode={"tail"}
                textStyle={Fontscales.headingSmallMedium}
                text={item.title}
              />
              <Text
                numberOfLines={1}
                ellipsizeMode={"tail"}
                textStyle={{
                  fontFamily: "Outfit_400Regular",
                  fontSize: scale.fontPixel(10),
                }}
                text={item.brandName}
              />
            </View>
            <Text
              textStyle={Fontscales.labelSmallRegular}
              text={`Price : ${item.price}`}
            />
          </View>
          <View style={styles.iconTextContainer}>
            <AntDesign
              name="star"
              size={scale.fontPixel(20)}
              color={colors.mainPrimary}
              onPress={() => dataUpate(item?.id)}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const state = useSelector((state) => state.favs);

  const [dataFavs, updateDataFavs] = useState(state?.data);

  const [page, updatePage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    let sub = true;

    if (sub) {
      dispatch(fetchFavs(page, "navigate"));
    }

    return () => (sub = false);
  }, []);

  useEffect(() => {
    updateDataFavs(state.data);
  }, [state.data]);

  // const fetchMoreComment = useCallback(() => {
  //   if (state.isListEnd === null) {
  //     return;
  //   } else {
  //     if (state.moreLoading === false) {
  //       updatePage(page + 1);
  //     }
  //   }
  // }, [state.isListEnd]);

  return (
    <>
      <View style={SharedStyles.container}>
        <View
          style={{
            paddingBottom:
              Constants.statusBarHeight > 30
                ? scale.pixelSizeVertical(30)
                : scale.pixelSizeVertical(1),
          }}
        >
          <FlatList
            data={dataFavs}
            renderItem={({ item, index }) => (
              <RenderItem item={item} index={index} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{}}
          />
        </View>
      </View>
    </>
  );
};
