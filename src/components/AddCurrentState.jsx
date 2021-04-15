import React from "react";
import { Table, Tr, Tbody, Td, Heading } from "@chakra-ui/react";

function AddCurrentState(props) {
  return (
    <>
      <Heading
        size="sm"
        m={3}
        textAlign="center"
        color="white"
        className="smallHeader"
      >
        Current state
      </Heading>
      <Table variant="simple" className="analyse">
        <Tbody color="white">
          <Tr>
            <Td>Revenue</Td>
            <Td isNumeric>{props.revenue}</Td>
          </Tr>
          <Tr>
            <Td>Total Costs</Td>

            <Td isNumeric>{props.totalCosts}</Td>
          </Tr>
          <Tr>
            <Td>EBIDTA </Td>

            <Td isNumeric>{props.ebitda}</Td>
          </Tr>
          <Tr className="profit">
            <Td>Net Profit</Td>

            <Td isNumeric>{props.netProfit}</Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  );
}

export default AddCurrentState;
