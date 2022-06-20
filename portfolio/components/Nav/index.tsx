import React from "react";

const Nav = () => {
  return (
    <div className="absolute top-6 left-6 z-20 flex flex-row gap-2 transition">
      <a href="#home">
        <button className="btn-nav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            className="eva eva-home-outline"
            fill="inherit"
          >
            <g data-name="Layer 2">
              <g data-name="home">
                <rect width="24" height="24" opacity="0" />
                <path d="M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2h14.22A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44zM10 20v-6h4v6zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15 7 7.19z" />
              </g>
            </g>
          </svg>
        </button>
      </a>
      <a href="#work">
        <button className="btn-nav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            className="eva eva-briefcase-outline"
            fill="inherit"
          >
            <g data-name="Layer 2">
              <g data-name="briefcase">
                <rect width="24" height="24" opacity="0" />
                <path d="M19 7h-3V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-4 2v10H9V9zm-5-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4zM4 18v-8a1 1 0 0 1 1-1h2v10H5a1 1 0 0 1-1-1zm16 0a1 1 0 0 1-1 1h-2V9h2a1 1 0 0 1 1 1z" />
              </g>
            </g>
          </svg>
        </button>
      </a>
      <a href="#about">
        <button className="btn-nav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            className="eva eva-person-outline"
            fill="inherit"
          >
            <g data-name="Layer 2">
              <g data-name="person">
                <rect width="24" height="24" opacity="0" />
                <path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
                <path d="M12 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z" />
              </g>
            </g>
          </svg>
        </button>
      </a>
      <a href="#contact">
        <button className="btn-nav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            className="eva eva-email-outline"
            fill="inherit"
          >
            <g data-name="Layer 2">
              <g data-name="email">
                <rect width="24" height="24" opacity="0" />
                <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z" />
              </g>
            </g>
          </svg>
        </button>
      </a>
    </div>
  );
};

export default Nav;
