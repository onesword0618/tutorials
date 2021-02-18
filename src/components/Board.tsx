import '../index.css';

import React from 'react';
import { Square } from '../components/Square';

type Props = {
  onClick:(i:number) => void,
  squares:('X' | 'O'| null)[],
  line:(number[] | null),
};

export const Board : React.FC<Props> = (props) => {
  const {onClick,squares,line} = props;
  function renderSquare(i:number,highlight:(boolean|null)) {
    return (
      <Square
        key={i}
        onClick={() => onClick(i)}
        value={squares[i]}
        highlight={highlight}
      />
    );
  };

  const rows = Array(3);
  for(let i of [0,1,2]) {

    const columns = Array(3);
    for (let j of [0,1,2]) {
      const index = i*3 + j;
      const highlight = line && line.includes(index);
      columns[j] = renderSquare(index,highlight);
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
