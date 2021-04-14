import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Heading } from "@chakra-ui/react";

function ChartCol(props) {
  const { volume, price, costs, total } = props;
  class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        options: {
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994],
          },
        },
        series: [
          {
            name: "series-1",
            data: [volume, price, costs, total],
          },
        ],
      };
    }

    render() {
      return (
        <div className="app">
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="500"
              />
            </div>
          </div>
        </div>
      );
    }
  }
  if (!volume && !price && !costs && !total) {
    return (
      <Heading mb={3} align="center" size="lg">
        Chart loading ...
      </Heading>
    );
  }
  return <App />;
}

export default ChartCol;
