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
      <div className="flex flex-col gap-4">
        <h2 className="section-title">beginnings</h2>
        <div className="text-base">
          I start my design journey as a junior graphic designer at Bighorn
          Design Studio, a large design studio spanning across Wyoming and up
          into Montana. I was givin the opportunity to work with a variety of
          clients and projects. I learned how to effectively refine ideas by
          iterating and good communication with customers. As time went on I
          learned the ins and outs the printing process. I did everything from
          print setup to hours of weeding vinyl stickers. Over time I developed
          my skill in creating powerful and elegant solutions to design
          problems.
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="section-title">learning</h2>
        <div className="text-base">
          I also learned to identify when ego was effecting my choices. The
          unfortunate fact is that in a small town there aren't a lot of super
          interesting jobs that come through a print shop. There were a few
          clients I had that don't really think about or see a need for their
          ad, logo, or business card to be designed well. I for the most part in
          reality they don't due to a lack of competition and the fact that most
          of their customers already know them. They are very local people.
          <br />
          <br />I started to notice that due to my inexperience with difficult
          clients I tended to over-design. Trying to give them more they needed
          in the pursuit of transforming their design. I quickly learned that my
          over compensation was causing frustation with between myself and a
          client. Over time I developed the ability to clearly communicate with
          clients and understand their needs. I learned the importance of
          meeting clients where they're at and not where I think they should be.
          I practiced creating exactly what they described first, then brough up
          key points and examples of where I think they could improve on. I
          learned to be flexible and adaptable to the client's needs.
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="section-title">the print shop</h2>
        <div className="text-base">
          Later on I became the lead designer and print manager at Sheridan
          Printing. Here I worked with 3 other employees to run the shop. I
          worked with Maureen, the head manager, to automate lots of the old
          workflows of the past owner. I digitized manual printing plates and
          reorganized the projects into google drive for everyone in the company
          to access when needed. Eventually, we bought a digital printer to
          increase our printing capacity and opportunities. I was able to set up
          repeat printing tasks which cut the project setup time by half. I also
          managed the business card design and printing for many companies
          around the state including Bighorn Design. I managed resturant menus,
          monthly flyers, and brochures.
        </div>
      </div>
    </div>
  );
};

export default SheridanPrinting;
