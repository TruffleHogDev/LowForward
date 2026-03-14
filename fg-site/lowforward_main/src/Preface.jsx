import { Link } from "react-router-dom";
import frameData from "../src/assets/images/frameData.jpg";
import BnbBanner from "./banners/BnbBanner";
import WhatYoullLearn from "./WhatYoullLearn.jsx";
import ConceptSection from "./ConceptSection.jsx";

function Callout({ children }) {
  return (
    <div
      className="my-6 mx-auto rounded-lg border border-emerald-500/40 bg-emerald-500/5 p-4"
      style={{ maxWidth: "65ch" }}
      role="note"
      aria-label="Important note"
    >
      {children}
    </div>
  );
}

export default function Preface() {
  return (
    <>
      <BnbBanner />

      <div className="container">
        <article className="articleStyles">
          <WhatYoullLearn
            topics={[
              {
                theme: "Preface",
                what: "What this site will do",
                why: "The essentials you need to succeed, explained simply.",
              },
              {
                what: "What this site isn't",
                why: "A resource for character specific guides.",
              },
            ]}
          />

          <Callout>
            <p>
              Important note: Much of the content on this site is in the middle
              of a rework. I am training hard and pushing myself to grow as a
              player so that I can make this the best possible fighting game
              resource even past this game's lifespan. I'm working hard on how
              to best achieve that goal- you can expect a large update around
              June 2026.
            </p>
          </Callout>

          <ConceptSection title="What is LowForward for?">
            <p>
              Lowforward has two main goals- to teach newer players how to play
              fighting games, and to help intermediate and advanced players
              elevate their game with tournament-level advice. If you're a
              beginner, you can already find everything you need to get from
              rookie to master right here- it's the second part my training is
              helping me with. By the end of it, LF will be able to guide
              players to 1700 MR and beyond.
            </p>
            <p>
              With that being said, my playstyle, strategies, and training plans
              are not the objectively "best" or most "correct" way to play the
              game, nor is it the only viable winning strategy in fighting
              games. What matters to me is that you have a clear framework to
              evaluate options, practice effectively, and make better decisions
              over time.
            </p>
          </ConceptSection>

          <ConceptSection title="Input Notation and Framedata">
            <p>
              When it comes to discussing inputs, I will for the most part be
              using numpad notation. If you're not familiar with numpad
              notation, it's a fairly standardized way of writing 2D fighting
              game inputs that comes from anime games. If you need it, the
              Dustloop wiki has an in-depth writeup on numpad notation{" "}
              <Link
                to="https://www.dustloop.com/w/Notation"
                className="inlineConceptLink"
              >
                here,
              </Link>{" "}
              but for simplicity's sake, something like "5MP" would mean
              "standing medium punch", and 214LK would mean "quarter circle back
              + light kick".
            </p>

            <figure className="concept-figure">
              <figcaption className="concept-question">
                Brief explanation of framedata
              </figcaption>
              <img
                src={frameData}
                alt="Brief explanation of framedata."
                className="numpadImg w-5/6 sm:w-3/4 md:w-4/6"
                loading="lazy"
              />
              <figcaption className="concept-caption">
                Brief explanation of framedata. Understanding when it's your
                turn will make learning fighting games much easier.
              </figcaption>
            </figure>

            <p>
              As for framedata, you don't necessarily need to know it super in
              depth. What you should know is that if you're plus on block, your
              attacks come out first, and if you're minus (or negative) on
              block, your opponent’s attacks come out first. Knowing when it's
              your turn helps inform your decision making both on offence and
              defence- knowing when you have a guaranteed mixup, or knowing when
              you can disrespect your opponent's pressure, things like that.
            </p>
          </ConceptSection>

          <ConceptSection title="Closing Thoughts">
            <p>
              Finally and most importantly: your progression will have peaks and
              valleys, some days will be more difficult than others, and you
              will lose a lot. It's very normal to lose more often than usual
              when you're trying to work on something specific- it's part of the
              process. A lot of people have a hard time separating their ego
              from their rank, and a good way to combat that is to set a goal
              for the session- something like "I want to hit confirm my lights"
              or "I want to whiff fewer buttons". That way, even when you lose,
              the session can still be an overall success.
            </p>

            <p>
              {" "}
              Strong players also understand that even when they have bad days,
              they will get their points back once they get better at what
              they're working on, so ultimately it really doesn't matter when
              you lose points- they will come back when the time is right. One
              of the worst mistakes you can make is to fixate on your number
              going up- you focus on the wrong things and it impedes your
              progress as a player. You also don't always have to play ranked,
              and you don't have to do long ranked sessions. You can mix it up
              with training mode, replay reviews, or watching high level
              matches; you can engage with the game without forcing yourself to
              do ranked when you absolutely mentally can't. That being said,
              ranked is a great tool for dealing with all kinds of playstyles
              and working on what you're practicing in a low stakes environment.
              Having a healthy, growth-oriented mindset is critical to becoming
              strong. Ranked is nothing to be afraid of, but it's also not the
              only way to improve.
            </p>

            <p>
              Never compare your results to others and do not obsess over your
              stats or else you will never be happy- your only goal in this
              regard should be to be stronger than your past self. Once you have
              the baseline skill, the ranks will come, and you'll easily make up
              for bad days. With all that in mind, you're ready to dig in to the
              rest of the content here. I hope you find it informative.
            </p>
          </ConceptSection>
        </article>
      </div>
    </>
  );
}
