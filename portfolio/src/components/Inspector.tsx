import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import cx from "classnames";

import DynamicIcon from "./Icons/DynamicIcon";

import {
  AdjustmentsVerticalIcon,
  XMarkIcon,
  ChevronDownIcon,
  PlusIcon,
  TrashIcon,
  VariableIcon,
} from "@heroicons/react/24/solid";

const Inspector = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tabs = [
    {
      label: "Node",
      disabled: true,
      pane: <NodePane />,
    },
    {
      label: "chooseSomething",
      pane: <SingleChoice />,
    },
    {
      label: "thankYouMessage",
      pane: <TextPane />,
    },
  ];

  return (
    <div className="w-full flex flex-col shadow-lg select-none border-[1px] border-zinc-200 rounded-lg overflow-hidden inter">
      {/* tab bar */}
      <TabBar
        tabs={tabs}
        handleTabClick={handleTabClick}
        activeTab={activeTab}
      />
      {/* inspector panes */}
      <div className="flex flex-col w-full h-full bg-zinc-50 gap-4 py-3">
        {tabs[activeTab].pane}
      </div>
    </div>
  );
};

const TabBar = ({ tabs, handleTabClick, activeTab }: any) => {
  return (
    <div className="flex flex-row w-full p-1 bg-white border-b-[1px] border-zinc-200 items-center gap-1">
      {/* node settings */}
      <div
        className={cx(
          "transition rounded-md p-1 hover:bg-zinc-100 cursor-pointer flex justify-center items-center h-6 w-6",
          activeTab === 0 ? "bg-zinc-100 text-blue-700" : "bg-white"
        )}
        onClick={() => handleTabClick(0)}
      >
        <AdjustmentsVerticalIcon className="h-4 w-4" />
      </div>
      <span className="w-[1px] h-3 bg-zinc-300 " />
      {/* tabs */}
      <div className="flex flex-row w-full gap-1 justify-end">
        {tabs.map((tab: any, index: number) => {
          return !tab.disabled ? (
            <span
              key={index}
              className={cx(
                "transition h-full text-xs rounded-md gap-1 hover:bg-zinc-100 cursor-pointer flex flex-row justify-center items-center px-2 py-1",
                activeTab === index ? "bg-zinc-100 text-blue-700" : "bg-white"
              )}
              onClick={() => handleTabClick(index)}
            >
              {tab.label}
              <XMarkIcon className="transition h-3 w-3 hover:text-white hover:bg-red-400 rounded-xl" />
            </span>
          ) : null;
        })}
      </div>
    </div>
  );
};

const NodePane = () => {
  return (
    <>
      <span className="font-bold text-zinc-700 text-md px-3">node-fjg54</span>
      <span className="text-zinc-700 text-xs px-3">
        This node greets a user with a message.
      </span>
      <div className="flex flex-col w-full gap-2">
        <div className="w-full flex flex-row gap-2 items-center px-3">
          <ChevronDownIcon className="h-4 w-4" />
          <span className="w-full font-medium text-xs">Enter</span>
          <PlusIcon className="h-4 w-4" />
        </div>
        <div className="w-full px-3">
          <div className="w-full bg-zinc-100 rounded-md border-[1px] border-zinc-200 p-1">
            <span
              onClick={() => {}}
              className="w-full p-1 flex flex-row gap-1 cursor-pointer text-xs items-center bg-white rounded-md border-[1px] border-zinc-200"
            >
              <span className="rounded-[4px] bg-emerald-500 text-center text-white font-bold h-5 w-5 leading-5">
                Tt
              </span>
              thankYouMessage
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row gap-2 items-center px-3">
        <ChevronDownIcon className="h-4 w-4 -rotate-90" />
        <span className="w-full font-medium text-xs">Receive</span>
      </div>
      <div className="w-full flex flex-row gap-2 items-center px-3">
        <ChevronDownIcon className="h-4 w-4 -rotate-90" />
        <span className="w-full font-medium text-xs">Transition</span>
      </div>
    </>
  );
};

const SingleChoice = () => {
  return (
    <>
      <span className="font-bold text-zinc-700 text-md px-3">chooseOption</span>
      <span className="text-zinc-700 text-xs px-3">
        A single choice question.
      </span>
      <div className="flex flex-col w-full gap-2">
        <Label label="Message" req={false} />
        <div className="w-full px-3">
          <input className="transition w-full rounded-md py-1 px-2 input-focus focus:border-blue-600 border-zinc-200 border-[1px] text-xs outline-none" />
        </div>
      </div>
      <div className="flex flex-col w-full gap-2">
        <Label label="Dropdown Placeholder" req={false} />
        <div className="w-full px-3">
          <input className="transition w-full rounded-md py-1 px-2 input-focus focus:border-blue-600 border-zinc-200 border-[1px] text-xs outline-none" />
        </div>
      </div>
      <div className="flex flex-col w-full gap-2">
        <Label label="Choices" req={true} />
        <div className="w-full px-3">
          <List
            label="Click to add choice."
            items={["1 scoop", "2 scoops", "3 scoops"]}
          />
        </div>
      </div>
    </>
  );
};

const Label = ({ label, req }: any) => {
  return (
    <div className="w-full flex flex-row gap-2 items-center px-3">
      <span className="w-full font-medium text-xs">
        {label} {req ? <span className="text-red-500">*</span> : null}
      </span>
      <VariableIcon className="h-4 w-4 hover:text-blue-600 cursor-pointer text-zinc-600" />
    </div>
  );
};

const TextPane = () => {
  return (
    <>
      <span className="font-bold text-zinc-700 text-md px-3">
        thankYouMessage
      </span>
      <span className="text-zinc-700 text-xs px-3">
        A regular text message with optional typing indicators and alternates.
      </span>
      <div className="flex flex-col w-full gap-2">
        <Label label="Messages" req={true} />
        <div className="w-full px-3">
          <List
            label="Click to add message"
            items={[
              "Hello, how can I help you?",
              "Howdy, let me know if I can help!",
              "Welcome, welcome, welcome!",
            ]}
          />
        </div>
      </div>
    </>
  );
};

const List = ({ label, items }: any) => {
  return (
    <div className="w-full bg-zinc-100 rounded-md border-[1px] border-zinc-200 overflow-hidden">
      <div className="w-full flex flex-row bg-zinc-100 p-2 border-b-[1px] border-zinc-200">
        <span className="text-xs w-full">{label}</span>
        <PlusIcon className="h-4 w-4 hover:text-green-600 cursor-pointer" />
      </div>
      <div className="w-full flex flex-col bg-zinc-200 gap-[1px]">
        {items.map((item: any, index: number) => {
          return (
            <span
              key={index}
              className="w-full text-ellipsis text-xs bg-white rounded-sm px-2 py-2 cursor-pointer flex group"
            >
              <span className="w-full">{item}</span>
              <TrashIcon className="transition h-4 w-4 text-zinc-400 cursor-pointer opacity-0 group-hover:opacity-100 hover:text-red-500" />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Inspector;
