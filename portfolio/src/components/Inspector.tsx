import React, { useState, useRef } from "react";
import cx from "classnames";

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
  const tabs = [
    {
      label: "Node",
      disabled: true,
      pane: <NodePane />,
    },
    {
      label: "chooseSomething",
      pane: <SingleChoice />,
      disbaled: false,
    },
    {
      label: "thankYouMsg",
      pane: <TextPane />,
      disbaled: false,
    },
    {
      label: "goodbyeMsg",
      pane: <TextPane2 />,
      disbaled: false,
    },
  ];

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full h-full flex flex-col shadow-lg select-none border-[1px] border-zinc-200 rounded-lg overflow-hidden inter">
      {/* tab bar */}
      <TabBar
        tabs={tabs}
        handleTabClick={handleTabClick}
        activeTab={activeTab}
      />
      {/* inspector panes */}
      <div className="flex flex-col w-full h-full bg-white">
        {tabs[activeTab].pane}
      </div>
    </div>
  );
};

const TabBar = ({ tabs, handleTabClick, activeTab, handleTabClose }: any) => {
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
      <div className="flex flex-row w-full gap-1 justify-start overflow-x-scroll scroll-invisible rounded-md">
        {tabs.map((tab: any, index: number) => {
          return !tab.disabled ? (
            <Tab
              key={index}
              index={index}
              label={tab.label}
              handleTabClick={handleTabClick}
              activeTab={activeTab}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

const Tab = ({ index, label, activeTab, handleTabClick }: any) => {
  const tabRef = useRef<null | HTMLDivElement>(null);
  return (
    <span
      ref={tabRef}
      className={cx(
        "transition h-full text-xs rounded-md gap-1 hover:bg-zinc-100 cursor-pointer flex flex-row justify-center items-center",
        activeTab === index ? "bg-zinc-100 text-blue-700" : "bg-white"
      )}
    >
      <span
        className="w-full h-full py-1 pl-1.5"
        onClick={() => {
          handleTabClick(index);
          tabRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }}
      >
        {label}
      </span>
      <span className="h-full w-full py-1 pr-1">
        <XMarkIcon className="transition h-3 w-3 hover:text-white hover:bg-red-400 rounded-xl z-10" />
      </span>
    </span>
  );
};

const NodePane = () => {
  const enterActions = [
    {
      msg: "thankYouMsg",
      icon: (
        <span className="rounded-[4px] bg-emerald-500 text-center text-white font-bold h-5 w-5 leading-5">
          Tt
        </span>
      ),
    },
    {
      msg: "goodbyeMsg",
      icon: (
        <span className="rounded-[4px] bg-emerald-500 text-center text-white font-bold h-5 w-5 leading-5">
          Tt
        </span>
      ),
    },
  ];
  return (
    <>
      <div className="pane-header">
        <span className="pane-title">node-fjg54</span>
        <span className="pane-description">
          This node greets a user with a message.
        </span>
      </div>

      <div className="collapse">
        <div className="collapse-switch shadow-sm">
          <ChevronDownIcon className="collapse-chevron text-black" />
          <span className="collapse-label zinc-900">Enter</span>
          <PlusIcon className="btn-add" />
        </div>
        <div className="collapse-content">
          <div className="action-list">
            {enterActions.map((action: any, index: number) => {
              return (
                <ActionItem
                  msg={action.msg}
                  icon={action.icon}
                  key={index}
                  id={`action-${index}`}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="collapse-switch">
        <ChevronDownIcon className="collapse-chevron -rotate-90" />
        <span className="collapse-label text-zinc-700">Receive</span>
      </div>
      <div className="collapse-switch">
        <ChevronDownIcon className="collapse-chevron -rotate-90" />
        <span className="collapse-label text-zinc-700">Transition</span>
      </div>
    </>
  );
};

const ActionItem = ({ icon, msg, index }: any) => {
  return (
    <span className="transition duration-75 w-full p-1 flex flex-row gap-1 cursor-pointer text-xs items-center bg-white rounded-md border-[1px] border-zinc-200  hover:border-blue-500 hover:text-blue-700">
      {icon}
      {msg}
    </span>
  );
};

const SingleChoice = () => {
  return (
    <>
      <div className="pane-header">
        <span className="font-bold text-zinc-700 text-md px-3">
          chooseOption
        </span>
        <span className="text-zinc-700 text-xs px-3">
          A single choice question.
        </span>
      </div>
      <div className="pane-section">
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
      <div className="pane-header">
        <span className="pane-title">thankYouMsg</span>
        <span className="pane-description">
          A regular text message with optional typing indicators and alternates.
        </span>
      </div>
      <div className="flex flex-col w-full gap-2">
        <Label label="Messages" req={true} />
        <div className="w-full px-3">
          <List
            label="Click to add variation."
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

const TextPane2 = () => {
  return (
    <>
      <div className="pane-header">
        <span className="pane-title">goodbyeMsg</span>
        <span className="pane-description">
          A regular text message with optional typing indicators and alternates.
        </span>
      </div>
      <div className="flex flex-col w-full gap-2">
        <Label label="Messages" req={true} />
        <div className="w-full px-3">
          <List
            label="Click to add variation"
            items={["Have a good day!", "Goodbye!"]}
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
              className="w-full text-ellipsis text-xs bg-white rounded-sm px-2 py-2 cursor-grab flex group"
            >
              <span className="w-full">{item}</span>
              <TrashIcon className="transition h-4 w-4 text-zinc-300 cursor-pointer opacity-0 group-hover:opacity-100 hover:text-red-500" />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Inspector;
