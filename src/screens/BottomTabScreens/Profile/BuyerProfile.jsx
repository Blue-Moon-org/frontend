import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfileHeader } from "../../../components/primary";
import { styles } from "./styles";
import { SharedStyles } from "../../../styles";

export const BuyerProfile = () => {
  return (
    <SafeAreaView style={SharedStyles.container}>
      <ProfileHeader buyer={true} />
    </SafeAreaView>
  );
};
