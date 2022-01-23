import React from 'react';
import RenderVocabWords from '../func/RenderVocabWords';

function Vocab({ initVocab, setInitVocab }) {
  return (
    <>
      <ol className="vocab-words">
        {initVocab.length > 0 &&
          initVocab.map((data, num) => (
            <RenderVocabWords
              key={data.id}
              id={data.id}
              eng={data.eng}
              translate={data.translate}
              num={num}
              initVocab={initVocab}
              setInitVocab={setInitVocab}
            />
          ))}
      </ol>
    </>
  );
}

export default Vocab;
