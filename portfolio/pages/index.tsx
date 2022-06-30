import React from "react";
import type { NextPage } from "next";

import Landing from "./Landing";
import Work from "./Work";
import About from "./About";
import Contact from "./Contact";
import Nav from "../components/Nav";
import { Project1, Project2, Project3 } from "./projects/index";

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <div className="bg-zinc-100 w-full h-full overflow-hidden relative scroll-smooth scroll-both z-0">
        <div className="grid grid-cols-[auto_auto_auto] grid-rows-[auto_auto_auto] z-0">
          <Landing />
          <About />
          <Contact />
          <Work />
          <Project1 />
          <Project2 />
          <Project3 />
        </div>
      </div>
    </>
  );
};

export default Home;
