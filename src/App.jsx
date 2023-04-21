import { Container, Flex, VStack } from "@chakra-ui/react";
import LeftSideBar from "./pages/SideBar";
import CenterPage from "./pages/CenterPage";
import { useRoutes } from "react-router-dom";
import { supabase } from "../client";
import { useState } from "react";
import { useEffect } from "react";
import { Visualization } from "./pages/Visualization";
import Analysis from "./pages/Analysis";
import WordCloud from "./pages/WordCloud";

const App = () => {
  const [data, setData] = useState([]);
  let element = useRoutes([
    { path: "/", element: <CenterPage data={data} /> },
    {
      path: "/visual",
      element: <Visualization />,
    },
    {
      path: "/analysis",
      element: <Analysis data={data} />,
    },
    {
      path: "/words",
      element: <WordCloud />,
    },
  ]);

  const fetchData = async () => {
    const res = await supabase.from("dataset").select();
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container maxW='100vw' p={0}>
      <Flex h={{ base: "auto", md: "100vh" }}>
        <LeftSideBar />
        {element}
      </Flex>
    </Container>
  );
};

export default App;
