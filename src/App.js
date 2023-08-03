import React from "react";
import { StackContainer } from "./navigation/StackContainer";
import { useFont } from "./customHooks";
import { Provider } from "react-redux";
import store from "./Redux/store";

export default function App() {
  const { isFontReady } = useFont();

  return isFontReady ? (
    <Provider store={store}>
      <StackContainer />
    </Provider>
  ) : null;
}
