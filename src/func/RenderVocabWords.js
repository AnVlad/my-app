import React from 'react';

function RenderVocabWords({ id, eng, translate, num, initVocab, setInitVocab }) {
  const deleteWord = () => {
    setInitVocab(initVocab.filter((elem) => elem.id !== id));
  };

  return (
    <li className="vocab-inner">
      <span className="vocab-id">{num + 1}</span>
      <span className="vocab-eng">{eng}</span>
      <span className="vocab-translate">{translate}</span>
      <button onClick={deleteWord}>X</button>
    </li>
  );
}

export default RenderVocabWords;
