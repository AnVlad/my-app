import React from 'react';
import English from '../func/MainPageFunc/EnglishWordsChoose';

function Main({ initVocab }) {
  return (
    <div>
      <English state={initVocab} />
    </div>
  );
}

export default Main;
