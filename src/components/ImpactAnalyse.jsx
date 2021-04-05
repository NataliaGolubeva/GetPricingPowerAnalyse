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
  Heading,
} from '@chakra-ui/react';

function ImpactAnalyse() {
  return (
    <Table variant="simple" className="analyse">
      <Thead>
        <Tr>
          <Th colspan="3" textAlign="center">
            Impact Analyse
          </Th>
        </Tr>
        <Tr>
          <Th>Optimization tools</Th>
          <Th>Profit in Euro VS Actual</Th>
          <Th>Profit in % VS Actual</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Sales Target Increase</Td>
          <Td isNumeric>XX</Td>
          <Td isNumeric>XX</Td>
        </Tr>
        <Tr>
          <Td>Average Price Increase</Td>
          <Td isNumeric>XX</Td>
          <Td isNumeric>XX</Td>
        </Tr>
        <Tr>
          <Td>Variable costs Decrease</Td>
          <Td isNumeric>XX</Td>
          <Td isNumeric>XX</Td>
        </Tr>
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Total</Th>
          <Th isNumeric>XX</Th>
          <Th isNumeric>XX</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
}

export default ImpactAnalyse;
