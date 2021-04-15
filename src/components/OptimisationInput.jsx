import InputPercent from "./InputPercent";

import { VStack, Flex, Heading } from "@chakra-ui/react";

function OptimizationInput(props) {
  return (
    <VStack className="inputForm" m={5}>
      <Heading size="sm" my={3} textAlign="center">
        Optimisation in %
      </Heading>
      <Flex>
        <label htmlFor="salesInc">Sales target increase:</label>

        <InputPercent
          min="0"
          className="salesInc"
          value={props.onSalesInput()}
          onChange={props.onSalesIncrease}
          maxWidth="80%"
        />
      </Flex>
      <Flex>
        <label htmlFor="priceInc">Price increase:</label>
        <InputPercent
          className="priceInc"
          value={props.priceIncrease}
          onChange={props.onPriceIncrease}
          maxWidth="80%"
        />
      </Flex>
      <Flex>
        <label htmlFor="costsDec">Costs decrease:</label>
        <InputPercent
          className="costsDec"
          value={props.costsDecrease}
          onChange={props.onCostsDecrease}
          maxWidth="80%"
        />
      </Flex>
    </VStack>
  );
}

export default OptimizationInput;
