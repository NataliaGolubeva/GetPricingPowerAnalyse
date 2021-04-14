import React from "react";
import {
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";

function AddPriceChange(props) {
  return (
    <>
      <StatGroup align="center">
        <Stat>
          <StatLabel>Current price</StatLabel>
          <StatNumber>{props.price} €</StatNumber>
          <StatHelpText></StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>New Price</StatLabel>
          <StatNumber>{props.newPrice} €</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {props.priceIncrease} %
          </StatHelpText>
        </Stat>
      </StatGroup>
    </>
  );
}

export default AddPriceChange;
