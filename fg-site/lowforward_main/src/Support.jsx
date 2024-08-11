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
        ></img>
        <article className="articleStyles p-3">
          <p className="text-wrap">
            This website is first and foremost built to be a free community
            resource. It will never be paywalled as I strongly believe in
            accessible learning material for anyone who wants it.
          </p>
          <h4 className="text-pretty mx-8 text-center">
            That being said, if you have feedback, article suggestions for the
            website, or wish to offer your support, feel free to reach out to me
            through my <Link to="https://ko-fi.com/hogdev"> Ko-fi.</Link>
          </h4>
        </article>
      </div>
    </>
  );
}
