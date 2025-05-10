import style from "./square.module.css";

export const Square = ({ squareIndex, value, onSquareClick }) => {
  let squareStyle = `${style.squareButton} `;

  if (value === "x") {
    squareStyle += style.squareX;
  } else if (value === "o") {
    squareStyle += style.squareO;
  }

  return (
    <div className={style.square} onClick={() => onSquareClick(squareIndex)}>
      <button className={squareStyle}></button>
    </div>
  );
};
