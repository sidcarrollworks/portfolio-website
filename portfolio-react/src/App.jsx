import React, { useState, useRef } from "react";
import Lottie from "react-lottie";
import Modal from "react-modal";
import cx from "classnames";
import Icon from "react-eva-icons";

import Logo from "./components/Logo";
import BP from "./assets/png/BP.png";
import Kabloom from "./assets/png/Kabloom.png";
import SHRPrint from "./assets/png/SHRPrint.png";
import BHDLogo from "./assets/BHDLogo.svg";
import Carousel from "./components/Carousel";

import { useWindowDimensions } from "./lib/calcWInDim";

import animationData from "./lotties/laptopAnimation.json";

import "./App.css";

Modal.setAppElement("#root");

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [bpIsOpen, setBpIsOpen] = useState(false);
  const [kbIsOpen, setKbIsOpen] = useState(false);

  const pageRef = useRef(null);
  const bpRef = useRef(null);
  const kbRef = useRef(null);
  const shrRef = useRef(null);
  const aboutRef = useRef(null);

  const { height } = useWindowDimensions();

  return (
    <div
      ref={pageRef}
      className={
        "App h-full w-[100vw] p-0 m-0 scroll-snap-y overflow-x-hidden bg-zinc-100 relative"
      }
    >
      {/* Nav */}
      <div className="flex flex-col uppercase gap-4 outline-1 outline-offset-2 outline-double outline-black w-min h-min justify-center items-center fixed -left-12 transition-all hover:-left-4 top-1/2 -translate-y-1/2 text-xs font-bold z-40 border-2 border-black nav-shadow bg-black text-white backdrop-blur-sm rounded-xl pr-2 py-4 pl-6">
        <span
          className="cursor-pointer select-none hover:text-neutral-100 transition p-1"
          onClick={() => {
            pageRef.current.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <Icon name="home" size={"medium"} />
        </span>
        <span
          className="cursor-pointer select-none hover:text-neutral-100 transition p-1"
          onClick={() => {
            pageRef.current.scrollTo({
              top:
                bpRef.current.offsetTop +
                (bpRef.current.clientHeight - height) / 2,
              behavior: "smooth",
            });
          }}
        >
          <Icon name="briefcase" size={"medium"} />
        </span>
        <span
          className="cursor-pointer select-none hover:text-neutral-100 transition p-1"
          onClick={() => {
            pageRef.current.scrollTo({
              top:
                kbRef.current.offsetTop +
                (kbRef.current.clientHeight - height) / 2,
              behavior: "smooth",
            });
          }}
        >
          <Icon name="folder" size={"medium"} />
        </span>
        <span
          className="whitespace-nowrap cursor-pointer select-none hover:text-neutral-100 transition p-1"
          onClick={() => {
            pageRef.current.scrollTo({
              top:
                shrRef.current.offsetTop +
                (shrRef.current.clientHeight - height) / 2,
              behavior: "smooth",
            });
          }}
        >
          <Icon name="folder" size={"medium"} />
        </span>
        <span
          className="whitespace-nowrap cursor-pointer select-none hover:text-neutral-100 transition p-1"
          onClick={() => {
            pageRef.current.scrollTo({
              top:
                aboutRef.current.offsetTop +
                (aboutRef.current.clientHeight - height) / 2,
              behavior: "smooth",
            });
          }}
        >
          <Icon name="person" size={"medium"} />
        </span>
      </div>
      {/* Landing */}
      <div className={"h-[100vh] flex flex-col justify-between py-12 bg-white"}>
        <div className="flex flex-col items-center gap-1 pt-4">
          <Logo />
          <h4 className="fugaz text-xs">SID CARROLL WORKS</h4>
        </div>

        <div className="flex flex-col items-center gap-1">
          <h1 className="text-center fugaz text-8xl">
            PURPOSEFUL
            <br />
            DESIGN SOLUTIONS
          </h1>
          <h3 className="text-xl font-medium uppercase">
            I use my experience in graphics and ui design to create captivating
            experiences.
          </h3>
        </div>

        <div className="p-4 flex flex-col items-center gap-8 ">
          <h4 className="font-bold">PEOPLE I'VE WORKED WITH</h4>
          <div className="flex flex-row gap-8">
            <img src={BP} className="h-8" alt="Botpress" />
            <img src={Kabloom} className="h-8" alt="Kabloom" />
            <img src={SHRPrint} className="h-8" alt="Sheridan Printing" />
            <img src={BHDLogo} className="h-8" alt="Bighorn Design" />
          </div>
        </div>
      </div>

      {/* Work */}
      <div className="flex flex-col w-full items-center mx-auto separator-bot before:bg-white">
        {/* Work Title */}
        <h2 className="text-5xl font-bold fugaz my-40">« WORK »</h2>
      </div>
      {/* Botpress */}
      <div
        ref={bpRef}
        className="w-full h-[120vh] min-h-[650px] flex flex-col gap-8 relative separator-top before:bg-zinc-100 py-20"
      >
        {/* Graphic */}
        <div className="flex flex-col w-full gap-4 absolute top-0 left-0 h-full">
          <iframe
            title="Studio UI"
            src="https://my.spline.design/node-2043772254239c2ab25cae4855ce86e6/"
            frameBorder="0"
            width="100%"
            height="100%"
          ></iframe>
        </div>
        {/* Info Container */}
        <div className="flex flex-col w-full h-full gap-4 items-center justify-center py-14 ">
          {bpIsOpen ? (
            <Carousel
              handleClose={() => setBpIsOpen(false)}
              company="Botpress"
              project="Studio UI"
            >
              <div
                className="min-w-full h-full transition-all duration-500"
                label="SECTION 1"
              >
                {/* Content */}
                <div className="h-full min-w-full flex flex-col md:flex-row">
                  {/* Text */}
                  <div className="h-full w-full flex flex-col">HELLOOOOOO</div>
                  {/* Media */}
                  {/* <img src={BP} className="h-8" alt="Botpress" /> */}
                </div>
              </div>
              <div className="min-w-full h-full transition-all duration-500">
                {/* Content */}
                <div className="h-full min-w-full flex flex-col md:flex-row">
                  {/* Text */}
                  <div className="h-full w-full flex flex-col">OMGOMGOMG</div>
                  {/* Media */}
                  <img src={BP} className="h-8" alt="Botpress" />
                </div>
              </div>
              <div className="min-w-full h-full transition-all duration-500">
                {/* Content */}
                <div className="h-full min-w-full flex flex-col md:flex-row">
                  {/* Text */}
                  <div className="h-full w-full flex flex-col">DLFJLSDJF</div>
                  {/* Media */}
                  <img src={BP} className="h-8" alt="Botpress" />
                </div>
              </div>
            </Carousel>
          ) : (
            <div
              className={cx(
                "transition-all shadow-2xl min-w-[500px] flex flex-col text-start rounded-xl backdrop-blur-sm bg-white/70 border-2 border-white shadow-slate-500/30 max-w-xl max-h-min min-h-fit my-auto self-end mx-auto md:mr-28 gap-8 p-8"
              )}
            >
              <div className="flex flex-col gap-3">
                <div className="flex flex-row items-end text-start gap-2 poppins">
                  <h2 className="font-extrabold text-3xl text-[#3276ea] ">
                    BOTPRESS
                  </h2>
                  <h3 className="text-3xl text-stone-900">STUDIO UI</h3>
                </div>
                <div className="w-full text-start">
                  Botpress is the leading open source conversational AI
                  platform. They provide an easy to use platform for developers
                  to create custom chatbots.
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-lg uppercase">
                  Understanding the problem
                </h3>
                <p className="text-base">
                  Users reported a poor overall user experience. This was in
                  part due to the time it takes to complete
                </p>
              </div>
              <button
                onClick={() => {
                  setBpIsOpen(true);
                }}
                className="self-end active:shadow-inner bg-white px-4 py-2 rounded-lg border-[1px] text-sm hover:bg-neutral-50 transition-all font-medium"
              >
                view project
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Kabloom */}
      <div
        ref={kbRef}
        className="w-full h-[120vh] min-h-[650px] justify-center px-6 items-center flex flex-col md:flex-row-reverse gap-8 bg-indigo-600 separator-right after:bg-indigo-600 relative z-0"
      >
        <div className="hidden md:block overflow-hidden bg-red-400 rounded-l-full absolute h-80 w-2/4 top-1/2 right-0 -z-10 wiggle-x"></div>
        <div className="hidden md:block overflow-hidden bg-red-300 rounded-l-full absolute h-80 w-1/4 top-1/4 right-0 wiggle-x-2"></div>
        <div className="flex flex-col items-center justify-center h-[650px] w-3/4 gap-4 z-10">
          {/* <img src={PC} alt="laptop" className="w-3/4" /> */}
          <Lottie options={defaultOptions} height={"75%"} width={"90%"} />
        </div>

        {/* Info Container */}
        <div className="flex flex-col w-full h-full gap-4 items-center justify-center py-20 max-h-[100vh]">
          {kbIsOpen ? (
            <Carousel
              handleClose={() => setKbIsOpen(false)}
              company="Kabloom"
              project="Booking"
            >
              <div
                className="min-w-full h-full transition-all duration-500"
                label="SECTION 1"
              >
                {/* Content */}
                <div className="h-full min-w-full flex flex-col md:flex-row">
                  {/* Text */}
                  <div className="h-full w-full flex flex-col">HELLOOOOOO</div>
                  {/* Media */}
                  {/* <img src={BP} className="h-8" alt="Botpress" /> */}
                </div>
              </div>
              <div
                className="min-w-full h-full transition-all duration-500"
                label="SECTION 2"
              >
                {/* Content */}
                <div className="h-full min-w-full flex flex-col md:flex-row">
                  {/* Text */}
                  <div className="h-full w-full flex flex-col">OMGOMGOMG</div>
                  {/* Media */}
                  <img src={BP} className="h-8" alt="Botpress" />
                </div>
              </div>
              <div
                className="min-w-full h-full transition-all duration-500"
                label="SECTION 3"
              >
                {/* Content */}
                <div className="h-full min-w-full flex flex-col md:flex-row">
                  {/* Text */}
                  <div className="h-full w-full flex flex-col">DLFJLSDJF</div>
                  {/* Media */}
                  <img src={BP} className="h-8" alt="Botpress" />
                </div>
              </div>
            </Carousel>
          ) : (
            <div className="flex flex-col w-3/4 self-center max-w-xl text-start gap-12 rounded-xl backdrop-blur-sm bg-white/90 border-2 border-white shadow-2xl p-8 pt-10">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-end text-start gap-4">
                  <h2 className="font-extrabold text-3xl text-indigo-500">
                    KABLOOM
                  </h2>
                  <h3 className="text-3xl ">BOOKING</h3>
                </div>
                <div className="w-full text-start ">
                  Botpress is the leading open source conversational AI
                  platform. They provide an easy to use platform for developers
                  to dcreate custom chatbots.
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-lg uppercase">
                  Understanding the problem
                </h3>
                <p>
                  The Botpress studio is a low-code conversational design tool
                  for building exceptional chatbots. However, it suffered many
                  design flaws that inhibited user from...{" "}
                </p>
              </div>
              <button
                onClick={() => {
                  setKbIsOpen(true);
                }}
                className="self-end active:shadow-inner bg-white/40 px-4 py-2 rounded-lg border-[1px] border-indigo-800/10 text-sm hover:bg-indigo-900/5 transition-all font-medium"
              >
                view project
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Sheridan Printing */}
      <div
        ref={shrRef}
        className="w-full h-[120vh] min-h-[650px] justify-center items-center flex flex-col md:flex-row-reverse gap-8 bg-emerald-400 separator-bot before:bg-indigo-600 relative z-10"
      >
        LOL
      </div>

      {/* About */}
      <div
        ref={aboutRef}
        className="w-full h-[120vh] min-h-[650px] justify-center items-center flex flex-col md:flex-row-reverse gap-8 bg-zinc-900 relative z-10"
      >
        About
      </div>
    </div>
  );
}

export default App;
