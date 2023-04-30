import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Text } from "@chakra-ui/react";
const HistoGramVaderTweetCount = ({ info }) => {
  let countByVader = {};
  info.forEach((tweet) => {
    let score = tweet.vader_sentiment;
    score = Math.round(score * 10) / 10; // Round the score to one decimal place
    if (score in countByVader) {
      countByVader[score]++;
    } else {
      countByVader[score] = 1;
    }
  });
  const HistData = Object.keys(countByVader).map((score) => {
    return {
      score: parseFloat(score),
      Vader_sentiment: countByVader[score],
    };
  });
  return (
    <>
      <Text fontWeight='bold'>
        Histogram showing the distribution of vader sentiment scores:
      </Text>
      <BarChart
        width={800}
        height={500}
        data={HistData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey='score' />
        <YAxis />
        <CartesianGrid stroke='#ccc' />
        <Tooltip />
        <Bar
          dataKey='Vader_sentiment'
          fill={(d) => colorScale[d.sentimentScore]}
        />
      </BarChart>
    </>
  );
};
export default HistoGramVaderTweetCount;
