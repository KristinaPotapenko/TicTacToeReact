import { useState } from "react";
import { Square } from "../square/Square";
import style from "./board.module.css";

export const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (squareIndex) => {
    if (squares[squareIndex]) return;

    const copySquares = squares.slice();
    copySquares[squareIndex] = "x";
    setSquares(copySquares);
  };

  return (
    <>
      <div className={style.board}>
        <div className={style.boardRow}>
          <Square
            squareIndex="0"
            value={squares[0]}
            onSquareClick={handleClick}
          />
          <Square
            squareIndex="1"
            value={squares[1]}
            onSquareClick={handleClick}
          />
          <Square
            squareIndex="2"
            value={squares[2]}
            onSquareClick={handleClick}
          />
        </div>
        <div className={style.boardRow}>
          <Square
            squareIndex="3"
            value={squares[3]}
            onSquareClick={handleClick}
          />
          <Square
            squareIndex="4"
            value={squares[4]}
            onSquareClick={handleClick}
          />
          <Square
            squareIndex="5"
            value={squares[5]}
            onSquareClick={handleClick}
          />
        </div>
        <div className={style.boardRow}>
          <Square
            squareIndex="6"
            value={squares[6]}
            onSquareClick={handleClick}
          />
          <Square
            squareIndex="7"
            value={squares[7]}
            onSquareClick={handleClick}
          />
          <Square
            squareIndex="8"
            value={squares[8]}
            onSquareClick={handleClick}
          />
        </div>
      </div>
    </>
  );
};
