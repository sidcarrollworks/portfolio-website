import React, { useState, useCallback } from "react";
import { animated, useSpring } from "@react-spring/web";
import cx from "classnames";

import grid from "../assets/png/grid2.png";

interface OwnProps {
  img: any;
  twBG: string;
}

const GROW_MAP: any = {
  default: "1",
  grow: "1.05",
  expand: "1.45",
};

const ImgWindow = ({ img, twBG }: OwnProps) => {
  const [grow, setGrow] = useState(GROW_MAP.default);
  const imgStyle = useSpring({
    to: {
      transform: `scale(${grow})`,
    },
    config: {
      mass: 1.1,
      tension: 300,
      friction: 20,
    },
  });

  const handleClick = useCallback(() => {
    setGrow(grow === GROW_MAP.expand ? GROW_MAP.default : GROW_MAP.expand);
  }, [grow, setGrow]);

  const handleMouseEnter = useCallback(() => {
    setGrow(GROW_MAP.grow);
  }, [setGrow]);

  const handleMouseLeave = useCallback(() => {
    setGrow(GROW_MAP.default);
  }, [setGrow]);

  return (
    <div className="flex flex-col gap-6 w-full ">
      <div
        className={cx(
          "flex flex-col rounded-xl md:rounded-2xl p-3 md:p-10 items-center justify-center shadow-inner-xl relative",
          twBG
        )}
      >
        <img
          src={grid}
          alt="grid"
          className="rotate-90 absolute mix-blend-screen translate-x-1/2 h-full"
        />
        <animated.img
          src={img}
          alt="initial wireframe"
          className="z-10 cursor-pointer shadow-lg"
          style={imgStyle}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
};

export default ImgWindow;
