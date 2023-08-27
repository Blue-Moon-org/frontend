import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import React from "react";
import { SharedStyles } from "../../../styles";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { scale } from "../../../utils/scale";
import { Image } from "expo-image";
import { useKeyboardHeight } from "../../../customHooks";
import { KeyBoardAvoidingWrapper } from "../../../components/common";

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
    {
      id: 5,
      image:
        "https://img.freepik.com/premium-photo/nigerian-tradional-dress-costume-formal-eventys_539365-2113.jpg?size=626&ext=jpg&ga=GA1.2.70578014.1688424585&semt=sph",
    },
    {
      id: 6,
      image:
        "https://img.freepik.com/premium-photo/nigerian-tradional-dress-costume-formal-eventys_539365-2113.jpg?size=626&ext=jpg&ga=GA1.2.70578014.1688424585&semt=sph",
    },
    {
      id: 7,
      image:
        "https://img.freepik.com/premium-photo/nigerian-tradional-dress-costume-formal-eventys_539365-2113.jpg?size=626&ext=jpg&ga=GA1.2.70578014.1688424585&semt=sph",
    },
    {
      id: 8,
      image:
        "https://img.freepik.com/premium-photo/nigerian-tradional-dress-costume-formal-eventys_539365-2113.jpg?size=626&ext=jpg&ga=GA1.2.70578014.1688424585&semt=sph",
    },
    {
      id: 9,
      image:
        "https://img.freepik.com/premium-photo/nigerian-tradional-dress-costume-formal-eventys_539365-2113.jpg?size=626&ext=jpg&ga=GA1.2.70578014.1688424585&semt=sph",
    },
    {
      id: 10,
      image:
        "https://img.freepik.com/premium-photo/nigerian-tradional-dress-costume-formal-eventys_539365-2113.jpg?size=626&ext=jpg&ga=GA1.2.70578014.1688424585&semt=sph",
    },
  ];

  const { keyboardHeight, show } = useKeyboardHeight();
  return (
    <View style={[SharedStyles.container, styles.container]}>
      <KeyBoardAvoidingWrapper>
        <>
          <View style={styles.mapItemsContainer}>
            {data.map((item, index) => {
              return (
                <>
                  {item.id === 1 ? (
                    <TouchableOpacity
                      style={styles.imagePickerContainer}
                      activeOpacity={0.8}
                    >
                      <Ionicons
                        name="add-outline"
                        size={scale.fontPixel(30)}
                        color="white"
                      />
                    </TouchableOpacity>
                  ) : (
                    <View style={styles.imageContainer}>
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
          {/* <KeyboardAvoidingView
        style={{
          paddingBottom:
            Platform.OS === "ios" && show
              ? scale.pixelSizeVertical(keyboardHeight - 20)
              : scale.pixelSizeVertical(205),
        }}
      > */}
          <TextInput />
          <TextInput />
        </>
      </KeyBoardAvoidingWrapper>
    </View>
  );
};
