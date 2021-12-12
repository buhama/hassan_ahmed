import Profile from './components/profile';
import Projects from './components/Projects';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

import { ChakraProvider, Box, Center, Grid, GridItem } from '@chakra-ui/react';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <ChakraProvider>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
