import { Link } from "react-router-dom";
import BnbBanner from "./banners/BnbBanner";
import supportImg from "../src/assets/images/supportImg.png";

export default function Support() {
  return (
    <>
      <BnbBanner />
      <div className="container">
        <img
          className="w-4/6 lg:w-2/5 m-auto justify-center"
          src={supportImg}
          alt="Support Us"
        />
        <article className="articleStyles p-3">
          <h2 className="text-2xl font-bold text-center mb-4">
            Support My Mission
          </h2>
          <p className="text-wrap mb-4">
            This website is built with one simple goal: to be a free, accessible
            community resource for everyone. When I was new to fighting games, I
            was extremely frustrated by how hard it was to find information on
            fighting game strategy, from people who knew what they were talking
            about. Even extremely talented players couldn't articulate what they
            were doing in a way that made any sense, and the ones that could
            would often assume a baseline level of competency that I just didn't
            have yet. When I was a weak intermediate player just breaking into
            Celestial for the first time, I couldn't find a single centralized
            resource for explaining advanced strategies or how to really
            approach the nuances behind neutral that would take me to the next
            level. I had to play in several tournaments and lose hundreds of
            games against professionals that were willing to tell me what I did
            wrong and play me until I started to do things correctly that I
            began to make any real progress.
          </p>

          <p>
            I want to bridge that gap in knowledge for all levels of play, and
            condense that wisdom into my articles here so that you are
            guaranteed to learn something, whether this is your first fighting
            game or you've been playing for years and pushing 1600 MR. Your
            support helps me maintain and grow this platform. Whether it's
            feedback, suggestions, or a small donation, every contribution makes
            a difference.
          </p>
          <h4 className="text-center mb-4">
            If you would like to share your thoughts or support this project,
            please feel free to reach out to me through my{" "}
            <Link
              to="https://ko-fi.com/hogdev"
              className="text-emerald-500 underline"
            >
              Ko-fi page
            </Link>
            .
          </h4>
        </article>
      </div>
    </>
  );
}
