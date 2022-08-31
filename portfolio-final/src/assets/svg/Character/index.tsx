import React from "react";
import { useSpring, animated } from "react-spring";

import me from "./me.svg";
import voidPuddle1 from "./voidPuddle1.svg";
import voidPuddle2 from "./voidPuddle2.svg";
import handLeft from "./handLeft.svg";
import handRight from "./handRight.svg";

const Character = () => {
  const meProps = useSpring({
    from: {
      y: -7,
    },
    to: {
      y: 2,
    },
    delay: 300,
    loop: { reverse: true },
    config: {
      mass: 0.5,
      tension: 50,
      friction: 50,
    },
  });

  const voidPuddle1Props = useSpring({
    from: {
      y: 0,
      transform: "translate(1.5rem, 15rem)",
    },
    to: {
      opacity: 1,
      y: 5,
    },
    loop: { reverse: true },
    delay: 100,
    config: {
      mass: 0.5,
      tension: 50,
      friction: 50,
    },
  });

  const voidPuddle2Props = useSpring({
    from: {
      y: 0,
      transform: "translate(1.5rem, 14.5rem)",
    },
    to: {
      opacity: 1,
      y: 5,
    },
    loop: { reverse: true },
    delay: 200,
    config: {
      mass: 0.5,
      tension: 50,
      friction: 50,
    },
  });

  return (
    <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
      <div className="absolute top-16 left-20 flex flex-col">
        <span className="text-zinc-200 text-lg font-bold">SID CARROLL</span>
        <span className="text-zinc-400 text-sm">4.23</span>
      </div>
      <animated.img
        style={voidPuddle1Props}
        src={voidPuddle1}
        className="absolute"
      />
      <animated.img
        style={voidPuddle2Props}
        src={voidPuddle2}
        className="absolute"
      />
      <animated.img style={meProps} src={me} className="absolute h-3/4" />
    </div>
  );
};

export default Character;
