import React, { useState } from 'react';
import MyModal from './myModal';

const AddNewWord = ({ initVocab, setInitVocab }) => {
  const [showModal, setShowModal] = useState(false);

  const submitNewWord = (a) => {
    setInitVocab([
      ...initVocab,
      {
        id: initVocab.length + 1,
        eng: a[0],
        translate: a[1],
      },
    ]);

    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="newWordButton">
      <div className="showTheModal btn links" onClick={() => setShowModal(!showModal)}>
        Add new word in vocab
      </div>

      <div className="modal" hidden={!showModal}>
        <MyModal closeModal={closeModal} submitNewWord={submitNewWord} />
      </div>
    </div>
  );
};

export { AddNewWord };
