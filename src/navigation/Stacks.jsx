import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { BottomTabStack } from "./BottomTabStack";
import { RootStack } from "./RootStack";

const Stack = createSharedElementStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomStack"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="BottomStack" component={BottomTabStack} />
      <Stack.Screen name="RootStack" component={RootStack} />
    </Stack.Navigator>
  );
};

export default Stacks;
