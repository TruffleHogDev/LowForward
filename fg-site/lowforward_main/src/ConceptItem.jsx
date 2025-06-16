import React from "react";
import { Link } from "react-router-dom";

const ConceptItem = ({ tag, title, details, location }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <ul className="mb-5 mr-4 lg:ml-28">
          <p className="flex flex-wrap gap-4 items-center text-xs md:text-sm">
            <Link to={location}>
              <span className="text-2xl font-semibold text-whitesmoke hover:text-emerald-300 active:text-emerald-400 hover:underline duration-300 rounded-sm max-w-xs">
                {title}
              </span>
            </Link>
            <span className="inline-block px-2 py-1 font-semibold text-white bg-emerald-500 rounded-md">
              {tag}
            </span>
          </p>
          <p className="text-base font-normal text-stone-300">{details}</p>
        </ul>
      </div>
    </div>
  );
};

export default ConceptItem;
