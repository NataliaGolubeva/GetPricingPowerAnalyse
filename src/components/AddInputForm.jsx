import React from "react";
import { VStack, Flex, Heading, Box } from "@chakra-ui/react";
import InputEuro from "./input/Input";
import InputPercent from "./input/InputPercent";
import SimpleInput from "./input/simpleInput";
import FloatInput from "./input/FloatInput";

function AddInputForm(props) {
  const { volume, onVolumeChange } = props;
  function formatValue(val) {
    return val.toLocaleString("fi-FI");
  }
  return (
    <VStack className="inputForm" mx={5} my={4}>
      <Heading size="sm" my={3} textAlign="center" className="smallHeader">
        Your actual company data
      </Heading>
      <Box>
        <Flex mb={3}>
          <label htmlFor="volume_sold">Volume of product sold:</label>
          <SimpleInput
            className="volume_sold"
            value={formatValue(volume)}
            onChange={onVolumeChange}
            maxWidth="80%"
          />
        </Flex>
        <Flex mb={3}>
          <label htmlFor="average_price">Average price per product:</label>
          <FloatInput
            className="average_price"
            value={props.price}
            onChange={props.onPriceChange}
            maxWidth="80%"
          />
        </Flex>

        <Flex mb={3}>
          <label htmlFor="fixed_costs">Total fixed costs:</label>
          <InputEuro
            className="fixed_costs"
            value={props.costs}
            onChange={props.onCostsChange}
            maxWidth="80%"
          />
        </Flex>
        <Flex mb={3}>
          <label htmlFor="cogs">Variable costs:</label>
          <InputPercent
            className="cogs"
            value={props.cogs}
            onChange={props.onCogsChange}
            maxWidth="80%"
          />
        </Flex>

        <Flex mb={3}>
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
      </Box>
    </VStack>
  );
}

export default AddInputForm;
