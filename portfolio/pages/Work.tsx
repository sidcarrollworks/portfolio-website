import React from "react";
import Card from "../components/Card";

const Work = () => {
  return (
    <div
      id="work"
      className="w-[100vw] h-[100vh] p-8 col-start-2 col-span-1 row-start-2 row-span-1 relative flex justify-center items-center scroll-align-start"
    >
      <h1 className="section-title">Work</h1>
      <div
        id="workNode"
        className="bg-white border-[1px] border-zinc-900 rounded-xl flex flex-row p-12 gap-12 w-min h-min node-shadow"
      >
        <Card link="#project1" name="Botpress" time="00/0000 - 00/0000" />
        <Card link="#project2" name="Kabloom" time="00/0000 - 00/0000" />
        <Card
          link="#project3"
          name="Sheridan Printing"
          time="00/0000 - 00/0000"
        />
      </div>
    </div>
  );
};

export default Work;
