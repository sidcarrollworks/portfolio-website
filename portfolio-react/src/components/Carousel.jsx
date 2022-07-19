import React, { useState, Children } from "react";
import cx from "classnames";

const Carousel = (props) => {
  const [frame, setFrame] = useState(0);

  const nextFrame = () => {
    if (frame < Children.count(props.children) - 1) {
      setFrame(frame + 1);
    }
  };

  const prevFrame = () => {
    if (frame > 0) {
      setFrame(frame - 1);
    }
  };

  const childs = React.Children.map(props.children, (child) => {
    return React.cloneElement(child, {
      style: { transform: `translateX(-${frame * 100}%)` },
    });
  });

  return (
    <div className="max-w-5xl max-h-[800px] w-full flex flex-col gap-4 h-full px-8">
      <div className="flex flex-row w-full p-5 relative justify-center items-center text-start rounded-xl shadow-2xl backdrop-blur-sm bg-white/95 border-2 border-white shadow-slate-500/20">
        <div className="flex flex-row w-full flex-wrap text-start gap-2 poppins">
          <h2 className="font-extrabold text-2xl text-[#3276ea] uppercase">
            {props.company}
          </h2>
          <h3 className="text-2xl text-stone-900 uppercase">{props.project}</h3>
        </div>

        <button
          onClick={() => {
            props.handleClose();
          }}
          className="transition-all self-start p-2 px-3 active:shadow-inner text-stone-500 border-[1px] hover:text-stone-700 text-xs bg-white text-center rounded-xl  hover:bg-neutral-50"
        >
          X
        </button>
      </div>

      <div className="w-full h-full max-w-5xl project-box z-20 rounded-xl flex relative flex-col gap-3 shadow-2xl shadow-slate-500/30 p-6 backdrop-blur-sm bg-white/95 text-start border-2 border-white">
        {/* Control Buttons */}
        <span
          onClick={prevFrame}
          className={cx(
            "transition-all absolute top-1/2 -left-0 text-2xl cursor-pointer select-none text-neutral-600 hover:-translate-x-1 p-2",
            frame < 1 ? "opacity-0" : "opacity-100"
          )}
        >
          «
        </span>
        <span
          onClick={nextFrame}
          className={cx(
            "transition absolute top-1/2 -right-0  text-2xl cursor-pointer select-none text-neutral-600 hover:translate-x-1 p-2",
            frame >= Children.count(props.children) - 1
              ? "opacity-0"
              : "opacity-100"
          )}
        >
          »
        </span>

        <div className="h-full min-w-full relative flex flex-row overflow-x-clip ">
          {childs}
        </div>

        <div className="h-12 w-full flex flex-col justify-end border-t-2 poppins uppercase text-neutral-800">
          <span className="font-bold">{childs[frame].props.label}</span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
