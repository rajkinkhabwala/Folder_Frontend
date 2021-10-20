import { Flex } from '@chakra-ui/react';
import MainComponent from './components/MainComponent';
import SideBar from './components/SideBar';


export default function Dashboard() {
  return (
    <Flex h="100vh" maxW="2000px" flexDir="row" overflow="hidden">
      {/* Column 1 */}
      <Flex
        flexDir="column"
        alignItems="center"
        backgroundColor="blue.800"
        color="#fff"
      >
        <SideBar />
      </Flex>
      <Flex display="inline-block" p="20">
        <MainComponent />
      </Flex>
    </Flex>
  );
}
