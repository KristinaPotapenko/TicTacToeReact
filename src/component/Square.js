import style from "./square.module.css";

export const Square = () => {
  return (
    <div className={style.square}>
      <button className={style.squareX}>X</button>
    </div>
  );
};
