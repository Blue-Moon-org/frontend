import { View } from "react-native";
import React from "react";
import { Text } from "../../../components/common";
import { styles } from "./styles";
import { renderTimestamp } from "../../../utils/Socket/timeStampConverter";
import { scale } from "../../../utils/scale";
import { colors } from "../../../constants/colorpallette";

export const RenderChat = ({ item, index, separator, user }) => {
  // console.warn(item);
  return (
    <View>
      {user?.fullname !== item.author ? (
        item.msg_type === "text" ? (
          <View style={styles.meMessageContainer}>
            <Text text={item.content} textStyle={styles.meMessage} />
            <Text
              text={renderTimestamp(item.timestamp)}
              textStyle={styles.meMessageTime}
            />
          </View>
        ) : (
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
              text={renderTimestamp(item.timestamp)}
              textStyle={styles.meMessageTime}
            />
          </View>
        )
      ) : user?.fullname === item.author ? (
        item.msg_type === "text" ? (
          <View style={styles.youMessageContainer}>
            <Text text={item.content} textStyle={styles.youMessage} />
            <Text
              text={renderTimestamp(item.timestamp)}
              textStyle={styles.youMessageTime}
            />
          </View>
        ) : (
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
              text={renderTimestamp(item.timestamp)}
              textStyle={styles.meMessageTime}
            />
          </View>
        )
      ) : null}
    </View>
  );
};

//  : item.condition === "day" ? (
//         <View style={styles.newDayContainer}>
//           <Text text={item.date} textStyle={styles.newDayTime} />
//         </View>
//       ) :
