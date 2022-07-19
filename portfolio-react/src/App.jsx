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
import Space from "./assets/spaceMe.svg";
import Mountains from "./assets/Mountains.svg";
import BPLogo from "./assets/BPLOGO.svg";
import KabloomLogo from "./assets/KabloomLogo.svg";
import BHDSymbol from "./assets/BHDSymbol.svg";
import SPLogo from "./assets/SPLogo.svg";

import Carousel from "./components/Carousel";
import SidePanel from "./components/SidePanel/SidePanel";
import NavEl from "./components/NavEl";

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
  const [isGdOpen, setGdIsOpen] = useState(false);

  const pageRef = useRef(null);
  const homeRef = useRef(null);
  const bpRef = useRef(null);
  const kbRef = useRef(null);
  const shrRef = useRef(null);
  const aboutRef = useRef(null);

  const { height } = useWindowDimensions();

  const handleGdClose = () => {
    setGdIsOpen(false);
  };

  return (
    <div
      ref={pageRef}
      className={
        "App h-full w-[100vw] p-0 m-0 scroll-snap-y overflow-x-hidden bg-zinc-100 relative"
      }
    >
      {/* Nav */}
      <div className="flex flex-col uppercase gap-4 outline-1 outline-offset-2 outline-double outline-black w-min h-min justify-center items-center fixed -left-12 transition-all hover:-left-4 top-1/2 -translate-y-1/2 text-xs font-bold z-40 border-2 border-black nav-shadow bg-black text-white backdrop-blur-sm rounded-xl pr-2 py-4 pl-6 ">
        <NavEl
          icon={<Icon name="home" size={"medium"} />}
          onClick={() => {
            pageRef.current.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="hover:-rotate-12"
          msg="Home"
        />

        <NavEl
          icon={<Icon name="briefcase" size={"medium"} />}
          onClick={() => {
            pageRef.current.scrollTo({
              top:
                bpRef.current.offsetTop +
                (bpRef.current.clientHeight - height) / 2,
              behavior: "smooth",
            });
          }}
          className="hover:rotate-12"
          msg="Botpress"
        />

        <NavEl
          icon={<Icon name="folder" size={"medium"} />}
          onClick={() => {
            pageRef.current.scrollTo({
              top:
                kbRef.current.offsetTop +
                (kbRef.current.clientHeight - height) / 2,
              behavior: "smooth",
            });
          }}
          className="hover:-rotate-12"
          msg="Kabloom"
        />

        <NavEl
          icon={<Icon name="folder" size={"medium"} />}
          onClick={() => {
            pageRef.current.scrollTo({
              top:
                shrRef.current.offsetTop +
                (shrRef.current.clientHeight - height) / 2,
              behavior: "smooth",
            });
          }}
          className="hover:rotate-12"
          msg="Sheridan Printing"
        />

        <NavEl
          icon={<Icon name="person" size={"medium"} />}
          onClick={() => {
            pageRef.current.scrollTo({
              top:
                aboutRef.current.offsetTop +
                (aboutRef.current.clientHeight - height) / 2,
              behavior: "smooth",
            });
          }}
          className="hover:-rotate-12"
          msg="About"
        />
      </div>

      {/* Landing */}
      <div
        ref={homeRef}
        className={
          "h-[100vh] flex flex-col justify-between py-20 bg-white bg-gradient-to-b from-stone-100 to-white"
        }
      >
        <div className="flex flex-col items-center gap-1 pt-4">
          <Logo />
          <h4 className="fugaz text-xs">SID CARROLL WORKS</h4>
        </div>

        <div className="flex flex-col items-center gap-1 px-10">
          <h1 className="text-center fugaz text-5xl md:text-7xl lg:text-9xl">
            PURPOSEFUL
            <br />
            DESIGN SOLUTIONS
          </h1>
          <h3 className="text-base md:text-xl font-medium uppercase">
            I use my experience in graphics and ui design to create captivating
            experiences.
          </h3>
        </div>

        <div className="p-4 flex flex-col items-center gap-8 ">
          <h4 className="font-bold">PEOPLE I'VE WORKED WITH</h4>
          <div className="flex flex-row flex-wrap items-center justify-center gap-8">
            <img src={BP} className="h-8" alt="Botpress" />
            <img src={Kabloom} className="h-8" alt="Kabloom" />
            <img src={SHRPrint} className="h-8" alt="Sheridan Printing" />
            <img src={BHDLogo} className="h-8" alt="Bighorn Design" />
          </div>
        </div>
      </div>

      {/* Work */}
      <div className="flex flex-col w-full items-center mx-auto separator-bot bg-stone-50 before:bg-white">
        {/* Work Title */}
        <h2 className="text-5xl font-bold fugaz mt-40 mb-20">« WORK »</h2>
      </div>
      {/* Botpress */}
      <div
        ref={bpRef}
        className="w-full h-[120vh] min-h-[650px] flex flex-col gap-8 relative separator-top bg-stone-50 bg-gradient-to-b from-stone-50 to-stone-100 before:bg-stone-50 py-20"
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
          <img
            src={BPLogo}
            alt="Botpress Logo"
            className="absolute top-8 right-[10%] md:right-28 opacity-20"
          />
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
                  <div className="h-full w-full flex flex-col">
                    Botpress is the leading open source conversational AI
                    platform. They provide an easy to use platform for
                    developers to dcreate custom chatbots.
                  </div>
                  {/* Media */}
                  {/* <img src={BP} className="h-8" alt="Botpress" /> */}
                </div>
              </div>
              <div className="min-w-full h-full transition-all duration-500">
                {/* Content */}
                <div className="h-full min-w-full flex flex-col md:flex-row">
                  {/* Text */}
                  <div className="h-full w-full flex flex-col">
                    Users reported a poor overall user experience. This was in
                    part due to the time it takes to complete
                  </div>
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
                "transition-all shadow-2xl  flex flex-col text-start rounded-xl backdrop-blur-sm bg-white/70 border-2 border-white shadow-slate-500/30 max-w-xl max-h-min min-h-fit my-auto self-center md:self-end mx-10 md:mr-28 gap-8 p-8"
              )}
            >
              <div className="flex flex-col gap-3">
                <div className="flex flex-row flex-wrap items-end text-start gap-2 poppins">
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
        className="w-full h-[120vh] min-h-[650px] justify-center px-10 items-center flex flex-col md:flex-row-reverse md:gap-8 bg-indigo-600 separator-right bg-gradient-to-b from-indigo-600 to-indigo-700 after:bg-indigo-600 relative z-0"
      >
        <div className="absolute w-full h-full top-full -translate-y-1/2 right-0">
          <div className="relative h-1/2 w-full -translate-y-1/2">
            <div className="hidden md:block overflow-hidden shadow-xl bg-red-400 rounded-l-full absolute h-80 w-2/4 top-1/2 right-0 -z-10 wiggle-x"></div>
            <div className="hidden md:block overflow-hidden shadow-red-700/30 bg-red-300 rounded-l-full absolute h-80 w-1/4 top-1/4 right-0 wiggle-x-2"></div>
          </div>
        </div>
        {kbIsOpen ? null : (
          <div className="flex flex-col items-center justify-center h-fit w-full md:1/2 lg:p-20 z-10">
            {/* <img src={PC} alt="laptop" className="w-3/4" /> */}
            <Lottie
              className=" max-w-xl"
              options={defaultOptions}
              height={"100%"}
              width={"100%"}
            />
          </div>
        )}

        {/* Info Container */}
        <div className="flex flex-col w-full h-full items-center md:justify-center max-h-[100vh]">
          <img
            src={KabloomLogo}
            alt="Kabloom Logo"
            className="transition-all absolute top-28 right-[10%] md:right-28 opacity-20"
          />
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
            <div className="flex flex-col w-full max-w-xl text-start gap-12 rounded-xl backdrop-blur-sm bg-white/90 border-2 border-white shadow-2xl p-8 pt-10">
              <div className="flex flex-col  gap-2">
                <div className="flex flex-row flex-wrap items-end text-start gap-4">
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

      {/* Graphic Design */}
      <div
        ref={shrRef}
        className="w-full h-[120vh] min-h-[650px] justify-center items-center flex flex-col md:flex-row bg-emerald-500 separator-bot before:bg-indigo-700 relative z-10 overflow-hidden"
      >
        <div className="flex flex-col items-center justify-center w-5/6 px-8 pl-20 gap-4 z-10">
          <img className="w-full" src={Mountains} alt="Mountains" />
          {/* <Lottie options={defaultOptions} height={"75%"} width={"90%"} /> */}
        </div>

        {/* Info Container */}
        <div className="flex flex-col w-full h-full gap-4 items-center justify-center py-20 max-h-[100vh]">
          <div className="transition-all flex flex-row gap-2 absolute top-28 right-[10%] md:right-28 h-[20px] opacity-20">
            <img src={BHDSymbol} alt="Sheridan Printing" />
            <img src={SPLogo} alt="Sheridan Printing" />
          </div>
          <SidePanel isOpen={isGdOpen} handleClose={handleGdClose}>
            <p>HIHIHIHIHI</p>
            <p>OMGOMGOMG</p>
          </SidePanel>

          <div className="flex flex-col w-3/4 self-center max-w-xl text-start gap-12 rounded-xl p-8 pt-10">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-end text-start gap-2">
                <h2 className="font-extrabold text-3xl ">GRAPHICS</h2>
                <h3 className="text-3xl ">& PRINTING</h3>
              </div>
              <div className="w-full text-start ">
                <p>
                  My design started in the summer of 2017 at Bighorn Design
                  Studio in Sheridan Wyoming. Here I worked with customers on
                  anything from logos to t-shirts to flyers. I learned that my
                  passion for design came from working with people to bring
                  their ideas to life.
                </p>
                <br />
                <p>
                  A couple years later I worked for a small print shop owned by
                  BHD. I was the in house graphic designer as well as
                  typesetter. I set up all print jobs that came through the shop
                  and oversaw the printing as well. We produced and sold a
                  number of in house stock products, including posters,
                  magazines, newsletters, and more...
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setGdIsOpen(true);
              }}
              className="self-end active:shadow-inner bg-zinc-900 px-4 py-2 rounded-lg text-white border-[1px] border-black text-sm hover:bg-zinc-800 transition-all font-medium"
            >
              view work
            </button>
          </div>
        </div>
      </div>

      {/* About */}
      <div
        ref={aboutRef}
        className="flex flex-col w-full h-[120vh] items-center justify-center mx-auto bg-zinc-900 bg-gradient-to-b from-zinc-900 to-[#101012] relative separator-right after:bg-zinc-900"
      >
        <div className="w-full max-w-5xl min-h-[100vh] flex flex-col gap-16 justify-center relative py-20 z-10">
          <div className="flex flex-row gap-2 bg-[#0A0A0B] h-min w-full rounded-2xl border-2 border-black p-10 z-20">
            <div className="flex flex-col w-3/5 h-full gap-8 text-zinc-300 text-start">
              <div className="text-justify h-min flex flex-col">
                <h3 className="font-bold text-2xl fugaz mb-4">WHO AM I?</h3>
                <p>
                  I’m Sid Carroll, a self taught designer who combines my
                  previous experience in graphic design, UX/UI, and front-end
                  web development to turn ideas into products.
                </p>
                <br />
                <p>
                  Working print shop gave me the opportunity to work with a lot
                  of clients. I learned how to be empathic with my clients needs
                  as well as how to ask the right questions. The importance of
                  somehting idsdfas
                </p>
              </div>

              <div className="text-justify h-min flex flex-col">
                <p>
                  In my free time I spend my time creating or playing music as
                  well as the occasional Cuphead binge. Offline I enjoy hiking
                  and spending time with my dog.
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full h-full gap-2">
              <div className="h-full relative translate-x-32 scale-110">
                <img
                  className="absolute z-10 top-1/2 -translate-y-1/2"
                  src={Space}
                  alt="SPAAACCEEEE"
                />
                <svg
                  width="533"
                  height="539"
                  viewBox="0 0 533 539"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-1/2 -translate-y-1/2 drop-shadow-lg shadow-white"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="shadow-xl shadow-neutral-200"
                    d="M479.115 415.496C523.639 318.567 569.499 218.73 487.233 99.9025C441.378 33.6672 393.952 30.62 337.166 26.9713C306.604 25.0077 273.332 22.8698 236.134 10.6142C97.6002 -35.0288 13.599 87.9811 1.33954 220.833C-7.05772 311.831 29.4064 343.292 72.4003 380.388C94.4252 399.391 118.164 419.872 138.463 450.594C218.668 571.981 404.634 566.856 466.616 442.96C470.697 433.822 474.9 424.672 479.115 415.496Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Personal Work */}
      <div className="flex flex-col w-full h-[120vh] items-center justify-center mx-auto bg-black separator-bot before:bg-[#101012] relative ">
        <div className="w-full max-w-5xl min-h-[100vh] flex flex-col gap-16 justify-center items-center relative py-20 z-10">
          <div className="flex flex-row gap-2 bg-zinc-900 h-full w-full rounded-2xl border-2 border-black p-10 z-20"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
