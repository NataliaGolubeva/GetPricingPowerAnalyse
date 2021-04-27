import React from "react";
import { ChartBullet } from "@patternfly/react-charts";
import ChartMessage from "./ChartMessage";
function BulletChart(props) {
  const {
    total,
    targetProfit,
    totalPercentFromGoal,
    totalEuroFromGoal,
  } = props;
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
          <ChartMessage
            targetProfit={targetProfit}
            total={total}
            totalPercentFromGoal={totalPercentFromGoal}
            totalEuroFromGoal={totalEuroFromGoal}
            totalEuroExceed={-1 * totalEuroFromGoal}
          />
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
              left: 0,
              right: 70,
            }}
            primarySegmentedMeasureData={[
              { name: "Total in %", y: totalPercentFromGoal },
            ]}
            primarySegmentedMeasureLegendData={[{ name: "Total" }]}
            qualitativeRangeData={[
              { name: "Target", y: 100 },
              { name: "Target exceed", y: 120 },
            ]}
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
