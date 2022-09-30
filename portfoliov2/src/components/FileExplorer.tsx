import React from "react";
import BPIcon from "../assets/svg/BPIcon.svg";

import {
  ChevronDownIcon,
  DocumentMagnifyingGlassIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/solid";

const FileExplorer = () => {
  return (
    <div className="min-w-[225px] h-full flex flex-col shadow-lg select-none border-[1px] bg-white border-zinc-200 rounded-lg overflow-hidden inter">
      {/* header */}
      <div className="flex flex-row w-full h-9 bg-white gap-1 p-1 border-b-[1px] border-zinc-200">
        {/* cmd meu */}
        <span className="h-6 aspect-square w-6 bg-black rounded-md flex items-center justify-center cursor-pointer">
          <img src={BPIcon} alt="bpLogo" className="w-3 h-3" />
        </span>
        {/* search */}
        <input
          placeholder="Search"
          className="w-full bg-zinc-50 focus:bg-white h-full bg-zinc 100 py-1 px-2 rounded-md input-focus input-focus focus:border-blue-600 border-zinc-200 border-[1px] text-xs outline-none"
        />
      </div>

      {/* tree */}
      <div className="flex flex-col w-full h-full bg-white">
        <FileSection name="Flows" />
        <FileSection name="Skills" />
        <FileSection name="Intents" />
        <FileSection name="Entities" />
        <FileSection name="Actions" />
        <FileSection name="Hooks" />
      </div>

      {/* footer */}
      <div className="flex flex-col w-full gap-2 py-2 border-t-[1px] border-zinc-200">
        <span className="flex flex-row gap-2 w-full items-center justify-center  px-2 py-1 text-xs transition duration-75 text-zinc-400 hover:text-zinc-700 cursor-pointer">
          <DocumentMagnifyingGlassIcon className="w-4 h-4" />{" "}
          <span>Docs & Tutorial</span>
        </span>
        <span className="flex flex-row gap-2 w-full items-center justify-center  px-2 py-1 text-xs transition duration-75 text-zinc-400 hover:text-zinc-700 cursor-pointer">
          <ChatBubbleBottomCenterTextIcon className="w-4 h-4" />{" "}
          <span>Feedback</span>
        </span>
      </div>
    </div>
  );
};

const FileSection = ({ name }: any) => {
  return (
    <div className="collapse-switch">
      <ChevronDownIcon className="collapse-chevron" />
      <span className="collapse-label">{name}</span>
    </div>
  );
};

export default FileExplorer;
