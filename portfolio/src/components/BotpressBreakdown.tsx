import React, { useCallback, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

import grid from "../assets/png/grid2.png";
import initialWireframe from "../assets/png/botpress/initialWireframe2.png";
import designSystem from "../assets/png/botpress/designSystem.png";
import formKit from "../assets/png/botpress/formKit.png";
import inspector from "../assets/png/botpress/inspector.png";
import fileExplorer from "../assets/png/botpress/fileExplorer.png";
import finalDesign from "../assets/png/botpress/finalDesign.png";

interface OwnProps {
  bpLogo: any;
}

const GROW_MAP: any = {
  default: "1",
  grow: "1.05",
  expand: "1.4",
};

const BotpressBreakdown = ({ bpLogo }: OwnProps) => {
  const [grow, setGrow] = useState(GROW_MAP.default);
  const imgStyle = useSpring({
    to: {
      transform: `scale(${grow})`,
    },
    config: {
      mass: 1.5,
      tension: 700,
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
    <div className=" h-full py-24 flex flex-col gap-20 max-w-4xl self-center overflow-x-hidden p-4 md:px-12 shadow-inner">
      <div className="w-full flex flex-col gap-6 items-start">
        <img src={bpLogo} alt="logo" className="h-12" />
        <h2 className="text-3xl font-semibold">
          Conversation Studio UI Breakdown
        </h2>
      </div>
      <div className="text-base">
        Botpress aims to provide an intuitive editing experience that
        streamlines chatbot building in a low code environment. The studio
        allows you to build, test, and collaborate with your team on a singular
        platform.
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="section-title">my role</h2>
        <div className="text-base">
          While usuable, the current design suffered a few noticable bottlenecks
          when creating bots. My role was to work with the engineers to design
          and create a proper node editing experience and to expand our new UX
          vision from to the rest of the editor. I worked on a team of 3 other
          engineers as the sole designer. I conducted user research to inform my
          design decisions. Then, worked with the rest of the team to prototype
          various solutions that we could implement quickly all without making
          major changes to the backend. Finally created high fidelity mockups
          and applied our cohesive style to the rest of the application as well
          as mocked up future product features.
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="section-title">problems and inital approach</h2>
        <div className="text-base">
          I was approached by an engineer at Botpress to assist with their node
          editor UI problem. The current method of editing nodes was causing a
          lot of frustration from users do to endless time in pop-up modals.
          Important information pertaining to the modal was blocked by the
          layered overlays. Their initial approach was to consolidate all the
          modals into one. An editor UI would overlay the workflow screen and
          the use could leave at any time by clicking outside the edited node.
          This solution added the ability to drag the content blocks inside the
          editor node. The inspector would provide the ui to edit the node’s
          properties.
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 bg-gradient-to-b from-indigo-600/80 to-indigo-800/80 rounded-xl md:rounded-2xl p-3 md:p-6 items-center justify-center shadow-inner-xl relative ">
          <img
            src={grid}
            alt="grid"
            className="rotate-90 absolute mix-blend-screen translate-x-1/2 h-full"
          />
          <img
            src={initialWireframe}
            alt="initial wireframe"
            className="z-10"
          />
        </div>
        <h2 className="section-title">wireframing revalations</h2>
        <div className="text-base">
          I wireframed the exprience while discussing it Nick Boutboul, the
          engineer. Along the way we had some realizations. First, editing
          content could contained to the inspector. Second, editing should be
          contained to the right half of the screen, and third we could achieve
          the same results without a pop up overlay. After wireframing we set 3
          inital goals to direct our thinking. Reduce flickering and use modals
          throughout the experience Keep a clear and consistant style Intuitive
          enough for a designer and powerful enough for an engineer
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="section-title">addressing the issues</h2>
        <div className="text-base">
          Over the next week we developed the solution. During this time I met
          with members of the customer success team to pinpoint some other pain
          points users and themselves have. I also presented our revised
          solution for feedback. A key issue they brought up was the difficulty
          seeing what a complex node was doing in at a quick glance.
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-12 justify-center items-center">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h2 className="section-title">node editing</h2>
          <div className="text-base">
            Created an inspector UI component kit. This makes it easier for us
            to create the inspector UI and gives clients the ability to easily
            create their own custom skill nodes while maintaining a design
            standard.
          </div>
        </div>
        <img src={inspector} alt="grid" className="w-full md:w-1/2" />
      </div>
      <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
        <img src={formKit} alt="grid" className="w-full md:w-1/2" />
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h2 className="section-title">inspector ui kit</h2>
          <div className="text-base">
            Created an inspector UI component kit. This makes it easier for us
            to create the inspector UI and gives clients the ability to easily
            create their own custom skill nodes while maintaining a design
            standard.
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-12 justify-center items-center">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h2 className="section-title">file explorer</h2>
          <div className="text-base">
            Created an inspector UI component kit. This makes it easier for us
            to create the inspector UI and gives clients the ability to easily
            create their own custom skill nodes while maintaining a design
            standard.
          </div>
        </div>
        <img src={fileExplorer} alt="grid" className="w-full md:w-[40%]" />
      </div>
      <div className="flex flex-col md:flex-row gap-12 justify-center items-center w-full">
        <img src={designSystem} alt="grid" className="w-full md:w-1/2" />
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h2 className="section-title">design system</h2>
          <div className="text-base w-full">
            There are many examples of inconsistency throughout the studio as
            well as in the style sheets. I used a very slimmed down version of
            the 7-1 pattern to organize our styles. This combined with component
            css modules really cleaned up the codebase folder structure and made
            it easy to navigate.
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full ">
        <div className="flex flex-col bg-gradient-to-b from-indigo-600/80 to-indigo-800/80 rounded-xl md:rounded-2xl p-3 md:p-6 items-center justify-center shadow-inner-xl relative ">
          <img
            src={grid}
            alt="grid"
            className="rotate-90 absolute mix-blend-screen translate-x-1/2 h-full"
          />
          <animated.img
            src={finalDesign}
            alt="initial wireframe"
            className="z-10 cursor-pointer"
            style={imgStyle}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <h2 className="section-title">final design</h2>
        <div className="text-base w-full">
          In order to make better use of space I moved the emulator under the
          inspector. When the panels were next to each other you'd have a lot of
          unused space. For a majority of the time the pertinent information
          while testing a bot is only within the past 2-3 messages.
          <br />
          <br />
          This UI project taught me a lot about how to manage and design more
          complex systems and features. The small time frame reinforced the
          practice of rapid iteration then editing down to the best solution. It
          gave me lots of practice simplifying experiences down to their core
          purpose.
        </div>
      </div>
    </div>
  );
};
export default BotpressBreakdown;
