import React from "react";

const HomeItem = ({ img, title, page }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-full shadow rounded-xl">
      <img
        src={img}
        alt="LowForward"
        className="rounded-xl opacity-10 w-full h-full object-contain" // Set opacity to 0.1 by default
      />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] object-scale-down">
        <h3 className="text-2xl font-bold text-whitesmoke tracking-wider text-center">
          {title}
        </h3>
        <a href={page}>
          <p className="text-center p-3 rounded-lg drop-shadow-lg bg-whitesmoke hover:bg-gradient-to-l active:bg-gradient-to-r active:from-emerald-300 active:to-slate-300 hover:from-emerald-200 hover:to-slate-200 text-gray-700 hover:text-gray-800 active:text-slate-800/95 font-bold cursor-pointer text-lg duration-200">
            Explore Resources
          </p>
        </a>
      </div>
    </div>
  );
};

export default HomeItem;
