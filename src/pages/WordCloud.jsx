import { VStack, Image } from "@chakra-ui/react";
const WordCloud = () => {
  return (
    <VStack w='80%' pt='2em' h='100vh' ml={"30em"} spacing='2em' mt='20em'>
      <Image
        src='https://res.cloudinary.com/dlzjopwm0/image/upload/v1682013829/wordcloud_vlmvpg.ico'
        boxSize={"20em"}
      />
    </VStack>
  );
};

export default WordCloud;
