import React, { useRef } from 'react';
import './index.css';
import { AddNewWord, English } from './func/addNewWordInWocab';
import './darkTheme.css';

const Header = () => {
  return (
    <>
      <div className="header">English Words</div>
      <hr></hr>
    </>
  );
};

const App = () => {
  return (
    <div className="wrap">
      <Header />
      <AddNewWord />
      <English />
    </div>
  );
};

export default App;
