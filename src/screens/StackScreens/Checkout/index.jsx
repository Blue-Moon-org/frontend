import { ScrollView, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Fontscales, SharedStyles } from "../../../styles";
import { Text, Button } from "../../../components/common";
import { scale } from "../../../utils/scale";
import { styles } from "./styles";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Feather,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import { colors } from "../../../constants/colorpallette";
import { useNavigation } from "@react-navigation/native";

export const Checkout = () => {
  const [picked, setPicked] = useState(1);
  const [pay, setpay] = useState(1);
  const addressData = [
    {
      id: 1,
      title: "Home",
      address: "4517 Washington Ave. Manchester, Kentucky 39495",
      selected: false,
    },
    {
      id: 2,
      title: "Office",
      address: "4517 Washington Ave. Manchester, Kentucky 39495",
      selected: true,
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
      id: 2,
      title: "Office",
      cardNumber: "**** **** 5390 3522",
      selcted: false,
    },
  ];

  let naira = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    notation: "compact",
    compactDisplay: "short",
    useGrouping: true,
  });

  const { navigate } = useNavigation();

  return (
    <View style={[SharedStyles.container]}>
      <View style={{ marginBottom: scale.heightPixel(200) }}>
        <ScrollView>
          <Text
            textStyle={[
              Fontscales.labelSmallMedium,
              {
                marginVertical: scale.pixelSizeVertical(10),
              },
            ]}
            text={"Delivery address"}
          />
          <View style={styles.addressContainer}>
            {addressData.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => setPicked(item.id)}
                  activeOpacity={1}
                  key={index}
                  style={[
                    styles.eachContainer,
                    {
                      opacity: item.id === picked ? 1 : 0.5,
                    },
                  ]}
                >
                  <MaterialCommunityIcons
                    name={
                      item.id === picked
                        ? "checkbox-multiple-blank-circle"
                        : "checkbox-multiple-blank-circle-outline"
                    }
                    size={24}
                    color={colors.mainPrimary}
                    style={styles.selectedIndicator}
                  />
                  <View style={styles.homeTextContainer}>
                    <View style={styles.iconTextContainer}>
                      <View style={styles.iconContainer}>
                        <FontAwesome5
                          name="warehouse"
                          size={scale.fontPixel(24)}
                          color="white"
                        />
                      </View>
                      <View
                        style={{
                          width: "80%",
                          marginLeft: scale.pixelSizeHorizontal(7),
                        }}
                      >
                        <Text
                          textStyle={Fontscales.labelMediumRegular}
                          text={item.title}
                        />
                        <Text
                          textStyle={{
                            fontFamily: "Outfit_400Regular",
                            fontSize: scale.fontPixel(10),
                            marginTop: scale.pixelSizeVertical(3),
                          }}
                          text={item.address}
                        />
                      </View>
                    </View>
                  </View>
                  <Feather
                    name="edit"
                    size={scale.fontPixel(18)}
                    color={colors.mainPrimary}
                    style={{
                      marginRight: scale.pixelSizeHorizontal(4),
                    }}
                  />
                </TouchableOpacity>
              );
            })}
            <Text
              textStyle={{
                marginVertical: scale.pixelSizeVertical(10),
                fontFamily: "Outfit_400Regular",
                fontSize: scale.fontPixel(10),
                marginTop: scale.pixelSizeVertical(9),
                color: colors.mainPrimary,
              }}
              text={"Add another address"}
              onPress={() => {}}
            />
          </View>

          <Text
            textStyle={[
              Fontscales.labelSmallMedium,
              {
                marginVertical: scale.pixelSizeVertical(10),
              },
            ]}
            text={"Payment method"}
          />
          <View style={styles.addressContainer}>
            {paymentData.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => setpay(item.id)}
                  activeOpacity={1}
                  key={index}
                  style={[
                    styles.eachContainer,
                    {
                      opacity: item.id === pay ? 1 : 0.5,
                    },
                  ]}
                >
                  <MaterialCommunityIcons
                    name={
                      item.id === pay
                        ? "checkbox-multiple-blank-circle"
                        : "checkbox-multiple-blank-circle-outline"
                    }
                    size={24}
                    color={colors.mainPrimary}
                    style={styles.selectedIndicator}
                  />
                  <View style={styles.homeTextContainer}>
                    <View style={styles.iconTextContainer}>
                      <View style={styles.iconContainer}>
                        <MaterialIcons
                          name="payment"
                          size={scale.fontPixel(24)}
                          color={"white"}
                        />
                      </View>
                      <View
                        style={{
                          width: "80%",
                          marginLeft: scale.pixelSizeHorizontal(7),
                        }}
                      >
                        <Text
                          textStyle={Fontscales.labelMediumRegular}
                          text={item.title}
                        />
                        <Text
                          textStyle={{
                            fontFamily: "Outfit_400Regular",
                            fontSize: scale.fontPixel(10),
                            marginTop: scale.pixelSizeVertical(3),
                          }}
                          text={item.cardNumber}
                        />
                      </View>
                    </View>
                  </View>
                  <Ionicons
                    name="chevron-forward"
                    size={scale.fontPixel(18)}
                    color={colors.mainPrimary}
                    style={{
                      marginRight: scale.pixelSizeHorizontal(4),
                    }}
                  />
                </TouchableOpacity>
              );
            })}
            <Text
              textStyle={{
                marginVertical: scale.pixelSizeVertical(10),
                fontFamily: "Outfit_400Regular",
                fontSize: scale.fontPixel(10),
                marginTop: scale.pixelSizeVertical(9),
                color: colors.mainPrimary,
              }}
              text={"Add another payment method"}
              onPress={() => {}}
            />
          </View>
        </ScrollView>
      </View>

      <View style={styles.totalExpense}>
        <View style={styles.expenseContainer}>
          <View style={styles.expense}>
            <Text text={"Sub total"} textStyle={Fontscales.labelSmallRegular} />
            <Text
              text={naira.format(57625)}
              textStyle={Fontscales.labelSmallRegular}
            />
          </View>
          <View style={styles.expense}>
            <Text
              text={"Delivery fee"}
              textStyle={Fontscales.labelSmallRegular}
            />
            <Text
              text={naira.format(5000)}
              textStyle={Fontscales.labelSmallRegular}
            />
          </View>
        </View>
        <View style={styles.totalContainer}>
          <Text text={"Total"} textStyle={Fontscales.labelMediumBold} />
          <Text
            text={naira.format(62625)}
            textStyle={Fontscales.labelMediumBold}
          />
        </View>
        <Button
          // onPress={() => navigate("")}
          containerStyle={styles.btnContainer}
          textStyle={[
            Fontscales.labelSmallRegular,
            {
              color: "white",
            },
          ]}
          title={"Confirm payment"}
        />
      </View>
    </View>
  );
};
