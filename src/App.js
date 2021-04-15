import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Header from "./components/Header";
import InputFront from "./components/InputFront";
const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
  colors: {
    brand: {
      100: "#24245c",
      200: "#1f527b",
      300: "#3e9494",
      400: "#6a92b3",
      // ...
      900: "#1a202c",
    },
  },
});
function App() {
  return (
    <ChakraProvider theme={theme}>
      <InputFront />
    </ChakraProvider>
  );
}

export default App;
