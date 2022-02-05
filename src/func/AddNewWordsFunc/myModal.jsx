import React from 'react';
import MyForm from '../Custom/myForm';

const MyModal = ({ closeModal, submitNewWord }) => {
  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1>Add New Word</h1>
          <button className="close" onClick={closeModal}>
            X
          </button>
        </div>
        <MyForm submitNewWord={submitNewWord} />
      </div>
    </div>
  );
};

export default MyModal;
