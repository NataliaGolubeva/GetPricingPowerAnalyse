import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

import Header from "./components/Header";
import InputFront from "./components/InputFront";
const theme = extendTheme({
  colors: {
    brand: {
      100: "#24245c",
      // ...
      900: "#1a202c",
    },
  },
});
function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher pos="absolute" top={3} right={3} />
      <Header />

      <InputFront />
    </ChakraProvider>
  );
}

export default App;
