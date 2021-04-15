import React from "react";
import ReactApexChart from "react-apexcharts";

function CandleStickChart(props) {
  const { volume, price, costs, total, netProfit } = props;
  class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        series: [
          {
            data: [
              {
                x: "current profit",
                y: [0, netProfit, netProfit, netProfit],
              },
              {
                x: "sales",
                y: [netProfit, total, 0, netProfit + volume],
              },
              {
                x: "price",
                y: [netProfit + volume, total, 0, netProfit + volume + price],
              },
              {
                x: "costs",
                y: [
                  netProfit + volume + price,
                  total,
                  0,
                  netProfit + volume + price + costs,
                ],
              },
              {
                x: "total",
                y: [0, total, total, total + netProfit],
              },
            ],
          },
        ],
        options: {
          chart: {
            type: "candlestick",
            height: 350,
          },
          title: {
            text: "Optimization",
            align: "center",
          },
          xaxis: {
            type: "number",
          },
          yaxis: {
            tooltip: {
              enabled: true,
            },
          },
        },
      };
    }

    render() {
      return (
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="candlestick"
            height={250}
          />
        </div>
      );
    }
  }
  return <ApexChart />;
}

export default CandleStickChart;
