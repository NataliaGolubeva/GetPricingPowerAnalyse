import React, { Component } from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import AddSliderOptimization from "./AddSliderOptimization";
import AddOptomizationRezult from "./AddOptomizationRezult";
import BasicWaterfall from "../charts/BasicWaterfall";
import BulletChart from "../charts/BulletChart";

function MainGrid(props) {
  const { volume, price, costs, cogs, netProfit, targetProfit } = props;
  class App extends Component {
    state = {
      salesValue: 0,
      priceValue: 0,
      costsValue: 0,
    };
    sum = () => {
      return volume + parseInt(this.state.salesValue);
    };

    handleSalesOnChange = (e) => this.setState({ salesValue: e.target.value });
    handlePriceOnChange = (e) => this.setState({ priceValue: e.target.value });
    handleCostsOnChange = (e) => this.setState({ costsValue: e.target.value });

    // calculations of optimization impact VOLUME
    VolumeProfitDif = () => {
      const revenue =
        ((volume * parseInt(this.state.salesValue)) / 100 + volume) * price;
      const totalCosts = (cogs / 100) * revenue + costs;
      const netPr = revenue - totalCosts;
      const dif = Math.round(netPr - netProfit);
      return parseInt(dif);
    };

    VolumeProfitDifPercent = () => {
      const revenue =
        ((volume * parseInt(this.state.salesValue)) / 100 + volume) * price;
      const totalCosts = (cogs / 100) * revenue + costs;
      const netPr = revenue - totalCosts;
      const dif = Math.round(netPr - netProfit);
      const difPercent = ((dif / netProfit) * 100).toFixed(2);
      return difPercent;
    };
    // calculations of optimization impact PRICE
    PriceProfitDif = () => {
      const revenue =
        ((price * parseInt(this.state.priceValue)) / 100 + price) * volume;
      const totalCosts = (cogs / 100) * revenue + costs;
      const netPr = revenue - totalCosts;
      const dif = Math.round(netPr - netProfit);
      return parseInt(dif);
    };

    PriceProfitDifPercent = () => {
      const revenue =
        ((price * parseInt(this.state.priceValue)) / 100 + price) * volume;
      const totalCosts = (cogs / 100) * revenue + costs;
      const netPr = revenue - totalCosts;
      const dif = Math.round(netPr - netProfit);
      const difPercent = ((dif / netProfit) * 100).toFixed(2);
      return difPercent;
    };
    // calculations of optimization impact COSTS
    CostsProfitDif = () => {
      const revenue = price * volume;
      const totalCosts =
        ((cogs - parseInt(this.state.costsValue)) / 100) * revenue + costs;
      const netPr = revenue - totalCosts;
      const dif = Math.round(netPr - netProfit);
      return parseInt(dif);
    };

    CostsProfitDifPercent = () => {
      const revenue = price * volume;
      const totalCosts =
        ((cogs - parseInt(this.state.costsValue)) / 100) * revenue + costs;
      const netPr = revenue - totalCosts;
      const dif = Math.round(netPr - netProfit);
      const difPercent = ((dif / netProfit) * 100).toFixed(2);
      return difPercent;
    };
    // calculation of price difference
    NewPrice = () => {
      const newPrice = (
        price +
        (price * parseInt(this.state.priceValue)) / 100
      ).toFixed(2);
      return newPrice;
    };

    render() {
      return (
        <Grid
          templateRows="repeat(2fr 1fr 2fr)"
          templateColumns="repeat(5, 1fr)"
          gap={0}
        >
          <GridItem rowSpan={1} colSpan={2}>
            <AddSliderOptimization
              salesValue={this.state.salesValue}
              handleSalesOnChange={this.handleSalesOnChange}
              priceValue={this.state.priceValue}
              handlePriceOnChange={this.handlePriceOnChange}
              costsValue={this.state.costsValue}
              handleCostsOnChange={this.handleCostsOnChange}
            />
          </GridItem>
          <GridItem rowSpan={1} colSpan={3}>
            <AddOptomizationRezult
              salesValue={this.state.salesValue}
              priceValue={this.state.priceValue}
              costsValue={this.state.costsValue}
              price={price}
              newPrice={this.NewPrice()}
              volumeDif={this.VolumeProfitDif()}
              volumeDifPercent={this.VolumeProfitDifPercent()}
              priceDif={this.PriceProfitDif()}
              priceDifPercent={this.PriceProfitDifPercent()}
              costsDif={this.CostsProfitDif()}
              costsDifPercent={this.CostsProfitDifPercent()}
              sumEuro={Math.round(
                this.VolumeProfitDif() +
                  this.PriceProfitDif() +
                  this.CostsProfitDif()
              )}
              sumPercent={(
                parseFloat(this.VolumeProfitDifPercent()) +
                parseFloat(this.PriceProfitDifPercent()) +
                parseFloat(this.CostsProfitDifPercent())
              ).toFixed(2)}
            />
          </GridItem>

          <GridItem rowSpan={1} colSpan={5} bg="brand.300">
            <BulletChart
              targetProfit={targetProfit}
              total={(
                ((this.VolumeProfitDif() +
                  this.PriceProfitDif() +
                  this.CostsProfitDif()) /
                  targetProfit) *
                100
              ).toFixed(2)}
            />
          </GridItem>
          <GridItem rowSpan={1} colSpan={5}>
            <BasicWaterfall
              volume={this.VolumeProfitDif()}
              price={this.PriceProfitDif()}
              costs={this.CostsProfitDif()}
              total={Math.round(
                this.VolumeProfitDif() +
                  this.PriceProfitDif() +
                  this.CostsProfitDif() +
                  netProfit
              )}
              netProfit={netProfit}
            />
          </GridItem>
        </Grid>
      );
    }
  }
  return <App />;
}

export default MainGrid;
