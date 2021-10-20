import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
//import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './layouts/dashboard';
//import Login from './layouts/auth/login';
//import Register from './layouts/auth/register';
function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        {/* <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <VStack spacing={8}>
              <Logo h="40vmin" pointerEvents="none" />
              <Text>
                Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
              </Text>
              <Link
                color="teal.500"
                href="https://chakra-ui.com"
                fontSize="2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn Chakra
              </Link>
            </VStack>
          </Grid>
        </Box> */}
        <Dashboard />
      </ChakraProvider>
    </Router>
  );
}

export default App;
