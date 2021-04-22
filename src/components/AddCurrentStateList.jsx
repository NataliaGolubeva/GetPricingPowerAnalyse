import React from "react";
import { Flex, Heading, VStack, Spacer, Box } from "@chakra-ui/react";

function AddCurrentStateList(props) {
  const { revenue, totalCosts, netProfit, ebitda, variableCosts } = props;
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
          <Box>{revenue} €</Box>
        </Flex>
        <Flex className="currentResult">
          <Box>Variable costs</Box>
          <Spacer />
          <Box>{variableCosts} €</Box>
        </Flex>
        <Flex className="currentResult">
          <Box>Total Costs</Box>
          <Spacer />
          <Box>{totalCosts} €</Box>
        </Flex>

        <Flex className="currentNetProfit">
          <Box>Net Profit</Box>
          <Spacer />
          <Box>{netProfit} €</Box>
        </Flex>
      </Box>
    </div>
  );
}

export default AddCurrentStateList;
