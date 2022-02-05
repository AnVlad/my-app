import React, { useContext, useEffect, useState } from 'react';
import './styles/index.scss';
// import './darkTheme.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import axios from 'axios';

import { AddNewWord } from './func/AddNewWordsFunc/AddNewWordInVocab';
import Main from './pages/Main';
import Vocab from './pages/Vocab';
import RoutesTo from './func/Routes/RoutesTo';
import { ThemeContext } from './func/Context/ThemeContext';

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

  const theme = useContext(ThemeContext);

  const toChangeTheme = () => {
    theme.changeTheme(theme.theme === 'light' ? 'dark' : 'light');
  };

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
            <span className="change-theme" onClick={toChangeTheme}></span>
          </div>
          <Routes>
            <Route path="/" element={<Main initVocab={initVocab} />} />
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
