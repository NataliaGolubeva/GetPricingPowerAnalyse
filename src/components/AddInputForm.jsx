import React from "react";
import { VStack, Button, Heading } from "@chakra-ui/react";
import InitialInput from "./Input";

function AddInputForm(props) {
  return (
    <VStack className="inputForm">
      <form onSubmit={props.onFormSubmit}>
        <Heading size="sm" my={3} textAlign="center">
          Your actual company data
        </Heading>
        <label htmlFor="volume_sold">Volume of product sold:</label>
        <InitialInput
          className="volume_sold"
          value={props.volume}
          onChange={props.onVolumeChange}
        />
        <label htmlFor="average_price">Average price per product:</label>
        <InitialInput
          className="average_price"
          value={props.price}
          onChange={props.onPriceChange}
        />
        <label htmlFor="fixed_costs">Total fixed costs:</label>
        <InitialInput
          className="fixed_costs"
          value={props.costs}
          onChange={props.onCostsChange}
        />

        <label htmlFor="cogs">Variable costs in %:</label>
        <InitialInput
          className="cogs"
          value={props.cogs}
          onChange={props.onCogsChange}
        />

        <label htmlFor="taxes">Taxes in %:</label>
        <InitialInput
          className="taxes"
          value={props.taxes}
          onChange={props.onTaxesChange}
        />

        <label htmlFor="targetProfit">Target profit:</label>
        <InitialInput
          className="targetProfit"
          value={props.targetProfit}
          onChange={props.onTargetProfitChange}
        />
        <div className="validation-message">{props.validation}</div>
        <Button m={3} type="submit" className="btn btn-primary">
          Apply
        </Button>
      </form>
    </VStack>
  );
}

export default AddInputForm;
