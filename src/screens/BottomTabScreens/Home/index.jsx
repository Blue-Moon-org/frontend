import { View, Button } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SharedStyles } from "../../../styles";
import { Text } from "../../../components/common";
import { useNavigation } from "@react-navigation/native";

export const Home = () => {
  const { setOptions, navigate, goBack, setParams, isFocused } =
    useNavigation();

  useEffect(() => {
    setOptions({
      headerShown: true,
      headerRight: () => (
        <Button onPress={() => console.warn("object")} title="Update count" />
      ),
    });
  }, []);

  return (
    <View style={SharedStyles.container}>
      <Text text={"Home"} />
    </View>
  );
};
