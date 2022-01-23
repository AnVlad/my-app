import React from 'react';
import { Link } from 'react-router-dom';

function RoutesTo() {
  return (
    <>
      <Link className="links btn" to="/main">
        main
      </Link>
      <Link className="links btn" to="/vocab">
        vocab
      </Link>
    </>
  );
}
export default RoutesTo;
