import { Link } from "react-router-dom";
import BnbBanner from "./banners/BnbBanner";
import WhatYoullLearn from "./WhatYoullLearn";

export default function Preface() {
  return (
    <>
      <BnbBanner />
      <div className="container">
        <article className="articleStyles">
          <WhatYoullLearn
            topics={[
              {
                theme: "LowForward",
                what: "What these guides are",
                why: "Find answers to situations that happened to you in-game.",
              },
              {
                what: "What they are not",
                why: "Try out new things- you might find something cool.",
              },
            ]}
          />
          <h2 className="section">How to Pick Up New Tech</h2>
          <p>
            One of the most fun things about learning fighting games is picking
            up things you see, and it's incredibly rewarding to figure out how
            to do it yourself. Cool combos, nasty mixups- basically anything
            that makes you think "Damn, that's sick. I wanna do that, too."
            Labbing things doesn't always have to be about things being
            practical or "realistic"- sometimes you just want to land the
            sauciest looking combo ever or see just how high you can push your
            damage in a vacuum. There are ways, however, you can take those fun
            experiments and implement them into your play in some capacity. In
            this article, I'm going to outline my method for taking something I
            see another player doing and making it my own, starting from landing
            it precisely as I saw it, workshopping it to make it match
            applicable, then figuring out when and how I can actually go for it.{" "}
          </p>
        </article>
      </div>
    </>
  );
}
