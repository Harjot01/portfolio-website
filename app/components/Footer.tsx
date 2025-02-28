import React from "react";

const Footer = () => {
  return (
    <>
      <hr className="border-t border-tertiary" />
      <div className="flex justify-between -mt-4">
        <div className="flex gap-x-2 text-tertiary">
          <span>©</span>
          <h1>2025</h1> <span>|</span> <h1>Harjot Singh</h1>
        </div>
        <div className="flex flex-row gap-x-4 text-tertiary">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-black group-hover:dark:stroke-white transition-colors duration-300 ease-in-out"
            >
              {" "}
              <circle cx="12" cy="12" r="5"></circle>{" "}
              <line x1="12" y1="1" x2="12" y2="3"></line>{" "}
              <line x1="12" y1="21" x2="12" y2="23"></line>{" "}
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>{" "}
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>{" "}
              <line x1="1" y1="12" x2="3" y2="12"></line>{" "}
              <line x1="21" y1="12" x2="23" y2="12"></line>{" "}
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>{" "}
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>{" "}
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-black group-hover:dark:stroke-white transition-colors duration-300 ease-in-out"
            >
              {" "}
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>{" "}
            </svg>{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
