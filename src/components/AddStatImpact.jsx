import React from "react";
import {
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Heading,
  Progress,
} from "@chakra-ui/react";

function AddStatImpact(props) {
  if (!props.salesIncrease && !props.priceIncrease && !props.costsDecrease) {
    return (
      <>
        <Heading mb={3} align="center" size="sm"></Heading>
      </>
    );
  }
  return (
    <div className="statImpact">
      <Heading align="center" my={2} size="sm" className="smallHeader">
        Optimization impact
      </Heading>

      <StatGroup align="center">
        <Stat>
          <StatLabel>Volume sold</StatLabel>
          <StatNumber>{props.difNetProfitVolumeEuro} €</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {props.difNetProfitVolumePercent} %
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Average Price</StatLabel>
          <StatNumber>{props.difNetProfitPriceEuro} €</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {props.difNetProfitPricePercent} %
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Costs Decrease</StatLabel>
          <StatNumber>{props.difNetProfitCostsEuro} €</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {props.difNetProfitCostsPercent} %
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Total</StatLabel>
          <StatNumber>{props.optimizationTotalEuro} €</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {props.optimizationTotalPercent} %
          </StatHelpText>
        </Stat>
      </StatGroup>
      <StatGroup align="center" mt={4}>
        <Stat className="currentPrice">
          <StatLabel>Current price</StatLabel>
          <StatNumber>{props.price} €</StatNumber>
          <StatHelpText>Average</StatHelpText>
        </Stat>

        <Stat className="newPrice">
          <StatLabel>New Price</StatLabel>
          <StatNumber>{props.newPrice} €</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {props.priceIncrease} %
          </StatHelpText>
        </Stat>
      </StatGroup>
    </div>
  );
}

export default AddStatImpact;
