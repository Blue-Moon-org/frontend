// App.jsx
import { BaseToast, ErrorToast } from "react-native-toast-message";
import { colors } from "../../constants/colorpallette";
import { scale } from "../scale";

export const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props) => (
    <BaseToast
      {...props}
      style={{
        borderRadius: scale.fontPixel(7),
        borderTopColor: colors.success,
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: scale.fontPixel(14),
        fontWeight: "400",
        fontFamily: "Outfit_400Regular",
      }}
      text2Style={{
        fontSize: scale.fontPixel(12),
        fontWeight: "400",
        fontFamily: "Outfit_400Regular",
      }}
      text1NumberOfLines={1}
      text2NumberOfLines={1}
      activeOpacity={0.9}
      onPress={() => {}}
      
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props) => (
    <ErrorToast
      {...props}
      style={{ borderRadius: scale.fontPixel(7), borderTopColor: colors.error }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: scale.fontPixel(14),
        fontWeight: "400",
        fontFamily: "Outfit_400Regular",
      }}
      text2Style={{
        fontSize: scale.fontPixel(12),
        fontWeight: "400",
        fontFamily: "Outfit_400Regular",
      }}
      text1NumberOfLines={1}
      text2NumberOfLines={1}
      activeOpacity={0.9}
      onPress={() => {}}
    />
  ),
};
