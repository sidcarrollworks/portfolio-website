import React, { useState } from "react";
import Lottie from "react-lottie";
import Modal from "react-modal";
import cx from "classnames";

import "./App.css";

import Logo from "./components/Logo";
import BP from "./assets/png/BP.png";
import Kabloom from "./assets/png/Kabloom.png";
import SHRPrint from "./assets/png/SHRPrint.png";
import BHDLogo from "./assets/BHDLogo.svg";

import animationData from "./lotties/laptopAnimation.json";

// import Spline from '@splinetool/react-spline';

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
  // const [modalIsOpen, setIsOpen] = React.useState(false);

  const [bpIsOpen, setBpIsOpen] = useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  // const customStyles = {
  //   content: {
  //     top: "0",
  //     left: "50%",
  //     right: "auto",
  //     bottom: "auto",
  //     marginRight: "-50%",
  //     transform: "translate(-50%, 0)",
  //     borderRadius: "0px",
  //     borderBottom: "none",
  //     borderTop: "none",
  //     width: "70%",
  //     height: "100%",
  //     backgroundColor: "#fff7ed",
  //     padding: "64px 86px",
  //     border: "1px solid black",
  //     boxShadow: "0 0 8px rgba(0,0,0,0.25)",
  //     overscrollBehavior: "contain",
  //   },
  //   overlay: {
  //     background: "none",
  //   },
  // };

  return (
    <div
      className={
        "App h-full w-full scroll-snap-y overflow-y-scroll bg-zinc-100"
      }
    >
      <div
        className={"h-[100vh] flex flex-col justify-between py-12 bg-zinc-100"}
      >
        {/* Landing */}
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
      <div className="flex flex-col w-full items-center mx-auto">
        {/* Work Title */}
        <h2 className="text-5xl font-bold fugaz my-20">« WORK »</h2>
        {/* Botpress */}
        <div className="w-full h-[100vh] min-h-[650px] flex flex-col gap-8 relative scroll-align-start separator-top before:bg-zinc-100 py-20">
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
          <div className="flex flex-col w-full h-full gap-4 items-center justify-start py-6">
            <div
              className={cx(
                "transition-all shadow-2xl min-w-[500px] flex flex-col p-8 text-start rounded-xl backdrop-blur-sm bg-white/70 border-2 border-white shadow-slate-500/30",
                bpIsOpen
                  ? "max-w-full min-w-[80%]"
                  : "max-w-xl max-h-min min-h-fit my-auto self-end mr-28 gap-8"
              )}
            >
              {bpIsOpen ? (
                <div className="w-full h-full relative">
                  <div className="flex flex-row items-end text-start gap-2 poppins">
                    <h2 className="font-extrabold text-3xl text-[#3276ea] ">
                      BOTPRESS
                    </h2>
                    <h3 className="text-3xl text-stone-900">STUDIO UI</h3>
                  </div>
                  <button
                    onClick={() => {
                      setBpIsOpen(false);
                    }}
                    className="transition self-end p-2 px-3 text-stone-500 border-[1px] hover:text-stone-700 hover:font-medium text-xs bg-white text-center rounded-xl absolute top-0 right-0 hover:bg-neutral-50"
                  >
                    X
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row items-end text-start gap-2 poppins">
                      <h2 className="font-extrabold text-3xl text-[#3276ea] ">
                        BOTPRESS
                      </h2>
                      <h3 className="text-3xl text-stone-900">STUDIO UI</h3>
                    </div>
                    <div className="w-full text-start">
                      Botpress is the leading open source conversational AI
                      platform. They provide an easy to use platform for
                      developers to create custom chatbots.
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
                    className="self-end bg-white px-4 py-2 rounded-lg border-[1px] text-sm hover:bg-neutral-50 transition font-medium"
                  >
                    view project
                  </button>
                </>
              )}
            </div>
            {bpIsOpen ? (
              <div className="w-4/5 h-full overflow-y-scroll z-50 rounded-xl flex flex-col gap-3 shadow-2xl shadow-slate-500/30 p-8 backdrop-blur-sm bg-white/80 text-start">
                <div className="flex flex-col gap-2 w-1/2">
                  <h3 className="font-bold text-lg uppercase">
                    Understanding the problem
                  </h3>
                  <p className="text-base">
                    The Botpress studio is a low-code conversational design tool
                    for building exceptional chatbots. However, it suffered many
                    design flaws that inhibited user from creating chatbots to
                    their full potential. The number one cause for this issue
                    was the number of modal layers. In order to create a new
                    content type while in the flow editor one would have to
                    travel 4-5 layers deep depending on the content type.
                  </p>
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                  <h3 className="font-bold text-lg uppercase">Main Issues</h3>
                  <p className="text-base">
                    1/ In order to complete a basic action requires multiple
                    modals <br /> 2/ Lack of clear and consistent design <br />{" "}
                    3/ Hard to tell what Nodes contain <br /> 4/ UI gets cramped
                    very quick
                  </p>
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                  <h3 className="font-bold text-lg uppercase">
                    Understanding the problem
                  </h3>
                  <p className="text-base">
                    The Botpress studio is a low-code conversational design tool
                    for building exceptional chatbots. However, it suffered many
                    design flaws that inhibited user from creating chatbots to
                    their full potential. The number one cause for this issue
                    was the number of modal layers. In order to create a new
                    content type while in the flow editor one would have to
                    travel 4-5 layers deep depending on the content type.
                  </p>
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                  <h3 className="font-bold text-lg uppercase">
                    Understanding the problem
                  </h3>
                  <p className="text-base">
                    The Botpress studio is a low-code conversational design tool
                    for building exceptional chatbots. However, it suffered many
                    design flaws that inhibited user from creating chatbots to
                    their full potential. The number one cause for this issue
                    was the number of modal layers. In order to create a new
                    content type while in the flow editor one would have to
                    travel 4-5 layers deep depending on the content type.
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Kabloom */}
        <div className="w-full h-[100vh] min-h-[650px] justify-center items-center flex flex-col md:flex-row-reverse gap-8 bg-indigo-600 separator after:bg-indigo-600 relative z-0">
          <div className="hidden md:block overflow-hidden bg-red-400 rounded-l-full absolute h-80 w-2/4 top-1/2 right-0 -z-10 wiggle-x"></div>
          <div className="hidden md:block overflow-hidden bg-red-300 rounded-l-full absolute h-80 w-1/4 top-1/4 right-0 wiggle-x-2"></div>
          <div className="flex flex-col items-center justify-center h-[650px] w-3/4 gap-4 z-10">
            {/* <img src={PC} alt="laptop" className="w-3/4" /> */}
            <Lottie options={defaultOptions} height={"75%"} width={"75%"} />
          </div>

          <div className="flex flex-col w-3/4 md:w-1/2 self-center max-w-xl ml-0 md:ml-30 lg:ml-40 text-start gap-12 rounded-xl backdrop-blur-sm bg-white/90 border-2 border-white shadow-2xl p-8 pt-10">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-end text-start gap-4">
                <h2 className="font-extrabold text-3xl text-indigo-500">
                  KABLOOM
                </h2>
                <h3 className="text-3xl ">BOOKING</h3>
              </div>
              <div className="w-full text-start ">
                Botpress is the leading open source conversational AI platform.
                They provide an easy to use platform for developers to dcreate
                custom chatbots.
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-lg uppercase">
                Understanding the problem
              </h3>
              <p>
                The Botpress studio is a low-code conversational design tool for
                building exceptional chatbots. However, it suffered many design
                flaws that inhibited user from...{" "}
              </p>
            </div>
            <button className="self-end bg-white/40 px-4 py-2 rounded-lg border-[1px] border-indigo-800/10 text-sm hover:bg-indigo-900/5 transition font-medium">
              view project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
