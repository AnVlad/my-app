import React, { useEffect, useState } from 'react';
import './index.css';
// import './darkTheme.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import axios from 'axios';

import { AddNewWord } from './func/AddNewWordInVocab';
import Main from './pages/Main';
import Vocab from './pages/Vocab';
import RoutesTo from './func/RoutesTo';

const Header = () => {
  return (
    <>
      <div className="header">English Words</div>
      <hr></hr>
    </>
  );
};

const App = () => {
  const [initVocab, setInitVocab] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3001/englishWords`).then(({ data }) => {
      setInitVocab(data);
    });
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className="wrap">
          <Header />
          <div className="routes">
            <RoutesTo />
            <AddNewWord initVocab={initVocab} setInitVocab={setInitVocab} />
          </div>
          <Routes>
            <Route path="main" element={<Main initVocab={initVocab} />} />
            <Route
              path="vocab"
              element={<Vocab initVocab={initVocab} setInitVocab={setInitVocab} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
