import React, { useState } from 'react';
import { englishWordsList } from '../vocab.js';
import Item from './item';
import MyModal from './myModal';

function English() {
  let list = englishWordsList;
  let length = list.length;

  let random = (min = 0, max = length) => Math.floor(Math.random() * (max - min) + min);

  const randomChoice = () => setShowWord(random());

  const [showWord, setShowWord] = useState(random());

  return (
    <div className="english-words">
      <ol>{<Item key={list[showWord]} message={list[showWord]}></Item>}</ol>
      <button className="next" tabIndex={1} onClick={randomChoice}>
        {'>'}
      </button>
    </div>
  );
}

const AddNewWord = () => {
  const [showModal, setShowModal] = useState(false);

  const submitNewWord = (a) => {
    englishWordsList.push(a);
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="newWordButton">
      <button className="showTheModal btn btn-secondary" onClick={() => setShowModal(!showModal)}>
        Add new word in vocab
      </button>

      <div className="modal" hidden={!showModal}>
        <MyModal closeModal={closeModal} submitNewWord={submitNewWord} />
      </div>
    </div>
  );
};

export { AddNewWord, English };
