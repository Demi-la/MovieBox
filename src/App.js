import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Home from './component/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetails from './component/movieDetails';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontFamily={"'DM Sans', sans-serif"}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
