import React from "react";
import renderer from "react-test-renderer";
import { Game } from "../../src/components/Game";

describe("ゲームを表現しているコンポーネントの検証", () => {
  describe("ゲームが描画されること", () => {
    test("SnapShotと同一であること", () => {
      const sut = renderer.create(<Game />);

      let target = sut.toJSON();
      expect(target).toMatchSnapshot();
    });
  });
});
