import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWord } from '../../toolkitRedux/reduxSlice';
import MyModal from './myModal';
import axiosEngWords from '../../axios/axiosGetWordsList';

const AddNewWord = () => {
  const dispatch = useDispatch();

  const addNewWord = (engObj) => {
    dispatch(addWord(engObj));
    axiosEngWords.create(engObj);
  };

  const [showModal, setShowModal] = useState(false);

  const submitNewWord = (engObj) => {
    addNewWord({ eng: engObj[0], translate: engObj[1] });

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
