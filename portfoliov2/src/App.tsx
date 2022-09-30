import React, { useState, useRef, useEffect, useMemo } from "react";
import { ClipboardIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { animated, useSpring, useTransition } from "@react-spring/web";
import Lottie from "lottie-react";

import cx from "classnames";

import EnterLogo from "./components/EnterLogo";
import Card from "./components/Card";
import BotpressBreakdown from "./pages/BotpressBreakdown";
import SheridanPrinting from "./pages/SheridanPrinting";
import KabloomBreakdown from "./pages/KabloomBreakdown";
import Mountains from "./components/Mountains";
import Nodes from "./components/Nodes";
import Character from "./components/Character";
import Balloons from "./components/Balloons";

import BP from "./assets/png/BP.png";
import SHRPrint from "./assets/png/SHRPrint.png";
import grid from "./assets/png/grid2.png";
import layeredGrid from "./assets/png/gridLayered.png";
import luna from "./assets/jpg/luna.jpg";

import BHDLogo from "./assets/svg/BHDLogo.svg";
import logo from "./assets/svg/Logo.svg";
import Title from "./components/Title";
import Rect1 from "./components/Rect1";

import kbLogo from "./assets/svg/kbLogo.svg";

import laptopAnimation from "./assets/lottie/laptopAnimation.json";

function useIsInViewport(ref: any) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

function App() {
  const Card1 = useRef<HTMLDivElement>(null);
  const Card2 = useRef<HTMLDivElement>(null);
  const Card3 = useRef<HTMLDivElement>(null);
  const bpRef = useRef<HTMLDivElement>(null);
  const kbRef = useRef<HTMLDivElement>(null);

  const bpInView = useIsInViewport(bpRef);
  const kbInView = useIsInViewport(kbRef);
  const email = "sidcarrollworks@gmail.com";

  const [lunaHover, setLunaHover] = useState(false);

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setMouse({ top: clientY, left: clientX });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [mouseProps, setMouse] = useSpring(() => ({
    top: 0,
    left: 0,
    config: { mass: 1, tension: 800, friction: 40 },
  }));

  const lunaProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: lunaHover ? 1 : 0 },
    config: { mass: 5, tension: 800, friction: 90 },
  });

  return (
    <div className="w-full h-full bg-gray-100 overflow-hidden cursor-none relative">
      {/* mouse */}
      <animated.div
        style={{
          top: mouseProps.top.to((top) => top),
          left: mouseProps.left.to((left) => left),
        }}
        className="absolute pointer-events-none z-20"
      >
        <svg
          width="12"
          height="14"
          viewBox="0 0 12 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="scale-150 svg-shadow-blue-small"
        >
          <path
            d="M1.84334 11.8274L0.947292 2.02851C0.869604 1.17895 1.82302 0.628493 2.51993 1.12056L10.5579 6.79598C11.2735 7.3012 11.0398 8.41697 10.1816 8.59257L6.57655 9.3303C6.36457 9.37368 6.17238 9.48464 6.02883 9.64653L3.58739 12.3998C3.00625 13.0551 1.92311 12.6996 1.84334 11.8274Z"
            fill="#fff"
            stroke="#312E81"
            strokeLinecap="square"
          />
        </svg>
      </animated.div>
      <div className="h-full w-full flex flex-col relative gap-4 overflow-y-auto overflow-x-hidden cursor-none">
        <div className="w-full h-screen flex flex-col justify-between pt-20 pb-10 relative z-0 flex-shrink-0">
          <animated.div className="absolute bg-indigo-500 h-[512px] w-[512px] circle-blurred -z-10 left-[35%] top-[20%] -translate-x-1/2" />
          <animated.div className="absolute bg-blue-500 h-[512px] w-[512px] circle-blurred -z-10 left-[70%] -translate-x-1/2" />
          <animated.div className="absolute bg-blue-300 h-[512px] w-[512px] circle-blurred -z-10 left-[40%] top-3/4 -translate-x-1/2" />
          {/* top bar */}
          <div className="w-full flex justify-between px-24">
            <img src={logo} alt="logo" />
            <div
              className="flex gap-1 items-center group h-min"
              onClick={(event) => {
                navigator.clipboard.writeText(email);
              }}
            >
              <ClipboardIcon
                className={cx(
                  "h-4 w-4 transition opacity-0 group-hover:text-indigo-600 group-hover:opacity-100"
                )}
              />
              <span className="text-indigo-900 text-sm font-quest select-none transition group-hover:text-indigo-600">
                sidcarrollworks@gmail.com
              </span>
            </div>
          </div>

          {/* main content */}
          <div className="w-full flex flex-col justify-center px-24 select-none gap-2 relative">
            <span className="text-zinc-900 ">I CREATE</span>
            <Title className="svg-shadow-blue" />
            <span className="uppercase text-zinc-900 mt-1">
              combining Front-end dev + Design experience
            </span>
            <div className="flex flex-row text-xs gap-6 mt-8 ">
              <button className="cursor-none transition duration-200 px-3 py-2 active:translate-y-0.5 bg-indigo-600/90 hover:bg-[#2C21E2]/80 active:bg-indigo-600 border-[1px] border-indigo-400 active:shadow-blue-active rounded-lg text-white font-medium hover:shadow-medium-blue">
                view work
              </button>
              <button className="cursor-none px-3 py-2 transition duration-200 active:translate-y-0.5 bg-white/80 hover:shadow-medium-gray hover:text-indigo-500 hover:bg-zinc-50/80 active:shadow-gray-active active:bg-[#F0F0FF]/80 border-[1px] border-white rounded-lg text-indigo-600">
                about me
              </button>
            </div>
            <Rect1 className="absolute -right-32" />
            <img
              src={layeredGrid}
              alt="grid"
              className="absolute top-1/2 -translate-y-1/2 right-10 mix-blend-multiply h-[350px]"
            />
            <div className="absolute flex flex-row gap-6 top-1/2 -translate-y-1/2 -right-[9%]">
              <div className="h-[425px] w-[237px] bg-gray-50  overflow-hidden rounded-xl flex flex-col border-white border-[1px]">
                <div className="flex flex-col justify-between px-3 pt-6 pb-4 gap-2">
                  <div className="flex flex-row justify-between w-full">
                    <span className="rounded-md bg-gray-400 w-12 h-4" />
                    <span className="rounded-full h-4 w-4 bg-gray-200" />
                  </div>
                  <div className="flex flex-row gap-2 w-full items-start overflow-visible">
                    <span className="rounded-md bg-gray-200 w-[95%] h-10 flex-shrink-0" />
                    <span className="rounded-md bg-gray-200 w-[95%] h-10 flex-shrink-0" />
                    {/* <span className="rounded-md bg-gray-200 w-[95%] h-10" /> */}
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <span className="rounded-[4px] bg-gray-300 w-8 h-3" />
                    <ChevronRightIcon className="h-3 w-3 text-gray-300" />
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <span className="rounded-md bg-gray-200 w-full h-10" />
                    <span className="rounded-md bg-gray-200 w-full h-10" />
                    <span className="rounded-md bg-gray-200 w-full h-10" />
                    <span className="rounded-md bg-gray-200 w-full h-10" />
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <span className="rounded-[4px] bg-gray-300 w-8 h-3" />
                    <ChevronRightIcon className="h-3 w-3 text-gray-300" />
                  </div>
                  <div className="flex flex-row w-full gap-1">
                    <span className="rounded-md bg-gray-200 w-9 h-9 flex-shrink-0" />
                    <span className="rounded-md bg-gray-200 w-9 h-9 flex-shrink-0" />
                    <span className="rounded-md bg-gray-200 w-9 h-9 flex-shrink-0" />
                    <span className="rounded-md bg-gray-200 w-9 h-9 flex-shrink-0" />
                    <span className="rounded-md bg-gray-200 w-9 h-9 flex-shrink-0" />
                    <span className="rounded-md bg-gray-200 w-9 h-9 flex-shrink-0" />
                    <span className="rounded-md bg-gray-200 w-9 h-9 flex-shrink-0" />
                  </div>
                </div>
                <div className="w-full h-full bg-gray-100 gap-2 flex justify-center items-center">
                  <span className="h-4 w-4 rounded-sm bg-white"></span>
                  <span className="h-4 w-4 rounded-sm bg-white"></span>
                  <span className="h-4 w-4 rounded-sm bg-white"></span>
                </div>
              </div>

              <div className="h-[425px] w-[237px] bg-gray-50  overflow-hidden rounded-xl flex flex-col border-white border-[1px]">
                <div className="flex flex-col justify-between px-3 pt-6 pb-4 gap-2">
                  <div className="flex flex-row justify-between w-full">
                    <span className="rounded-md bg-gray-400 w-12 h-4" />
                    <span className="rounded-full h-4 w-4 bg-gray-200" />
                  </div>
                  <div className="flex flex-row gap-2 w-full items-start overflow-visible">
                    <span className="rounded-md bg-gray-200 w-[95%] h-10 flex-shrink-0" />
                    <span className="rounded-md bg-gray-200 w-[95%] h-10 flex-shrink-0" />
                    {/* <span className="rounded-md bg-gray-200 w-[95%] h-10" /> */}
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <span className="rounded-[4px] bg-gray-300 w-8 h-3" />
                    <ChevronRightIcon className="h-3 w-3 text-gray-300" />
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <span className="rounded-md bg-gray-200 w-full h-10" />
                    <span className="rounded-md bg-gray-200 w-full h-10" />
                    <span className="rounded-md bg-gray-200 w-full h-10" />
                    <span className="rounded-md bg-gray-200 w-full h-10" />
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <span className="rounded-[4px] bg-gray-300 w-8 h-3" />
                    <ChevronRightIcon className="h-3 w-3 text-gray-300" />
                  </div>
                  <div className="flex flex-row w-full gap-1">
                    <span className="rounded-md bg-gray-200 w-9 h-9 flex-shrink-0" />
                    <span className="rounded-md bg-gray-200 w-9 h-9 flex-shrink-0" />
                    <span className="rounded-md bg-gray-200 w-9 h-9 flex-shrink-0" />
                    <span className="rounded-md bg-gray-200 w-9 h-9 flex-shrink-0" />
                    <span className="rounded-md bg-gray-200 w-9 h-9 flex-shrink-0" />
                    <span className="rounded-md bg-gray-200 w-9 h-9 flex-shrink-0" />
                    <span className="rounded-md bg-gray-200 w-9 h-9 flex-shrink-0" />
                  </div>
                </div>
                <div className="w-full h-full bg-gray-100 gap-2 flex justify-center items-center">
                  <span className="h-4 w-4 rounded-sm bg-white"></span>
                  <span className="h-4 w-4 rounded-sm bg-white"></span>
                  <span className="h-4 w-4 rounded-sm bg-white"></span>
                </div>
              </div>

              <div className="h-[425px] w-[237px] bg-gray-50  overflow-hidden rounded-xl flex flex-col border-white border-[1px]">
                <div className="flex flex-col justify-between px-3 pt-6 pb-4 gap-2">
                  <div className="flex flex-row justify-between w-full">
                    <span className="rounded-md bg-gray-400 w-12 h-4" />
                    <span className="rounded-full h-4 w-4 bg-gray-200" />
                  </div>
                  <div className="flex flex-row gap-2 w-full items-start overflow-visible">
                    <span className="rounded-md bg-gray-200 w-[95%] h-10 flex-shrink-0" />
                    <span className="rounded-md bg-gray-200 w-[95%] h-10 flex-shrink-0" />
                    {/* <span className="rounded-md bg-gray-200 w-[95%] h-10" /> */}
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <span className="rounded-[4px] bg-gray-300 w-8 h-3" />
                    <ChevronRightIcon className="h-3 w-3 text-gray-300" />
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <span className="rounded-md bg-gray-200 w-full h-10" />
                    <span className="rounded-md bg-gray-200 w-full h-10" />
                    <span className="rounded-md bg-gray-200 w-full h-10" />
                    <span className="rounded-md bg-gray-200 w-full h-10" />
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <span className="rounded-[4px] bg-gray-300 w-8 h-3" />
                    <ChevronRightIcon className="h-3 w-3 text-gray-300" />
                  </div>
                  <div className="flex flex-row w-full gap-1">
                    <span className="rounded-md bg-gray-200 w-9 h-9 flex-shrink-0" />
                    <span className="rounded-md bg-gray-200 w-9 h-9 flex-shrink-0" />
                    <span className="rounded-md bg-gray-200 w-9 h-9 flex-shrink-0" />
                    <span className="rounded-md bg-gray-200 w-9 h-9 flex-shrink-0" />
                    <span className="rounded-md bg-gray-200 w-9 h-9 flex-shrink-0" />
                    <span className="rounded-md bg-gray-200 w-9 h-9 flex-shrink-0" />
                    <span className="rounded-md bg-gray-200 w-9 h-9 flex-shrink-0" />
                  </div>
                </div>
                <div className="w-full h-full bg-gray-100 gap-2 flex justify-center items-center">
                  <span className="h-4 w-4 rounded-sm bg-white"></span>
                  <span className="h-4 w-4 rounded-sm bg-white"></span>
                  <span className="h-4 w-4 rounded-sm bg-white"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-0 md:p-4 flex flex-col items-center gap-4 z-10">
            <h4 className="tracking-wide text-slate-400 text-xs font-open">
              PEOPLE I'VE WORKED WITH
            </h4>
            <div className="flex flex-row flex-wrap items-center justify-center gap-7 cursor-none border-white px-3 py-2 rounded-lg">
              <img src={BP} className=" h-4 md:h-5" alt="Botpress" />
              <img src={kbLogo} className="h-4 md:h-5" alt="Kabloom" />
              <img
                src={SHRPrint}
                className="h-4 md:h-5 "
                alt="Sheridan Printing"
              />
              <img src={BHDLogo} className="h-4 md:h-5" alt="Bighorn Design" />
            </div>
          </div>
        </div>
        {/* Recent Work */}
        <div className=" w-full flex flex-col px-24 flex-shrink-0">
          <div className="flex flex-col w-min h-min py-3">
            <span className="whitespace-nowrap">Recent Work</span>
            <span className="w-full h-[1px] bg-indigo-600" />
          </div>

          <div
            ref={bpRef}
            className="w-full flex h-[90vh] flex-row items-center justify-center py-4 px-36"
          >
            <div className="flex flex-col w-full gap-2">
              <h3 className="font-medium text-3xl">
                Redesigned conversational <br /> design studio
              </h3>
              <span className="w-36 h-[1px] bg-indigo-600" />
              <div className="flex flex-col gap-0">
                <span className="uppercase font-semibold text-base">
                  Botpress
                </span>
                <span className="uppercase text-xs">2022</span>
              </div>
              <span className="text-indigo-700 mt-4 hover:text-indigo-500 transition">
                view
              </span>
            </div>
            <div className="flex flex-col w-full h-full items-center justify-center">
              <div className=" w-full relative">
                <Nodes hovered={bpInView} />
              </div>
            </div>
          </div>

          <div
            ref={kbRef}
            className="w-full flex h-[90vh] flex-row-reverse items-center justify-center py-4 px-36"
          >
            <div className="flex flex-col w-full gap-2">
              <h3 className="font-medium text-3xl">
                Designed, architected, and built <br /> event booking system
              </h3>
              <span className="w-36 h-[1px] bg-indigo-600" />
              <div className="flex flex-col gap-0">
                <span className="uppercase font-semibold text-base">
                  Kabloom
                </span>
                <span className="uppercase text-xs">2021-2022</span>
              </div>
              <span className="text-indigo-700 mt-4 hover:text-indigo-500 transition">
                view
              </span>
            </div>
            <div className="flex flex-col w-full h-full items-center justify-center">
              <div className=" w-full relative">
                <Lottie
                  animationData={laptopAnimation}
                  style={{
                    maxWidth: "440px",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="w-full flex h-[90vh] flex-row items-center justify-center py-4 px-36">
            <div className="flex flex-col w-full gap-2">
              <h3 className="font-medium text-3xl">
                Design logo and branding for <br /> wellness retreat
              </h3>
              <span className="w-36 h-[1px] bg-indigo-600" />
              <div className="flex flex-col gap-0">
                <span className="uppercase font-semibold text-base">
                  Kabloom
                </span>
                <span className="uppercase text-xs">2022</span>
              </div>
              <span className="text-indigo-700 mt-4 hover:text-indigo-500 transition">
                view
              </span>
            </div>
            <div className="flex flex-col w-full h-full items-center justify-center">
              <div className=" w-full relative">
                <Lottie
                  animationData={laptopAnimation}
                  style={{
                    maxWidth: "440px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-row px-24 py-8">
          <div className="h-full w-full flex flex-col gap-8 justify-center items-center">
            <div className="flex flex-col gap-4 items-start pr-4">
              <h2 className="text-2xl font-semibold text-zinc-900 ">
                BUILT FOR DESIGN
              </h2>
              <p className="max-w-md text-zinc-900">
                I combine my graphic design, ui, and front-end development
                skills to create clean, functional, and engaging experiences.
                <br />
                <br />
                My time in the print shop taught me how to interact with clients
                to efficiently pull out key information in order to create
                successful designs.
                <br />
                <br />
                In my free time I spend my time creating or playing music as
                well as the occasional game of counter strike. Offline I enjoy
                spending time with my dog,{" "}
                <span className="relative max-w-min overflow-visible">
                  <span
                    onMouseOver={() => setLunaHover(true)}
                    onMouseLeave={() => setLunaHover(false)}
                    className="text-amber-500 hover:text-amber-400 transition"
                  >
                    Luna 🐶
                  </span>

                  <animated.span
                    style={lunaProps}
                    className="absolute top-0 -right-4 translate-x-full -translate-y-1/2 w-80 rounded-xl overflow-hidden shadow-2xl z-10"
                  >
                    <img src={luna} alt="Luna" />
                  </animated.span>
                </span>
                .
              </p>
              <div className="flex flex-col gap-2 w-full text-zinc-900 pt-4">
                <a
                  className="transition w-min hover:text-blue-500 cursor-none"
                  href="https://drive.google.com/file/d/1Kl3zjGm-rdyZtJK9np8-KzVE4ZYKT6ck/view?usp=sharing"
                  target="_blank"
                  download
                  rel="noreferrer"
                >
                  resume
                </a>
                <a
                  href="https://www.linkedin.com/in/sidcarrollworks/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition w-min hover:text-blue-500 cursor-none"
                >
                  linkedin
                </a>
              </div>
            </div>
          </div>
          <div className="w-full">asd</div>
        </div>
      </div>
    </div>
  );
}

export default App;
