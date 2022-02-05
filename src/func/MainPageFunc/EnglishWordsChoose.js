import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Item from './Item';

function EnglishWordsChoose() {
  const random = (min = 0, max = eng.length) => Math.floor(Math.random() * (max - min) + min);
  const randomChoice = () => setChooseWord(random());

  const initVocab = useSelector((state) => state.vocabSlice.vocab);

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
          <div className="next btn" tabIndex={1} onClick={randomChoice}>
            {'>'}
          </div>
        </>
      ) : (
        <h1>nothing here</h1>
      )}
    </div>
  );
}

export default EnglishWordsChoose;
