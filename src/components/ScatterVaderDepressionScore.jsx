import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Text } from "@chakra-ui/react";
const ScatterVaderDepression = ({ info }) => {
  return (
    <>
      <Text fontWeight='bold'>
        Scatter plot showing the relationship between depression/stress scores
        and vader sentiment scores
      </Text>
      <ScatterChart
        width={600}
        height={400}
        margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
      >
        <XAxis
          type='number'
          dataKey='depression_stress_score'
          name='Depression/Stress Score'
        />
        <YAxis
          type='number'
          dataKey='vader_sentiment'
          name='Vader Sentiment Score'
        />
        <CartesianGrid strokeDasharray='3 3' />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter name='Tweet' data={info} fill='#8884d8' />
      </ScatterChart>
    </>
  );
};

export default ScatterVaderDepression;
