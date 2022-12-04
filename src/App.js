import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

import ScrollToTop from './react-hooks/ScrollToTop';

import { ChakraProvider } from '@chakra-ui/react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import HowThePandemicForcedEventInnovation from './projects/How-The-Pandemic-Forced-Event-Innovation';
import CVUOClubsPortal from './projects/CVUO-Clubs-Portal';
import CyberMonke from './projects/CyberMonke';
import Submarine from './projects/Submarine';
import GraphicDesign from './projects/GraphicDesign';
import WebDesign from './projects/WebDesign';
import CVUO from './projects/The-Thing-I-Am-Most-Proud-Of';
import Scraping from './projects/Scraping-Every-Univerisities-Club-Emails';
import ChatGPT from './projects/ChatGPT';

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route
            path='/projects/How-The-Pandemic-Forced-Event-Innovation'
            element={<HowThePandemicForcedEventInnovation />}
          />
          <Route
            path='/projects/CVUO-Clubs-Portal'
            element={<CVUOClubsPortal />}
          />
          <Route path='/projects/CyberMonke' element={<CyberMonke />} />
          <Route path='/projects/Submarine' element={<Submarine />} />
          <Route path='/projects/GraphicDesign' element={<GraphicDesign />} />
          <Route path='/projects/WebDesign' element={<WebDesign />} />
          <Route
            path='/projects/The-Thing-I-Am-Most-Proud-Of'
            element={<CVUO />}
          />
          <Route
            path='/projects/chatgpt-blog'
            element={<ChatGPT />}
          />
          <Route
            path='/projects/Scraping-Every-Univerisities-Club-Emails'
            element={<Scraping />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
