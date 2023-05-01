import { VStack, Image, Text } from "@chakra-ui/react";
const WordCloud = () => {
  return (
    <VStack w='80vw' pt='2em' h='100vh' spacing='2em' overflow='scroll'>
      <Text fontWeight='bold' fontSize='xl'>
        word cloud for depression_stress_words
      </Text>
      <Image
        src='https://res.cloudinary.com/dlzjopwm0/image/upload/v1682902682/stress_words_word_cloud_cjdi5j.png'
        boxSize={"30em"}
      />
      <Text fontWeight='bold' fontSize='xl'>
        word cloud for Highest Scores
      </Text>
      <Image
        src='https://res.cloudinary.com/dlzjopwm0/image/upload/v1682903135/stress_score_cloud_v665ii.png'
        boxSize={"30em"}
      />
      <Text fontWeight='bold' fontSize='xl'>
        word cloud for medium stress score
      </Text>
      <Image
        src='https://res.cloudinary.com/dlzjopwm0/image/upload/v1682902682/stress_score_word_cloud_jjtd8e.png'
        boxSize={"30em"}
      />
      <Text></Text>
    </VStack>
  );
};

export default WordCloud;
