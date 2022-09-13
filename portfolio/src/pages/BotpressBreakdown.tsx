import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import ImgWindow from "../components/ImgWindow";
import Inspector from "../components/Inspector";
import FileExplorer from "../components/FileExplorer";

import designSystem from "../assets/png/botpress/designSystem.png";
import original from "../assets/png/botpress/original.png";
import finalDesign from "../assets/png/botpress/finalDesign.png";
import grid from "../assets/png/grid2.png";

interface OwnProps {
  bpLogo: any;
}

const BotpressBreakdown = ({ bpLogo }: OwnProps) => {
  return (
    <div className="card-content inter">
      <div className="w-full flex flex-col gap-8 items-start">
        <div className="flex flex-row gap-4 ">
          <img src={bpLogo} alt="logo" className="h-8" />
          <h2 className="text-3xl font-semibold">
            Conversation Studio UI Breakdown
          </h2>
        </div>
        <ImgWindow
          img={null}
          comp={
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src={original} />}
              itemTwo={<ReactCompareSliderImage src={finalDesign} />}
              className="border-xl w-full"
            />
          }
          twBG="bg-gradient-to-bl from-indigo-600 to-violet-800 outline outline-1 outline-offset-2"
        />

        <div className="text-base">
          Botpress aims to provide an intuitive editing experience that
          streamlines chatbot building in a low code environment. The studio
          allows you to build, test, and collaborate with your team on a
          singular platform.
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="section-title">my role</h2>
        <div className="text-base">
          I worked with software engineers to design and create a proper node
          editing experience and to expand our new UX vision from to the rest of
          the editor. Our objective was to implement a solution quickly, without
          making major changes to the backend. First, I met with the customer
          success team to understand the user’s perspective. Then, I worked with
          3 engineers to design and prototype potential solutions. Finally, I
          created high fidelity mockups and applied a cohesive style to match
          the rest of the application.
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="section-title">problems and initial approach</h2>
        <div className="text-base">
          Botpress first tasked me with redesigning their Node Editor UI – used
          for visual scripting. The previous method was causing frustration from
          users, due to endless time in pop-up modals. Important info pertaining
          to the modal was blocked by layered overlays. The solution was to
          consolidate all the modals into one and create an editor UI that would
          overlay the center screen. We also added the ability for users to drag
          content blocks inside the edited node.
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full items-center h-[488px] sm:my-8 md:my-20">
        <div className="flex flex-col gap-4">
          <h2 className="section-title">learnings</h2>
          <div className="text-base flex flex-col gap-4">
            I wireframed the experience after conducting discovery with our
            engineers. Along the way, we had some realizations. First, editing
            content could be contained within the inspector window. And third,
            we could achieve the same results without a pop-up overlay. After
            wireframing we set 3 initial goals to direct our thinking.
            <ul className="flex flex-col gap-4">
              <li>• Reduce the number of view changes</li>
              <li>• Remove modals (that were causing the problem)</li>
              <li>
                • Maintain a clear and consistent style that’s intuitive enough
                for a designer and powerful enough for an engineer.
              </li>
            </ul>
          </div>
        </div>

        <div className="morph-shadow relative outline outline-1 outline-offset-2 w-full max-w-full md:max-w-sm p-8 bg-gradient-to-br from-indigo-600 to-violet-800 rounded-xl h-full flex flex-col border-[1px] border-zinc-900 ">
          <img
            src={grid}
            alt="grid"
            className="rotate-90 absolute mix-blend-screen -top-5 left-0 h-full -z-10"
          />
          <Inspector />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 justify-center items-center w-full h-min my-20">
        <div className="outline relative w-full overflow-hidden outline-1 outline-offset-2 max-w-full md:max-w-sm bg-gradient-to-bl from-fuchsia-700 to-indigo-700 shadow-inner rounded-xl h-[320px] flex flex-col border-[1px] border-zinc-900 ">
          <img
            src={designSystem}
            alt="grid"
            className=" object-top m-8 absolute"
          />
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h2 className="section-title">design system</h2>
          <div className="text-base w-full">
            There are many examples of inconsistency throughout the studio as
            well as in the style sheets. I used a very slimmed down version of
            the 7-1 pattern to organize our styles. This combined with component
            css modules really cleaned up the codebase folder structure.
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-6 w-full items-center my-20">
        <div className="flex flex-col gap-4">
          <h2 className="section-title">final design</h2>

          <div className="text-base w-full">
            To make better use of space, I moved the emulator under the
            inspector. For a majority of the time the pertinent information
            while testing a bot is only within the past 2-3 messages. The
            explorer redesign completely removed the need for the nav bar. Now
            the users can navigate to any directory in their bot and view the
            contents without switching the entire view.
            <br />
            <br />
            This UI project taught me a lot about how to manage and design more
            complex, technical systems and features. The small time-frame
            reinforced the practice of reaching a final solution through rapid
            iteration. It gave me lots of practice simplifying experiences down
            to their core purpose.
          </div>
        </div>

        <div className="morph-shadow relative outline outline-1 outline-offset-2 w-full max-w-full h-96 md:max-w-sm p-8 bg-gradient-to-br from-indigo-600 to-violet-800 rounded-xl flex flex-col border-[1px] border-zinc-900 ">
          <img
            src={grid}
            alt="grid"
            className="rotate-90 absolute mix-blend-screen -top-5 left-0 h-full -z-10"
          />
          <FileExplorer />
        </div>
      </div>

      {/* <h2 className="text-sm text-zinc-300">components breakdown</h2> */}

      {/* Inspector */}
      {/* <div className="flex flex-col gap-8 justify-center items-center mb-8 md:mb-20">
        <div className="flex flex-col gap-6 w-full h-full justify-start ">
          <h2 className="section-title ">inspector</h2>
          <p>
            Consilidating the node editing experience to the inspector was a fun
            challenge. Over time and interation we came up with a few ideas. It
            is important for users to easily view the node's actions. Often
            users need to compare 2 actions' values. The old way of doing things
            lead to uneccessary clicks to leave and enter modals now viewing and
            action's content takes 2 clicks from anywhere.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full items-start rounded-2xl ">
          <div className="morph-shadow outline outline-1 outline-offset-2 w-full max-w-full md:max-w-sm p-8 bg-gradient-to-br from-indigo-600 to-violet-800 rounded-xl h-full flex flex-col border-[1px] border-zinc-900 ">
            <Inspector />
          </div>
          <div className="flex flex-col gap-4 w-full text-zinc-900">
            <div className="flex flex-col gap-1 w-full">
              <h3 className="subtitle">Tab Bar</h3>
              <p className="w-full">
                The tab bar allows the user to switch between multiple content
                editing panes at once. A tab is created when a content or action
                is selected for editing. The tab stays in the bar stays in the
                tab bar until it's closed by clicking the red X. Selecting
                another node in the workflow won't close the tab but it will
                swap the pane to the node's properties. When in a content pane a
                user can go back to the nodes properties by clicking the node
                properties button on the left of the tab bar component.
              </p>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <h3 className="subtitle">Inspector Panes</h3>
              <p>
                When a node is selected in the worflow, the inspector displays
                the node properties pane. Node name, description, and 3 action
                lists are displayed. Action lists can be expanded or collapsed
                to save space and are drag and drop reorderable. The inspector
                mirrors the node's design to keep the experience feeling
                familiar.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* File Explorer */}
      {/* <div className="flex flex-col gap-8 justify-center items-center mb-8 md:mb-20">
        <div className="flex flex-col gap-6 w-full h-full justify-start">
          <h2 className="section-title">file explorer</h2>
          <p>
            The explorer redesign completely removed the need for the nav bar
            and replaced ith with a file explorer. Now the user can navigate to
            any directory in their bot and view the contents without having to
            switch editing windows.
          </p>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-8 w-full text-zinc-900">
          <div className="outline outline-1 outline-offset-2 max-w-full md:max-w-sm p-8 bg-gradient-to-br to-rose-600 from-violet-800 shadow-inner rounded-xl h-full flex flex-col border-[1px] border-zinc-900 ">
            <FileExplorer />
          </div>
          <div className="flex flex-col gap-4 w-full text-zinc-900">
            <div className="flex flex-col gap-1 w-full">
              <h3 className="subtitle">Search</h3>
              <p className="w-full">
                The old node search in the workflow area was replaced with an
                omni search bar. This works well with the explorer file tree
                design. A dropdown with application options is displayed with
                clicking the logo icon.
              </p>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <h3 className="subtitle">File Tree</h3>
              <p className="text-base">
                One thing we did in order to make the explorer more intuitive
                and reduce flickering was to remove the need to switch editing
                windows. We noticed a lot of redundency while swapping between
                each editor. Every window had the bottom panel accessible as
                well as the emulator. I then mocked up a few ideas and created
                the studios model layout. Now when editing hooks, the center
                pane opens a code editor tab. The center view to allow for easy
                swapping between editors and access to important information.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default BotpressBreakdown;
