import {findWinner} from '../../src/domain/findWinner';

describe('勝利条件として定義した配列の各要素の組み合わせに引数の配列の各要素が合致した場合にその文字を返却する',() => {

  describe('勝利条件の配列の[0,1,2]を満たしている場合',() => {
    test('Xが返却されること',() =>{
      const squeres:(string | null)[] = ['X','X','X',null,null,null,null,null,null];
      expect(findWinner(squeres)).toEqual('X');
    });
  });

  describe('勝利条件の配列の[3,4,5]を満たしている場合',() => {
    test('Xが返却されること',() =>{
      const squeres:(string | null)[] = [null,null,null,'X','X','X',null,null,null];
      expect(findWinner(squeres)).toEqual('X');
    });
  });

  describe('勝利条件の配列の[6,7,8]を満たしている場合',() => {
    test('Xが返却されること',() =>{
      const squeres:(string | null)[] = [null,null,null,null,null,null,'X','X','X'];
      expect(findWinner(squeres)).toEqual('X');
    });
  });

  describe('勝利条件の配列の[0,3,6]を満たしている場合',() => {
    test('Xが返却されること',() =>{
      const squeres:(string | null)[] = ['X',null,null,'X',null,null,'X',null,null];
      expect(findWinner(squeres)).toEqual('X');
    });
  });

  describe('勝利条件の配列の[1,4,7]を満たしている場合',() => {
    test('Xが返却されること',() =>{
      const squeres:(string | null)[] = [null,'X',null,null,'X',null,null,'X',null];
      expect(findWinner(squeres)).toEqual('X');
    });
  });

  describe('勝利条件の配列の[2,5,8]を満たしている場合',() => {
    test('Xが返却されること',() =>{
      const squeres:(string | null)[] = [null,null,'X',null,null,'X',null,null,'X'];
      expect(findWinner(squeres)).toEqual('X');
    });
  });

  describe('勝利条件の配列の[0,4,8]を満たしている場合',() => {
    test('Xが返却されること',() =>{
      const squeres:(string | null)[] = ['X',null,null,null,'X',null,null,null,'X'];
      expect(findWinner(squeres)).toEqual('X');
    });
  });

  describe('勝利条件の配列の[2,4,6]を満たしている場合',() => {
    test('Xが返却されること',() =>{
      const squeres:(string | null)[] = [null,null,'X',null,'X',null,'X',null,null];
      expect(findWinner(squeres)).toEqual('X');
    });
  });
});
