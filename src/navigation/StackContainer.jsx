import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { AuthStack } from "./AuthStack";
import Stacks from "./Stacks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";

const Stack = createSharedElementStackNavigator();

export const StackContainer = () => {
  const isUser = useSelector((state) => state.loginState);
  const [user, updateUser] = useState(isUser);

  const [authloaded, updateAuthLoaded] = useState(false);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        updateUser(true);

        updateAuthLoaded(true);
      } else {
        updateUser(false);

        updateAuthLoaded(true);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getUser();
  }, [isUser]);

  return (
    <>
      {authloaded !== false && (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {user ? (
              <Stack.Screen name="Stacks" component={Stacks} />
            ) : (
              <Stack.Screen name="Auth" component={AuthStack} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};
