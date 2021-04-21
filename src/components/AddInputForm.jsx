import React from "react";
import { VStack, Flex, Heading } from "@chakra-ui/react";
import InputEuro from "./input/Input";
import InputPercent from "./input/InputPercent";
import SimpleInput from "./input/simpleInput";

function AddInputForm(props) {
  const { revenue, totalCosts, netProfit, ebitda } = props;
  return (
    <VStack className="inputForm" mx={5} my={4}>
      <Heading size="sm" my={3} textAlign="center" className="smallHeader">
        Your actual company data
      </Heading>

      <Flex>
        <label htmlFor="volume_sold">Volume of product sold:</label>
        <SimpleInput
          className="volume_sold"
          value={props.volume}
          onChange={props.onVolumeChange}
          maxWidth="80%"
        />
      </Flex>
      <Flex>
        <label htmlFor="average_price">Average price per product:</label>
        <InputEuro
          className="average_price"
          value={props.price}
          onChange={props.onPriceChange}
          maxWidth="80%"
        />
      </Flex>

      <Flex>
        <label htmlFor="fixed_costs">Total fixed costs:</label>
        <InputEuro
          className="fixed_costs"
          value={props.costs}
          onChange={props.onCostsChange}
          maxWidth="80%"
        />
      </Flex>
      <Flex>
        <label htmlFor="cogs">Variable costs:</label>
        <InputPercent
          className="cogs"
          value={props.cogs}
          onChange={props.onCogsChange}
          maxWidth="80%"
        />
      </Flex>
      <Flex>
        <label htmlFor="taxes">Taxes:</label>
        <InputPercent
          className="taxes"
          value={props.taxes}
          onChange={props.onTaxesChange}
          maxWidth="80%"
        />
      </Flex>
      <Flex>
        <label htmlFor="targetProfit">Target profit:</label>
        <InputEuro
          className="targetProfit"
          value={props.targetProfit}
          onChange={props.onTargetProfitChange}
          maxWidth="80%"
        />
      </Flex>
    </VStack>
  );
}

export default AddInputForm;
