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
        <div className="text-tertiary">Toggle</div>
      </div>
    </>
  );
};

export default Footer;
