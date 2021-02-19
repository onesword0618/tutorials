import {findWinner} from '../../src/domain/findWinner';

describe('勝利条件として定義した配列の各要素の組み合わせに引数の配列の各要素が合致した場合に列の配列とプレイヤー名を返却する',() => {

  describe('勝利条件の配列の[0,1,2]を満たしている場合',() => {
    test('{"line": [0, 1, 2], "winner": "X"}が返却されること',() =>{
      const squeres:(string | null)[] = ['X','X','X',null,null,null,null,null,null];
      expect(findWinner(squeres)).toEqual({'line': [0, 1, 2], 'winner': 'X'});
    });
  });

  describe('勝利条件の配列の[3,4,5]を満たしている場合',() => {
    test('{"line": [3, 4, 5], "winner": "X"}が返却されること',() =>{
      const squeres:(string | null)[] = [null,null,null,'X','X','X',null,null,null];
      expect(findWinner(squeres)).toEqual({'line': [3, 4, 5], 'winner': 'X'});
    });
  });

  describe('勝利条件の配列の[6,7,8]を満たしている場合',() => {
    test('{"line": [6, 7, 8], "winner": "X"}が返却されること',() =>{
      const squeres:(string | null)[] = [null,null,null,null,null,null,'X','X','X'];
      expect(findWinner(squeres)).toEqual({'line': [6, 7, 8], 'winner': 'X'});
    });
  });

  describe('勝利条件の配列の[0,3,6]を満たしている場合',() => {
    test('{"line": [0, 3, 6], "winner": "X"}が返却されること',() =>{
      const squeres:(string | null)[] = ['X',null,null,'X',null,null,'X',null,null];
      expect(findWinner(squeres)).toEqual({'line': [0, 3, 6], 'winner': 'X'});
    });
  });

  describe('勝利条件の配列の[1,4,7]を満たしている場合',() => {
    test('{"line": [1, 4, 7], "winner": "X"}が返却されること',() =>{
      const squeres:(string | null)[] = [null,'X',null,null,'X',null,null,'X',null];
      expect(findWinner(squeres)).toEqual({'line': [1, 4, 7], 'winner': 'X'});
    });
  });

  describe('勝利条件の配列の[2,5,8]を満たしている場合',() => {
    test('{"line": [2, 5, 8], "winner": "X"}が返却されること',() =>{
      const squeres:(string | null)[] = [null,null,'X',null,null,'X',null,null,'X'];
      expect(findWinner(squeres)).toEqual({'line': [2, 5, 8], 'winner': 'X'});
    });
  });

  describe('勝利条件の配列の[0,4,8]を満たしている場合',() => {
    test('{"line": [0, 4, 8], "winner": "X"}が返却されること',() =>{
      const squeres:(string | null)[] = ['X',null,null,null,'X',null,null,null,'X'];
      expect(findWinner(squeres)).toEqual({'line': [0, 4, 8], 'winner': 'X'});
    });
  });

  describe('勝利条件の配列の[2,4,6]を満たしている場合',() => {
    test('{"line": [2, 4, 6], "winner": "X"}が返却されること',() =>{
      const squeres:(string | null)[] = [null,null,'X',null,'X',null,'X',null,null];
      expect(findWinner(squeres)).toEqual({'line': [2, 4, 6], 'winner': 'X'});
    });
  });

  describe('勝利条件の配列の[2,4,6]を満たしている場合',() => {
    test('{"line": [2, 4, 6], "winner": "O"}が返却されること',() =>{
      const squeres:(string | null)[] = [null,null,'O',null,'O',null,'O',null,null];
      expect(findWinner(squeres)).toEqual({'line': [2, 4, 6], 'winner': 'O'});
    });
  });
});

describe('勝利条件を満たすことができない場合に引き分けの文字列を返却する',() => {
  describe('勝利条件を満たしていない場合',() => {
    test('{"line": [2, 4, 6], "winner": "X"}が返却されること',() =>{
      const squeres:(string | null)[] = ['X','X','O','O','O','X','X','O','X'];
      expect(findWinner(squeres)).toEqual({'line': null, 'winner': 'DRAW'});
    });
  });
});
