import React, { useState, useRef, useEffect, Ref } from "react";
import { animated, useSpring } from "@react-spring/web";

import cx from "classnames";

import Card from "./components/Card";
import BotpressBreakdown from "./pages/BotpressBreakdown";
import SheridanPrinting from "./pages/SheridanPrinting";
import KabloomBreakdown from "./pages/KabloomBreakdown";
import Mountains from "./components/Mountains";
import Nodes from "./components/Nodes";
import Character from "./components/Character";
import Balloons from "./components/Balloons";

import BP from "./assets/svg/bp-logo-white.svg";
import SHRPrint from "./assets/png/SHRPrint.png";
import grid from "./assets/png/grid2.png";
import luna from "./assets/jpg/luna.jpg";

import BHDLogo from "./assets/svg/BHDLogo.svg";
import logoBare from "./assets/svg/logoBare.svg";
import bpLogo from "./assets/svg/bpLogo.svg";

import BPIcon from "./assets/svg/BPIcon.svg";
import KBIcon from "./assets/svg/KBIcon.svg";
import SHRIcon from "./assets/svg/SHRIcon.svg";
import kbLogo from "./assets/svg/kbLogo.svg";

import laptopAnimation from "./assets/lottie/laptopAnimation.json";

function App() {
  const Card1 = useRef(null);
  const Card2 = useRef(null);
  const Card3 = useRef(null);

  const landing = useRef(null);
  const work = useRef(null);
  const about = useRef(null);
  const aboutRef = useRef(null);

  const email = "sidcarrollworks@gmail.com";

  const [openCard, setOpenCard] = useState<Ref<HTMLDivElement>>(null);

  const [emailCopied, setEmailCopied] = useState(false);

  const [lunaHover, setLunaHover] = useState(false);

  const [landingInView, setLandingInView] = useState(false);

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
      name: "Self-serve Booking",
      desciption:
        "Designed, architected, and built a self-serve booking portal",
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
      desciption: "Gathered experience in design and working with customers",
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
      desciption: "Designed and assisted in building a conversation studio UI",
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

  const emailProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: emailCopied ? 1 : 0 },
    config: { mass: 4, tension: 600, friction: 10 },
    onRest: () => {
      if (emailCopied) {
        setTimeout(() => {
          setEmailCopied(false);
        }, 1000);
      }
    },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Here you can check if the element is in view
        if (entry.isIntersecting) {
          // Trigger your animation here
          setLandingInView(true);
        } else {
          setLandingInView(false);
        }
      },
      {
        // Using 1.0 means the callback will be called when the element
        // is fully in view
        threshold: 0.75,
      }
    );

    // Start observing the element
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    // Stop observing the element on unmount
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const scrollTo = (ref: any) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center">
      <span className="text-gray-400 text-center ">
        Working on the new version, will be back soon!
      </span>
    </div>
    // <div className="w-full h-full flex flex-col bg-black">
    //   {/* Header */}
    //   <div className="w-full navbar-blur flex flex-row fixed justify-center top-0 bg-black/40 backdrop-blur-lg z-50 border-b-[1px] border-black py-5">
    //     <animated.img
    //       src={logoBare}
    //       className="md:h-[24px] h-[16px] select-none"
    //       alt="logo"
    //     />
    //   </div>
    //   {/* Content */}
    //   <div className="w-full h-full flex flex-col max-w-[1200px] mx-auto gap-12">
    //     {/* Landing */}
    //     <div
    //       ref={landing}
    //       className="w-full h-screen flex flex-col justify-between rounded-xl p-6 relative"
    //     >
    //       <div className="flex flex-col h-min items-center gap-1 pt-4"></div>
    //       {/* Focus */}
    //       <div className="max-w-[800px] self-center w-full flex flex-col gap-8 md:items-center px-0 md:px-10 z-10 text-zinc-50">
    //         <h1 className="w-full text-center inter text-4xl font-bold md:text-5xl lg:text-6xl">
    //           I'm Sid Carroll,
    //         </h1>
    //         <p className="text-base leading-[140%] text-center md:text-4xl font-medium">
    //           a product designer committed to crafting intuitive, user-centric
    //           digital experiences.
    //         </p>

    //         <button
    //           onClick={() => {
    //             scrollTo(work);
    //           }}
    //           className="border-[1px] mt-6 border-zinc-50 rounded-lg py-2 px-4 text-zinc-50 hover:bg-zinc-50/10 transition-all duration-200"
    //         >
    //           view work
    //         </button>
    //       </div>
    //       {/* People I've Worked With */}
    //       <div className="p-0 md:p-4 flex flex-col items-center gap-8 z-10">
    //         <h5 className="text-base text-zinc-300 leading-[130%]">
    //           people I've worked with
    //         </h5>
    //         <div className="flex flex-row flex-wrap items-center justify-center gap-8 opacity-90">
    //           <img src={BP} className=" h-4 md:h-6" alt="Botpress" />
    //           <img src={kbLogo} className="h-4 md:h-6" alt="Kabloom" />
    //           <img
    //             src={SHRPrint}
    //             className="h-4 md:h-6 invert"
    //             alt="Sheridan Printing"
    //           />
    //           <img src={BHDLogo} className="h-4 md:h-6" alt="Bighorn Design" />
    //         </div>
    //       </div>
    //     </div>

    //     {/* WORK SECTION */}
    //     <animated.div
    //       ref={work}
    //       className="w-full h-full md:h-[90vh] flex flex-col md:flex-row gap-6 rounded-xl px-6"
    //     >
    //       {cards.map((card, i) =>
    //         !card.close ? (
    //           <Card
    //             key={i}
    //             name={card.name}
    //             description={card.desciption}
    //             color={card.color}
    //             color2={card.color2}
    //             coverImg={card.coverImg}
    //             lottie={card.lottie}
    //             ref={card.ref}
    //             logo={card.logo}
    //             background={card.background}
    //             openCard={card.openCard}
    //             content={card.content}
    //             closed={card.close}
    //           >
    //             {card.content}
    //           </Card>
    //         ) : null
    //       )}
    //     </animated.div>

    //     {/* ABOUT SECTION */}
    //     <animated.div
    //       ref={about}
    //       className="w-full h-screen md:h-[90vh] flex flex-row gap-6 items-center justify-center overflow-hidden"
    //     >
    //       <div className="w-full h-full flex flex-col-reverse gap-8 md:flex-row justify-center items-center rounded-xl p-6 relative accent-edge">
    //         <div className="h-full w-full flex flex-col gap-8 justify-center items-end">
    //           <div className="flex flex-col gap-4 items-start pr-4">
    //             <h2 className="text-2xl font-semibold text-zinc-200 ">
    //               BUILT FOR DESIGN
    //             </h2>
    //             <p className="max-w-md text-zinc-300">
    //               I combine my graphic design, ui, and front-end development
    //               skills to create clean, functional, and engaging experiences.
    //               <br />
    //               <br />
    //               My time in the print shop taught me how to interact with
    //               clients to efficiently pull out key information in order to
    //               create successful designs.
    //               <br />
    //               <br />
    //               In my free time I spend my time creating or playing music as
    //               well as the occasional game of counter strike. Offline I enjoy
    //               spending time with my dog,{" "}
    //               <span className="relative max-w-min overflow-visible">
    //                 <span
    //                   onMouseOver={() => setLunaHover(true)}
    //                   onMouseLeave={() => setLunaHover(false)}
    //                   className="text-amber-500 hover:text-amber-400 transition cursor-default"
    //                 >
    //                   Luna 🐶
    //                 </span>

    //                 <animated.span
    //                   style={lunaProps}
    //                   className="absolute top-0 -right-4 translate-x-full -translate-y-1/2 w-80 rounded-xl overflow-hidden shadow-2xl z-10"
    //                 >
    //                   <img src={luna} alt="Luna" />
    //                 </animated.span>
    //               </span>
    //               .
    //             </p>
    //             <div className="flex flex-col gap-2 w-full text-zinc-400 pt-4">
    //               <a
    //                 className="transition w-min hover:text-blue-500"
    //                 href="/resv2.pdf"
    //                 target="_blank"
    //                 download
    //                 rel="noreferrer"
    //               >
    //                 resume
    //               </a>
    //               <span
    //                 onClick={(event) => {
    //                   navigator.clipboard.writeText(email);
    //                   setEmailCopied(true);
    //                 }}
    //                 className="transition cursor-pointer relative w-min hover:text-blue-500"
    //               >
    //                 sidcarrollworks@gmail.com
    //                 <animated.div
    //                   style={emailProps}
    //                   className="transition -translate-x-full -left-4 rounded-xl bg-zinc-700 absolute w-min text-xs py-1 px-2 top-0"
    //                 >
    //                   copied
    //                 </animated.div>
    //               </span>
    //               <a
    //                 href="https://www.linkedin.com/in/sidcarrollworks/"
    //                 target="_blank"
    //                 rel="noreferrer"
    //                 className="transition w-min hover:text-blue-500"
    //               >
    //                 linkedin
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //         <div
    //           className="w-full h-full flex-col justify-between rounded-xl p-6 relative hidden md:flex bg-black"
    //           ref={aboutRef}
    //         >
    //           <img src={grid} alt="#" className="h-full object-cover" />
    //           <Character inView={landingInView} />
    //         </div>
    //       </div>
    //     </animated.div>

    //     {/* Bottom Menu */}
    //     {/* <animated.div className="flex flex-row w-full justify-center items-center my-2 md:my-4 gap-4 z-10 select-none">
    //       <HomeIcon
    //         className="h-4 w-4 text-zinc-100 cursor-pointer hover:scale-125 transition"
    //         onClick={() => {
    //           scrollTo(landing);
    //         }}
    //       />
    //       <BriefcaseIcon
    //         className="h-4 w-4 text-zinc-100 cursor-pointer hover:scale-125 transition"
    //         onClick={() => {
    //           scrollTo(work);
    //         }}
    //       />
    //       <UserIcon
    //         className="h-4 w-4 text-zinc-100 cursor-pointer hover:scale-125 transition"
    //         onClick={() => {
    //           scrollTo(about);
    //         }}
    //       />
    //     </animated.div> */}
    //   </div>
    // </div>
  );
}

export default App;
