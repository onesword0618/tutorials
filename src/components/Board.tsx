import '../index.css';

import React from 'react';
import { Square } from '../components/Square';

type Props = {
  onClick:(i:number) => void,
  squares:('X' | 'O'| null)[]
};

export const Board : React.FC<Props> = (props) => {
  const {onClick,squares} = props;
  function renderSquare(i:number) {
    return (
      <Square
        key={i}
        onClick={() => onClick(i)}
        value={squares[i]}
      />
    );
  };

  const rows = Array(3);
  for(let i of [0,1,2]) {

    const columns = Array(3);
    for (let j of [0,1,2]) {
      const index = i*3 + j;
      columns[j] = renderSquare(index);
    };

    rows[i] = (
      <div key={i} className='board-row'>
        {columns}
      </div>
    );

  };

    return (
      <div>
        {rows}
      </div>
    );
};
