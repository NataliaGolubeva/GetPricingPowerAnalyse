import React from "react";
import { Table, Tr, Th, Thead, Tbody, Td, Tfoot } from "@chakra-ui/react";

function AddCurrentState(props) {
  return (
    <Table variant="simple" className="analyse">
      <Thead>
        <Tr>
          <Th colspan="3" textAlign="center">
            Current state
          </Th>
        </Tr>
        <Tr>
          <Th>Indexes</Th>
          <Th isNumeric>€</Th>
        </Tr>
      </Thead>
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
      <Tfoot>
        <Tr>
          <Th>To convert</Th>

          <Th isNumeric>multiply by</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
}

export default AddCurrentState;
