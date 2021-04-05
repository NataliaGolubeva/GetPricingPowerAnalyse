import React from 'react';
import {
  Table,
  TableCaption,
  Tr,
  Th,
  Thead,
  Tbody,
  Td,
  Tfoot,
} from '@chakra-ui/react';

function CostsImpact() {
  return (
    <Table variant="simple" className="analyse">
      <Thead>
        <Tr>
          <Th colspan="3" textAlign="center">
            Results of the costs decrease impact
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
          <Td isNumeric>25.4</Td>
        </Tr>
        <Tr>
          <Td>Total Costs</Td>

          <Td isNumeric>30.48</Td>
        </Tr>
        <Tr>
          <Td>Net Profit</Td>

          <Td isNumeric>0.91444</Td>
        </Tr>
        <Tr>
          <Td>EBIADTA </Td>

          <Td isNumeric>0.91444</Td>
        </Tr>
        <Tr>
          <Td>Multiply</Td>

          <Td isNumeric>0.91444</Td>
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

export default CostsImpact;
