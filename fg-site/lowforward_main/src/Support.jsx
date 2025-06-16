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
              My Mission
            </h2>

            <h3>
              This website is designed to help people of all skill levels better
              understand fighting game theory. When I started getting serious
              about fighting games, I was extremely frustrated by how hard it
              was to find good, straightforward answers to questions like "How
              do I poke?" or "How do I go for throws if they keep hitting me?"
            </h3>

            <h3>
              I want to help smoothen the learning curve when it comes to
              understanding fighting games on a deeper level by teaching you how
              to answer those kinds of questions. Your support helps me make
              LowForward the best community resource it can possibly be.
            </h3>

            <h4 className="text-xl text-center mt-10">
              If you’d like to support the project, visit my{" "}
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
