import React, { FC } from "react";
import cx from "classnames";
import Image from "next/image";

export type Props = {
  name: string;
  image: any;
  description: string;
  bgColor?: string;
};

const ProjectHead: FC<Props> = ({
  name,
  description,
  image,
  bgColor = "bg-white/60",
}) => {
  return (
    <div className="p-8 backdrop-blur-sm border-[1px] border-zinc-900 rounded-xl">
      <div
        className={cx(
          "rounded-xl flex flex-col p-8 gap-12 w-min h-min border-[1px] border-zinc-900",
          bgColor
        )}
      >
        <div className="w-[645px] flex flex-row justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold uppercase">{name}</h2>
          </div>
          <div className="flex flex-col justify-center flex-grow max-w-[75px] aspect-square">
            {image ? (
              <Image
                className="object-cover rounded-xl"
                src={image}
                alt="Kabloom Logo"
              />
            ) : null}
          </div>
        </div>
        <p className="w-full">{description}</p>
      </div>
    </div>
  );
};

export default ProjectHead;
