import { TouchableOpacity, View, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { styles } from "./styles";
import { scale } from "../../../utils/scale";
import Svg, { G, Circle } from "react-native-svg";
import { colors } from "../../../constants/colorpallette";
import { Ionicons } from "@expo/vector-icons";
import { data } from "./onboardData";
import { Text } from "../../../components/common";
import { SignInWithGoogle } from "./SignInWithGoogle";

export const Control = ({ percentage, scrollTo, currentIndex }) => {
  // variable

  let size = 63;
  let strokeWidth = 3;
  let center = size / 2;
  let radius = size / 2 - strokeWidth / 2;
  let circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = (toValue) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(
      (value) => {
        const strokeDashoffset =
          circumference - (circumference * value.value) / 100;

        if (progressRef?.current) {
          progressRef.current.setNativeProps({ strokeDashoffset });
        }
      },
      [percentage]
    );

    return () => {
      progressAnimation.removeAllListeners();
    };
  }, []);


  return (
    <View style={styles.control}>
      <View style={styles.rowControl}>
        {data.length - 1 === currentIndex ? (
          <SignInWithGoogle />
        ) : (
          <>
            <Svg width={size} height={size}>
              <G rotation={"-90"} origin={center}>
                <Circle
                  stroke={"#F0F0F0"}
                  cx={center}
                  cy={center}
                  r={radius}
                  strokeWidth={strokeWidth}
                />

                <Circle
                  ref={progressRef}
                  stroke={colors.mainPrimary}
                  cx={center}
                  cy={center}
                  r={radius}
                  strokeWidth={strokeWidth}
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                />
              </G>
            </Svg>
            <TouchableOpacity
              onPress={() => scrollTo()}
              activeOpacity={0.7}
              style={styles.button}
            >
              <Ionicons
                name="ios-arrow-forward"
                size={scale.fontPixel(20)}
                color="white"
              />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};
