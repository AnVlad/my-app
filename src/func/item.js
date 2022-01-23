import React, { useEffect, useState } from 'react';

function Item({ message, changeShowedWord }) {
  const [show, setShow] = useState(false);
  const [words, setWords] = useState({ eng: message?.eng, translate: message?.translate });

  const showAnswer = () => setShow(true);

  useEffect(() => {
    // чтоб скрыть ответ при изменении слова
    setShow(false);

    // чтоб избавиться от бага, когда ответ на долю секунды появляется перед тем, как скрыть его
    setWords({ eng: message?.eng, translate: message?.translate });
  }, [changeShowedWord]);

  return (
    <div>
      <h1 className="question">{words.eng}</h1>
      <button className="toShow showAnswer" tabIndex={2} hidden={show} onClick={showAnswer}>
        SHOW
      </button>
      <p className="toShow answer" hidden={!show}>
        {words.translate}
      </p>
    </div>
  );
}

export default Item;
