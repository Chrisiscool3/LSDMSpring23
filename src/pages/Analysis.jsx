import { VStack, HStack, Button } from "@chakra-ui/react";
import { useState } from "react";

import StressScore from "../components/StressScore";
import VaderSentiment from "../components/VaderSentiment";
import Emoji_scores from "../components/emoji_scores";
const Analysis = ({ data }) => {
  const [componentIndex, setComponentIndex] = useState(0);
  let numOfComp = 4;
  const handleNextClick = () => {
    if (componentIndex < numOfComp) {
      setComponentIndex(componentIndex + 1);
    }
  };
  const handleBackClick = () => {
    if (componentIndex > 0) {
      setComponentIndex(componentIndex - 1);
    }
  };
  return (
    <VStack
      w='90vw'
      h='full'
      spacing='2em'
      bgImage='url(./src/assets/gridbg.jpg)'
    >
      {componentIndex === 0 && <StressScore data={data} />}
      {componentIndex === 1 && <VaderSentiment data={data} />}
      {componentIndex === 2 && <Emoji_scores data={data} />}

      <HStack m={10}>
        <Button onClick={handleBackClick}>Back</Button>
        <Button onClick={handleNextClick}>Next</Button>
      </HStack>
    </VStack>
  );
};

export default Analysis;
