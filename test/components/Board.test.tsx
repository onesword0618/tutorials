import { Board } from "../../src/components/Board";
import React from "react";
import renderer from "react-test-renderer";

describe("盤面を表現しているコンポーネントの検証", () => {
  describe("盤面が描画されること", () => {
    test("SnapShotと同一であること", () => {
      const squeres: ("X" | "O" | null)[] = [
        "X",
        null,
        null,
        "X",
        null,
        null,
        "X",
        null,
        null,
      ];
      const sut = renderer.create(
        <Board squares={squeres} onClick={() => 1} line={[1, 2, 3]} />
      );

      let target = sut.toJSON();
      expect(target).toMatchSnapshot();
    });
  });
});
