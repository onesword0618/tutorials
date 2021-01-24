/**
 * 勝利条件の判定をする関数
 * @param {*} squares マス目を模した配列
 */
export function findWinner(squares:(string | null)[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const lineLength:number = lines.length;
  for (let i:number = 0; i < lineLength; i++) {
    const [a, b, c]:number[] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
