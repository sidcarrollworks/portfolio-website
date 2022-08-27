import React from "react";
import cx from "classnames";
import "./style.css";
import Blob from "../Blob";
// import animationData from "../../lotties/BlobAnimation.json";
// import Lottie from "react-lottie";

const SidePanel = ({ children, isOpen, handleClose }) => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {},
  // };

  return (
    <div
      className={cx(
        "absolute side-panel h-full w-[100vw] text-white text-start flex flex-col items-start justify-center ease-linear transition duration-200 z-10 ",
        isOpen ? "" : "translate-x-[150%]"
      )}
      // onTransitionEnd={() => {
      //   setOpened(isOpen);
      // }}
    >
      <div className="relative flex h-full w-full">
        {/* <div className={cx(" h-[125%] transition-all duration-200 ease-out ")}> */}
        {/* <Lottie
          options={defaultOptions}
          style={{ height: "150vh", width: "100vw", transform: "scale(1.5)" }}
        /> */}
        {/* </div> */}

        <Blob
          className={cx(
            "absolute top-0 -left-72 md:-left-52 lg:left-1/4 h-[125%] transition-all duration-200 ease-out after:bg-[#101011] after:contents-[''] after:h-full after:w-full after:absolute after:top-0 after:left-full md:after:left-[95%] lg:after:left-1/2"
          )}
          h="100%"
        />
        <button
          className="px-1 py-1 h-8 w-8 text-xs z-50 bg-zinc-900 rounded-full absolute transition hover:bg-zinc-800 border-2 border-zinc-700 select-none left-10 top-10 md:top-[10%] md:left-20 lg:left-[40%]"
          onClick={handleClose}
        >
          X
        </button>
        <div className="absolute left-0 md:left-1/2 flex flex-col items-center justify-center w-full md:w-1/4 lg:w-1/2 h-full z-10 p-28">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SidePanel;

// after:bg-[#101011] after:contents-[''] after:h-full after:w-full after:absolute after:top-0 after:left-full lg:after:left-[90%]
