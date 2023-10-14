import React, { useEffect } from "react";
import { StackContainer } from "./navigation/StackContainer";
import { useFont } from "./customHooks";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./Redux/store";
import { StatusBar } from "expo-status-bar";
import { MenuProvider } from "react-native-popup-menu";
import Toast from "react-native-toast-message";
import { scale } from "./utils/scale";
import { toastConfig } from "./utils/Config";

export default function App() {
  const { isFontReady } = useFont();

  return isFontReady ? (
    <>
      <Provider store={store}>
        <StatusBar style="dark" />
        <MenuProvider>
          <StackContainer />
        </MenuProvider>
      </Provider>
      <Toast
        position="bottom"
        bottomOffset={scale.pixelSizeVertical(20)}
        visibilityTime={6000}
        autoHide={true}
        config={toastConfig}
      />
    </>
  ) : null;
}
