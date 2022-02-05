import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWord } from '../../toolkitRedux/reduxSlice';

function RenderVocabWords({ id, eng, translate, num, initVocab, setInitVocab }) {
  const dispatch = useDispatch();

  const deleteWord = () => {
    // console.log(id);
    dispatch(removeWord(id));
  };

  // const deleteWord = () => {
  //   setInitVocab(initVocab.filter((elem) => elem.id !== id));
  // };

  return (
    <li className="vocab-inner">
      <span className="vocab-id">{num + 1}</span>
      <span className="vocab-eng">{eng}</span>
      <span className="vocab-translate">{translate}</span>
      <div className="btn delete" onClick={deleteWord}>
        x
      </div>
    </li>
  );
}

export default RenderVocabWords;
