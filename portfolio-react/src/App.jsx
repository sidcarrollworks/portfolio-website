import React from "react";
// import ReactDOM from "react-dom";
import Modal from "react-modal";
// import cx from "classnames";
import "./App.css";

import Logo from "./components/Logo";
import BP from "./assets/png/BP.png";
import Kabloom from "./assets/png/Kabloom.png";
import SHRPrint from "./assets/png/SHRPrint.png";
import PC from "./assets/pc.svg";
import BHDLogo from "./assets/BHDLogo.svg";

// import Spline from '@splinetool/react-spline';

Modal.setAppElement("#root");

function App() {
  // const [modalIsOpen, setIsOpen] = React.useState(false);

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
        "App bg-stone-50 h-full w-full scroll-snap-y overflow-y-scroll"
      }
    >
      <div className={"h-[100vh] flex flex-col justify-between py-12 "}>
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

      <div className="flex flex-col w-full items-center mt-16 mx-auto">
        {/* Botpress */}
        <div className="w-full h-[100vh] min-h-[650px] mt-16 flex flex-row-reverse gap-8 relative scroll-align-start separator-top">
          <h2 className="fugaz text-4xl text-start absolute top-0 left-0 ml-40 -mt-10 z-10">
            WORK//
          </h2>
          <div className="flex flex-col w-full gap-4 absolute top-0 left-0 h-full">
            <iframe
              title="Studio UI"
              src="https://my.spline.design/node-2043772254239c2ab25cae4855ce86e6/"
              frameBorder="0"
              width="100%"
              height="100%"
            ></iframe>
          </div>
          <div className="flex flex-col mx-12 md:mx-30 lg:mx-40 p-8 text-start gap-12 h-min self-center justify-self-end max-w-xl rounded-xl backdrop-blur-sm bg-white/70 border-2 border-white shadow-2xl shadow-slate-500/10">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-end text-start gap-2 poppins">
                <h2 className="font-extrabold text-3xl text-[#3276ea] ">
                  BOTPRESS
                </h2>
                <h3 className="text-3xl text-stone-900">STUDIO UI</h3>
              </div>
              <div className="w-full text-start ">
                Botpress is the leading open source conversational AI platform.
                They provide an easy to use platform for developers to create
                custom chatbots.
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-lg uppercase">
                Understanding the problem
              </h3>
              <p className="text-base">
                Users reported a poor overall user experience. This was in part
                due to the time it takes to complete
                {/* <span
                  className="text-indigo-600 cursor-pointer"
                  onClick={openModal}
                >
                  continue
                </span> */}
              </p>
            </div>
            <button className="self-end bg-white px-4 py-2 rounded-lg border-[1px] text-sm hover:bg-neutral-50 transition font-medium">
              view project
            </button>
          </div>
        </div>

        {/* Kabloom */}
        <div className="w-full h-[100vh] min-h-[650px] justify-center items-center flex flex-col md:flex-row-reverse gap-8 bg-white separator after:bg-white relative z-0">
          <div className="hidden md:block overflow-hidden bg-red-400 rounded-l-full absolute h-80 w-2/4 top-1/2 right-0 -z-10 wiggle-x"></div>
          <div className="hidden md:block overflow-hidden bg-red-300 rounded-l-full absolute h-80 w-1/4 top-1/4 right-0 wiggle-x-2"></div>
          <div className="flex flex-col items-center justify-center h-[650px] w-3/4 gap-4 z-10">
            <img src={PC} alt="laptop" className="w-3/4" />
          </div>
          <div className="flex flex-col py-20 w-3/4 md:w-1/2 self-center max-w-xl ml-0 md:ml-30 lg:ml-40 text-start gap-12 ">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-end text-start gap-2">
                <h2 className="font-extrabold text-3xl text-indigo-600">
                  KABLOOM
                </h2>
                <h3 className="text-3xl">BOOKING</h3>
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
            <button className="self-end bg-white px-4 py-2 rounded-lg border-[1px] text-sm hover:bg-neutral-50 transition font-medium">
              view project
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
