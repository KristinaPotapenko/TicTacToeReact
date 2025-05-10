import { useState } from "react";
import { Square } from "../square/Square";
import style from "./board.module.css";

export const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, seXIsNext] = useState(true);

  const calculateWinner = (squares) => {
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

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  const handleClick = (squareIndex) => {
    if (squares[squareIndex] || calculateWinner(squares)) return;

    const copySquares = squares.slice();

    if (xIsNext) {
      copySquares[squareIndex] = "x";
    } else {
      copySquares[squareIndex] = "o";
    }

    seXIsNext(!xIsNext);
    setSquares(copySquares);
  };

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = xIsNext ? "Next player: x" : "Next player: o";
  }

  return (
    <>
      <h1>{status}</h1>
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
