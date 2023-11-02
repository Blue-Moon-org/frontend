import React, { useEffect, useState, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { AuthStack } from "./AuthStack";
import Stacks from "./Stacks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { userLocationPermission } from "../Redux/actions/permission/location";
import { AuthContext } from "../Context";

const Stack = createSharedElementStackNavigator();

export const StackContainer = () => {
  const dispatch = useDispatch();
  const {
    addCallbacks,
    cb,
    connect,
    disconnect,
    socketNewMessage,
    state: chatState,
    ref,
    currentUser,
  } = useContext(AuthContext);

  const [user, updateUser] = useState(currentUser);

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
  }, [currentUser]);

  useEffect(() => {
    let unsubscribe = true;
    if (unsubscribe) {
      dispatch(userLocationPermission());
    }
    return () => (unsubscribe = false);
  }, []);

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
