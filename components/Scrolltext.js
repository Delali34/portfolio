import React from "react";

/**
 * Renders a sticky header with a scrolling "WELCOME TO MY PORTOFOLIO" text.
 * The text is displayed in a large font and is centered within a wrapper div.
 * The text is repeated multiple times to create a continuous scrolling effect.
 */
const Scrolltext = () => {
  return (
    <div className="text-wrapper font-hero top-0 sticky z-10">
      <h1 className="uppercase text-wrapper2 lg:text-[30px] text-[20px]">
        WELCOME TO MY PORTOFOLIO
      </h1>
      <h1 className="uppercase text-wrapper2 lg:text-[30px] text-[20px]">
        WELCOME TO MY PORTOFOLIO
      </h1>
      <h1 className="uppercase text-wrapper2 lg:text-[30px] text-[20px]">
        WELCOME TO MY PORTOFOLIO
      </h1>
      <h1 className="uppercase text-wrapper2 lg:text-[30px] text-[20px]">
        WELCOME TO MY PORTOFOLIO
      </h1>
    </div>
  );
};

export default Scrolltext;
