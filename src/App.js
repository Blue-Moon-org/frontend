import React from "react";
import { StackContainer } from "./navigation/StackContainer";
import { useFont } from "./customHooks";


export default function App() {

  const {isFontReady} = useFont()


  return isFontReady ?  (
   <StackContainer/>
  ) : null
}

