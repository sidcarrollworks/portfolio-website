import React, {
  forwardRef,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import Lottie from "lottie-react";

import cx from "classnames";
import { useSpring, animated } from "@react-spring/web";

interface Props {
  name: string;
  color: string;
  description?: string;
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

  const lottieRef = useRef(null);

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
      mass: 1,
      tension: 200,
      friction: 50,
    },
  });

  // const titleProps = useSpring({
  //   from: {
  //     height: "10%",
  //     opacity: 0,
  //     marginTop: "0.5rem",
  //     display: "flex",
  //   },
  //   to: [
  //     {
  //       height: hover ? "0%" : "10%",
  //       // opacity: hover ? 0 : 1,
  //       marginTop: hover ? "0rem" : "0.5rem",
  //     },
  //     // { display: hover ? "none" : "flex" },
  //   ],
  //   delay: 100,
  //   config: {
  //     mass: 1,
  //     tension: 800,
  //     friction: 40,
  //   },
  // });

  const cardProps = useSpring({
    from: { background: props.color, opacity: 0.95, transform: "scale(1)" },
    to: {
      opacity: hover ? 1 : 0.95,
      background: hover ? props.color2 : props.color,
      transform: open ? "scale(1.1)" : "scale(1)",
    },
    delay: 100,
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
    delay: 100,
    config: {
      mass: 1,
      tension: 800,
      friction: 80,
    },
  });

  const descriptionProps = useSpring({
    from: {
      width: "80%",
      top: "100%",
      opacity: 0,
    },
    to: {
      top: hover ? "90%" : "100%",
      opacity: hover ? 1 : 0,
    },
    delay: 200,
    config: {
      mass: 1,
      tension: 800,
      friction: 150,
    },
  });

  const lottieProps = useSpring({
    from: {
      y: "100%",
      opacity: 0,
    },

    to: {
      y: hover ? "0%" : "100%",
      opacity: !hover ? 0 : open ? 0 : 1,
    },
    delay: 100,

    config: {
      mass: 1,
      tension: 800,
      friction: 80,
    },
  });

  const handleOnEnter = useCallback(() => {
    setHover(true);

    // if (props.lottie && lottieRef && "current" in lottieRef && lottieRef.current) {
    //   lottieRef.current.play();
    // }
  }, [setHover]);

  const handleOnLeave = useCallback(() => {
    setHover(false);

    // if (props.lottie) {
    //   lottieRef.current.pause();
    // }
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
      className="h-full w-full min-h-[400px] md:h-full min-w-0 flex flex-col rounded-xl items-center justify-center"
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
              "h-full w-full grow max-h-[600px]  cursor-pointer accent-edge group flex flex-col items-center justify-end rounded-xl overflow-hidden p-4 relative"
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
              {props.lottie ? (
                <Lottie
                  lottieRef={lottieRef}
                  animationData={props.lottie}
                  style={{ maxWidth: "440px" }}
                />
              ) : null}
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
            <animated.div
              style={descriptionProps}
              className="text-center text-white text-sm absolute p-4"
            >
              {props.description}
            </animated.div>
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
          {/* <animated.span
            style={titleProps}
            className="inter w-full text-center text-xl items-center justify-center flex flex-row gap-2 text-red-300"
          >
            <span className="font-bold uppercase">{first}</span>

            <span className="font-normal uppercase">{last}</span>
          </animated.span> */}
        </>
      ) : (
        <div className="w-full h-full relative">
          <span
            className="top-8 right-8 leading-[0.5rem] font-bold text-lg inter absolute cursor-pointer p-2 z-20 bg-zinc-100 rounded-full shadow-inner select-none text-zinc-400 hover:text-zinc-800 transition"
            onClick={() => {
              setOpen(false);
              props.openCard();
            }}
          >
            x
          </span>
          <div className="h-full w-full flex flex-col items-center overflow-y-auto bg-zinc-50 ">
            {props.children}
          </div>
        </div>
      )}
    </animated.div>
  );
});

export default Card;
