import React, { useState, useRef } from "react";
import { HomeIcon, BriefcaseIcon, UserIcon } from "@heroicons/react/24/solid";
import { animated, Spring } from "react-spring";

import cx from "classnames";

import Logo from "./components/Logo";

import Card from "./components/Card";

import BP from "./assets/png/BP.png";
import Kabloom from "./assets/png/Kabloom.png";
import SHRPrint from "./assets/png/SHRPrint.png";

import BHDLogo from "./assets/svg/BHDLogo.svg";
import logo from "./logo.svg";
import enterText from "./assets/svg/Enter.svg";
import BPIcon from "./assets/svg/BPIcon.svg";
import KBIcon from "./assets/svg/KBIcon.svg";
import SHRIcon from "./assets/svg/SHRIcon.svg";
import bpLogo from "./assets/svg/bpLogo.svg";

import Mountains from "./assets/svg/Mountains";
import Nodes from "./assets/svg/Nodes";

import laptopAnimation from "./assets/lottie/laptopAnimation.json";

import "./App.css";

function App() {
  const [enter, setEnter] = useState(false);

  const Card1 = useRef(null);
  const Card2 = useRef(null);
  const Card3 = useRef(null);

  const landing = useRef(null);
  const work = useRef(null);
  const about = useRef(null);

  return (
    <div className="w-full h-full bg-black flex flex-col">
      <div className="w-full h-full flex flex-col gap-4 max-w-[1440px] mx-auto">
        <Spring opacity={enter ? 1 : 0}>
          {(styles) => (
            <animated.img
              style={styles}
              className="h-8 mt-6"
              src={logo}
              alt="logo"
            />
          )}
        </Spring>

        <div className="relative w-full h-full rounded-xl overflow-hidden px-6">
          <div className="overflow-hidden rounded-xl flex flex-col w-full h-full ">
            <div className="w-full h-full flex flex-col hide-scrollbar scroll-invisible gap-6 scroll-snap-y relative rounded-xl overflow-auto">
              {!enter ? (
                <div className="min-w-full h-full scroll-align-start">
                  <div
                    className={cx(
                      "w-full h-full flex flex-col justify-center items-center rounded-xl bg-zinc-200 relative accent-edge"
                    )}
                  >
                    <div className="spotlight h-full w-full rotate-180 absolute opacity-90 top-0 left-1/2 -translate-x-1/2" />
                    <Logo height="170px" className="z-20" />
                    <h2 className="inter text-2xl font-black tracking-[0.5rem] text-center ml-2 text-shadow-inner text-stone-300 z-20">
                      SIDCARROLLWORKS
                    </h2>
                    <button
                      className="px-3 py-2 bg-zinc-900 rounded-full z-20 flex text-zinc-100 btn mt-12 active:scale-90 transition"
                      onClick={() => {
                        setEnter(true);
                      }}
                    >
                      <img src={enterText} alt="enter" className="h-3 "></img>
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="min-h-full w-full scroll-align-start relative">
                    <div
                      ref={landing}
                      className="w-full h-full flex flex-col justify-between bg-zinc-200 rounded-xl p-6 relative accent-edge"
                    >
                      <div className="spotlight h-full w-full absolute rotate-180 opacity-90 top-0 left-1/2 -translate-x-1/2 z-0" />
                      <div className="flex flex-col h-min items-center gap-1 pt-4"></div>

                      {/* Focus */}
                      <div className="flex flex-col items-start md:items-center gap-4 md:gap-1 px-0 md:px-10 z-10">
                        <h1 className=" text-left md:text-center fugaz text-5xl md:text-7xl lg:text-8xl">
                          PURPOSEFUL
                          <br />
                          DESIGN SOLUTIONS
                        </h1>
                        <h3 className="text-base md:text-xl text-left md:text-center font-medium uppercase">
                          I use my experience in graphics and ui design to
                          create captivating experiences.
                        </h3>
                      </div>
                      {/* People I've Worked With */}
                      <div className="p-0 md:p-4 flex flex-col items-center gap-8 z-10">
                        <h4 className="font-bold text-base md:text-lg">
                          PEOPLE I'VE WORKED WITH
                        </h4>
                        <div className="flex flex-row flex-wrap items-center justify-center gap-8">
                          <img
                            src={BP}
                            className=" h-6 md:h-8"
                            alt="Botpress"
                          />
                          <img
                            src={Kabloom}
                            className="h-6 md:h-8"
                            alt="Kabloom"
                          />
                          <img
                            src={SHRPrint}
                            className="h-6 md:h-8"
                            alt="Sheridan Printing"
                          />
                          <img
                            src={BHDLogo}
                            className="h-6 md:h-8"
                            alt="Bighorn Design"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    ref={work}
                    className="min-h-full w-full flex flex-col md:flex-row gap-6 scroll-align-start overflow-x-hidden md:overflow-y-hidden scroll-snap-y md:scroll-snap-x"
                  >
                    <Card
                      name="Kabloom Booking"
                      color="#f43f5e"
                      color2="#f43f5e"
                      coverImg={KBIcon}
                      ref={Card1}
                      lottie={laptopAnimation}
                    >
                      <div className="w-full flex flex-row gap-6 items-center">
                        {bpLogo ? (
                          <img src={bpLogo} alt="logo" className="h-12" />
                        ) : null}
                        <h2 className="text-3xl font-semibold">
                          Kabloom Booking UI Breakdown
                        </h2>
                      </div>
                    </Card>
                    <Card
                      name="Sheridan Printing"
                      color="#10B981"
                      color2="#10B981"
                      coverImg={SHRIcon}
                      ref={Card2}
                      background={<Mountains />}
                    >
                      <div className="w-full flex flex-row gap-6 items-center">
                        {bpLogo ? (
                          <img src={bpLogo} alt="logo" className="h-12" />
                        ) : null}
                        <h2 className="text-3xl font-semibold">
                          Sheridan Printing
                        </h2>
                      </div>
                    </Card>
                    <Card
                      name="Botpress Studio"
                      color="#3730a3"
                      color2="#171718"
                      coverImg={BPIcon}
                      ref={Card3}
                      logo={bpLogo}
                      background={<Nodes />}
                    >
                      <div className="w-full flex flex-row gap-6 items-center">
                        {bpLogo ? (
                          <img src={bpLogo} alt="logo" className="h-12" />
                        ) : null}
                        <h2 className="text-3xl font-semibold">
                          Botpress Studio UI Breakdown
                        </h2>
                      </div>
                    </Card>
                  </div>

                  <div
                    ref={about}
                    className="min-h-full w-full flex flex-row gap-6 scroll-align-start"
                  >
                    <div className="w-full h-full flex flex-col justify-between bg-zinc-900 rounded-xl p-6 relative accent-edge">
                      hi
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <Spring opacity={enter ? 1 : 0}>
          {(styles) => (
            <animated.div
              style={styles}
              className="flex flex-row w-full justify-center items-center pb-4 gap-4 z-10 "
            >
              <HomeIcon
                className="h-4 w-4 text-zinc-100 cursor-pointer hover:scale-125 transition"
                onClick={() => {
                  console.log("hi");
                  landing.current.scrollIntoView({ behavior: "smooth" });
                }}
              />
              <BriefcaseIcon
                className="h-4 w-4 text-zinc-100 cursor-pointer hover:scale-125 transition"
                onClick={() => {
                  console.log("work");
                  work.current.scrollIntoView({ behavior: "smooth" });
                }}
              />
              <UserIcon
                className="h-4 w-4 text-zinc-100 cursor-pointer hover:scale-125 transition"
                onClick={() => {
                  console.log("about");
                  about.current.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </animated.div>
          )}
        </Spring>
      </div>
    </div>
  );
}

export default App;
