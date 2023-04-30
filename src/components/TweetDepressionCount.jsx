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

const TweetDepressionCount = ({ info }) => {
  let countByScore = {};
  info.forEach((tweet) => {
    const score = tweet.depression_stress_score;
    if (score in countByScore) {
      countByScore[score]++;
    } else {
      countByScore[score] = 1;
    }
  });

  const chartData = Object.keys(countByScore).map((score) => {
    return {
      score: parseInt(score),
      stress_scores: countByScore[score],
    };
  });

  return (
    <>
      <Text fontWeight='bold'>
        Bar chart showing the count of tweets with different depression/stress
        scores:
      </Text>
      <BarChart
        width={800}
        height={500}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='score' />
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar dataKey='stress_scores' fill='#82ca9d' />
      </BarChart>
    </>
  );
};
export default TweetDepressionCount;
