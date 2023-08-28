import React from "react";
import { StackContainer } from "./navigation/StackContainer";
import { useFont } from "./customHooks";
import { Provider } from "react-redux";
import store from "./Redux/store";
// import { scale } from "./utils/scale";
import { StatusBar } from "expo-status-bar";
import { MenuProvider } from "react-native-popup-menu";

export default function App() {
  const { isFontReady } = useFont();

  // console.warn(scale.height);

  return isFontReady ? (
    <Provider store={store}>
      <StatusBar style="dark" />
      <MenuProvider>
        <StackContainer />
      </MenuProvider>
    </Provider>
  ) : null;
}
