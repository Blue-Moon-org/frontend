import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { AuthStack } from "./AuthStack";
import Stacks from "./Stacks";

const Stack = createSharedElementStackNavigator();
export const StackContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="Stacks" component={Stacks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
