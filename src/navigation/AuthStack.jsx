import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { Onbording } from "../screens/AuthScreens/Onboarding";

const Stack = createSharedElementStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Oboard" component={Onbording} />
    </Stack.Navigator>
  );
};
