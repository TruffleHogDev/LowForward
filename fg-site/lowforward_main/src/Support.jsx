import { Link } from "react-router-dom";
import supportImg from "../src/assets/images/supportImg.png";

export default function Support() {
  return (
    <>
      <section className="text-white py-16 px-4 md:px-12">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex justify-center mb-8">
            <img
              className="w-4/5 max-w-md rounded-xl shadow-xl"
              src={supportImg}
              alt="Support my work!"
            />
          </div>
          <div className="prose prose-invert max-w-none text-slate-300">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
              Support My Mission
            </h2>

            <p>
              This website is built with one simple goal: to be a free,
              accessible community resource for everyone. When I was new to
              fighting games, I was extremely frustrated by how hard it was to
              find information on fighting game strategy, from people who knew
              what they were talking about.
            </p>

            <p>
              Even extremely talented players couldn't articulate what they were
              doing in a way that made sense. Those who could often assumed a
              baseline level of knowledge I just didn't have yet. When I was a
              weak intermediate player just breaking into Celestial for the
              first time, I couldn’t find a centralized resource for explaining
              advanced strategy or the nuances of neutral play.
            </p>

            <p>
              I had to learn the hard way—through tournaments, hundreds of
              losses, and advice from pros who took the time to play me until
              things began to click. That experience shaped this project.
            </p>

            <p>
              I want to bridge that knowledge gap at every level of play. My
              goal is to condense that hard-earned wisdom into these articles,
              so you always leave with something valuable—whether you're brand
              new or grinding toward 1600 MR.
            </p>

            <p>
              Your support helps me maintain and grow this platform. Whether
              it’s feedback, suggestions, or a small donation, every
              contribution makes a difference.
            </p>

            <h4 className="text-xl text-center mt-10">
              If you’d like to support the project or share your thoughts, visit
              my{" "}
              <Link
                to="https://ko-fi.com/hogdev"
                className="text-emerald-400 underline hover:text-emerald-300"
              >
                Ko-fi page
              </Link>
              .
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}
