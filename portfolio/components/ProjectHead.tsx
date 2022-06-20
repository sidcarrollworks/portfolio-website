import React, { FC } from "react";

export type Props = {
  name: string;
  time: string;
  description: string;
};

const ProjectHead: FC<Props> = ({ name, time, description }) => {
  return (
    <div className="bg-white border-[1px] border-zinc-900 rounded-xl flex flex-col p-10 gap-12 w-min h-min node-shadow">
      <div className="w-[645px] flex flex-row justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold uppercase">{name}</h2>
          <p className="text-sm">From {time}</p>
        </div>
        <div className="w-14 h-14 rounded-full bg-blue-500" />
      </div>
      <p className="w-full">{description}</p>
    </div>
  );
};

export default ProjectHead;
