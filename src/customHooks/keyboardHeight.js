import { useEffect, useState } from "react";

import { Keyboard } from "react-native";

/**
 * Shows height of keyboard when shown
 */
export const useKeyboardHeight = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [show, setshow] = useState(false);

  function onKeyboardShow(event) {
    setKeyboardHeight(event.endCoordinates.height);
    setshow(true);
  }

  function onKeyboardHide() {
    setKeyboardHeight(0);
    setshow(false);
  }

  useEffect(() => {
    const onShow = Keyboard.addListener("keyboardDidShow", onKeyboardShow);
    const onHide = Keyboard.addListener("keyboardDidHide", onKeyboardHide);

    return () => {
      onShow.remove();
      onHide.remove();
    };
  }, []);

  return { keyboardHeight, show };
};
