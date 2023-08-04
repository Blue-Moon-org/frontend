import { View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Fontscales, SharedStyles } from "../../../styles";
import { Image } from "expo-image";
import { KeyBoardAvoidingWrapper, Text } from "../../../components/common";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { colors } from "../../../constants/colorpallette";
import { scale } from "../../../utils/scale";
import { dataFits } from "../../BottomTabScreens/Home/data";

export const MarketDetail = () => {
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
                    uri: "https://img.freepik.com/free-psd/simple-black-men-s-tee-mockup_53876-57893.jpg?size=626&ext=jpg&ga=GA1.1.70578014.1688424585&semt=ais",
                  }}
                  style={styles.mainImage}
                  contentFit="cover"
                />
              </View>
              <View style={styles.sideImageContainer}>
                <Image
                  source={{
                    uri: "https://img.freepik.com/free-photo/portrait-happy-handsome-young-man-posing-isolated-background_1150-63507.jpg?size=626&ext=jpg&ga=GA1.1.70578014.1688424585&semt=ais",
                  }}
                  style={styles.sideImage}
                  contentFit="cover"
                />
                <Image
                  source={{
                    uri: "https://t4.ftcdn.net/jpg/00/36/15/45/240_F_36154505_P9rHYaLbfnLXBnwf5PfL4dTkB2xVFteU.jpg",
                  }}
                  style={styles.sideImage}
                  contentFit="cover"
                />
                <Image
                  source={{
                    uri: "https://t4.ftcdn.net/jpg/00/68/68/73/240_F_68687386_uYZd2YeBUzBJt7dxzFY0gCVNy5YZN9F7.jpg",
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

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.reactionIcons}
              >
                <Ionicons
                  name="cart-outline"
                  color={"white"}
                  size={scale.fontPixel(20)}
                />
                <Text
                  text={"Add to cart"}
                  textStyle={styles.cartText}
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.aboutContainer}>
              <Text
                text={"Fitted Black Jacket"}
                textStyle={[Fontscales.headingSmallBold]}
                ellipsizeMode={"tail"}
                numberOfLines={1}
              />
              <Text
                text={
                  "Lorem ipsum dolor sit amet consectetur. Tellus eget a imperet pulvinar posuere imperdiet in. At porttitor ac condimentum arcu ut etiam tincidunt. Eget habitasse viverra feugiat ultricies bibendum libero elit."
                }
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
