import { VStack, Heading, Text, Box } from "@chakra-ui/react";

const DashBoard = () => {
  return (
    <VStack w='80vw' spacing='2em'>
      <Heading>Social Media Stress/Depression Analysis</Heading>
      <Box width='40vw'>
        <Text fontSize='2xl' flexWrap='wrap'>
          We gathered approximately 50 million social media posts to perform
          sentiment analysis, assign stress and depression scores to each post,
          and analyze the emojis used
        </Text>
        <Text>
          Twitter API Real-time access to the global conversation, right at your
          fingertips
        </Text>
      </Box>
    </VStack>
  );
};

export default DashBoard;
