import React from 'react';
import {Square} from '../../src/components/Square';
import renderer from 'react-test-renderer';

describe('マス目を表現しているコンポーネントの検証',() => {

  describe('マス目が描画されること',() => {
    test('SnapShotと同一であること',() => {
      const sut = renderer.create(
        <Square
          value = {'O'}
          onClick = {() => 1}
          highlight={false}
        />
      );

      let target =sut.toJSON();
      expect(target).toMatchSnapshot();
    });
  });
});
