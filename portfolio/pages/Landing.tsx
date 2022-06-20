import React from "react";

const Landing = () => {
  return (
    <div
      id="home"
      className="w-[100vw] h-[100vh] p-8 col-start-2 col-span-1 row-start-1 row-span-1 relative scroll-align-start"
    >
      <div className="w-full h-full text-center flex flex-col pt-48 gap-14">
        <h2 className="md:text-8xl sm:text-2xl italic font-serif">
          {"Hi I'm"}
        </h2>
        <h1 className="md:text-9xl sm:text-4xl font-bold font-sans layered-fade">
          SID CARROLL
        </h1>
        <h2 className="md:text-3xl sm:text-xl font-sans">
          Graphics + UX/UI + Front-end Dev
        </h2>
      </div>

      <a href="#contact">
        <button className="contactBtn btn absolute top-1/2 left-8">
          contact
        </button>
      </a>

      <a href="#work">
        <button
          id="workBtn"
          className="btn absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          view work
        </button>
      </a>

      <a href="#about">
        <button id="aboutBtn" className="btn absolute top-1/2 right-8">
          about me
        </button>
      </a>
    </div>
  );
};

export default Landing;
