import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

import ScrollToTop from './react-hooks/ScrollToTop';

import { ChakraProvider } from '@chakra-ui/react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

import To_The_Person_Reading_This from './projects/To_The_Person_Reading_This';
import How_The_Pandemic_Forced_Event_Innovation from './projects/How_The_Pandemic_Forced_Event_Innovation';
import CVUO_Clubs_Portal from './projects/CVUO_Clubs_Portal';
import CyberMonke from './projects/CyberMonke';
import Submarine from './projects/Submarine';
import Graphic_Design from './projects/Graphic_Design';
import Web_Design from './projects/Web_Design';

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route
            exact
            path='/projects/To_The_Person_Reading_This'
            render={() => (window.location = 'https://redirectsite.com')}
          />
          <Route
            path='/projects/How_The_Pandemic_Forced_Event_Innovation'
            element={<How_The_Pandemic_Forced_Event_Innovation />}
          />
          <Route
            path='/projects/CVUO_Clubs_Portal'
            element={<CVUO_Clubs_Portal />}
          />
          <Route path='/projects/CyberMonke' element={<CyberMonke />} />
          <Route path='/projects/Submarine' element={<Submarine />} />
          <Route path='/projects/Graphic_Design' element={<Graphic_Design />} />
          <Route path='/projects/Web_Design' element={<Web_Design />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
