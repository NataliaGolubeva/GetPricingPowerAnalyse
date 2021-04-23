import React from "react";
import { Flex, Heading, Spacer, Box } from "@chakra-ui/react";

function AddCurrentStateList(props) {
  const { revenue, totalCosts, netProfit, variableCosts } = props;
  function formatValue(val) {
    return val.toLocaleString("fi-FI");
  }
  return (
    <div className="inputForm currentState" my={4}>
      <Heading
        size="sm"
        m={3}
        textAlign="center"
        color="white"
        className="smallHeader"
      >
        Current state
      </Heading>
      <Box className="currentList">
        <Flex className="currentResult">
          <Box>Revenue</Box>
          <Spacer />
          <Box>{formatValue(revenue)} €</Box>
        </Flex>
        <Flex className="currentResult">
          <Box>Variable costs</Box>
          <Spacer />
          <Box>{formatValue(variableCosts)} €</Box>
        </Flex>
        <Flex className="currentResult">
          <Box>Total Costs</Box>
          <Spacer />
          <Box>{formatValue(totalCosts)} €</Box>
        </Flex>

        <Flex className="currentNetProfit" mb={5}>
          <Box>Net Profit</Box>
          <Spacer />
          <Box>{formatValue(netProfit)} €</Box>
        </Flex>
      </Box>
    </div>
  );
}

export default AddCurrentStateList;
