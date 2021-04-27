import React from "react";
import { Heading } from "@chakra-ui/react";
function ChartMessage(props) {
  const { totalEuroExceed, totalPercentFromGoal, totalEuroFromGoal } = props;
  const cleanTotal = Math.round(totalPercentFromGoal);
  if (cleanTotal < 100) {
    return (
      <Heading mt={4} mb={3} align="center" size="sm">
        Optimize your growthmix by {100 - cleanTotal} % or {totalEuroFromGoal} €
        to reach your target profit
      </Heading>
    );
  } else if (cleanTotal === 100) {
    return (
      <Heading mt={4} mb={3} align="center" size="sm">
        Congratulations! You reached your goal!
      </Heading>
    );
  } else if (cleanTotal > 100) {
    return (
      <Heading mt={4} mb={3} align="center" size="sm">
        Your target is exceeded by {cleanTotal - 100} % or {totalEuroExceed} €
      </Heading>
    );
  }
  return (
    <Heading mt={4} mb={3} align="center" size="sm">
      Optimization impact on target profit in %
    </Heading>
  );
}

export default ChartMessage;
