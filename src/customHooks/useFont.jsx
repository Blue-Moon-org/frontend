import { useEffect, useState } from "react";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
    Outfit_700Bold
} from "@expo-google-fonts/outfit";

export const useFont = () => {
  const [isFontReady, setIsFontReady] = useState(false);

  SplashScreen.preventAutoHideAsync();

  const subscribe = async () => {
    try {
      await Font.loadAsync({
            Outfit_400Regular,
            Outfit_500Medium,
            Outfit_600SemiBold,
            Outfit_700Bold
      });
    } catch (error) {
      console.warn(error);
    } finally {
      Font.isLoaded ? setIsFontReady(true) : setIsFontReady(false);
    }
  };
  useEffect(() => {
    subscribe();
  });

  const unSubscribe = async () => {
    isFontReady ? SplashScreen.hideAsync() : null;
  };

  useEffect(() => {
    unSubscribe();
  });

  return { isFontReady };
};
