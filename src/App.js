import Profile from './components/profile';
import Projects from './components/Projects';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

import To_The_Person_Reading_This from './projects/To_The_Person_Reading_This';

import { ChakraProvider } from '@chakra-ui/react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <ChakraProvider>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route
            exact
            path='/projects/To_The_Person_Reading_This'
            render={() => (window.location = 'https://redirectsite.com')}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
