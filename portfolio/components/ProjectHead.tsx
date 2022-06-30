import React, { FC } from "react";
import Image from "next/image";

export type Props = {
  name: string;
  image: any;
  description: string;
};

const ProjectHead: FC<Props> = ({ name, description, image }) => {
  return (
    <div className="bg-white border-[1px] border-zinc-900 rounded-xl flex flex-col p-10 gap-12 w-min h-min node-shadow">
      <div className="w-[645px] flex flex-row justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold uppercase">{name}</h2>
        </div>
        <div className="flex flex-col justify-center flex-grow max-h-[75px] max-w-[75px] aspect-square">
          {image ? (
            <Image className="object-cover" src={image} alt="Kabloom Logo" />
          ) : null}
        </div>
      </div>
      <p className="w-full">{description}</p>
    </div>
  );
};

export default ProjectHead;
