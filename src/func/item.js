import React, { useState } from 'react';

function Item(props) {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1 className="question">{props.message[0]}</h1>
      <button
        className="toShow showAnswer"
        tabIndex={2}
        hidden={!show}
        onClick={() => setShow(false)}>
        SHOW
      </button>
      <p className="toShow answer" hidden={show}>
        {props.message[1]}
      </p>
    </div>
  );
}

export default Item;
