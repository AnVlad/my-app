import React, { useEffect, useState } from 'react';

import Item from './Item';

function EnglishWordsChoose(initVocab) {
  const random = (min = 0, max = eng.length) => Math.floor(Math.random() * (max - min) + min);
  const randomChoice = () => setChooseWord(random());

  const [eng, setEng] = useState('');
  const [chooseWord, setChooseWord] = useState(random());

  useEffect(() => {
    setEng(initVocab.state);
    randomChoice();
  }, [initVocab]);

  return (
    <div className="english-words">
      {eng ? (
        <>
          <ol>
            <Item
              changeShowedWord={chooseWord}
              key={eng[chooseWord]}
              message={eng[chooseWord]}></Item>
          </ol>
          <button className="next" tabIndex={1} onClick={randomChoice}>
            {'>'}
          </button>
        </>
      ) : (
        <h1>nothing here</h1>
      )}
    </div>
  );
}

export default EnglishWordsChoose;
