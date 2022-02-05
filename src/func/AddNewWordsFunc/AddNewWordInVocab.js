import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWord } from '../../toolkitRedux/reduxSlice';
import MyModal from './myModal';

const AddNewWord = () => {
  const dispatch = useDispatch();

  const addNewWord = (data) => {
    dispatch(addWord(data));
  };

  const [showModal, setShowModal] = useState(false);

  const submitNewWord = (a) => {
    addNewWord({ eng: a[0], translate: a[1] });

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
