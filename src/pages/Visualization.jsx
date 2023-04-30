import TweetDepressionCount from "../components/TweetDepressionCount";
import HistoGramVaderTweetCount from "../components/HistoGramVaderTweeCount";
import ScatterVaderDepression from "../components/ScatterVaderDepressionScore";
import { VStack, Image, Button, HStack } from "@chakra-ui/react";
import { useState } from "react";

const imges = [
  "/assets/images/count_of_tweets_by_dep_stress_score.png",
  "/assets/images/count_by_stress_level.png",
  "/assets/images/dist_vader_sentiment.png",
  "/assets/images/distbn_dep_stress_score.png",
  "/assets/images/count_by_emoji.png",
  "/assets/images/scatter.png",
];

export const Visualization = ({ info }) => {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const totalComponents = 6;
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
      <Image src={imges[currentComponentIndex]} boxSize={750} />
      {/* {currentComponentIndex === 0 && <TweetDepressionCount info={info} />}
      {currentComponentIndex === 1 && <HistoGramVaderTweetCount info={info} />}
      {currentComponentIndex === 2 && <ScatterVaderDepression info={info} />} */}
      <HStack>
        {currentComponentIndex > 0 ? (
          <Button onClick={handleBackClick}>Back</Button>
        ) : (
          <></>
        )}
        <Button onClick={handleNextClick}>
          {currentComponentIndex === totalComponents - 1 ? "Finish" : "Next"}
        </Button>
      </HStack>
    </VStack>
  );
};
