import BP from "./assets/png/BP.png";
import Kabloom from "./assets/png/Kabloom.png";
import SHRPrint from "./assets/png/SHRPrint.png";
import grid from "./assets/png/grid2.png";

import BHDLogo from "./assets/svg/BHDLogo.svg";
import logo from "./logo.svg";
import enterText from "./assets/svg/Enter.svg";
import BPIcon from "./assets/svg/BPIcon.svg";
import KBIcon from "./assets/svg/KBIcon.svg";
import SHRIcon from "./assets/svg/SHRIcon.svg";
import bpLogo from "./assets/svg/bpLogo.svg";

import Mountains from "./assets/svg/Mountains";
import Nodes from "./assets/svg/Nodes";

import laptopAnimation from "./assets/lottie/laptopAnimation.json";

const cards = [
  {
    name: "Kabloom Booking",
    color: "#f43f5e",
    color2: "#f43f5e",
    coverImg: KBIcon,
    ref: Card1,
    lottie: laptopAnimation,
    openCard: isCardOpen,
    content: (
      <div className="w-full flex flex-row gap-6 items-center">
        {bpLogo ? <img src={bpLogo} alt="logo" className="h-12" /> : null}
        <h2 className="text-3xl font-semibold">Kabloom Booking UI Breakdown</h2>
      </div>
    ),
  },

  {
    name: "Sheridan Printing",
    color: "#10B981",
    color2: "#10B981",
    coverImg: SHRIcon,
    ref: Card2,
    background: <Mountains />,
    openCard: isCardOpen,
    content: (
      <div className="w-full flex flex-row gap-6 items-center">
        {bpLogo ? <img src={bpLogo} alt="logo" className="h-12" /> : null}
        <h2 className="text-3xl font-semibold">Sheridan Printing</h2>
      </div>
    ),
  },
  {
    name: "Botpress Studio UI",
    color: "#3730a3",
    color2: "#171718",
    coverImg: BPIcon,
    ref: Card3,
    logo: bpLogo,
    background: <Nodes />,
    openCard: isCardOpen,
    content: (
      <div className="w-full flex flex-row gap-6 items-center">
        {bpLogo ? <img src={bpLogo} alt="logo" className="h-12" /> : null}
        <h2 className="text-3xl font-semibold">Botpress Studio UI Breakdown</h2>
      </div>
    ),
  },
];

export default cards;
