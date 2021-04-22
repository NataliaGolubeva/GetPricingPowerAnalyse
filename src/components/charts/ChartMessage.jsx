import React from "react";
import { Heading } from "@chakra-ui/react";
function ChartMessage(props) {
  const { total } = props;
  const cleanTotal = Math.round(total);
  if (cleanTotal < 100) {
    return (
      <Heading mt={7} mb={3} align="center" size="sm">
        Optimize for {100 - cleanTotal} % more to reach you target profit
      </Heading>
    );
  } else if (cleanTotal === 100) {
    return (
      <Heading mt={7} mb={3} align="center" size="sm">
        Congratulations! You reached your goal!
      </Heading>
    );
  } else if (cleanTotal > 100) {
    return (
      <Heading mt={7} mb={3} align="center" size="sm">
        Your goal is exceed by {cleanTotal - 100} %
      </Heading>
    );
  }
  return (
    <Heading mt={7} mb={3} align="center" size="sm">
      Optimization impact on target profit in %
    </Heading>
  );
}

export default ChartMessage;
