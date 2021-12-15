import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

import ScrollToTop from './react-hooks/ScrollToTop';

import { ChakraProvider } from '@chakra-ui/react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import HowThePandemicForcedEventInnovation from './projects/How_The_Pandemic_Forced_Event_Innovation';
import CVUOClubsPortal from './projects/CVUO_Clubs_Portal';
import CyberMonke from './projects/CyberMonke';
import Submarine from './projects/Submarine';
import GraphicDesign from './projects/GraphicDesign';
import WebDesign from './projects/Web_Design';

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
            element={<HowThePandemicForcedEventInnovation />}
          />
          <Route
            path='/projects/CVUO_Clubs_Portal'
            element={<CVUOClubsPortal />}
          />
          <Route path='/projects/CyberMonke' element={<CyberMonke />} />
          <Route path='/projects/Submarine' element={<Submarine />} />
          <Route path='/projects/Graphic_Design' element={<GraphicDesign />} />
          <Route path='/projects/Web_Design' element={<WebDesign />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
