import React from "react";
import { useSpring, animated, useChain, useSpringRef } from "@react-spring/web";

import m1 from "./m1.svg";
import m2 from "./m2.svg";
import m3 from "./m3.svg";
import m4 from "./m4.svg";
import m5 from "./m5.svg";
import m6 from "./m6.svg";
import m7 from "./m7.svg";
import m8 from "./m8.svg";
import treesLeft from "./treesLeft.svg";
import treesRight1 from "./treesRight1.svg";
import treesRight2 from "./treesRight2.svg";
import lake from "./lake.svg";
import plane from "./plane.svg";
import cloud1 from "./cloud1.svg";
import cloud2 from "./cloud2.svg";

interface Props {
  hovered?: any;
}

const calc = (x: number, y: number) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];

const Mountains = ({ hovered }: Props) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],

    config: { mass: 5, tension: 800, friction: 90 },
  }));

  const skyProps = useSpring({
    from: {
      opacity: 0,
      height: "0%",
    },
    to: [
      {
        opacity: hovered ? 1 : 0,
        height: hovered ? "61%" : "0%",
      },
    ],
    delay: 450,
    config: {
      mass: 1,
      tension: 800,
      friction: 50,
    },
  });

  const cloud1Ref = useSpringRef();
  const cloud1Props = useSpring({
    from: {
      transform: "scale(0) translateX(-14rem) translateY(0rem)",
      opacity: 0,
    },
    to: {
      transform: hovered
        ? "scale(1) translateX(-14rem) translateY(-3rem)"
        : "scale(0) translateX(-14rem) translateY(0rem)",
      opacity: hovered ? 1 : 0,
    },

    delay: 450,
    config: {
      mass: 1,
      tension: 800,
      friction: 50,
    },
    ref: cloud1Ref,
  });

  const cloudWiggleRef = useSpringRef();
  const cloudWiggle = useSpring({
    from: {
      x: 0,
    },
    to: {
      x: 50,
    },

    delay: 350,
    loop: { reverse: true },

    config: {
      mass: 5,
      tension: 800,
      friction: 1000,
    },
    ref: cloudWiggleRef,
  });

  const cloudWiggleRef2 = useSpringRef();
  const cloudWiggle2 = useSpring({
    from: {
      x: 30,
    },
    to: {
      x: -20,
    },

    delay: 350,
    loop: { reverse: true },

    config: {
      mass: 5,
      tension: 800,
      friction: 1000,
    },
    ref: cloudWiggleRef2,
  });

  useChain([cloud1Ref, cloudWiggleRef]);

  const cloud2Ref = useSpringRef();
  const cloud2Props = useSpring({
    from: {
      transform: "scale(0) translateX(2rem) translateY(0rem)",
      opacity: 0,
    },
    to: {
      transform: hovered
        ? "scale(1) translateX(2rem) translateY(-4rem)"
        : "scale(0) translateX(2rem) translateY(0rem)",
      opacity: hovered ? 1 : 0,
    },

    delay: 550,
    config: {
      mass: 1,
      tension: 800,
      friction: 50,
    },
  });

  useChain([cloud2Ref, cloudWiggleRef2]);

  const m1Props = useSpring({
    from: {
      transform: "translateX(-40rem)",
    },
    to: {
      transform: hovered
        ? "translateX(-2rem) translateY(0.5rem)"
        : "translateX(-40rem) translateY(0.5rem)",
    },

    delay: 225,
    config: {
      mass: 3,
      tension: 800,
      friction: 70,
    },
  });

  const m2Props = useSpring({
    from: {
      transform: "translateX(-55rem) translateY(2.5rem)",
    },
    to: {
      transform: hovered
        ? "translateX(-9.25rem) translateY(2.25rem)"
        : "translateX(-55rem) translateY(2.5rem)",
    },

    delay: 350,
    config: {
      mass: 3,
      tension: 800,
      friction: 70,
    },
  });

  const m3Props = useSpring({
    from: {
      transform: "translateX(35rem) translateY(3.5rem)",
    },
    to: {
      transform: hovered
        ? "translateX(2.5rem) translateY(3.5rem)"
        : "translateX(35rem) translateY(3.5rem)",
    },

    delay: 350,
    config: {
      mass: 3,
      tension: 800,
      friction: 70,
    },
  });

  const m4Props = useSpring({
    from: {
      transform: "translateX(40rem) translateY(4.5rem)",
    },
    to: {
      transform: hovered
        ? "translateX(15rem) translateY(4.5rem)"
        : "translateX(40rem) translateY(4.5rem)",
    },

    delay: 275,
    config: {
      mass: 3,
      tension: 800,
      friction: 70,
    },
  });

  const m5Props = useSpring({
    from: {
      transform: "translateX(40rem) translateY(5rem)",
    },
    to: {
      transform: hovered
        ? "translateX(14rem) translateY(5rem)"
        : "translateX(40rem) translateY(5rem)",
    },

    delay: 400,
    config: {
      mass: 1,
      tension: 800,
      friction: 70,
    },
  });

  const m6Props = useSpring({
    from: {
      transform: "translateX(40rem) translateY(5rem)",
    },
    to: {
      transform: hovered
        ? "translateX(3rem) translateY(5rem)"
        : "translateX(40rem) translateY(5rem)",
    },

    delay: 300,
    config: {
      mass: 1,
      tension: 800,
      friction: 70,
    },
  });

  const m7Props = useSpring({
    from: {
      transform: "translateX(-35rem) translateY(4.25rem)",
    },
    to: {
      transform: hovered
        ? "translateX(-6.5rem) translateY(4.25rem)"
        : "translateX(-35rem) translateY(4.25rem)",
    },

    delay: 350,
    config: {
      mass: 1,
      tension: 800,
      friction: 70,
    },
  });

  const m8Props = useSpring({
    from: {
      transform: "translateX(35rem) translateY(6rem)",
    },
    to: {
      transform: hovered
        ? "translateX(3rem) translateY(6rem)"
        : "translateX(35rem) translateY(6rem)",
    },

    delay: 350,
    config: {
      mass: 1,
      tension: 800,
      friction: 70,
    },
  });

  const treesLeftProps = useSpring({
    from: {
      transform: "scale(0) translateX(-55rem) translateY(11.5rem)",
      opacity: 0,
    },
    to: {
      transform: hovered
        ? "scale(1) translateX(-15rem) translateY(11.5rem)"
        : "scale(0) translateX(-55rem) translateY(11.5rem)",
      opacity: hovered ? 1 : 0,
    },

    delay: 100,
    config: {
      mass: 1,
      tension: 800,
      friction: 90,
    },
  });

  const treesRight1Props = useSpring({
    from: {
      transform: "scale(0) translateX(55rem) translateY(9rem)",
      opacity: 0,
    },
    to: {
      transform: hovered
        ? "scale(1) translateX(8rem) translateY(9rem)"
        : "scale(0) translateX(55rem) translateY(9rem)",
      opacity: hovered ? 1 : 0,
    },

    delay: 100,
    config: {
      mass: 1,
      tension: 800,
      friction: 90,
    },
  });

  const treesRight2Props = useSpring({
    from: {
      transform: "scale(0) translateX(55rem) translateY(7rem)",
      opacity: 0,
    },
    to: {
      transform: hovered
        ? "scale(1) translateX(6rem) translateY(7rem)"
        : "scale(0) translateX(55rem) translateY(7rem)",
      opacity: hovered ? 1 : 0,
    },

    delay: 150,
    config: {
      mass: 1,
      tension: 800,
      friction: 90,
    },
  });

  const sunProps = useSpring({
    from: {
      transform: "scale(0) translateX(-6rem) translateY(0rem)",
      opacity: 0,
    },
    to: {
      transform: hovered
        ? "scale(1) translateX(-6rem) translateY(-4rem)"
        : "scale(0) translateX(-6rem) translateY(0rem)",
      opacity: hovered ? 1 : 0,
    },

    delay: 350,
    config: {
      mass: 1,
      tension: 800,
      friction: 50,
    },
  });

  const planeProps = useSpring({
    from: {
      transform: "scale(0.5) translateX(40rem) translateY(-15rem)",
    },
    to: {
      transform: hovered
        ? "scale(0.5) translateX(-40rem) translateY(-15rem)"
        : "scale(0.5) translateX(40rem) translateY(-15rem)",
    },
    loop: true,
    delay: 550,
    reset: true,
    config: {
      mass: 1,
      friction: 100,
      duration: 8000,
    },
  });

  const lakeProps = useSpring({
    from: {
      transform: "scale(0) translateX(0.25rem) translateY(20rem)",
      opacity: 0,
    },
    to: [
      {
        transform: hovered
          ? "scale(1) translateX(0.25rem) translateY(11.25rem)"
          : "scale(0) translateX(0.25rem) translateY(20rem)",
      },
      { opacity: hovered ? 1 : 0 },
    ],

    // delay: 150,
    config: {
      mass: 1,
      tension: 800,
      friction: 90,
    },
  });

  const titleProps = useSpring({
    from: {
      transform: "translateY(0rem)",
      opacity: 0,
    },
    to: {
      transform: hovered ? "translateY(18rem)" : "translateY(0rem)",
      opacity: hovered ? 1 : 0,
    },

    delay: 100,
    config: {
      mass: 1,
      tension: 800,
      friction: 90,
    },
  });

  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      className="absolute w-full h-full top-0 left-0 flex items-center justify-center "
    >
      <animated.div
        style={{ ...skyProps }}
        className="absolute top-0 left-0 bg-gradient-to-b from-indigo-600 to-sky-300 w-full"
      />

      <animated.span
        style={titleProps}
        className="absolute text-3xl font-bold text-white"
      >
        Graphic Design
      </animated.span>

      <animated.div
        style={{
          ...sunProps,
          transform: props.xy.to(
            (x: number, y: number) =>
              `translate3d(${x / 8}px,${
                y / 8
              }px,0) scale(1) translateX(-6rem) translateY(-4rem)`
          ),
        }}
        className="rounded-full absolute bg-gradient-to-b from-amber-200 to-orange-300 w-28 h-28"
      />

      <animated.img
        src={cloud2}
        style={{ ...cloud2Props, ...cloudWiggle }}
        className="absolute opacity-80 h-24"
      />

      <animated.img
        style={{ ...m1Props }}
        src={m8}
        alt="m1"
        className="absolute"
      />

      <animated.img
        src={cloud1}
        style={{ ...cloud1Props, ...cloudWiggle2 }}
        className="absolute opacity-80 h-24"
      />

      <animated.img
        src={lake}
        style={lakeProps}
        alt="lake"
        className="absolute"
      />

      <animated.img src={m7} style={m2Props} alt="m2" className="absolute" />

      <animated.img
        src={m6}
        style={m3Props}
        alt="m3"
        className="absolute translate-x-10 translate-y-14"
      />

      <animated.img
        src={m5}
        style={m4Props}
        alt="m4"
        className="absolute translate-x-60 translate-y-[4.5rem]"
      />

      <animated.img
        src={m4}
        style={m5Props}
        alt="m1"
        className="absolute translate-x-56 translate-y-20"
      />

      <animated.img
        src={m3}
        style={m6Props}
        alt="m1"
        className="absolute translate-x-12 translate-y-20"
      />
      <animated.img
        src={m2}
        style={m7Props}
        alt="m1"
        className="absolute -translate-x-[6.5rem] translate-y-[4.25rem]"
      />
      <animated.img
        src={treesRight2}
        style={treesRight2Props}
        alt="trees"
        className="absolute translate-x-24 translate-y-28"
      />
      <animated.img
        src={m1}
        style={m8Props}
        alt="m1"
        className="absolute translate-x-12 translate-y-24"
      />
      <animated.img
        src={treesLeft}
        style={treesLeftProps}
        alt="trees"
        className="absolute -translate-x-60 translate-y-[11.5rem]"
      />
      <animated.img
        src={treesRight1}
        style={treesRight1Props}
        alt="trees"
        className="absolute translate-x-32 translate-y-36"
      />
      <animated.img
        src={plane}
        style={planeProps}
        alt="plane"
        className="absolute"
      />
    </animated.div>
  );
};

export default Mountains;
