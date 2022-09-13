import React from "react";
import shrLogo from "../assets/svg/SHRIconBlack.svg";
import bhdLogo from "../assets/svg/bhdIcon.svg";

const SheridanPrinting = () => {
  return (
    <div className="card-content inter">
      <div className="w-full flex flex-row justify-between items-center gap-6 ">
        <div className="flex gap-4">
          <img src={shrLogo} alt="logo" className="h-7" />
          <img src={bhdLogo} alt="logo" className="h-7" />
        </div>
        <h2 className="text-3xl font-semibold w-full">
          Graphic Design & Printing
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="section-title ">beginning</h2>
        <div className="text-base">
          I started my design journey as a graphic designer at Bighorn Design
          Studio (as well as Sheridan Printing, one of their subsidiaries).
          They’re a large design studio spanning across Wyoming and Montana. I
          worked on a variety of projects. Over time, I learned every aspect of
          the business – from design to printing, technical troubleshooting,
          training new hires, and client relations. I got first-hand experience
          creating powerful and elegant designs, tailored to the business
          problems our clients were trying to solve.
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="section-title">learning</h2>
        <div className="text-base">
          I realized that when dealing with difficult and demanding clients, I
          had a tendency to over-design. Sometimes what a client says and what
          they need are two different things. I learned that communicating
          clearly to diagnose a problem, solve it efficiently, and manage
          expectations along the way is as essential as creating an optimal
          design. I practiced leading with discovery questions and making quick
          mockups of their initial ideas, and then exploring potential areas for
          growth. I learned to be flexible and adaptable to the client's needs
          while also guiding them to make design choices that would help them
          achieve their goals.
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="section-title">the print shop</h2>
        <div className="text-base">
          I became the lead designer and print manager at Sheridan Printing(a
          subsidiary of BigHorn Design), where I trained and collaborated with a
          team of 4 to run the shop. I worked with the head manager to automate
          manual workflows and digitize our design templates. We bought a
          digital printer to increase our printing capacity and expand into
          digital services. I set up repeat printing tasks which cut the project
          setup time in half. I also managed the business card and logo design,
          as well as printing, for many companies around the state – including
          Bighorn Design and various restaurants.
        </div>
      </div>
    </div>
  );
};

export default SheridanPrinting;
