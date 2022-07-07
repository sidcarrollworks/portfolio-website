import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import cx from "classnames";
import "./App.css";

import Logo from "./components/Logo";
import BP from "./assets/png/BP.png";
import Kabloom from "./assets/png/Kabloom.png";
import SHRPrint from "./assets/png/SHRPrint.png";

// import Spline from '@splinetool/react-spline';

Modal.setAppElement("#root");

function App() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "0",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, 0)",
      borderRadius: "0px",
      borderBottom: "none",
      borderTop: "none",
      width: "70%",
      height: "100%",
      backgroundColor: "#fff7ed",
      padding: "64px 86px",
      border: "1px solid black",
      boxShadow: "0 0 8px rgba(0,0,0,0.25)",
      overscrollBehavior: "contain",
    },
    overlay: {
      background: "rgba(255,255,255, 0.2)",
    },
  };

  return (
    <div
      className={cx(
        "App bg-orange-50 h-full w-full",
        modalIsOpen ? "hidden" : "scroll"
      )}
    >
      {/* <div className="max-w-5xl mx-auto"> */}

      <div className="h-[100vh] flex flex-col justify-between py-12">
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
          <h3 className="text-2xl font-semibold">
            I use my experience in graphic And UI Design to create captivating
            experiences.
          </h3>
        </div>

        <div className="p-4 flex flex-col items-center gap-8">
          <h4 className="font-bold">PEOPLE I'VE WORKED WITH</h4>
          <div className="flex flex-row gap-8">
            <img src={BP} className="h-8" alt="Botpress" />
            <img src={Kabloom} className="h-8" alt="Kabloom" />
            <img src={SHRPrint} className="h-8" alt="Sheridan Printing" />
          </div>
        </div>
      </div>

      <h2 className="fugaz text-5xl text-start px-20 mt-16 max-w-5xl mx-auto">
        WORK
      </h2>

      <div className="flex flex-col items-center py-16 gap-36 mx-auto max-w-5xl">
        {/* Botpress */}
        <div className="w-full h-[650px] flex flex-row gap-8 ">
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Botpress Studio UI"
            // className="bg-orange-50"
          >
            <div className="text-center flex flex-col ">
              <h2
                className="fugaz text-4xl text-black mb-14"
                // ref={(_subtitle) => (subtitle = _subtitle)}
              >
                BOTPRESS
              </h2>
              {/* <button onClick={closeModal}>close</button> */}
              <div className="w-full text-start flex flex-col gap-20">
                <div className="w-full">
                  <h2 className="font-bold ">UNDERSTANDING THE PROBLEM</h2>
                  <p>
                    The Botpress studio is a low-code conversational design tool
                    for building exceptional chatbots. However, it suffered many
                    design flaws that inhibited user from creating chatbots to
                    their full potential. The number one cause for this issue
                    was the number of modal layers. In order to create a new
                    content type while in the flow editor one would have to
                    travel 4-5 layers deep depending on the content type.
                  </p>
                </div>
                <div className="w-full">
                  <h2 className="font-bold ">MAIN ISUES</h2>
                  <p>
                    1/ Far too many modals
                    <br />
                    2/ Lack of clear and consistent design
                    <br />
                    3/ Hard to tell what nodes contain at a glance
                    <br />
                    4/ UI is cramped and clunky
                  </p>
                </div>
                {/* <iframe
                  title="STUDIO UI FIGMA"
                  // style="border: 1px solid rgba(0, 0, 0, 0.1);"
                  className="rounded-xl w-full border-[1px] border-black"
                  width="800"
                  height="450"
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FhDiJ1QDmemr8fd1EFlYcGU%2FStudio-UI%3Fnode-id%3D0%253A1"
                  allowfullscreen
                ></iframe> */}
                <div className="w-full">
                  <h2 className="font-bold text-2xl">No. 1 - Modal Hell</h2>
                  <p>
                    The first issue that comes to light when using the Botpress
                    studio is the inescapable layers of modals at every turn.
                  </p>
                </div>
              </div>
            </div>
          </Modal>
          <div className="flex flex-col w-full gap-4">
            <div className="h-full w-full border-black overflow-hidden">
              {/* <Spline scene="https://prod.spline.design/mPtuLWpukdcVxY4k/scene.splinecode" /> */}
              <iframe
                title="Studio UI"
                src="https://my.spline.design/node-2043772254239c2ab25cae4855ce86e6/"
                frameBorder="0"
                width="100%"
                height="100%"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col p-4 w-full text-start gap-12">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-end text-start gap-2">
                <h2 className="font-extrabold text-3xl">BOTPRESS</h2>
                <h3 className="text-3xl">STUDIO UI</h3>
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
              <p>
                The Botpress studio is a low-code conversational design tool for
                building exceptional chatbots. However, it suffered many design
                flaws that inhibited user from...{" "}
                <span
                  className="text-indigo-600 cursor-pointer"
                  onClick={openModal}
                >
                  continue
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
