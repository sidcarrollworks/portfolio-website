import React, { FC } from "react";
import style from "./style.module.css";
import cx from "classnames";
import Image from "next/image";

type Props = {
  link: string;
  name: string;
  time: string;
  color?: string;
  image?: any;
  bgColor?: string;
  coverColor?: string;
};

const Card: FC<Props> = ({
  link,
  name,
  time,
  color,
  image,
  bgColor,
  coverColor,
}) => {
  return (
    <div className={cx(style.card, coverColor)}>
      <div
        className={cx(
          "flex h-full w-full justify-center items-start max-h-[260px] relative",
          bgColor
        )}
      >
        {image ? (
          <Image
            className="object-cover transition hover:scale-105 m-4"
            layout="fill"
            src={image}
            alt="preview image"
          />
        ) : null}
      </div>
      <div className="info z-10 flex flex-col justify-between h-48 p-6 pt-0">
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-xl text-stone-900">{name}</h2>
          <h4 className="text-xs text-stone-900">{time}</h4>
        </div>
        <a href={link}>
          <button
            className={cx(
              bgColor,
              "text-center p-2 border-[1px] border-zinc-900 w-full rounded-lg text-sm lifted-shadow active:lifted-shadow-active"
            )}
          >
            view
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
