import WhatYoullLearn from "./WhatYoullLearn.jsx";
import ConceptSection from "./ConceptSection.jsx";
import crossCut from "../src/assets/videos/crosscut.mp4";
import jumpBait from "../src/assets/videos/jumpBait.mp4";
import BnbBanner from "../src/banners/BnbBanner.jsx";
import jumpOut from "../src/assets/videos/jumpOut.mp4";
import basicAA from "../src/assets/videos/basicAA.mp4";

export default function Antiairs() {
  return (
    <>
      <BnbBanner />
      <div className="container">
        <article className="articleStyles">
          <WhatYoullLearn
            topics={[
              {
                theme: "Anti-Airs",
                what: "Anti-airs",
                why: "Deal damage and control their movement.",
              },
              {
                what: "Types of anti-airs",
                why: "Different anti-airs work in different situations.",
              },
            ]}
          />

          <ConceptSection title="Intro to Anti-Airs" videoSrc={null}>
            <p>
              So you've picked a character- this is good; some people never get
              past that part. First things first: can you anti-air? If your
              answer is a candid "Yes, because keeping them grounded enables the
              rest of my gameplan", then I'm impressed, and suspicious. How do
              you already know so much? Why am I even here?
            </p>

            <p>
              If you answered "no" or "yes" but were lying to me, then you need
              to fix that because you're going to struggle until you can.
              Anti-airs are the single most important thing you should learn
              whether you're a new player or if you're learning a new character.
              Think about this- what's the first thing that most people want to
              learn? Combos. If they learn some combos and don't know how to
              land them, what are they going to do? They're gonna jump. What
              happens if you can't stop the jump? You can't expect someone to
              respect the ground game if you can't keep them grounded. Let's
              take it one step further: If you anti-air them and you hit them
              again as they land, suddenly things are looking really good for
              you. You're already winning and you didn't even have to work for
              it. Do you like winning?
            </p>
          </ConceptSection>

          <ConceptSection title="Basic Anti-Air Training" videoSrc={basicAA}>
            <p>
              Assuming you do like winning, let's learn some basic anti-airs.
              Boot up training mode and select anti-air practice in the Simple
              Training Settings tab. Get comfortable with your character's
              anti-airs, both in terms of their effective ranges, as well as
              timing them. You'll notice pretty quickly that some jump angles
              are easier to check than others. Test out your anti-air specials
              while you're at it, as well- if your character consistently
              struggles with grounded anti-air options at some ranges, try
              hitting them with an air-to-air. You'll have to see which are the
              most reliable options on a per-character basis, but every
              character has options. It is strongly recommended to not rely on
              parry as an anti-air because of the risk of just landing and doing
              a punish counter throw/command grab.
            </p>
          </ConceptSection>

          <ConceptSection title="Corner Jumps" videoSrc={jumpOut}>
            <p>
              In the corner, generally you're going to be checking either a
              wakeup jump on someone expecting a throw, or from somebody afraid
              of defending you on the ground. People get especially jumpy in
              burnout because stuns are so threatening. Some characters struggle
              at checking cross-ups, but preemptive air-to-airs or air grabs if
              you have one are generally pretty reliable. Crosscut DPs are very
              strong if you have them, but they are a fairly advanced technique
              that can be hard to do under pressure. Stopping neutral jumps
              after a throw is fairly simple, so practice those by setting the
              dummy to do a jumping heavy after a knockdown and then try to
              throw them after a sweep.
            </p>
          </ConceptSection>

          <ConceptSection title="Crosscuts" videoSrc={crossCut}>
            <p>
              As mentioned above, crosscuts are a very strong way to deal with
              crossups if you have access to them- while crouching, if you input
              your DP as the opponent crosses over you, then your anti-air will
              autocorrect sides and hit them. This can be difficult to do,
              especially because people will generally be going for tricky
              angles that make them hard to time, but they are very useful if
              you can do them. When in doubt, you can always try an A2A instead
              or simply block.
            </p>
          </ConceptSection>

          <ConceptSection title="Baits" videoSrc={jumpBait}>
            <p>
              Some characters have tricky specials or can otherwise alter the
              trajectory of their jumps, making it harder to tell when you can
              actually check them. Divekicks especially are powerful tools for
              this because they are fast, can usually be done close to the
              ground, and usually have multiple angles that can potentially bait
              out and punish an anti-air. They are especially dangerous at
              midrange where they can counterhit you attempting to poke, and
              stronger players will use them in tandem with their own midrange
              buttons to make it very scary to challenge them. Against players
              doing this, be extra careful to only go for your anti-airs when
              they jump too close to be able to bait them, and remember that
              it's okay to block if you're not confident. Even if you don't have
              a DP, then generally you can meet these moves in the air- just be
              aware of the inherent risk.{" "}
            </p>
          </ConceptSection>

          <ConceptSection title="Reacting in Matches" videoSrc={null}>
            <p>
              You may find after some practice in real matches that you can
              consistently anti-air opponents that jump predictably, but get
              caught out when they jump on you while you're focusing on the
              ground game. This is normal- it's more difficult to react with the
              correct anti-air if you're focusing heavily on something else,
              especially if they're going for angles that are hard for your
              character to manage, or if they're using something fast like a
              divekick. If you play a charge character, you need to be
              especially aware of what normal options you can use because you
              won't always have charge.
            </p>

            <p>
              One way to make this easier is to figure out your opponent's
              tendencies- what makes them want to jump? Do you have a projectile
              or strong ground moves that can frustrate them into jumping? Do
              they neutral jump when they don't know what to do? If you back up
              and play lame, do they try to jump to chase you? Do they like to
              throw out a move and then jump after it? Thinking about these
              types of situations can help you be ready for them.
            </p>
          </ConceptSection>

          <hr className="smallDivider" />
        </article>
      </div>
    </>
  );
}
