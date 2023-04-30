import {
  VStack,
  Heading,
  Input,
  HStack,
  Button,
  Box,
  Text,
  Divider,
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
      item.Username.toLowerCase().includes(tweets.toLowerCase())
    );
    setSearchedName(newData.length < 1 ? [] : newData);
    setTweets("");
  };

  return (
    <VStack w='80vw' spacing='2em'>
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
      <HStack width='70%'>
        <Box bg='white'>
          <Heading>User Name</Heading>
        </Box>
        <Spacer />
        <Box bg='white'>
          <Heading>Tweets</Heading>
        </Box>
      </HStack>
      <Box overflow='scroll' width={{ sm: "80vw", md: "60vw" }}>
        {searchedName && searchedName.length > 0 ? (
          searchedName.map((item, id) => (
            <HStack key={item.id} bgColor='black' color='white' width='100%'>
              <VStack>
                <HStack spacing={40} p={4}>
                  <Text>{item.Username}</Text>
                  <Spacer />
                  <Text>{item.Text}</Text>
                </HStack>
                <Box width='100%' h={"1.2em"} pl={"4em"}>
                  <Divider />
                </Box>
              </VStack>
            </HStack>
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
