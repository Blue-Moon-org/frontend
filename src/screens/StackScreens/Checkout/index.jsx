import { View } from "react-native";
import React from "react";
import { Fontscales, SharedStyles } from "../../../styles";
import { Text } from "../../../components/common";
import { scale } from "../../../utils/scale";
import { styles } from "./styles";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";

export const Checkout = () => {
  const addressData = [
    {
      id: 1,
      title: "Home",
      address: "4517 Washington Ave. Manchester, Kentucky 39495",
      selected: true,
    },
    {
      id: 2,
      title: "Office",
      address: "4517 Washington Ave. Manchester, Kentucky 39495",
      selcted: false,
    },
  ];
  const paymentData = [
    {
      id: 1,
      title: "Master card",
      cardNumber: "**** **** 3264 7429",
      selcted: true,
    },
    {
      id: 1,
      title: "Office",
      cardNumber: "**** **** 5390 3522",
      selcted: false,
    },
  ];

  return (
    <View style={SharedStyles.container}>
      <Text
        textStyle={[
          Fontscales.labelSmallMedium,
          {
            marginTop: scale.pixelSizeVertical(10),
          },
        ]}
        text={"Delivery address"}
      />
      <View style={styles.addressContainer}>
        {addressData.map((item, index) => {
          return (
            <View key={index}>
              <MaterialCommunityIcons
                name="checkbox-multiple-blank-circle-outline"
                size={24}
                color="black"
              />
              <View>
                <View>
                  <View>
                    <FontAwesome5 name="warehouse" size={24} color="black" />
                  </View>
                  <Text text={item.title} />
                  <Text text={item.address} />
                </View>
                <Feather name="edit" size={24} color="black" />
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};
