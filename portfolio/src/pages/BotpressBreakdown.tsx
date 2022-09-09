import React from "react";

import ImgWindow from "../components/ImgWindow";
import Inspector from "../components/Inspector";
import FileExplorer from "../components/FileExplorer";

import designSystem from "../assets/png/botpress/designSystem.png";

import finalDesign from "../assets/png/botpress/finalDesign.png";

interface OwnProps {
  bpLogo: any;
}

const BotpressBreakdown = ({ bpLogo }: OwnProps) => {
  return (
    <div className="card-content inter">
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
        <h2 className="section-title">problems and initial approach</h2>
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
        <h2 className="section-title">wireframing revalations</h2>
        {/* <ImgWindow
          img={initialWireframe}
          twBG="bg-gradient-to-b from-indigo-600/80 to-indigo-800/80"
        /> */}
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
      {/* Inspector */}
      <div className="flex flex-col gap-8 justify-center items-center ">
        <div className="flex flex-col gap-1 w-full h-full justify-start">
          <h2 className="section-title">inspector</h2>
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
      </div>

      <div className="flex flex-col gap-8 justify-center items-center ">
        <div className="flex flex-col gap-1 w-full h-full justify-start">
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
      </div>

      <div className="flex flex-col md:flex-row gap-12 justify-center items-center w-full">
        <img src={designSystem} alt="grid" className="w-full md:w-1/2" />
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

      <div className="flex flex-col gap-6 w-full ">
        <h2 className="section-title">final design</h2>
        <ImgWindow
          img={finalDesign}
          twBG="bg-gradient-to-b from-indigo-600/80 to-indigo-800/80"
        />
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
