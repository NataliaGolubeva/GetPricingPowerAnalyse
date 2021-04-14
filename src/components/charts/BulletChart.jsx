import React from "react";
import { ChartBullet } from "@patternfly/react-charts";

function BulletChart(props) {
  const { sales, price, costs } = props;
  class BulletCharts extends React.Component {
    constructor(props) {
      super(props);
      this.containerRef = React.createRef();
      this.state = {
        width: 0,
      };
      this.handleResize = () => {
        if (
          this.containerRef.current &&
          this.containerRef.current.clientWidth
        ) {
          this.setState({ width: this.containerRef.current.clientWidth });
        }
      };
    }

    componentDidMount() {
      this.handleResize();
      window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
    }

    render() {
      const { width } = this.state;
      return (
        <div ref={this.containerRef} style={{ height: "180px" }}>
          <ChartBullet
            ariaDesc="Optimization"
            ariaTitle="Optimization for target profit"
            comparativeWarningMeasureData={[{ name: "Your target", y: 100 }]}
            comparativeWarningMeasureLegendData={[{ name: "Your target" }]}
            constrainToVisibleArea
            height={250}
            labels={({ datum }) => `${datum.name}: ${datum.y}`}
            legendAllowWrap={true}
            legendPosition="bottom-left"
            maxDomain={{ y: 100 }}
            padding={{
              bottom: 50,
              left: 0,
              right: 70,
              top: 100, // Adjusted to accommodate labels
            }}
            primarySegmentedMeasureData={[
              { name: "Sales increase", y: sales },
              { name: "Price increase", y: sales + price },
              { name: "Costs decrease", y: sales + price + costs },
            ]}
            primarySegmentedMeasureLegendData={[
              { name: "Sales increase" },
              { name: "Price increase" },
              { name: "Costs decrease" },
            ]}
            qualitativeRangeData={[
              { name: "Target", y: 100 },
              { name: "Target exceed", y: 120 },
            ]}
            subTitle="Measure details"
            title="Optimization for target profit in %"
            titlePosition="top-left"
            width={width}
          />
        </div>
      );
    }
  }
  return <BulletCharts />;
}

export default BulletChart;
