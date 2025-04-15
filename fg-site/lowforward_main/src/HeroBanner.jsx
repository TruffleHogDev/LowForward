import React from "react";
import master from "../src/assets/images/master.png";
import { Link } from "react-router-dom";

export default function HeroBanner() {
  return (
    <section className="w-full bg-gradient-to-r from-[#1f2022] to-[#175e4c] text-white py-16 px-4 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Master Fighting Games, One Round at a Time
        </h1>
        <p className="text-lg text-slate-300 mb-8">
          LowForward focuses on bridging the gap between intermediate and
          advanced players by teaching high-level concepts through the lens of
          Street Fighter 6- though if you're a beginner, you'll still be able to
          get up to speed! The strategies and skills you’ll learn apply to all
          fighting games.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link
            to="/concepts"
            className="bg-emerald-400 hover:bg-emerald-500 text-slate-900 font-bold py-2 px-4 rounded-lg transition duration-200"
          >
            Start Learning
          </Link>
          <Link
            to="/resources"
            className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          >
            Resources & Glossary
          </Link>
        </div>
      </div>
      <div className="w-full md:max-w-md">
        <img
          src={master}
          alt="LowForward - Fight like a master!"
          className="rounded-xl shadow-xl w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
