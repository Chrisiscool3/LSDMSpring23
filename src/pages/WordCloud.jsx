import { VStack, Image } from "@chakra-ui/react";
const WordCloud = () => {
  return (
    <VStack w='80vw' pt='2em' h='100vh' ml={"20em"} spacing='2em'>
      <Image
        src='https://res.cloudinary.com/dlzjopwm0/image/upload/v1682013829/wordcloud_vlmvpg.ico'
        boxSize={"40em"}
      />
    </VStack>
  );
};

export default WordCloud;
