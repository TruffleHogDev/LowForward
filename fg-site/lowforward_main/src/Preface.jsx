import { Link } from "react-router-dom";
import frameData from "../src/assets/images/frameData.jpg";
import BnbBanner from "./banners/BnbBanner";
import WhatYoullLearn from "./WhatYoullLearn.jsx";
import ConceptSection from "./ConceptSection.jsx";

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

          <h4>
            Important note: this and every other article on this site is
            currently in the middle of a major rework based on reader feedback-
            more succinct explanations, less wordy articles, smoother page
            layout, and a stronger focus on bridging the intermediate to
            advanced gap coming Soon™. I want this to be a resource that lasts
            beyond SF6's lifespan and the quality of the content I write must
            reflect that. Also I really haven't felt like playing in several
            months and that's rough when I feel compelled to go beat up on GMs
            and higher to show you all that this stuff works on everyone.
          </h4>

          <figure>
            <img
              className="w-5/6 sm:w-3/4 md:w-4/6"
              src={frameData}
              alt="Brief explanation of framedata."
            ></img>
            <figcaption>
              Brief explanation of framedata. Understanding when it's your turn
              will make learning fighting games much easier.
            </figcaption>
          </figure>

          <h2 className="section">What is LowForward for?</h2>

          <p>
            LowForward is primarily designed for two things: Helping newer
            players know how to progress as a fighting game player, and as a
            desperately needed resource to learn about fighting game theory. I
            think that fighting games tend to be seen as a very difficult genre
            to learn and improve in, and I want to challenge that assumption by
            breaking down how to think about fighting game strategy and how to
            use those concepts to succeed with any character in any game. If
            you're familiar with coaching or "learning how to learn" in sports
            or just about any other hobby, you'll find a lot of parallels here.
          </p>
          <p>
            With that being said, my playstyle, strategies, and training plans
            are not the objectively "best" or most "correct" way to play the
            game, nor is it the only viable winning strategy in fighting games.
            It is simply my preferred playstyle, the one I am most familiar
            with, and one that I know through experience can find success at all
            skill levels.
          </p>
          <p>
            As for who I am, I'm Hog Squad! I competed in 9Moons and the FGCC's
            Strive tournaments for most of 2022 and got a ton of great games
            against some of the best talent in NA, with an especially big
            shoutout to my GOAT KI_Storm179, and I wanted to condense the
            lessons from those hundreds of beatings into something accessible
            for everyone. I don't have much to show in terms of hard results
            besides a couple of top 16 locals placements and a peak placement of
            67th best Chipp in the world on ratingupdate, but rest assured the
            grind has continued in silence, and I am absolutely committed to
            helping everyone reach their full potential in the FGC. Unless
            you're Chris G, because you said I had no neutral. I didn't know how
            to dashblock until 5 minutes after that set, and I still mixed your
            shit. Wherever you are, I hope your day is as pleasant as you are.
          </p>
          <p>
            This is also very much <b>not</b> a character focused series of
            guides. I'm focusing on teaching you fundamentals that will apply to
            literally any character in any fighting game. I don't care who you
            pick, I care that you're thinking about the right things and have
            the right mentality to learning.
          </p>
          <p>
            When it comes to practicing new things and building muscle memory, a
            great rule of thumb to follow is the rule of 5- practice until you
            can do the thing you're working on 5 times in a row with no
            mistakes. Start back from 0 if you make a mistake for any reason,
            and optionally switch sides to make sure you can do it on P1 and P2
            side. You don't need to spend hours and hours in training mode doing
            drills unless you want to- get a feel for what to do in training
            mode, then go play some games. Make your only goal for the set to do
            whatever it is you're practicing- a new combo, consistent antiairs,
            etc. If you're experienced but start messing up your inputs, do
            yourself a favour, spend two minutes doing your reps, and avoid the
            headache that comes with being too stubborn to practice outside of
            live games.
          </p>

          <h2 className="section">Input Notation and Framedata</h2>

          <p>
            When it comes to discussing inputs, I will for the most part be
            using numpad notation. If you're not familiar with numpad notation,
            that's okay! It's a fairly standardized way of writing 2D fighting
            game inputs. If you need it, the Dustloop wiki has an in-depth
            writeup on numpad notation{" "}
            <Link
              to="https://www.dustloop.com/w/Notation"
              className="inlineConceptLink"
            >
              here,
            </Link>{" "}
            but for simplicity's sake, something like "5MP" would mean "standing
            medium punch", and 214LK would mean "quarter circle back + light
            kick".
          </p>

          <p>
            As for framedata, you don't necessarily need to know it super in
            depth. What you should know is that if you're plus on block, your
            attacks come out first, and if you're minus (or negative) on block,
            your opponent's attacks come out first. If a move is negative
            enough, it becomes what's known as unsafe or punishable, meaning
            that it's physically impossible to avoid getting hit after it's
            blocked if you have a move that's fast enough. If the move is
            negative on block but not punishable, it's considered "safe".
          </p>

          <p>
            If a move is, say, +5 on hit, that means if you have a move that's 5
            frames or faster, it will combo. If nothing is fast enough to combo,
            then it usually means you have a chance to continue your pressure.
          </p>
          <p>
            You can use this rough idea of frame advantage to know when it's
            your "turn" to move, and it's strongly recommended that you know
            what your fastest moves are for both punishes and moving first when
            you have the advantage on block. You should also know what moves are
            unsafe so that you don't take unnecessary damage. A lot of strategy
            both in neutral and on offence revolves around the idea of taking
            turns- for a common example, you can poke with a safe normal from
            further away, and then if your opponent presses a button because
            it's their turn, you can actually make their move whiff and
            counterattack them! All that means is that{" "}
            <b>
              while it's good to know when it's your turn, you don't always have
              to do something.
            </b>{" "}
            It's more to help give you an idea of what your options are in any
            given situation.
          </p>
          <h2 className="section">Closing Thoughts</h2>

          <p>
            Finally and most importantly: your progression will have peaks and
            valleys, some days will be more difficult than others, and you will
            lose. A lot. You might drop a few games when practicing something
            that you might have otherwise won- this is normal, and it's okay.
            It's one thing to be able to do something in training mode and
            another entirely to be able to do it in a live game with someone
            who's actively trying to punch you in the face. You're basically
            trading a short-term win for long-term consistency, and you should
            embrace this growth-oriented approach to wins, losses, and personal
            progression in the genre in general. After all, even if you miss an
            opportunity to try the new thing you're working on and you recognize
            it, that's still progress! Losing is part of everyone's journey, and
            so is an uneven path of progression.
          </p>

          <p>
            Never compare your results to others and do not obsess over your
            stats or else you will never be happy- your only goal in this regard
            should be to be stronger than your past self. With all that in mind,
            you're ready to dig in to the rest of the content here. I hope you
            find it informative.
          </p>
        </article>
      </div>
    </>
  );
}
