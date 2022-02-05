import React from 'react';
import RenderVocabWords from '../func/VocabPageFunc/RenderVocabWords';

function Vocab({ initVocab, setInitVocab }) {
  let clone = [...initVocab];
  const sort = (by) => {
    if (by === 'by id') {
      setInitVocab(clone.sort((a, b) => (a.id > b.id ? 1 : -1)));
    } else if (by === 'by name') {
      setInitVocab(clone.sort((a, b) => (a.eng.toLowerCase() > b.eng.toLowerCase() ? 1 : -1)));
    } else {
      setInitVocab(clone.sort((a, b) => (a.elem > b.elem ? 1 : -1)));
    }
  };

  return (
    <>
      <h1>Vocabulary</h1>
      <div className="btn" onClick={() => sort('by name')}>
        sort by name
      </div>
      <div className="btn" onClick={() => sort('by id')}>
        sort by Id
      </div>
      <div className="btn" onClick={() => sort('by')}>
        ↓↑{' '}
      </div>

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
