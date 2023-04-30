import TweetDepressionCount from "../components/TweetDepressionCount";
import HistoGramVaderTweetCount from "../components/HistoGramVaderTweeCount";
import ScatterVaderDepression from "../components/ScatterVaderDepressionScore";
import { VStack, Text, Button, HStack } from "@chakra-ui/react";
import { useState } from "react";

export const Visualization = ({ info }) => {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const totalComponents = 4;
  const handleNextClick = () => {
    if (currentComponentIndex < totalComponents - 1) {
      setCurrentComponentIndex(currentComponentIndex + 1);
    }
  };
  const handleBackClick = () => {
    if (currentComponentIndex > 0) {
      setCurrentComponentIndex(currentComponentIndex - 1);
    }
  };
  return (
    <VStack w='80vw' pt='2em' ml={"2em"} spacing='2em'>
      {currentComponentIndex === 0 && <TweetDepressionCount info={info} />}
      {currentComponentIndex === 1 && <HistoGramVaderTweetCount info={info} />}
      {currentComponentIndex === 2 && <ScatterVaderDepression info={info} />}
      <HStack>
        <Button onClick={handleBackClick}>Back</Button>
        <Button onClick={handleNextClick}>
          {currentComponentIndex === totalComponents - 1 ? "Finish" : "Next"}
        </Button>
      </HStack>
    </VStack>
  );
};
