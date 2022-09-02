import React from "react";

import kabloomLogo from "../assets/png/kabloomLogo.png";
import bookingFlow from "../assets/png/kabloom/bookingFlow.png";
import frame1 from "../assets/png/kabloom/frame1.png";
import frame2 from "../assets/png/kabloom/frame2.png";
import frame3 from "../assets/png/kabloom/frame3.png";
import frame4 from "../assets/png/kabloom/frame4.png";

const KabloomBreakdown = () => {
  return (
    <div className=" h-full py-24 flex flex-col gap-20 max-w-4xl self-center overflow-x-hidden p-4 md:px-12 shadow-inner">
      <div className="w-full flex flex-col gap-8 items-start justify-center">
        <img src={kabloomLogo} alt="logo" className="h-6" />
        <h2 className="text-3xl font-semibold">Booking Portal</h2>
      </div>
      <div className="text-base">
        Born out of the pandemic, Kabloom aims to provide a platform for people
        to connect through themed virtual events. Due to an influx of bookings I
        was contacted to assist in the design and development of a custom
        booking solution.
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="section-title">my role</h2>
        <div className="text-base">
          I, along with a project manager architected an automated booking
          solution to relieve some stress from account admins. I created various
          graphics for the website. Redesigned product pages as well as a web
          application for their future product goals. Developed the web
          application as well.
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="section-title">context</h2>
        <div className="text-base">
          Throughout the pandemic remote work became the norm. This created a
          need for team building that could be done from home. Kabloom was
          formed to fill the need. After a successful launch it was becoming
          harder to manage all the event bookings. Their sales people were
          selling events left and right leaving the account admins with too much
          work to keep up with. Since all sales were B2B through sales people
          they presented the idea of an automated booking solution. This would
          allow customers to cut out the middle man and book events directly.
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <img src={bookingFlow} alt="grid" className="w-full" />
        <h2 className="section-title">research and planning</h2>
        <div className="text-base">
          Before hopping into the design process I wanted to understand the how
          everything was going to connect together. I created a flow chart to
          help visualize the different endpoints and how they would connect. I
          also created a wireframe to help visualize the different pages and how
          they would connect together. Events needed to be created and managed
          in hubspot while the payment was handled by stripe. Another thing they
          mentioned wanting was the ability to scale up into an event
          marketplace.
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="section-title">course of action</h2>
        <div className="text-base">
          I decided to build the booking system out on Firebase. Due to my lack
          of experience in backend Firebase provided a lot of tools to help with
          authentication, database management, and hosting. The pricing was also
          very reasonable. I chose Nuxt for the frontend framework because of my
          familiarity with Vue. I also chose to use Tailwind for the styling.
        </div>
      </div>

      <div className="flex flex-col gap-12 justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-min grid-flow-row gap-8">
          <img
            src={frame1}
            alt="frame1"
            className="w-full rounded-xl shadow-lg min-w-[300px] -rotate-3"
          />
          <img
            src={frame2}
            alt="frame1"
            className="w-full rounded-xl shadow-lg  min-w-[300px] rotate-6 translate-x-3"
          />
          <img
            src={frame3}
            alt="frame1"
            className="w-full rounded-xl shadow-lg  min-w-[300px] -rotate-6 -translate-x-4"
          />
          <img
            src={frame4}
            alt="frame1"
            className="w-full rounded-xl shadow-lg  min-w-[300px] rotate-3"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="section-title">design</h2>
          <div className="text-base">
            The booking flow followed a simple design pattern seen in many other
            payment flows. All booking info was displayed on left hand side
            while user info was collected on the right. One thing I would've
            changed looking back on it is the way the users info was collected.
            After testing it was very apparent the larger number of fields was a
            bit overwhelming. I would've liked to have a more progressive
            disclosure pattern where the user would only see the fields they
            needed to fill out. Even though the company field isn't required at
            first it ends up being required if they end up booking. It really
            ended up being visual exhausting.
            <br />
            <br />I also would've liked to make the price estimate available
            right from the git go. Having 3 required fields of personal data was
            a turn off to the user.
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="section-title">development</h2>
          <div className="text-base">
            Firebase made handling the backend logic as well as security very
            simple. Event data was stored in Firestore which is a no-sql
            database. This allowed the owners to access and chanage event data
            when needed without being too confusing. After collecting their
            booking info a hubspot deal was created with the information
            provided, then sent down a hubspot automation flow to notify the
            correct people and send out a confirmation email.
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="section-title">what i learned</h2>
          <div className="text-base">
            When we first launched the self serve experience we learned the long
            user form at the beginning intimmidated users. And most of the users
            that visited the website never even reached the booking page.
            Overall website traffic was falling as well. The importance of
            progressive disclourse became very apparent. Users were overwhelmed
            with being required to give their contact info before veiwing
            prices. What I would've done instead would've shown the pricing
            estimator upfront so they can play around with events. By not doing
            this we closed ourself off to potential users that would've gladly
            givin their information if they knew what they were getting.
          </div>
        </div>
      </div>
    </div>
  );
};

export default KabloomBreakdown;
