import React, { FC } from "react";
import Image from "next/image";

export type Props = {
  title?: string;
  content: string;
  image: string;
  flip?: boolean;
};

const SectionNode: FC<Props> = ({ content, flip, image, title }) => {
  return (
    <div
      className={`flex ${
        flip ? "flex-row-reverse" : "flex-row"
      } w-full justify-center gap-16`}
    >
      <div className="bg-white rounded-xl border-[1px] border-zinc-900 overflow-hidden w-[400px] h-[400px] node-shadow">
        {/* <img
          className="w-full h-full"
          src={image}
          alt={title ? title : "img"}
        /> */}
      </div>
      <div className="flex flex-col gap-4">
        {title ? <h2 className="text-2xl font-bold">{title}</h2> : null}
        <p className="text-sm max-w-[400px] min-w-[300px]">{content}</p>
      </div>
    </div>
  );
};

export default SectionNode;
