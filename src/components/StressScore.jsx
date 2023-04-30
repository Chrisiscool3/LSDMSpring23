import {
  VStack,
  Heading,
  Input,
  HStack,
  Button,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";

const StressScore = ({ data }) => {
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
    <>
      <Heading bgColor='gray.50' size='xl'>
        Analysis
      </Heading>
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
      <HStack width='70%' spacing={40}>
        <Box bg='white'>
          <Heading fontSize={18}>User Name</Heading>
        </Box>
        <Spacer />
        <Box bg='white'>
          <Heading fontSize={18}>Tweets</Heading>
        </Box>
        <Box bg='white'>
          <Heading fontSize={18}>Stress score</Heading>
        </Box>
      </HStack>

      <Box overflow={"scroll"} mt='4em' width={"70%"}>
        <Table colorScheme='gray' size='lg' overflow={"scroll"}>
          <Thead>
            <Tr>
              <Th fontSize='2xl' pos='fixed' top='6em'></Th>
              <Th fontSize='2xl' pos='fixed' top='6em' left='40em'></Th>
              <Th fontSize='2xl' pos='fixed' top='6em' right='1em'></Th>
            </Tr>
          </Thead>
          <Tbody>
            {searchedName && searchedName.length > 0 ? (
              searchedName.map((item, id) => (
                <Tr
                  key={item.id}
                  bgColor={item.depression_stress_score > 2 ? "red" : "white"}
                >
                  <Td>{item.Username}</Td>
                  <Td>{item.Text}</Td>
                  <Td>{item.depression_stress_score}</Td>
                </Tr>
              ))
            ) : (
              <tr>
                <td>
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
                </td>
              </tr>
            )}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default StressScore;
