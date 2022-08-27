import { useState } from "react";
import { HomeIcon, BriefcaseIcon, UserIcon } from "@heroicons/react/24/solid";
import { useSpring, animated, Spring } from "react-spring";
import cx from "classnames";

import Logo from "./components/Logo";

import BP from "./assets/png/BP.png";
import Kabloom from "./assets/png/Kabloom.png";
import SHRPrint from "./assets/png/SHRPrint.png";

import BHDLogo from "./assets/svg/BHDLogo.svg";
import logo from "./logo.svg";
import enterText from "./assets/svg/Enter.svg";

import "./App.css";

function App() {
  const [enter, setEnter] = useState(false);

  return (
    <div className="w-full h-full bg-zinc-900 flex flex-col gap-4">
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

      <div className="relative w-full h-full overflow-y-clip">
        <div className="w-full h-full flex flex-row overflow-x-scroll hide-scrollbar scroll-invisible gap-6 scroll-snap-x relative ">
          {!enter ? (
            <div className="min-w-full h-full px-6 scroll-align-start">
              <div
                className={cx(
                  "w-full h-full flex flex-col justify-center items-center rounded-xl bg-zinc-200 relative accent-edge"
                )}
              >
                <div
                  className="spotlight h-full w-full rotate-180 absolute opacity-90 top-0 left-1/2 -translate-x-1/2"
                  alt="spotlight"
                />
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
              <div className="min-w-full h-full px-6 scroll-align-start relative">
                <div className="w-full h-full flex flex-col justify-between bg-zinc-200 rounded-xl p-6 relative accent-edge">
                  <div
                    className="spotlight h-full w-full absolute rotate-180 opacity-90 top-0 left-1/2 -translate-x-1/2 z-0"
                    alt="spotlight"
                  />
                  <div className="flex flex-col h-min items-center gap-1 pt-4"></div>

                  {/* Focus */}
                  <div className="flex flex-col items-center gap-1 px-10 z-10">
                    <h1 className="text-center fugaz text-5xl md:text-7xl lg:text-8xl">
                      PURPOSEFUL
                      <br />
                      DESIGN SOLUTIONS
                    </h1>
                    <h3 className="text-base md:text-xl font-medium uppercase">
                      I use my experience in graphics and ui design to create
                      captivating experiences.
                    </h3>
                  </div>
                  {/* People I've Worked With */}
                  <div className="p-4 flex flex-col items-center gap-8 z-10">
                    <h4 className="font-bold">PEOPLE I'VE WORKED WITH</h4>
                    <div className="flex flex-row flex-wrap items-center justify-center gap-8">
                      <img src={BP} className="h-8" alt="Botpress" />
                      <img src={Kabloom} className="h-8" alt="Kabloom" />
                      <img
                        src={SHRPrint}
                        className="h-8"
                        alt="Sheridan Printing"
                      />
                      <img src={BHDLogo} className="h-8" alt="Bighorn Design" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="min-w-full h-full flex flex-row gap-6 px-6 scroll-align-start">
                <div className="w-full h-full bg-zinc-100 flex flex-col gap-4 rounded-xl p-4">
                  <div className="h-full w-full bg-red-400"></div>
                  <span className="inter font-bold">KABLOOM</span>
                </div>
                <div className="w-full h-full bg-zinc-100 flex flex-col gap-4 rounded-xl"></div>
                <div className="w-full h-full bg-zinc-100 flex flex-col gap-4 rounded-xl"></div>
              </div>

              <div className="min-w-full h-full flex flex-row gap-6 px-6 scroll-align-start">
                <div className="w-full h-full bg-black/50 flex flex-col gap-4 rounded-xl"></div>
              </div>
            </>
          )}
        </div>
      </div>

      <Spring opacity={enter ? 1 : 0}>
        {(styles) => (
          <animated.div
            style={styles}
            className="flex flex-row w-full justify-center items-center pb-4 gap-4"
          >
            <HomeIcon
              className="h-4 w-4 text-zinc-100"
              onClick={() => {
                console.log("home");
              }}
            />
            <BriefcaseIcon
              className="h-4 w-4 text-zinc-100"
              onClick={() => {
                console.log("work");
              }}
            />
            <UserIcon
              className="h-4 w-4 text-zinc-100"
              onClick={() => {
                console.log("about");
              }}
            />
          </animated.div>
        )}
      </Spring>
    </div>
  );
}

export default App;
