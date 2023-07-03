import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { BottomTabStack } from "./BottomTabStack";

const Stack = createSharedElementStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomStack"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen name="BottomStack" component={BottomTabStack} />
    </Stack.Navigator>
  );
};

export default Stacks;
