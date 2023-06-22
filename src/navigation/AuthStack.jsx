import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import {
  Onbording,
  ForgotPassword,
  Login,
  Register,
  EmailVerification,
  PhoneNoVerification,
} from "../screens/AuthScreens";

const Stack = createSharedElementStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Oboard" component={Onbording} />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          presentation: "card",
          animationTypeForReplace: "push",
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          presentation: "card",
          animationTypeForReplace: "push",
          animation: "slide_from_right",
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          presentation: "card",
          animationTypeForReplace: "push",
          animation: "slide_from_right",
        }}
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          presentation: "card",
          animationTypeForReplace: "push",
          animation: "slide_from_right",
        }}
        name="EmailVerification"
        component={EmailVerification}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          presentation: "card",
          animationTypeForReplace: "push",
          animation: "slide_from_right",
        }}
        name="PhoneNoVerification"
        component={PhoneNoVerification}
      />
    </Stack.Navigator>
  );
};
