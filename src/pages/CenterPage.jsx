import {
  VStack,
  Heading,
  Input,
  HStack,
  Button,
  Box,
  SimpleGrid,
  Text,
  GridItem,
  Grid,
  Divider,
  List,
  ListItem,
  Spacer,
} from "@chakra-ui/react";

import { useEffect } from "react";
import { useState } from "react";
const CenterPage = ({ data }) => {
  const [tweets, setTweets] = useState("");
  const [searchedName, setSearchedName] = useState([]);
  useEffect(() => {
    setSearchedName(data);
  }, [data]);
  const handleChange = (event) => {
    setTweets(event.target.value);
  };
  const handleClick = async () => {
    let newData = data.filter((item) =>
      item.user_name.toLowerCase().includes(tweets.toLowerCase())
    );
    setSearchedName(newData.length < 1 ? [] : newData);
    setTweets("");
  };

  return (
    <VStack
      w='80%'
      pt='2em'
      h='100vh'
      ml={"25em"}
      mr='2em'
      spacing='2em'
      //   bgImage='url(./src/assets/gridbg.jpg)'
    >
      <Heading size='xl'>DataSet</Heading>
      <HStack bgColor='gray.50'>
        <Input
          placeholder='search'
          _placeholder={{ color: "inherit" }}
          type='text'
          name='dataset'
          value={tweets}
          focusBorderColor='lime'
          border='2px'
          onChange={handleChange}
        />
        <Button colorScheme='teal' mb='4' onClick={handleClick}>
          Search
        </Button>
      </HStack>
      {/* <SimpleGrid columns={3} width='100%'>
        <Text>User Name</Text>
        <Spacer />
        <Text>Tweets</Text>
      </SimpleGrid> */}
      <Box overflow='scroll'>
        <HStack spacing={80}>
          <Box position='fixed' top='8em' bg='white'>
            <Heading>User Name</Heading>
          </Box>
          <Box position='fixed' top='8em' bg='white'>
            <Heading>Tweets</Heading>
          </Box>
        </HStack>
        {searchedName && searchedName.length > 0 ? (
          searchedName.map((item, id) => (
            <HStack key={item.id} bgColor='black' color='white' width='100%'>
              <VStack>
                <HStack spacing={40} p={4}>
                  <Text>{item.user_name}</Text>
                  <Spacer />
                  <Text>{item.content}</Text>
                </HStack>
                <Box width='100%' h={"1.2em"} pl={"4em"}>
                  <Divider />
                </Box>
              </VStack>
            </HStack>

            /*{ <Box bgColor='lightblue' h='8em'>
                <Text>{item.sentiment}</Text>
              </Box> }*/
          ))
        ) : (
          <Button
            size='lg'
            isLoading
            loadingText='Loading'
            colorScheme='teal'
            variant='outline'
            spinnerPlacement='start'
          >
            Submit
          </Button>
        )}
      </Box>
    </VStack>
  );
};

export default CenterPage;
