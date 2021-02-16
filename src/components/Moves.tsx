import '../index.css';

import {History} from '../domain/type';
import React from 'react';

type Props = {
  history: History[];
  jumpTo: (move: number) => void;
  currentNumber:number;
}

export const Moves : React.FC<Props> = (props) => {
  const {history,jumpTo,currentNumber} = props;
  return (
    <>
      {history.map((step, move) => {
        const desc = move ? `Go to move #${move}.` : 'Go to game start';
        const location = move ? `(${step.location.col}, ${step.location.row})` : '';
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>
              {move == currentNumber ? <b>{desc}</b> : desc}
              {location}
            </button>
          </li>
        );
      })}
    </>
  );
}
