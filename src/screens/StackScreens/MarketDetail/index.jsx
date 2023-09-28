import { View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Fontscales, SharedStyles } from "../../../styles";
import { Image } from "expo-image";
import { KeyBoardAvoidingWrapper, Text } from "../../../components/common";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { scale } from "../../../utils/scale";
import { dataFits } from "../../BottomTabScreens/Home/data";
import { useRoute } from "@react-navigation/native";
import { baseURL } from "../../../utils/request";

export const MarketDetail = () => {
  const route = useRoute();
  return (
    <View style={SharedStyles.container}>
      <KeyBoardAvoidingWrapper>
        <View>
          <View style={styles.detailContainer}>
            <View style={styles.imagesContainer}>
              <View style={styles.mainImageContainer}>
                <Image
                  cachePolicy={"memory-disk"}
                  source={{
                    uri: `${baseURL + route.params?.item?.images[0]?.image}`,
                  }}
                  style={styles.mainImage}
                  contentFit="cover"
                />
              </View>
              <View style={styles.sideImageContainer}>
                <Image
                  source={{
                    uri: `${baseURL + route.params?.item?.images[1]?.image}`,
                  }}
                  style={styles.sideImage}
                  contentFit="cover"
                />
                <Image
                  source={{
                    uri: `${baseURL + route.params?.item?.images[2]?.image}`,
                  }}
                  style={styles.sideImage}
                  contentFit="cover"
                />
                <Image
                  source={{
                    uri: `${baseURL + route.params?.item?.images[3]?.image}`,
                  }}
                  style={styles.sideImage}
                  contentFit="cover"
                />
              </View>
            </View>

            <View style={styles.profilecontainer}>
              <View style={styles.imageText}>
                <View style={styles.userProfileContainer}>
                  <Image
                    source={{
                      uri: "https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-139608.jpg?size=626&ext=jpg&ga=GA1.1.70578014.1688424585&semt=ais",
                    }}
                    style={styles.userProfile}
                    contentFit="cover"
                    cachePolicy={"memory-disk"}
                  />
                </View>
                <View style={styles.userdetailContainer}>
                  <Text
                    text={"E-Ward Fits"}
                    numberOfLines={1}
                    ellipsizeMode={"tail"}
                    textStyle={[styles.brandName, Fontscales.headingSmallBold]}
                  />
                  <Text
                    text={"Esther Howard"}
                    numberOfLines={1}
                    ellipsizeMode={"tail"}
                    textStyle={[
                      styles.userName,
                      Fontscales.paragraphSmallRegular,
                    ]}
                  />
                </View>
              </View>

              <TouchableOpacity activeOpacity={1} style={styles.reactionIcons}>
                <Ionicons
                  name={route.params?.hasCarted ? "cart" : "cart-outline"}
                  color={"white"}
                  size={scale.fontPixel(20)}
                />
                <Text
                  text={route.params?.hasCarted ? "In cart" : "Add to cart"}
                  textStyle={styles.cartText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.aboutContainer}>
              <Text
                text={route.params?.item.title}
                textStyle={[Fontscales.headingSmallBold]}
                ellipsizeMode={"tail"}
                numberOfLines={1}
              />
              <Text
                text={route.params?.item.title}
                textStyle={Fontscales.paragraphSmallRegular}
                numberOfLines={2}
                ellipsizeMode={"tail"}
              />
            </View>
          </View>
          <View style={styles.seeMoreContainer}>
            <Text
              text={"See more like this"}
              textStyle={Fontscales.paragraphMediumRegular}
            />
            <View style={styles.outter}>
              {dataFits.map((item, index) => {
                return (
                  <View key={index} style={styles.itemContainer}>
                    <View style={styles.innerContainer}>
                      <Image
                        source={{ uri: item.imageUrl }}
                        contentFit="cover"
                        cachePolicy={"memory-disk"}
                        style={styles.image}
                      />
                      <AntDesign
                        name={item.like ? "heart" : "hearto"}
                        size={scale.fontPixel(18)}
                        color={"white"}
                        style={styles.likeIcon}
                      />
                    </View>
                    <View style={styles.bottomContainer}>
                      <Text
                        textStyle={styles.text}
                        ellipsizeMode={"tail"}
                        numberOfLines={1}
                        text={item.name}
                      />
                      <Text
                        text={item.subText}
                        textStyle={styles.subText}
                        ellipsizeMode={"tail"}
                        numberOfLines={2}
                      />
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </KeyBoardAvoidingWrapper>
    </View>
  );
};
