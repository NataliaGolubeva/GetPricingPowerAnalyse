import React from "react";

import {
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Heading,
  Image,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
function AddOptomizationRezult(props) {
  const {
    salesValue,
    priceValue,
    costsValue,
    price,
    newPrice,
    volumeDif,
    volumeDifPercent,
    priceDif,
    priceDifPercent,
    costsDif,
    costsDifPercent,
    sumEuro,
    sumPercent,
  } = props;
  function formatValue(val) {
    return val.toLocaleString("fi-FI");
  }
  if (!salesValue && !priceValue && !costsValue) {
    return (
      <div className="statImpact">
        <Image
          src="./images/project-costs.png"
          alt="Calculating costs"
          boxSize="214px"
          objectFit="cover"
          className="image"
        />
      </div>
    );
  }
  return (
    <div className="statImpact">
      <Heading align="center" my={1} size="sm" className="smallHeader">
        Optimization from:
      </Heading>

      <StatGroup align="center">
        <Stat>
          <StatLabel>Sales Increase </StatLabel>
          <StatNumber>{formatValue(volumeDif)} €</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {volumeDifPercent} %
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Price Increase </StatLabel>
          <StatNumber>{formatValue(priceDif)} €</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {priceDifPercent} %
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Costs Decrease </StatLabel>
          <StatNumber>{formatValue(costsDif)} €</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {costsDifPercent} %
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Total</StatLabel>
          <StatNumber>{formatValue(sumEuro)} €</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {sumPercent} %
          </StatHelpText>
        </Stat>
      </StatGroup>
      <StatGroup align="center" mt={2}>
        <Stat className="currentPrice">
          <StatLabel mt={2} className="priceLabel">
            Current price
          </StatLabel>
          <StatNumber mt={1}>{formatValue(price)} €</StatNumber>
        </Stat>

        <Stat className="newPrice">
          <Box mx={12}>
            <StatLabel mt={2}>New Price</StatLabel>
            <Flex>
              <Box>
                <StatNumber mt={1}>{formatValue(newPrice)} €</StatNumber>
              </Box>
              <Spacer />
              <Box mt={3}>
                <StatHelpText>
                  <StatArrow type="increase" />
                  {priceValue} %
                </StatHelpText>
              </Box>
            </Flex>
          </Box>
        </Stat>
      </StatGroup>
    </div>
  );
}

export default AddOptomizationRezult;
