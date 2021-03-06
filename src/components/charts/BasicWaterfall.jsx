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
              increasing: { marker: { color: "#8ab2ee" } },
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
              text: "Impact of the optimization per growth driver",
            },
            xaxis: {
              type: "category",
            },

            yaxis: {
              type: "linear",
              ticktext: [netProfit, "", "", ""],
              autorange: true,
            },
            autosize: true,
            showlegend: false,
            height: 405,

            margin: {
              b: 40,
              t: 50,
              pad: 5,
            },
          }}
          useResizeHandler={true}
          style={{
            width: "100%",
            height: "405px",
          }}
        />
      );
    }
  }
  return <App />;
}

export default BasicWaterfall;
