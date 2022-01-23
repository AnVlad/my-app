import React from 'react';
import English from '../func/EnglishWordsChoose';

function Main({ initVocab }) {
  return (
    <div>
      <English state={initVocab} />
    </div>
  );
}

export default Main;
