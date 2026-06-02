import lightBnb from "../src/assets/videos/lightbnb.mp4";
import medBnb from "../src/assets/videos/medbnb.mp4";
import diCombo from "../src/assets/videos/pcdi.mp4";
import jumpIn from "../src/assets/videos/jumpin.mp4";
import heavyBnb from "../src/assets/videos/heavypunish.mp4";
import slowMo from "../src/assets/images/slowmo.jpg";
import BnbBanner from "../src/banners/BnbBanner.jsx";
import WhatYoullLearn from "./WhatYoullLearn.jsx";
import ConceptSection from "./ConceptSection.jsx";

export default function Bnbs() {
  return (
    <>
      <BnbBanner />
      <div className="container">
        <article className="articleStyles">
          <WhatYoullLearn
            topics={[
              {
                theme: "Combos",
                what: "What to prioritize",
                why: "The most important combos to prioritize.",
              },
              {
                what: "Meter management",
                why: "Your routing should always take your meter into consideration.",
              },
            ]}
          />
          <p>
            Imagine that you're in a game and have landed an anti-air, because
            you practiced those like I told you to instead of ignoring them
            until you're diamond and are wondering why you can't beat anyone in
            neutral. How could Bison be so bad? They're falling in front of you,
            and you want to try and hit them as they land. Instead of doing
            something stupid like a sweep or a DI, you correctly choose a normal
            that's both safe on block and confirmable, and you get the hit. Now
            what?
          </p>

          <p>
            Now, you need to confirm that hit into something easy and consistent
            that gives you solid damage, corner carry, and a good knockdown- you
            need to do your BnB. The most important BnBs, or bread and butter
            combos, are exactly that- easy and reliable; they're your staples.
            They don't necessarily have to be fancy, and you definitely want to
            know how to do them without spending meter, but you do need to know
            them. But which are the most important, and why? "Why is John
            Lowforward telling me not to meter dump at the first opportunity?",
            you ponder. "I don't know if I'll get another hit, so I'd better
            make it as hard as possible to get another one instead of listening
            to the tournament player who's sick of seeing people like me
            constantly doing this shit."
          </p>

          <p>
            It's a great question, with a terrible follow-through. Let's go over
            the combos I think everyone needs to prioritize regardless of if
            they're new to the game or learning a new character.
          </p>

          <ConceptSection title="Light Confirms" videoSrc={lightBnb}>
            <p>
              The first thing you need is something you can easily route into
              off of your fastest buttons- these aren't the most damaging, but
              they are critically important. Your jab confirms enable light
              strings, throws, approaches in neutral, and make your lows
              threatening. They also guarantee some damage if you successfully
              challenge a gap in your opponent's offence, check a dash-up,
              punish a poorly spaced special, and so on- you can even bait
              reversals with them, depending on the opponent's character. If you
              land a cross-up light, you're probably using this combo. You need
              a light confirm, you need to be able to do it consistently, and
              you need to be able to do them before you fight real people- if
              you disagree, do you think you will have an easier time learning
              if you can automatically guarantee damage in all of those
              situations without thinking about it? Exactly. Please learn your
              light combos.{" "}
            </p>
          </ConceptSection>

          <ConceptSection title="Medium Combos" videoSrc={medBnb}>
            <p>
              Your medium combos are versatile- mediums are common pressure
              normals after knockdowns, drive rushes, jump-ins, and are
              generally strong starters when you can get them. A cancelable
              medium is also a great choice for a counterpoke or a whiff punish
              because you can either get a drive rush cancel or a buffered
              special on hit. When learning your medium combos, prioritize ones
              that give the best corner carry and oki over damage, and save the
              higher damage options for the corner. Sacrificing damage for
              better pressure is almost always correct because you can much more
              easily set up another hit into another combo, but it's not
              uncommon for it to be a reset to neutral in your favour- remember
              that the closer to the corner they are, the less space they have
              to work with.
            </p>
          </ConceptSection>

          <ConceptSection title="Drive Impact (DI)" videoSrc={diCombo}>
            <p>
              Your most common uses for DI combos are after successfully
              countering opposing DIs or calling out something big and
              non-cancelable in neutral, like a fireball or a Ken HK. You can
              also use DI on reaction to punish some slower special moves, like
              charged flicker or heavy dragonlash. You'll also see DI used to
              wallsplat people in the corner. It's especially potent in burnout
              because it stuns the opponent, and without an invincible super,
              it's possible to make the stun inescapable. Note that the crumple
              from a PC DI is different from a wallsplat, and you'll need to
              know your combos for both. If you manage to DI someone midair and
              they get wallsplatted, you'll need to adjust your combo on the
              fly. If you don't know what to do for a stun combo, do your best
              corner jump-in route, and don't spend meter unless you'll get the
              KO.
            </p>
          </ConceptSection>

          <ConceptSection title="Jump-Ins" videoSrc={jumpIn}>
            <p>
              This will usually just end up being your best jump-in normal
              followed by a confirm into the best BnB that will reach. If you're
              confirming off of a crossup, your light combo will be your most
              reliable choice, and for other jump-ins you'll typically be going
              for a heavy or medium starter. If you're not sure if your jump-in
              will connect, go for something safe so that you have the option to
              either end your turn or keep pressuring in case it's blocked. If
              you're punishing something like a fireball or command grab where
              you know the hit is guaranteed, you can confidently go for your
              max damage combo- just make sure you practice your jump-in
              timings. You may also purposely do a jump into a low (usually cr.
              LK) as a mixup option.
            </p>
          </ConceptSection>

          <ConceptSection title="Cashout Combos" videoSrc={heavyBnb}>
            <p>
              Most commonly reserved for blocked supers, DPs, or really any
              situation where you can either end the round on the spot or burn
              them out into a chip/stun setup. These are going to be your most
              damaging combos, usually starting with PC heavies, specials, or
              jump-ins. Weaker starters are totally viable as long as you can
              guarantee the round. Cashout combos are generally what you want to
              save your meter for; you'll notice very often that people will
              wait until the kill is guaranteed before they spend. You may see
              people deliberately extending with SA2 when they have SA3, so that
              they can push their advantage while keeping a stock for an
              emergency. The reasoning is simple: they can't kill now, so why
              spend everything when you might need it later? You can add the
              damage at any time, so use it when you actually need it. You
              should almost never put yourself in burnout for a combo unless the
              round is secured- being burnt is game losing.
            </p>
          </ConceptSection>

          <ConceptSection title="Beginner Pitfalls" videoSrc={null}>
            <p>
              The most common problem I see with new player combos is that they
              haven't actually learned their combos. As much as I enjoy the mild
              brain bleed that comes from attempting to process these spectacles
              of sequencing, it's really important to drill these combos in
              early. Don't pick the first thing that's easy and only do that,
              because you're all but guaranteed to be doing something that's
              actively detrimental to your survival. Learn the correct combos
              from the outset and that's one less bad habit to break down the
              line, when it's a lot harder to stop. This is not easy for anybody
              right from the start, but the difficulty is really overstated. I
              have not forgotten what it's like to spend 3 hours in training
              mode doing nothing but making sure I could consistently do a jab
              combo, but I also can't overstate how incredibly worthwhile the
              effort was or how immediate the difference was once I had them
              down. I can't make you do these right away but I can definitely
              roll my eyes at the next fresh master that doesn't understand
              anything about meter management or basic routing as if that's not
              the reason they're about to be hardstuck in 1300.
            </p>
          </ConceptSection>

          <ConceptSection title="Training Tips" videoSrc={null}>
            <p>
              A very common problem people have when learning combos in fighting
              games is that they'll mash the buttons as quickly as they can
              because they're not confident in their timing. Go slowly and don't
              get frustrated that you're not getting them right away. Focused,
              deliberate practice will make it easier. Make sure the normals
              you're choosing actually combo- if your button is +5 on hit, your
              next normal needs to be at least 5 frames in order to combo. You
              can slow down the game speed in the Environment Settings tab of
              training. You can also break the combos down into parts- you can
              get the links down, then get the special cancels down, then put
              them together. Turn the frame display, input history, and virtual
              controller on. Don't be afraid to ask for help from the community
              for cleaning up your inputs- the minutiae of every possible thing
              you might need help with is beyond the scope of this guide.
            </p>

            <p>
              A fantastic training regimen for building muscle memory is rule of
              5 reps- be able to do the combo 5 times in a row without mistakes
              on both sides of the screen. If you mess up for any reason, start
              over from 0. If you want a tougher drill, do rule of 10.{" "}
            </p>
          </ConceptSection>

          <hr className="divider"></hr>
        </article>
      </div>
    </>
  );
}
