import { View, TouchableOpacity, TextInput as Input } from "react-native";
import React, { useState } from "react";
import { Fontscales, SharedStyles } from "../../../styles";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { scale } from "../../../utils/scale";
import { Image } from "expo-image";
import {
  Button,
  KeyBoardAvoidingWrapper,
  TextInput,
} from "../../../components/common";

export const PostCreate = () => {
  const data = [
    {
      id: 1,
      image:
        "https://img.freepik.com/premium-photo/nigerian-tradional-dress-costume-formal-eventys_539365-2113.jpg?size=626&ext=jpg&ga=GA1.2.70578014.1688424585&semt=sph",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/premium-photo/nigerian-tradional-dress-costume-formal-eventys_539365-2113.jpg?size=626&ext=jpg&ga=GA1.2.70578014.1688424585&semt=sph",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/premium-photo/nigerian-tradional-dress-costume-formal-eventys_539365-2113.jpg?size=626&ext=jpg&ga=GA1.2.70578014.1688424585&semt=sph",
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/premium-photo/nigerian-tradional-dress-costume-formal-eventys_539365-2113.jpg?size=626&ext=jpg&ga=GA1.2.70578014.1688424585&semt=sph",
    },
    // {
    //   id: 5,
    //   image:
    //     "https://img.freepik.com/premium-photo/nigerian-tradional-dress-costume-formal-eventys_539365-2113.jpg?size=626&ext=jpg&ga=GA1.2.70578014.1688424585&semt=sph",
    // },
    // {
    //   id: 6,
    //   image:
    //     "https://img.freepik.com/premium-photo/nigerian-tradional-dress-costume-formal-eventys_539365-2113.jpg?size=626&ext=jpg&ga=GA1.2.70578014.1688424585&semt=sph",
    // },
    // {
    //   id: 7,
    //   image:
    //     "https://img.freepik.com/premium-photo/nigerian-tradional-dress-costume-formal-eventys_539365-2113.jpg?size=626&ext=jpg&ga=GA1.2.70578014.1688424585&semt=sph",
    // },
    // {
    //   id: 8,
    //   image:
    //     "https://img.freepik.com/premium-photo/nigerian-tradional-dress-costume-formal-eventys_539365-2113.jpg?size=626&ext=jpg&ga=GA1.2.70578014.1688424585&semt=sph",
    // },
    // {
    //   id: 9,
    //   image:
    //     "https://img.freepik.com/premium-photo/nigerian-tradional-dress-costume-formal-eventys_539365-2113.jpg?size=626&ext=jpg&ga=GA1.2.70578014.1688424585&semt=sph",
    // },
    // {
    //   id: 10,
    //   image:
    //     "https://img.freepik.com/premium-photo/nigerian-tradional-dress-costume-formal-eventys_539365-2113.jpg?size=626&ext=jpg&ga=GA1.2.70578014.1688424585&semt=sph",
    // },
  ];
  const [height, updateHeight] = useState(scale.heightPixel(47));

  return (
    <View style={[SharedStyles.container, styles.container]}>
      <KeyBoardAvoidingWrapper offset={scale.heightPixel(106)}>
        <>
          <View style={styles.mapItemsContainer}>
            {data.map((item, index) => {
              return (
                <>
                  {item.id === 1 ? (
                    <TouchableOpacity
                      style={styles.imagePickerContainer}
                      activeOpacity={0.8}
                      key={index}
                    >
                      <Ionicons
                        name="add-outline"
                        size={scale.fontPixel(30)}
                        color="white"
                      />
                    </TouchableOpacity>
                  ) : (
                    <View style={styles.imageContainer} key={index}>
                      <Image
                        source={item.image}
                        contentFit="cover"
                        style={styles.image}
                        cachePolicy={"memory-disk"}
                      />
                    </View>
                  )}
                </>
              );
            })}
          </View>
          <TextInput
            placeholder={"Add title"}
            inputState={"create"}
            style={styles.titleInput}
            textInputStyle={{
              marginBottom: scale.pixelSizeVertical(16),
              marginTop: scale.pixelSizeVertical(40),
            }}
          />
          <Input
            placeholder={"Add caption"}
            inputState={"create"}
            style={[
              styles.textAreaInput,
              {
                height:
                  height < scale.heightPixel(47)
                    ? scale.heightPixel(47)
                    : height,
                maxHeight: scale.pixelSizeVertical(90),
              },
            ]}
            onContentSizeChange={(e) =>
              updateHeight(e.nativeEvent.contentSize.height)
            }
            multiline={true}
          />
          <Button
            title={"Post"}
            textStyle={[
              Fontscales.labelSmallRegular,
              {
                color: "white",
              },
            ]}
            containerStyle={styles.btnContainer}
          />
        </>
      </KeyBoardAvoidingWrapper>
    </View>
  );
};
