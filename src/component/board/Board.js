import { Square } from "../square/Square";
import style from "./board.module.css";

export const Board = () => {
  return (
    <>
      <div className={style.boardRow}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className={style.boardRow}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className={style.boardRow}>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
};
