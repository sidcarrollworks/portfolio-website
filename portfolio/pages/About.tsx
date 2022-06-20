import React from "react";
import Image from "next/image";
import style from "./style.module.css";

const About = () => {
  return (
    <div
      id="about"
      className="w-[100vw] h-[100vh] p-8 col-start-3 col-span-1 row-start-1 row-span-1 relative flex justify-center items-center scroll-align-start"
    >
      <h1 className="section-title before:content-['About'] top-28">About</h1>
      <div
        id="aboutNode"
        className="bg-white border-[1px] border-zinc-900 rounded-xl flex flex-row p-10 gap-12 node-shadow"
      >
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-semibold">
            Line leading into paragraph
          </h2>

          <p className="text-base max-w-[400px] min-w-[300px]">
            talking about myself. Where I was raised and what not. Talk about my
            journey from graphic design to holberton to UI design.
          </p>
        </div>
        <div className="bg-white rounded-xl border-[1px] border-zinc-900 overflow-hidden w-[300px] h-[300px] node-shadow">
          {/* <Image
            src="https://i1.sndcdn.com/avatars-000669881501-bus2an-t500x500.jpg"
            alt=""
            layout="fill"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
