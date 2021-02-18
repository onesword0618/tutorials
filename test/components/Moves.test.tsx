import { History, ISquare } from '../../src/domain/type';

import {Moves} from '../../src/components/Moves';
import React from 'react';
import renderer from 'react-test-renderer';

describe('実行履歴を表現しているコンポーネントの検証',() => {

  describe('実行履歴が描画されること',() => {
    test('SnapShotと同一であること',() => {

      const squares:ISquare[] = ['X','O',null,'X',null,null,'X',null,null]
      const history:any = [];
      history.squares = squares;
      const Prop = {
        histories : history,
        onclick : () => 1
      }
      const sut = renderer.create(
        <Moves
          history={Prop.histories}
          jumpTo={Prop.onclick}
          currentNumber={1}
        />
      );

      let target =sut.toJSON();
      expect(target).toMatchSnapshot();
    });
  });
});
