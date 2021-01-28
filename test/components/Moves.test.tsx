import React from 'react';
import {Moves} from '../../src/components/Moves';
import renderer from 'react-test-renderer';
import { History, ISquare } from '../../src/domain/type';

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
        />
      );

      let target =sut.toJSON();
      expect(target).toMatchSnapshot();
    });
  });
});
