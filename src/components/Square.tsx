import "../index.css";

import React from "react";

type Props = {
  onClick: () => void;
  value: "X" | "O" | null;
  highlight: boolean | null;
};

export const Square: React.FC<Props> = (props) => {
  const { onClick, value } = props;

  let className = "square";
  if (props.highlight) {
    className += " highlight";
  }

  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};
