import React from 'react';
import {
  ChakraProvider,
  Progress,
  theme,
  Container,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import axios from 'axios';
import useSWR, { mutate } from 'swr';
import { v4 as uuid } from 'uuid';
import produce from 'immer';

import Header from './components/Header';
import InputFront from './components/InputFront';
import ImpactAnalyse from './components/ImpactAnalyse';
import OptimisationInput from './components/OptimisationInput';
import CurrentSituation from './components/CurrentSutiation';
import CostsImpact from './components/impact_tables/CostsImpact';
import PriceImpact from './components/impact_tables/PriceImpact';
import SalesImpact from './components/impact_tables/SalesImpact';

axios.interceptors.request.use(function (config) {
  config.url = 'http://localhost:3000' + config.url;
  return config;
});
function App() {
  /**
   *
   * GET
   */
  const fetcher = url => axios.get(url).then(res => res.data);
  const { data } = useSWR('/todos', fetcher);
  /**
   * POST
   */
  const addTodo = async todo => {
    const newTodo = { todo, isChecked: 0 };
    mutate(
      '/todos',
      produce(data => {
        data.records.push({ ...newTodo, id: uuid() });
      }),
      false
    );
    await axios.post('/todos', newTodo);
    mutate('/todos');
  };

  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher pos="absolute" top={3} right={3} />
      <Header />
      <Grid
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(7, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1}>
          <InputFront />
          <OptimisationInput />
        </GridItem>

        {!data && <Progress size="xs" my={5} isIndeterminate />}
        <GridItem colSpan={4}>
          <ImpactAnalyse />
        </GridItem>
        <GridItem colSpan={2}>
          <CurrentSituation />
        </GridItem>

        <GridItem colSpan={2}>
          <SalesImpact />
        </GridItem>
        <GridItem colSpan={2}>
          <PriceImpact />
        </GridItem>
        <GridItem colSpan={2}>
          <CostsImpact />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
