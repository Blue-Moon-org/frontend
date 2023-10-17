import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [currentUser, updateCurrentUser] = useState({
    email: "",
    username: "",
    phone: "",
  });

  const getData = async () => {
    try {
      const savedUser = await AsyncStorage.getItem("user");
      const savedToken = await AsyncStorage.getItem("userTokens");
      const currentToken = JSON.parse(savedToken);
      const current_user = JSON.parse(savedUser);
      updateCurrentUser(current_user);
      setToken(currentToken);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getData();
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
