import React from "react";
import HomeItem from "./HomeItem.jsx";
import Logo from "../src/assets/images/Logo.png";
import meditation from "../src/assets/images/meditation.png";
import master from "../src/assets/images/master.png";

const HomeNav = () => {
  return (
    <div id="pages" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <p className="text-2xl font-bold text-center text-[whitesmoke]">
        Your resource for learning how to play fighting games at a high level.
      </p>
      <img
        className="w-full max-w-screen-md h-600 p-12 object-cover justify-center"
        src={master}
        alt="/"
      />
      <div className="grid sm:grid-cols-2 gap-12 object-contain">
        <HomeItem
          img={meditation}
          title="Need to brush up on your fighting game terminology or need some character resources?"
          page="https://lowforward.com/#/resources"
        />
        <HomeItem
          img={Logo}
          title="Start your path to mastery with my comprehensive articles, designed to help you no matter your skill level."
          page="https://lowforward.com/#/concepts"
        />
      </div>
    </div>
  );
};

export default HomeNav;
