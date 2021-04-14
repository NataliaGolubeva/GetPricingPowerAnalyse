import React from "react";
import { Table, Tr, Tbody, Td, Heading } from "@chakra-ui/react";

function AddCurrentState(props) {
  return (
    <>
      <Heading mb={3} align="center" size="lg">
        Current state
      </Heading>
      <Table variant="striped" className="analyse">
        <Tbody>
          <Tr>
            <Td>Revenue</Td>
            <Td isNumeric>{props.revenue}</Td>
          </Tr>
          <Tr>
            <Td>Total Costs</Td>

            <Td isNumeric>{props.totalCosts}</Td>
          </Tr>
          <Tr>
            <Td>Net Profit</Td>

            <Td isNumeric>{props.netProfit}</Td>
          </Tr>
          <Tr>
            <Td>EBIDTA </Td>

            <Td isNumeric>{props.ebitda}</Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  );
}

export default AddCurrentState;
