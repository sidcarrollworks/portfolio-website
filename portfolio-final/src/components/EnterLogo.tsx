import React from "react";
import { useSpring, animated } from "react-spring";

import c from "../assets/svg/logoparts/c.svg";
import w from "../assets/svg/logoparts/w.svg";
import s1 from "../assets/svg/logoparts/s1.svg";
import s2 from "../assets/svg/logoparts/s2.svg";
import enterText from "../assets/svg/Enter.svg";

interface Props {
  className?: string;
  logoProps: any;
  setEnter: any;
}

const EnterLogo = ({ className, logoProps, setEnter }: Props) => {
  const bg = useSpring({
    from: { opacity: 1, y: 500 },
    to: { opacity: 1, y: 0 },
    delay: 1000,
    config: { mass: 2, tension: 500, friction: 40 },
  });
  const s1Spring = useSpring({
    from: { opacity: 0, y: -100 },
    to: { opacity: 1, y: 0 },

    delay: 1200,
    config: { mass: 1, tension: 800, friction: 40 },
  });
  const s2Spring = useSpring({
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },

    delay: 1300,
    config: { mass: 1, tension: 800, friction: 40 },
  });
  const cSpring = useSpring({
    from: { opacity: 0, y: -100 },
    to: { opacity: 1, y: 0 },

    delay: 1400,
    config: { mass: 1, tension: 800, friction: 40 },
  });
  const wSpring = useSpring({
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    delay: 1500,
    config: { mass: 1, tension: 800, friction: 40 },
  });
  const titleSpring = useSpring({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 40 },
    delay: 1600,
    config: { mass: 1, tension: 800, friction: 400 },
  });

  const enterSpring = useSpring({
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 50 },
    delay: 1700,
    config: { mass: 1, tension: 800, friction: 40 },
  });

  return (
    <animated.div className="w-full h-full relative flex items-center justify-center flex-col z-0">
      <animated.div
        style={{
          transform: logoProps.xy.to(
            (x, y) => `translate3d(${x / 15}px,${y / 15}px,0)`
          ),
          ...bg,
        }}
        className="bg-zinc-900 items-center justify-center flex gap-4 p-5 rounded-2xl shadow-lg z-10"
      >
        <animated.div
          style={{
            transform: logoProps.xy.to(
              (x, y) => `translate3d(${x / 18}px,${y / 20}px,0)`
            ),
          }}
          className="flex flex-col gap-1 h-40 drop-shadow-lg"
        >
          <animated.img style={s1Spring} src={s1} className="" />
          <animated.img style={s2Spring} src={s2} className="h-1/2" />
        </animated.div>
        <animated.img
          style={{
            transform: logoProps.xy.to(
              (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`
            ),
            ...cSpring,
          }}
          src={c}
          className=" h-40 drop-shadow-lg"
        />
        <animated.img
          style={{
            ...wSpring,
            transform: logoProps.xy.to(
              (x, y) => `translate3d(${x / 18}px,${y / 20}px,0)`
            ),
          }}
          src={w}
          className=" h-40 drop-shadow-lg"
        />
      </animated.div>
      <animated.h2
        style={titleSpring}
        className="inter text-2xl font-black tracking-[0.5rem] text-center ml-2 text-shadow-inner text-stone-300 z-20"
      >
        SIDCARROLLWORKS
      </animated.h2>
      <animated.img
        style={enterSpring}
        src={enterText}
        alt="enter"
        className="transition h-9 bg-black rounded-2xl px-4 py-3 cursor-pointer shadow-lg hover:shadow-md"
        onClick={() => {
          setEnter(true);
        }}
      />
    </animated.div>
  );
};

export default EnterLogo;
