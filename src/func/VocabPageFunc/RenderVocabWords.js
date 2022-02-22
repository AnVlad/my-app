import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWord } from '../../toolkitRedux/reduxSlice';
import axiosEngWords from '../../axios/axiosGetWordsList';

function RenderVocabWords({ id, eng, translate, num, initVocab, setInitVocab }) {
  const dispatch = useDispatch();

  const deleteWord = () => {
    dispatch(removeWord(id));

    axiosEngWords.del(id);
  };

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
