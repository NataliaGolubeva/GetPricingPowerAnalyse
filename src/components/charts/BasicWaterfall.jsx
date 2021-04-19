import React from "react";
import Plot from "react-plotly.js";
function BasicWaterfall(props) {
  const { volume, price, costs, total, netProfit } = props;
  class App extends React.Component {
    render() {
      return (
        <Plot
          data={[
            {
              name: "data",
              type: "waterfall",
              increasing: { marker: { color: "Teal" } },
              totals: {
                marker: {
                  color: "#24245c",
                },
              },
              orientation: "v",
              measure: [
                "relative",
                "relative",
                "relative",
                "relative",
                "total",
              ],
              x: ["Net Profit", "Volume", "Price", "Costs", "Total"],
              textposition: "auto",
              text: [netProfit, volume, price, costs, total],
              y: [netProfit, volume, price, costs, total],
              connector: {
                line: {
                  color: "rgb(63, 63, 63)",
                },
              },
            },
          ]}
          layout={{
            title: {
              text: "Optimization result",
            },
            xaxis: {
              type: "category",
            },

            yaxis: {
              type: "linear",
              ticktext: [netProfit, "Very long label", "3", "label"],
            },
            autosize: false,
            showlegend: false,
            height: 300,
            margin: {
              b: 40,
              t: 40,
              pad: 5,
            },
            padding: {
              t: 10,
            },
          }}
        />
      );
    }
  }
  return <App />;
}

export default BasicWaterfall;
