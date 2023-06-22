import { TouchableOpacity, View } from "react-native";
import { KeyBoardAvoidingWrapper, Text } from "../../../components/common";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Fontscales, SharedStyles } from "../../../styles";
import { colors } from "../../../constants/colorpallette";
import { scale } from "../../../utils/scale";
import { Buyer } from "./Buyer";
import { Designer } from "./Designer";

export const Register = () => {
  const [accountId, updateAccountId] = useState(1);

  const data = [
    {
      id: 1,
      name: "Buyer’s Account",
    },
    {
      id: 2,
      name: "Designer’s Account",
    },
  ];

  const [buyersState, updateBuyersState] = useState({
    showPassword: false,
    policy: false,
  });

  const [designersState, updateDesignersState] = useState({
    showPassword: false,
    policy: false,
  });

  return (
    <SafeAreaView style={[SharedStyles.container]}>
      <Text
        textStyle={[styles.headerText, Fontscales.headingLargeBold]}
        text={"Register for a \n account"}
      />
      <Text
        textStyle={[styles.subText, Fontscales.paragraphSmallMedium]}
        text={"Create a buyer’s or designer’s account"}
      />

      <View style={styles.headerOptionContainer}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.options,
                {
                  borderColor:
                    item.id === accountId ? colors.mainPrimary : colors.grey2,
                },
              ]}
              onPress={() => updateAccountId(item.id)}
              key={item.id}
            >
              <Text
                numberOfLines={1}
                ellipsizeMode={"tail"}
                textStyle={[
                  styles.optionsText,
                  {
                    color:
                      item.id === accountId ? colors.mainPrimary : colors.grey1,
                    paddingLeft:
                      item.id === 1
                        ? scale.pixelSizeHorizontal(8)
                        : scale.pixelSizeHorizontal(5),
                  },
                ]}
                text={item.name}
              />
            </TouchableOpacity>
          );
        })}
      </View>
      {accountId === 1 ? (
        <Buyer
          buyersState={buyersState}
          updateBuyersState={updateBuyersState}
        />
      ) : (
        <Designer
          designersState={designersState}
          updateDesignersState={updateDesignersState}
        />
      )}
    </SafeAreaView>
  );
};
