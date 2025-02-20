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
            Support Our Mission
          </h2>
          <p className="text-wrap mb-4">
            This website is built with a simple goal: to be a free, accessible
            community resource for everyone. Learning should never be hidden
            behind a paywall, and I am committed to keeping this platform open
            and available to all.
          </p>
          <p className="text-wrap mb-4">
            Your support helps me maintain and grow this platform. Whether it's
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
          <p className="text-center text-sm">
            Thank you for being part of this community. Together, we can create
            something truly valuable.
          </p>
        </article>
      </div>
    </>
  );
}
