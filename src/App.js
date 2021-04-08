import React from "react";
import { ChakraProvider, theme, Grid, GridItem } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import axios from "axios";
import useSWR, { mutate } from "swr";
import { v4 as uuid } from "uuid";
import produce from "immer";

import Header from "./components/Header";
import InputFront from "./components/InputFront";
import ImpactAnalyse from "./components/ImpactAnalyse";
import OptimisationInput from "./components/OptimisationInput";
import CurrentSituation from "./components/CurrentSutiation";
import CostsImpact from "./components/impact_tables/CostsImpact";
import PriceImpact from "./components/impact_tables/PriceImpact";
import SalesImpact from "./components/impact_tables/SalesImpact";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher pos="absolute" top={3} right={3} />
      <Header />
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(8, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={4}>
          <InputFront />
          <OptimisationInput />
        </GridItem>

        <GridItem colSpan={4}>
          <ImpactAnalyse />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
