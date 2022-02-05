import React, { useContext, useEffect } from 'react';
import './styles/index.scss';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import axios from 'axios';

import { AddNewWord } from './func/AddNewWordsFunc/AddNewWordInVocab';
import Main from './pages/Main';
import Vocab from './pages/Vocab';
import RoutesTo from './func/Routes/RoutesTo';
import { ThemeContext } from './func/Context/ThemeContext';

import { addWord, removeWord, setWords } from './toolkitRedux/reduxSlice';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  return (
    <>
      <div className="header">English Words</div>
      <hr></hr>
    </>
  );
};

const App = () => {
  const dispatch = useDispatch();

  const setNewVocab = (data) => {
    dispatch(setWords(data));
  };

  const theme = useContext(ThemeContext);

  const toChangeTheme = () => {
    theme.changeTheme(theme.theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    axios.get(`http://localhost:3001/englishWords`).then(({ data }) => {
      setNewVocab(data);
    });
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className="wrap">
          <Header />
          <div className="routes">
            <RoutesTo />
            <AddNewWord />
            <span className="change-theme" onClick={toChangeTheme}></span>
          </div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="vocab" element={<Vocab />} />
          </Routes>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
