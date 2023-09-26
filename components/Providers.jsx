"use client";
import React from "react";
import {ChakraProvider} from "@chakra-ui/react";

const Providers = ({children}) => {
  return (
    <ChakraProvider>
      
      <div>{children}</div>
    </ChakraProvider>
  );
};

export default Providers;
