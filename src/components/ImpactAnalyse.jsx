import React from "react";
import { Table, Tr, Th, Thead, Tbody, Td, Tfoot } from "@chakra-ui/react";

function ImpactAnalyse(props) {
  return (
    <Table variant="simple" className="analyse">
      <Thead>
        <Tr>
          <Th colSpan="3" textAlign="center">
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
          <Td isNumeric>{props.difNetProfitVolumeEuro} €</Td>
          <Td isNumeric>{props.difNetProfitVolumePercent} %</Td>
        </Tr>
        <Tr>
          <Td>Average Price Increase</Td>
          <Td isNumeric>{props.difNetProfitPriceEuro} €</Td>
          <Td isNumeric>{props.difNetProfitPricePercent} %</Td>
        </Tr>
        <Tr>
          <Td>Variable costs Decrease</Td>
          <Td isNumeric>{props.difNetProfitCostsEuro} €</Td>
          <Td isNumeric>{props.difNetProfitCostsPercent} %</Td>
        </Tr>
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Total</Th>
          <Th isNumeric>{props.optimizationTotalEuro} €</Th>
          <Th isNumeric>{props.optimizationTotalPercent} %</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
}

export default ImpactAnalyse;
