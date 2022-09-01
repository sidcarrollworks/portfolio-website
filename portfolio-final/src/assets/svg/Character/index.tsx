import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import me from "./me.svg";
import voidPuddle1 from "./voidPuddle1.svg";
import voidPuddle2 from "./voidPuddle2.svg";
import handLeft from "./handLeft.svg";
import handRight from "./handRight.svg";
import dash1 from "./dash1.svg";
import dash2 from "./dash2.svg";
import dash3 from "./dash3.svg";
import dash4 from "./dash4.svg";

const Character = () => {
  const [hover, setHover] = useState(false);
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

  const dash1Props = useSpring({
    from: {
      opacity: 0,
      x: 140,
      y: -115,
    },
    to: {
      opacity: hover ? 1 : 0,
      x: 140,
      y: -115,
    },
    delay: 200,

    config: {
      mass: 1,
      tension: 500,
      friction: 50,
    },
  });

  const dash2Props = useSpring({
    from: {
      opacity: 0,
      x: -70,
      y: -230,
    },
    to: {
      opacity: hover ? 1 : 0,
    },
    delay: 150,

    config: {
      mass: 1,
      tension: 500,
      friction: 50,
    },
  });

  const dash3Props = useSpring({
    from: {
      opacity: 0,
      x: -180,
      y: -35,
    },
    to: {
      opacity: hover ? 1 : 0,
    },
    delay: 100,

    config: {
      mass: 1,
      tension: 500,
      friction: 50,
    },
  });

  const dash4Props = useSpring({
    from: {
      opacity: 0,
      x: 130,
      y: 115,
      scaleX: -1,
    },
    to: {
      opacity: hover ? 1 : 0,
    },
    delay: 50,

    config: {
      mass: 1,
      tension: 500,
      friction: 50,
    },
  });

  const labelProps = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: hover ? 1 : 0,
    },
    delay: 300,
    config: {
      mass: 1,
      tension: 500,
      friction: 50,
    },
  });

  return (
    <div
      className="absolute w-full h-full top-0 left-0 flex items-center justify-center"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <animated.div
        style={labelProps}
        className="absolute top-16 left-20 flex flex-col"
      >
        <span className="text-zinc-200 text-lg font-bold">SID CARROLL</span>
        <span className="text-zinc-400 text-sm">v4.23</span>
      </animated.div>

      <animated.img
        style={dash1Props}
        src={dash1}
        alt="dash"
        className="absolute"
      />

      <animated.img
        style={dash2Props}
        src={dash2}
        alt="dash"
        className="absolute"
      />
      <animated.img
        style={dash3Props}
        src={dash3}
        alt="dash"
        className="absolute"
      />
      <animated.img
        style={dash4Props}
        src={dash4}
        alt="dash"
        className="absolute"
      />
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
