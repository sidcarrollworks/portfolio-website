import React from "react";
import shrLogo from "../assets/svg/SHRIconBlack.svg";
import bhdLogo from "../assets/svg/bhdIcon.svg";

const SheridanPrinting = () => {
  return (
    <div className="card-content">
      <div className="w-full flex flex-col gap-6 ">
        <div className="flex gap-4">
          <img src={shrLogo} alt="logo" className="h-10" />
          <img src={bhdLogo} alt="logo" className="h-10" />
        </div>
        <h2 className="text-3xl font-semibold w-full">
          Graphic Design & Printing
        </h2>
      </div>
      <div className="text-base">
        I start my design journey as a junior graphic designer at Bighorn Design
        Studio, a large design studio spanning across Wyoming and up into
        Montana. I was givin the opportunity to work with a variety of clients
        and projects. I learned how to effectively refine ideas by iterating and
        good communication with customers. As time went on I learned more about
        the printing process. I did everything from print setup to hours of
        weeding vinyl stickers. Over time I developed my skill in creating
        powerful and elegant solutions to design problems.
        <br />
        <br />
        Later on I became the lead designer and print manager at Sheridan
        Printing. Here I worked with 3 other employees to run the shop. I worked
        with Maureen, the head manager, to automate lots of the old workflows of
        the past owner. I digitized manual printing plates and reorganized the
        projects into google drive for everyone in the company to access when
        needed. Eventually, we bought a digital printer to increase our printing
        capacity and opportunities. I was able to set up repeat printing tasks
        which cut the project setup time by half. I also managed the business
        card design and printing for many companies around the state including
        Bighorn Design. I managed resturant menus, monthly flyers, and
        brochures.
      </div>
    </div>
  );
};

export default SheridanPrinting;
