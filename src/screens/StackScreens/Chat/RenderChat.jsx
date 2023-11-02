import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Text } from "../../../components/common";
import { styles } from "./styles";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";
import { Image } from "expo-image";
import { baseURL } from "../../../utils/request";
import { useNavigation } from "@react-navigation/native";

export const RenderChat = ({ item, index, separator, user, progress }) => {
  const { navigate } = useNavigation();
  // console.warn(item);

  // console.warn(item);
  return (
    <View>
      {user?.fullname !== item.author ? (
        item.msg_type === "text" ? (
          <View style={styles.meMessageContainer}>
            <Text text={item.content} textStyle={styles.meMessage} />
            <Text
              text={item.timestamp.slice(11, 16)}
              textStyle={styles.meMessageTime}
            />
          </View>
        ) : item.msg_type === "measure" ? (
          <View style={styles.meMeasureContainer}>
            {item.content?.map((each) => {
              return (
                <View style={styles.measureContainer}>
                  <View
                    style={{
                      borderRadius: scale.fontPixel(8),
                      backgroundColor: colors.blackText,
                      width: "40%",
                      paddingVertical: scale.pixelSizeVertical(10),
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: scale.pixelSizeVertical(8),
                    }}
                  >
                    <Text text={each.part} textStyle={styles.meMessage} />
                  </View>
                  <View
                    style={{
                      borderRadius: scale.fontPixel(8),
                      backgroundColor: "white",
                      width: "40%",
                      paddingVertical: scale.pixelSizeVertical(10),
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: scale.pixelSizeVertical(8),
                    }}
                  >
                    <Text
                      text={each.size}
                      textStyle={[
                        styles.meMessage,
                        {
                          color: "black",
                        },
                      ]}
                    />
                  </View>
                </View>
              );
            })}
            <Text
              text={item.timestamp.slice(11, 16)}
              textStyle={styles.meMessageTime}
            />
          </View>
        ) : item.msg_type === "image" ? (
          item.content?.map((e) => (
            <TouchableOpacity
              onPress={() =>
                navigate("ImagePreview", {
                  image: `${baseURL + e}`,
                })
              }
              activeOpacity={0.6}
              style={styles.mePicContainer}
            >
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: `${baseURL + e}` }}
                  style={styles.image}
                  cachePolicy={"memory-disk"}
                  contentFit="cover"
                />
              </View>

              <Text
                text={item.timestamp.slice(11, 16)}
                textStyle={styles.mePicTime}
              />
            </TouchableOpacity>
          ))
        ) : null
      ) : user?.fullname === item.author ? (
        item.msg_type === "text" ? (
          <View style={styles.youMessageContainer}>
            <Text text={item.content} textStyle={styles.youMessage} />
            <Text
              text={item.timestamp.slice(11, 16)}
              textStyle={styles.youMessageTime}
            />
          </View>
        ) : item.msg_type === "measure" ? (
          <View style={styles.youMeasureContainer}>
            {item.content?.map((each) => {
              return (
                <View style={styles.measureContainer}>
                  <View
                    style={{
                      borderRadius: scale.fontPixel(8),
                      backgroundColor: colors.blackText,
                      width: "40%",
                      paddingVertical: scale.pixelSizeVertical(10),
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: scale.pixelSizeVertical(8),
                    }}
                  >
                    <Text text={each.part} textStyle={styles.meMessage} />
                  </View>
                  <View
                    style={{
                      borderRadius: scale.fontPixel(8),
                      backgroundColor: "white",
                      width: "40%",
                      paddingVertical: scale.pixelSizeVertical(10),
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: scale.pixelSizeVertical(8),
                    }}
                  >
                    <Text
                      text={each.size}
                      textStyle={[
                        styles.youMessage,
                        {
                          color: "black",
                        },
                      ]}
                    />
                  </View>
                </View>
              );
            })}
            <Text
              text={item?.timestamp.slice(11, 16)}
              textStyle={styles.meMessageTime}
            />
          </View>
        ) : item.msg_type === "image" ? (
          item.content?.map((e) => (
            <TouchableOpacity
              onPress={() =>
                navigate("ImagePreview", {
                  image: `${baseURL + e}`,
                })
              }
              activeOpacity={0.6}
              style={styles.youPicContainer}
            >
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: `${baseURL + e}` }}
                  style={styles.image}
                  cachePolicy={"memory-disk"}
                  contentFit="cover"
                />
              </View>

              <Text
                text={item.timestamp.slice(11, 16)}
                textStyle={styles.youPicTime}
              />
            </TouchableOpacity>
          ))
        ) : null
      ) : null}
    </View>
  );
};

//  : item.condition === "day" ? (
//         <View style={styles.newDayContainer}>
//           <Text text={item.date} textStyle={styles.newDayTime} />
//         </View>
//       ) :
