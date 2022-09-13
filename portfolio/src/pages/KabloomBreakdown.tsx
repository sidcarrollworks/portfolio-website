import React, { CSSProperties } from "react";
import Carousel from "nuka-carousel";

import kabloomLogo from "../assets/png/kabloomLogo.png";
import bookingFlow from "../assets/png/kabloom/bookingFlow.png";
import grid from "../assets/png/grid2.png";
import frame1 from "../assets/png/kabloom/frame1.png";
import frame2 from "../assets/png/kabloom/frame2.png";
import frame3 from "../assets/png/kabloom/frame3.png";
import frame4 from "../assets/png/kabloom/frame4.png";

interface DefaultControlsConfig {
  containerClassName?: string;
  nextButtonClassName?: string;
  nextButtonStyle?: CSSProperties;
  nextButtonText?: string;
  pagingDotsClassName?: string;
  pagingDotsContainerClassName?: string;
  pagingDotsStyle?: CSSProperties;
  prevButtonClassName?: string;
  prevButtonStyle?: CSSProperties;
  prevButtonText?: string;
}

const controlsConfig: DefaultControlsConfig = {
  nextButtonText: ">",
  prevButtonText: "<",
  pagingDotsStyle: {
    fill: "#fff",
    margin: "0 2px",
    border: "1px solid #4f46e5",
    borderRadius: "50%",
  },
  nextButtonStyle: {
    borderRadius: "0.5rem",
    color: "#4f46e5",
    height: "28px",
    width: "40px",
    lineHeight: "14px",
    fontWeight: "bold",
    boxShadow:
      "0 4px 6px -1px rgb(0 0 0 / 0.15), 0 2px 4px -2px rgb(0 0 0 / 0.15)",
    padding: "0.25rem",
    textAlign: "center",
    backgroundColor: "#fff",
    backdropFilter: "blur(4px)",
    transform: "translateX(50%)",
  },
  prevButtonStyle: {
    borderRadius: "0.5rem",
    color: "#4f46e5",
    height: "28px",
    width: "40px",
    lineHeight: "14px",
    fontWeight: "bold",
    boxShadow:
      "0 4px 6px -1px rgb(0 0 0 / 0.15), 0 2px 4px -2px rgb(0 0 0 / 0.15)",
    padding: "0.25rem",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 1)",
    backdropFilter: "blur(4px)",
    transform: "translateX(-50%)",
  },
};

const KabloomBreakdown = () => {
  return (
    <div className="card-content inter">
      <div className="w-full flex flex-col gap-8 items-start justify-center">
        <img src={kabloomLogo} alt="logo" className="h-6" />
        <h2 className="text-3xl font-semibold">Booking Portal</h2>
      </div>
      <div className="text-base">
        Born out of the pandemic, Kabloom provides a platform for remote teams
        to connect through themed virtual events. Due to an influx of bookings,
        I was assigned to lead the design and development of a custom booking
        solution.
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="section-title">my role</h2>
        <div className="text-base">
          I worked with a PM to architect, design and build an automated booking
          solution and process sales directly on the website. With self-serve we
          reduced our cost of customer acquisition from $580 to $375. I also
          designed various graphics for the website, product pages, and web app
          user experiences. I developed the self-serve app using React.js, Nuxt,
          Firebase, and Stripe, integrated into Hubspot for automated deal
          creation for each new booking.
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="section-title">design</h2>
        <div className="relative outline outline-1 outline-offset-2 w-full max-w-full p-10 bg-gradient-to-r to-indigo-500 from-violet-800 rounded-xl h-full flex flex-col border-[1px] border-zinc-900 ">
          <img
            src={grid}
            alt="grid"
            className="absolute mix-blend-screen top-0 left-0"
          />
          <Carousel
            defaultControlsConfig={controlsConfig}
            className="w-full h-min rounded-xl max-h-[520px] shadow-xl"
          >
            <img src={frame1} className="-translate-y-8" alt="frame1" />
            <img src={frame2} className="-translate-y-2" alt="frame2" />
            <img src={frame3} className="-translate-y-4" alt="frame3" />
            <img src={frame4} className="-translate-y-1" alt="frame4" />
          </Carousel>
        </div>

        <div className="text-base">
          I followed a simple design pattern seen in many event booking and
          payment flows. All booking info was displayed on the left-hand side
          while user info was collected on the right.
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="section-title">context</h2>
        <div className="text-base">
          Throughout the pandemic remote work became the norm. This created a
          need for team building that could be done from home. Kabloom was
          successfully filling the need, but was bottlenecked by the manual
          labor hours required to process new bookings. We had a heavy flow of
          inbounds that were converting at a low rate, as account managers
          didn’t have enough time to meet the demand of new bookings.
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="section-title">results</h2>
        <div className="text-base">
          <ul className="flex flex-col gap-4">
            <li>
              • With the help of self-serve, we were able to increase
              top-of-line revenue by over 3x in one year – from $260k in 2020 to
              $915k in 2021
            </li>
            <li>• Generated an average of ~$7800 in revenue per month</li>
            <li>
              • Improved Inbounds to Closed Won CVR to 51% (2021) from 38%
              (2020)
            </li>
            <li>• Reduced cost per customer acquisition from $580 to $375</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <img src={bookingFlow} alt="grid" className="w-full" />
        <h2 className="section-title">research and planning</h2>
        <div className="text-base">
          I wanted to understand our high-level strategy so we could design
          accordingly. I met with internal stakeholders in sales, event
          planning, and leadership to identify our key objectives and ideal
          personas. I created a flow chart to visualize the app’s architecture
          and data flow. I then designed the wireframe that told the story of
          the user’s journey from end-to-end.
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="section-title">architecture</h2>
        <div className="text-base">
          <ul className="flex flex-col gap-4">
            <li>
              • A tight integration across systems was critical, given that this
              was the point of transaction. We wanted a scalable solution that
              could meet the business’ long-term plans to build a platform
              marketplace.
            </li>
            <li>
              • I chose Nuxt and TailwindCSS for the frontend frameworks to
              speed up our time to launch. I have a lot of experience working
              with Vue, which helped reduce the learning curve.
            </li>
            <li>
              • We built the backend in Firebase for simplicity and ease-of-use.
              We needed something that could be implemented quickly with one
              developer. Firebase provides tools for authentication, database
              management, and hosting. The pricing was reasonable for a startup
              on a tight budget. Firebase made handling backend logic and
              security simple as well. Event data was stored in Firestore, a
              no-sql database. This allowed admins and sales reps to view and
              change event data without requiring technical know-how.
            </li>
            <li>
              • Upon payment a Hubspot deal was automatically created, and the
              user was sent down an email automation flow to notify an account
              manager, send a confirmation email, and create followup tasks for
              the event planning team.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-12 justify-center items-center">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-min grid-flow-row gap-8">
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
        </div> */}

        <div className="flex flex-col gap-2">
          <h2 className="section-title">key learnings</h2>
          <div className="text-base">
            <ul className="flex flex-col gap-4">
              <li>
                • When we first launched the self-serve experience we learned
                from customer interviews that the long form at the beginning
                came off tedious. Many users that visited the website didn’t
                make it to the booking page. Reducing the number of steps to
                arriving at self-serve became our next priority.
              </li>
              <li>
                • The importance of progressive disclosure was apparent as well.
                Users didn’t like having to input contact info before viewing a
                price quote. A potential improvement would have been to show the
                price estimator upfront, so they can adjust their choices to
                find something within their budget.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KabloomBreakdown;
