import InitialInput from './Input';
import React, { useState } from 'react';
import { VStack, Button, Heading } from '@chakra-ui/react';

function OptimisationInput() {
  const [targetProfit, setTargetProfit] = useState(0);
  const [salesInc, setSalesInc] = useState(0);
  const [priceInc, setPriceInc] = useState(0);
  const [costsDec, setCostsDec] = useState(0);

  function handleFormSubmit(event) {
    event.preventDefault();
  }

  return (
    <VStack className="inputForm" mt={4}>
      <form onSubmit={handleFormSubmit}>
        <Heading size="sm" my={3} textAlign="center">
          Optimisation in %
        </Heading>
        <label htmlFor="targetProfit">Target profit increase:</label>
        <InitialInput
          className="targetProfit"
          value={targetProfit}
          onChange={e => setTargetProfit(parseInt(e.target.value, 10))}
        />
        <label htmlFor="salesInc">Sales target increase:</label>
        <InitialInput
          className="salesInc"
          value={salesInc}
          onChange={e => setSalesInc(parseInt(e.target.value, 10))}
        />
        <label htmlFor="priceInc">Price increase:</label>
        <InitialInput
          className="priceInc"
          value={priceInc}
          onChange={e => setPriceInc(parseInt(e.target.value, 10))}
        />
        <label htmlFor="costsDec">Costs decrease:</label>
        <InitialInput
          className="costsDec"
          value={costsDec}
          onChange={e => setCostsDec(parseInt(e.target.value, 10))}
        />
        <Button onClick={handleFormSubmit} m={3}>
          Apply
        </Button>
      </form>
    </VStack>
  );
}

export default OptimisationInput;
