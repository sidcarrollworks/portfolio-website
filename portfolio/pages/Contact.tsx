import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-[100vw] h-[100vh] p-8 col-start-1 col-span-1 row-start-1 row-span-1 relative flex justify-center items-center scroll-align-start"
    >
      <div className="contactNode bg-white border-[1px] border-zinc-900 rounded-xl flex flex-row p-10 gap-12 node-shadow w-[600px]">
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-semibold">Contact</h2>

          <ul className="flex flex-col gap-3">
            <li className="flex flex-row gap-2">
              <div>[]</div>
              <span>sidcarrollworks@gmail.com</span>
            </li>
            <li className="flex flex-row gap-2">
              <div>[]</div>
              <span>https://www.linkedin.com/in/sidcarrollworks</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
