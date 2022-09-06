import React, { forwardRef, useEffect, useState, useCallback } from "react";

import cx from "classnames";
import { useSpring, animated } from "@react-spring/web";

interface Props {
  name: string;
  color: string;
  color2: string;
  coverImg?: any;
  lottie?: any;
  background?: any;
  children?: any;
  logo?: any;
  content?: any;
  openCard?: any;
  closed?: any;
}

const Card = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const [first, last] = props.name.split(" ");
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [offsetTop, setOffsetTop] = useState(0);
  const [offsetLeft, setOffsetLeft] = useState(0);

  const calc = (x: number, y: number) => [
    x - offsetLeft - width / 2 - 20,
    (y - height / 2) / 5,
  ];

  useEffect(() => {
    if (ref && "current" in ref && ref.current) {
      setHeight(ref.current.clientHeight);
      setWidth(ref.current.clientWidth);
      setOffsetTop(ref.current.offsetTop);
      setOffsetLeft(ref.current.offsetLeft);
    }
  }, [hover, ref]);

  const [paraProps, set] = useSpring(() => ({
    xy: [0, 0],

    config: { mass: 5, tension: 800, friction: 90 },
  }));

  // useEffect(() => {
  //   if (hover) {
  //     play();
  //   } else {
  //     pause();
  //   }
  // }, [hover, play, pause]);

  const holderProps = useSpring({
    from: {
      padding: "0.5rem",
      width: "100%",

      backgroundColor: "rgba(255, 255, 255, 0)",
    },
    to: {
      padding: open ? "0rem" : "0.5rem",
      minWidth: open ? "100%" : "0%",
      backgroundColor: open
        ? "rgba(255, 255, 255, 1)"
        : "rgba(255, 255, 255, 0)",
    },

    reset: true,
    config: {
      mass: 2,
      tension: 500,
      friction: 100,
    },
  });

  const titleProps = useSpring({
    from: {
      height: "2rem",
      opacity: 0,
      marginTop: "0.5rem",
      display: "flex",
    },
    to: [
      {
        height: hover ? "0rem" : "2rem",
        // opacity: hover ? 0 : 1,
        marginTop: hover ? "0rem" : "0.5rem",
      },
      // { display: hover ? "none" : "flex" },
    ],

    config: {
      mass: 1,
      tension: 800,
      friction: 40,
    },
  });

  const cardProps = useSpring({
    from: { background: props.color, opacity: 0.95 },
    to: {
      opacity: hover ? 1 : 0.95,
      background: hover ? props.color2 : props.color,
    },

    config: {
      mass: 1,
      tension: 500,
      friction: 60,
    },
  });

  const imageProps = useSpring({
    from: {
      transform: "translateY(-50%)",
      top: "50%",
      height: "6rem",
      opacity: 1,
    },
    to: {
      transform: hover ? "translateY(0%)" : "translateY(-50%)",
      top: hover ? "0%" : "50%",
      height: hover ? "2rem" : "6rem",
      marginTop: hover ? "1rem" : "0",
    },

    config: {
      mass: 1,
      tension: 800,
      friction: 50,
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const buttonProps = useSpring({
    from: {
      padding: "0 0.5rem 0 0.5rem",
      width: "30%",
      opacity: 1,
      transform: "translateY(150%)",
    },
    to: {
      width: hover ? "100%" : "30%",
      transform: hover ? "translateY(0%)" : "translateY(150%)",
    },
    delay: 100,
    config: {
      mass: 0.4,
      tension: 800,
      friction: 40,
    },
  });

  const lottieProps = useSpring({
    from: {
      y: "100%",
      opacity: "0%",
    },

    to: {
      y: hover ? "0%" : "100%",
      opacity: hover ? "100%" : "0%",
    },

    config: {
      mass: 1,
      tension: 800,
      friction: 50,
    },
  });

  const handleOnEnter = useCallback(() => {
    setHover(true);
  }, [setHover]);

  const handleOnLeave = useCallback(() => {
    setHover(false);
  }, [setHover]);

  const handleOnClick = useCallback(() => {
    setOpen(!open);
    props.openCard(ref);
  }, [open, setOpen, props, ref]);

  return (
    <animated.div
      style={{ ...holderProps }}
      ref={ref}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      onMouseLeave={() => set({ xy: [0, 0] })}
      className="min-h-full w-full md:h-full min-w-0 flex flex-col accent-edge rounded-xl scroll-align-start"
    >
      {!open ? (
        <>
          <animated.div
            style={{
              ...cardProps,
              transform: paraProps.xy.to(
                (x, y) => `translate3d(${x / 15}px,${y / 15}px,0)`
              ),
            }}
            className={cx(
              "h-full w-full cursor-pointer shadow-lg group hover:shadow-inner flex flex-col items-center justify-end rounded-xl shadow-zinc-600/30 overflow-hidden p-4 relative"
            )}
            onMouseEnter={handleOnEnter}
            onMouseLeave={handleOnLeave}
            onClick={handleOnClick}
          >
            <animated.div
              style={{
                ...lottieProps,
                transform: paraProps.xy.to(
                  (x, y) => `translate3d(${x / 15}px,${y / 15}px,0)`
                ),
              }}
              className={
                "absolute w-full h-full top-0 left-0 flex items-center justify-center "
              }
            >
              {props.lottie}
            </animated.div>
            {props.background
              ? React.cloneElement(props.background, { hovered: hover })
              : null}
            <animated.img
              style={imageProps}
              src={props.coverImg}
              className=" max-w-xs absolute opacity-80"
              alt="logo"
            />
            {/* <animated.button
              style={buttonProps}
              className="transition cursor-pointer justify-self-end text-lg font-medium z-10 rounded-lg h-12 py-8 text-zinc-900 shadow-md shadow-zinc-900/20 bg-gradient-to-b from-white to-white/90 hover:bg-white"
              onClick={() => {
                setOpen(!open);
                props.openCard(ref);
              }}
            >
              view
            </animated.button> */}
          </animated.div>
          <animated.span
            style={titleProps}
            className="inter w-full text-center text-xl items-center justify-center flex flex-row gap-2 text-zinc-300"
          >
            <span className="font-bold uppercase">{first}</span>

            <span className="font-normal uppercase">{last}</span>
          </animated.span>
        </>
      ) : (
        <div className="w-full max-h-full relative">
          <span
            className="top-8 right-8 leading-[0.5rem] font-bold text-lg inter absolute cursor-pointer p-2 z-20 bg-zinc-50 rounded-full shadow-inner select-none text-zinc-400 hover:text-zinc-800 transition"
            onClick={() => {
              setOpen(false);
              props.openCard();
            }}
          >
            x
          </span>
          <div className="h-full w-full flex flex-col items-center overflow-y-auto">
            {props.children}
          </div>
        </div>
      )}
    </animated.div>
  );
});

export default Card;
