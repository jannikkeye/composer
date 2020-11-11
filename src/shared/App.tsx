import {
  Flex,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/core";
import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const interval = useRef<number | null>(null);
  const [count, setCount] = useState(351231);

  const handleInc = useCallback(() => {
    setCount(count + Math.floor(count / 36000));
  }, [count]);

  useEffect(() => {
    if (!interval.current) {
      interval.current = window.setInterval(handleInc, 1000);
    }

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
        interval.current = null;
      }
    };
  }, [handleInc]);

  return (
    <Flex alignItems="center">
      <StatGroup>
        <Stat>
          <StatLabel>Sent</StatLabel>
          <StatNumber>{count}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {(36000 / count).toFixed(4)}
          </StatHelpText>
        </Stat>
      </StatGroup>
    </Flex>
  );
};

export default App;
