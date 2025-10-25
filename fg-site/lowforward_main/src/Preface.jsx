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
              Important note: this and every other article on this site is
              currently in the middle of a major rework based on reader
              feedback- more succinct explanations, less wordy articles,
              smoother page layout, and a stronger focus on bridging the
              intermediate to advanced gap coming Soon™. I want this to be a
              resource that lasts beyond SF6's lifespan and the quality of the
              content I write must reflect that.
            </p>
          </Callout>

          <ConceptSection title="What is LowForward for?">
            <p>
              LowForward is primarily designed for two things: Helping newer
              players know how to progress as a fighting game player, and as a
              desperately needed resource to learn about fighting game theory. I
              think that fighting games tend to be seen as a very difficult
              genre to learn and improve in, and I want to challenge that
              assumption by breaking down how to think about fighting game
              strategy and how to use those concepts to succeed with any
              character in any game. If you're familiar with coaching or
              "learning how to learn" in sports or just about any other hobby,
              you'll find a lot of parallels here.
            </p>
            <p>
              With that being said, my playstyle, strategies, and training plans
              are not the objectively "best" or most "correct" way to play the
              game, nor is it the only viable winning strategy in fighting
              games. I will do my best to present the strategies and advice I
              give in a neutral way that helps you incorporate them into your
              own gameplay, but if you try something and it isn't working for
              you, that's okay— trust the process, progress will be gradual and
              more than likely slow for a while. What matters is that you have a
              clear framework to evaluate options, practice effectively, and
              make better decisions over time.
            </p>
          </ConceptSection>

          <ConceptSection title="Input Notation and Framedata">
            <p>
              When it comes to discussing inputs, I will for the most part be
              using numpad notation. If you're not familiar with numpad
              notation, it's a fairly standardized way of writing 2D fighting
              game inputs. If you need it, the Dustloop wiki has an in-depth
              writeup on numpad notation{" "}
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
              will lose. A lot. You might drop a few games when practicing
              something that you might have otherwise won- this is normal, and
              it's okay. It's one thing to be able to do something in training
              mode and another entirely to be able to do it in a live game with
              someone who's actively trying to punch you in the face. You're
              basically trading a short-term win for long-term consistency, and
              you should embrace this growth-oriented approach to wins, losses,
              and personal progression in the genre in general. After all, even
              if you miss an opportunity to try the new thing you're working on
              and you recognize it, that's still progress! Losing is part of
              everyone's journey, and so is an uneven path of progression.
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
