import React from "react";
import Card from "../components/Card";
import KabloomImage from "../assets/png/kabloom/checkoutPrev.png";
import ShrPrintImg from "../assets/png/shrprint/kendrickGolfCards.png";
import BPImg from "../assets/png/botpress/studioPrev.png";

const Work = () => {
  return (
    <div
      id="work"
      className="w-[100vw] h-[100vh] p-8 col-start-2 col-span-1 row-start-2 row-span-1 relative flex justify-center items-center scroll-align-start scroll-snap-always "
    >
      <h1 className="section-title">Work</h1>
      <div
        id="workNode"
        className="border-[1px] border-zinc-900 rounded-xl flex flex-row p-8 gap-8 w-min h-min bg-orange-50/75 backdrop-blur-sm"
      >
        <Card
          link="#project1"
          name="Botpress"
          time="03/2022 - 05/2022"
          image={BPImg}
          bgColor="bg-indigo-200"
          coverColor="after:bg-indigo-200"
        />
        <Card
          link="#project2"
          name="Kabloom"
          time="11/2021 - 03/2022"
          image={KabloomImage}
          bgColor="bg-indigo-200"
          coverColor="after:bg-indigo-200"
        />
        <Card
          link="#project3"
          name="Sheridan Printing"
          time="06/2020 - 08/2021"
          image={ShrPrintImg}
          bgColor="bg-indigo-200"
          coverColor="after:bg-indigo-200"
        />
      </div>
    </div>
  );
};

export default Work;
