import React from "react";
import { StackContainer } from "./navigation/StackContainer";
import { useFont } from "./customHooks";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { StatusBar } from "expo-status-bar";
import { MenuProvider } from "react-native-popup-menu";
import Toast from "react-native-toast-message";
import { scale } from "./utils/scale";
import { toastConfig } from "./utils/Config";
import { AuthProvider } from "./Context";

export default function App() {
  const { isFontReady } = useFont();

  return isFontReady ? (
    <>
      <Provider store={store}>
        <AuthProvider>
          <StatusBar style="dark" />
          <MenuProvider>
            <StackContainer />
          </MenuProvider>
        </AuthProvider>
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
