import '../index.css';

import React from 'react';

type Props = {
  onClick:() => void,
  value: 'X' | 'O'| null,
}

export const Square: React.FC<Props> = (props) => {
  return (
    <button
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
