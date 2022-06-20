import React, { FC } from "react";
import style from "./style.module.css";

type Props = {
  link: string;
  name: string;
  time: string;
};

const Card: FC<Props> = ({ link, name, time }) => {
  return (
    <div className={style.card}>
      <div className="flex h-full w-full justify-center items-center">IMG</div>
      <div className="info z-10 flex flex-col gap-3">
        <h2 className="font-medium text-xl">{name}</h2>
        <h4 className="text-sm">{time}</h4>
        <a href={link}>
          <button className="text-center p-2 border-[1px] border-zinc-900 w-full rounded-lg text-sm bg-white lifted-shadow active:lifted-shadow-active">
            view
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
