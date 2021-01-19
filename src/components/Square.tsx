import '../index.css';

import React from 'react';

type Props = {
  onClick:() => void,
  value: 'X' | 'O'| null,
}

export const Square: React.FC<Props> = (props) => {
  const {onClick,value} = props;
  return (
    <button
      className="square"
      onClick={onClick}
    >
      {value}
    </button>
  );
}
