import React, { useState, useRef, useEffect, Ref } from "react";
import { HomeIcon, BriefcaseIcon, UserIcon } from "@heroicons/react/24/solid";
import { animated, useSpring, useTransition } from "react-spring";

import cx from "classnames";

import BotpressBreakdown from "./components/BotpressBreakdown";

import EnterLogo from "./components/EnterLogo";
import Card from "./components/Card";
import SheridanPrinting from "./components/SheridanPrinting";
import KabloomBreakdown from "./components/KabloomBreakdown";
import Mountains from "./components/Mountains";
import Nodes from "./components/Nodes";
import Character from "./components/Character";
import Balloons from "./components/Balloons";

import BP from "./assets/png/BP.png";
import SHRPrint from "./assets/png/SHRPrint.png";
import grid from "./assets/png/grid2.png";
import luna from "./assets/jpg/luna.jpg";

import BHDLogo from "./assets/svg/BHDLogo.svg";
import logo from "./logo.svg";
import bpLogo from "./assets/svg/bpLogo.svg";

import BPIcon from "./assets/svg/BPIcon.svg";
import KBIcon from "./assets/svg/KBIcon.svg";
import SHRIcon from "./assets/svg/SHRIcon.svg";
import kbLogo from "./assets/svg/kbLogo.svg";

import laptopAnimation from "./assets/lottie/laptopAnimation.json";

import "./App.css";

function App() {
  const [enter, setEnter] = useState(false);

  const Card1 = useRef(null);
  const Card2 = useRef(null);
  const Card3 = useRef(null);

  const landing = useRef(null);
  const work = useRef(null);
  const about = useRef(null);

  const email = "sidcarrollworks@gmail.com";

  const [openCard, setOpenCard] = useState<Ref<HTMLDivElement>>(null);

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const [lunaHover, setLunaHover] = useState(false);

  const calc = (x: number, y: number) => [
    x - width + width / 2,
    y - height + height / 2,
  ];

  useEffect(() => {
    if (!enter) {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    }
  }, [enter]);

  const transitions = useTransition(enter, {
    from: { transform: "scale(0)" },
    enter: { transform: "scale(1)" },
    to: { transform: "scale(0)" },
    reverse: enter,
    delay: 200,
    config: {
      mass: 2,
      tension: 700,
      friction: 50,
    },
  });

  const [logoProps, set] = useSpring(() => ({
    xy: [0, 0],

    config: { mass: 5, tension: 800, friction: 90 },
  }));

  const openCardFn = (card: any) => {
    setOpenCard(card);
  };

  useEffect(() => {
    if (openCard && "current" in openCard) {
      if (Card1.current === openCard.current) {
        setCards((prevState: any[]) => [
          {
            ...prevState[0],
          },
          {
            ...prevState[1],
            close: true,
          },
          {
            ...prevState[2],
            close: true,
          },
        ]);
      } else if (Card2.current === openCard.current) {
        setCards((prevState: any[]) => [
          {
            ...prevState[0],
            close: true,
          },
          {
            ...prevState[1],
          },
          {
            ...prevState[2],
            close: true,
          },
        ]);
      } else if (Card3.current === openCard.current) {
        setCards((prevState: any[]) => [
          {
            ...prevState[0],
            close: true,
          },
          {
            ...prevState[1],
            close: true,
          },
          {
            ...prevState[2],
          },
        ]);
      } else {
        setCards((prevState: any[]) => [
          {
            ...prevState[0],
            close: false,
          },
          {
            ...prevState[1],
            close: false,
          },
          {
            ...prevState[2],
            close: false,
          },
        ]);
      }
    } else {
      setCards((prevState: any[]) => [
        {
          ...prevState[0],
          close: false,
        },
        {
          ...prevState[1],
          close: false,
        },
        {
          ...prevState[2],
          close: false,
        },
      ]);
    }
  }, [openCard]);

  const [cards, setCards] = useState([
    {
      name: "Kabloom Booking",
      color: "#f43f5e",
      color2: "#f43f5e",
      coverImg: KBIcon,
      ref: Card1,
      lottie: laptopAnimation,
      openCard: openCardFn,
      background: <Balloons />,
      content: <KabloomBreakdown />,
      close: false,
    },
    {
      name: "Sheridan Printing",
      color: "#10B981",
      color2: "#10B981",
      coverImg: SHRIcon,
      ref: Card2,
      background: <Mountains />,
      lottie: null,
      openCard: openCardFn,
      content: <SheridanPrinting />,
      close: false,
    },
    {
      name: "Botpress Studio UI",
      color: "#3730a3",
      color2: "#171718",
      coverImg: BPIcon,
      ref: Card3,
      logo: bpLogo,
      background: <Nodes />,
      lottie: null,
      openCard: openCardFn,
      content: <BotpressBreakdown bpLogo={bpLogo} />,
      close: false,
    },
  ]);

  const lunaProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: lunaHover ? 1 : 0 },
    config: { mass: 5, tension: 800, friction: 90 },
  });

  const opacityProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: enter ? 1 : 0 },
    delay: 100,
    config: { mass: 5, tension: 800, friction: 90 },
  });

  const scrollTo = (ref: any) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      className="w-full h-full bg-black flex flex-col"
    >
      <div className="w-full h-full flex flex-col gap-4 max-w-[1440px] mx-auto">
        <animated.img
          style={opacityProps}
          src={logo}
          className="h-10 mt-4"
          alt="logo"
        />

        <div className="relative w-full h-full rounded-xl overflow-hidden px-6">
          <div className="overflow-hidden rounded-xl flex flex-col w-full h-full ">
            <div
              className={cx(
                "w-full h-full flex flex-col hide-scrollbar p-0 scroll-invisible gap-6 scroll-snap-y relative rounded-xl overflow-auto",
                openCard ? "overflow-hidden" : "overflow-auto"
              )}
            >
              {transitions((styles, item) => {
                return !item ? (
                  <animated.div
                    style={styles}
                    className="min-w-full h-full scroll-align-start"
                  >
                    <div
                      className={cx(
                        "w-full min-h-full flex flex-col justify-center items-center rounded-xl bg-zinc-200 relative accent-edge"
                      )}
                    >
                      <div className="spotlight h-full w-full rotate-180 absolute opacity-90 top-0 left-1/2 -translate-x-1/2" />
                      <EnterLogo logoProps={logoProps} setEnter={setEnter} />
                    </div>
                  </animated.div>
                ) : (
                  <>
                    <animated.div
                      style={styles}
                      className="min-h-full w-full scroll-align-start relative"
                    >
                      <div
                        ref={landing}
                        className="w-full h-full flex flex-col justify-between bg-zinc-200 rounded-xl p-6 relative accent-edge"
                      >
                        <div className="spotlight h-full w-full absolute rotate-180 opacity-90 top-0 left-1/2 -translate-x-1/2 z-0" />
                        <div className="flex flex-col h-min items-center gap-1 pt-4"></div>

                        {/* Focus */}
                        <div className="flex flex-col items-start md:items-center gap-4 md:gap-1 px-0 md:px-10 z-10">
                          <h1 className=" text-left md:text-center fugaz text-5xl md:text-7xl lg:text-8xl">
                            PURPOSEFUL
                            <br />
                            DESIGN SOLUTIONS
                          </h1>
                          <h3 className="text-base md:text-xl text-left md:text-center font-medium uppercase">
                            I use my experience in graphics and ui design to
                            create captivating experiences.
                          </h3>
                        </div>
                        {/* People I've Worked With */}
                        <div className="p-0 md:p-4 flex flex-col items-center gap-8 z-10">
                          <h4 className="font-bold text-base md:text-lg">
                            PEOPLE I'VE WORKED WITH
                          </h4>
                          <div className="flex flex-row flex-wrap items-center justify-center gap-8">
                            <img
                              src={BP}
                              className=" h-6 md:h-8"
                              alt="Botpress"
                            />
                            <img
                              src={kbLogo}
                              className="h-6 md:h-8"
                              alt="Kabloom"
                            />
                            <img
                              src={SHRPrint}
                              className="h-6 md:h-8"
                              alt="Sheridan Printing"
                            />
                            <img
                              src={BHDLogo}
                              className="h-6 md:h-8"
                              alt="Bighorn Design"
                            />
                          </div>
                        </div>
                      </div>
                    </animated.div>

                    <animated.div
                      style={styles}
                      ref={work}
                      className="min-h-full w-full flex flex-col md:flex-row gap-6 scroll-align-start overflow-x-hidden md:overflow-y-hidden scroll-snap-y md:scroll-snap-x"
                    >
                      {cards.map((card, i) =>
                        !card.close ? (
                          <Card
                            key={i}
                            name={card.name}
                            color={card.color}
                            color2={card.color2}
                            coverImg={card.coverImg}
                            lottie={card.lottie}
                            ref={card.ref}
                            logo={card.logo}
                            background={card.background}
                            openCard={card.openCard}
                            content={card.content}
                            closed={card.close}
                          >
                            {card.content}
                          </Card>
                        ) : null
                      )}
                    </animated.div>

                    <animated.div
                      style={styles}
                      ref={about}
                      className="min-h-full w-full flex flex-row gap-6 scroll-align-start overflow-hidden"
                    >
                      <div className="w-full h-full flex flex-col-reverse md:flex-row justify-center items-center bg-[#0E0E0F] rounded-xl p-6 relative accent-edge">
                        <div className="h-full w-full flex flex-col gap-8 justify-center items-end">
                          <div className="flex flex-col gap-4 items-start pr-4">
                            <h2 className="text-2xl font-semibold text-zinc-100 ">
                              BUILT FOR DESIGN
                            </h2>
                            <p className="max-w-md text-zinc-200">
                              I combine my graphic design, ui, and front-end
                              development skills to create clean, functional,
                              and engaging experiences.
                              <br />
                              <br />
                              My time in the print shop taught me how to
                              interact with client to pull out the right
                              information in order to create a sucessful design.
                              <br />
                              <br />
                              In my free time I spend my time creating or
                              playing music as well as the occasional game of
                              counter strike. Offline I enjoy spending time with
                              my dog,{" "}
                              <span className="relative max-w-min overflow-visible">
                                <span
                                  onMouseOver={() => setLunaHover(true)}
                                  onMouseLeave={() => setLunaHover(false)}
                                  className="text-amber-500 hover:text-amber-400 transition cursor-default"
                                >
                                  Luna 🐶
                                </span>

                                <animated.span
                                  style={lunaProps}
                                  className="absolute top-0 -right-4 translate-x-full -translate-y-1/2 w-80 rounded-xl overflow-hidden shadow-2xl z-10"
                                >
                                  <img src={luna} alt="Luna" />
                                </animated.span>
                              </span>
                              .
                            </p>
                            <div className="flex flex-col gap-2 w-full text-zinc-400 pt-4">
                              <a
                                className="transition w-min hover:text-blue-500"
                                href="https://drive.google.com/file/d/1aYnPzXiBiZCGVcJLzGPn8MNy0ViBWi92/view?usp=sharing"
                                target="_blank"
                                download
                                rel="noreferrer"
                              >
                                resume
                              </a>
                              <span
                                onClick={(event) => {
                                  navigator.clipboard.writeText(email);
                                }}
                                className="transition cursor-pointer relative group w-min hover:text-blue-500"
                              >
                                sidcarrollworks@gmail.com
                                <div className="transition -translate-x-full -left-4 rounded-xl bg-zinc-700 absolute w-min text-xs py-1 px-2 group-active:scale-1 scale-0">
                                  copied
                                </div>
                              </span>
                              <a
                                href="https://www.linkedin.com/in/sidcarrollworks/"
                                target="_blank"
                                rel="noreferrer"
                                className="transition w-min hover:text-blue-500"
                              >
                                linkedin
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="w-full h-full flex flex-col justify-between rounded-xl p-6 relative accent-edge">
                          <img
                            src={grid}
                            alt="#"
                            className="h-full object-cover"
                          />
                          <Character />
                        </div>
                      </div>
                    </animated.div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <animated.div
          style={opacityProps}
          className="flex flex-row w-full justify-center items-center pb-4 gap-4 z-10 "
        >
          <HomeIcon
            className="h-4 w-4 text-zinc-100 cursor-pointer hover:scale-125 transition"
            onClick={() => {
              scrollTo(landing);
            }}
          />
          <BriefcaseIcon
            className="h-4 w-4 text-zinc-100 cursor-pointer hover:scale-125 transition"
            onClick={() => {
              scrollTo(work);
            }}
          />
          <UserIcon
            className="h-4 w-4 text-zinc-100 cursor-pointer hover:scale-125 transition"
            onClick={() => {
              scrollTo(about);
            }}
          />
        </animated.div>
      </div>
    </div>
  );
}

export default App;
