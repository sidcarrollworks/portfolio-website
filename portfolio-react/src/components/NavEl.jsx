import React, { useState } from "react";
import cx from "classnames";
import "../animations.css";

const NavEl = ({ icon, onClick, className, msg }) => {
  const [spin, setSpin] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <span
      className={cx(
        "whitespace-nowrap cursor-pointer select-none hover:text-neutral-100 hover:scale-125 transition p-1 relative",
        className,
        spin ? "spin-once" : ""
      )}
      onClick={() => {
        onClick();
        setSpin(true);
      }}
      onAnimationEnd={() => setSpin(false)}
      onMouseLeave={() => {
        setHover(false);
      }}
      onMouseOver={() => {
        setHover(true);
      }}
    >
      {icon}
      <span
        className={cx(
          "fixed left-10 top-1/2 -translate-y-1/2 bg-black font-bold text-start text-[10px] shadow-lg transition px-2 py-1 text-white rounded-xl",
          hover ? "opacity-100" : "opacity-0",
          spin || hover ? "" : "hidden"
        )}
      >
        {msg ? msg : null}
      </span>
    </span>
  );
};

export default NavEl;
