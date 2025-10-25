import backDash from "../src/assets/videos/backDash.mp4";
import ppdr from "../src/assets/videos/ppdr.mp4";
import badMistake from "../src/assets/videos/badMistake.mp4";
import driveReversal from "../src/assets/videos/driveReversal.mp4";
import reversalDI from "../src/assets/videos/reversalDI.mp4";
import superBuffer from "../src/assets/videos/superBuffer.mp4";
import BnbBanner from "../src/banners/BnbBanner.jsx";
import WhatYoullLearn from "./WhatYoullLearn.jsx";
import ConceptSection from "./ConceptSection.jsx";

export default function Defense() {
  return (
    <>
      <BnbBanner />
      <div className="container">
        <article className="articleStyles">
          <WhatYoullLearn
            topics={[
              {
                theme: "Defence",
                what: "Block By Default",
                why: "Would you rather if they won in 2 hits or 10?",
              },
              {
                what: "I Didn't Pay to Block",
                why: "When should you try something else?",
              },
            ]}
          />
          <ConceptSection videoSrc={null} title={"Blocking"}>
            <p>
              Blocking is the safest and least committal defensive option in
              terms of risk/reward. Blocking low defends against lows and mids;
              blocking high defends against mids and highs. In general, it's
              best to block low and react high since overheads are usually slow
              and interruptable, but lows aren't. Blocking drains a little bit
              of drive for every hit; in burnout, blocking specials and supers
              will result in taking chip damage that can kill you. What that
              means is that you can't block forever- the game wants you to do
              something eventually. Blocking should be your default option on
              defence, and it should be used when you're not sure what to
              expect. While you block, watch how your opponent attacks. Try to
              get a sense for their patterns and timing- do they always go for
              throws in the same spots? Are they doing something you can
              interrupt with something like a jab or perfect parry? How often do
              they switch things up? Use the info to make educated guesses on
              when and how to challenge them.
            </p>
          </ConceptSection>

          <ConceptSection
            title={"Parry"}
            question=""
            videoSrc={badMistake}
            caption="Parries can be strong options for covering both jump-ins and crossups, but be aware of the counterplay."
          >
            <p>
              Parrying costs .5 of a drive bar to activate and drains slowly
              while the button is held. Parries are most useful for defending
              against predictable strike sequences and projectiles, and for
              blocking strike mixups since it autoguards against highs, lows,
              and crossups. For every hit parried, you will gain .5 of a drive
              bar, making them especially great ways to defend against
              multi-hitting moves. Parrying will also prevent the wallsplat from
              DI, making them a strong blanket check as a reaction to multiple
              attacks. Walking forward and parrying projectiles is one of the
              best ways to get in against zoners. Blocking is fine too, but over
              time it can wear down your drive gauge and make you susceptible to
              burnout. At higher levels of play, zoners will mix up their
              projectile speeds and timing and combine them with keepaway pokes
              to make it harder to get in, and to potentially make you waste
              meter on whiffed parries, so always pay attention to the meter
              situation. Frame advantage does not change on block when you
              normal parry, and parries lose to throws and command grabs. If you
              don't have enough meter to parry, you'll instead immediately burn
              out unless you land a perfect parry.
            </p>
          </ConceptSection>

          <ConceptSection
            title={"Perfect Parry"}
            videoSrc={ppdr}
            caption="Drive rush cancels from perfect parrying projectiles are a great way to close the gap on zoners."
          >
            <p>
              When you parry a move within a 2-frame window before it hits you,
              you instead perfect parry, adding 6 frames of forced hitstop on
              top of whatever recovery the move already had, while prorating the
              damage of punishes to 50%. With projectiles, you will instead
              recover instantly, and can even drive rush cancel off of them,
              further increasing their utility. Since the punish combo damage is
              usually very low, most players opt to go for a combo that gives
              good oki or better screen positioning, but you can also go for
              something like a PC throw punish or route into a DI ender if it
              will burn them out. As of season 3, you also have to parry
              directionally with a downback for lows, or back for mids and highs
              in order to get the screen freeze. Otherwise, you get a regular
              parry but with more drive recovery.
            </p>
          </ConceptSection>

          <ConceptSection videoSrc={null} title={"Teching"}>
            <p>
              Inputting a throw as your opponent attempts to throw you, also
              known as "teching" a throw, is the most reliable way to escape
              from throw pressure, especially when there isn't a big enough gap
              to mash out. As per the SuperCombo wiki, you have a 9-frame window
              to break a throw after your opponent inputs their own, giving you
              a bit of a margin for error and enabling a technique known as
              delay teching, where, as the name implies, you delay your throw by
              a few frames to block immediate strikes while still covering
              throws that are either done meaty or out of frame advantage. There
              are several ways to beat throws outside of teching- you can
              backdash, jump (which might still be anti-aired), drive reversal,
              or use an invincible reversal. Note that some characters have
              supers that can be thrown. It's important to note that while delay
              teching is very powerful as a blanket check to strikes and throws,
              they lose outright to shimmies or even more advanced techniques
              like intentionally delaying your meaty.
            </p>
          </ConceptSection>

          <ConceptSection
            title={"Backdashes"}
            videoSrc={backDash}
            caption="Showcasing the properties of backdash vs strikes, throws, and command grabs."
          >
            <p>
              Backdashes are a more niche option that are best used on defense
              as a hard callout against throws and command grabs. They have no
              invincibility frames, so they lose to strikes, but it's a useful
              option in a pinch. Backdashes can also be used on offense to call
              out delay techs after a setup that leaves you point blank for a
              strike/throw mixup (where you don't have time to walk back for a
              normal shimmy), and they can be used in neutral to quickly create
              space, which is useful if you're looking to bait and punish a
              specific move the opponent is doing, or to get out of poking
              range.
            </p>
          </ConceptSection>

          <ConceptSection title={"Jumping"} videoSrc={null}>
            <p>
              Jumping on defense is usually done either in anticipation of a
              throw, or when attempting to escape haymakers like DI in the
              corner, especially in burnout. You need a minimum of an 8-frame
              gap to jump out of the corner so note that some burnout DI
              sequences are inescapable if you don't have a super banked.
              Sometimes, even forward jumping out of the corner and getting
              anti-aired can be considered worth the damage because of how
              dangerous the corner is, but remember it is generally a high risk
              option, and you should always jump with intent.
            </p>
          </ConceptSection>

          <ConceptSection
            title={"Drive Reversal"}
            videoSrc={driveReversal}
            caption="Demonstrating some ways to bait and punish Drive Reversal, and a good example of when to do it."
          >
            <p>
              Drive reversals cost 2 bars of drive per use, and can be performed
              by pressing 6HP+HK while in blockstun (forward + Drive Impact).
              Drive Reversal is fully invincible, does 500 non-lethal,
              recoverable damage on hit, and breaks armour, but its slow startup
              makes it relatively easy to block on reaction if they're looking
              for it. As of season 2, immediate wakeup Drive Reversal is now a
              universal defensive option that starts up in 18 frames, and can be
              played around in a similar way to wakeup DP- shimmies, blocking,
              safejumps, etc; some characters can meaty with a fast jab and
              still recover in time to block. Drive Reversal is strong in the
              middle of blockstrings when your opponent is less likely to be
              able to avoid it, or as an expensive way to deny oppressive mixup
              situations, such as the 50/50 after Lily's empowered spires, drive
              rush cancels on block, or an empowered mixer from Rashid. Drive
              Reversals are -6 on block, or -2 in burnout, but are always
              punishable on whiff. Wakeup drive reversal is more risky to use if
              your opponent is already actively trying to shimmy you, and some
              setups that bait DP also bait drive reversal.
            </p>
          </ConceptSection>

          <ConceptSection videoSrc={null} title={"Mashing"}>
            <p>
              While conventional wisdom says it's best to block on defence,
              mashing has a time and place. Typically, you'll be mashing to
              challenge slow, interruptible attacks like Ryu 6HP, but they're
              also good for checking things like tick grabs, command dash
              mixups, or similar reset attempts. You'll also often see people
              pressing a quick button after blocking a safe ender in order to
              enforce that it's their turn now. A gangster high level callout to
              shimmy is actually wake up 2mk or wake up walk-up throw, but use
              this power responsibly. In the moment it can be really hard to
              tell when something is mashable and when something is a trap, so
              it's important to learn your matchups and figure out when you can
              and can't mash. In some games, wakeup mashing actually always
              beats throws, and so you'll see it a lot more often. All that
              means is that you need to adjust your gameplan accordingly, both
              on offence and defence. I personally love to go for a lot of
              staggered lights and throws, and I like to mix it in with heavier
              buttons and resets or overheads with unorthodox timings to really
              screw with them. I also love to go for walk up throws on my minus
              frames after I establish that I'm willing to keep swinging on
              them, so that they block. Just remember that while mashing is an
              important option to represent so that you don't get bulldozed by
              neutral skips and fake pressure, it's this far down on the list
              for a reason, unless you really like seeing winscreens that aren't
              yours. It takes about 9 throws to kill someone from full in SF6,
              and it takes as few as two clean strikes. You get more chances to
              play if you don't default to it.
            </p>
          </ConceptSection>

          <ConceptSection
            title={"Drive Impact"}
            videoSrc={reversalDI}
            caption="Defensive DI is a great way to blow up opponents who autopilot unsafe blockstrings."
          >
            <p>
              While Drive Impact is generally ill-advised on wakeup, its utility
              as an advancing armored move makes it a good way to check
              opponents who overuse committal, non-cancelable buttons either in
              neutral or on offence. Against some characters, like Ken or Lily,
              it's critical to represent if they do a lot of jinrai or wind
              stocks in blockstrings because the RPS around those moves is so
              heavily skewed in their favour. It's usually much more dangerous
              when used as an offensive tool when your opponent is either in
              burnout or very close to burnout. On wakeup, it loses to jab
              strings, throws, pretty much any meaty with a followup will still
              beat DI because they have time to react and counter with their
              own.
            </p>

            <p>
              Defensive DI is also very strong against some neutral skips with
              reactable startup, like Ken's heavy dragonlash. Make sure you test
              what it is and isn't effective against, because it is absolutely
              not a universal answer to neutral skips.
            </p>
          </ConceptSection>

          <ConceptSection
            title={"Invincible Reversals"}
            videoSrc={superBuffer}
            caption="Buffering level 3 behind DI-unsafe sequences can punish opponents who would otherwise correctly react to them."
          >
            <p>
              These were mostly covered in the previous article, but invincible
              reversals are typically best used when you believe your opponent
              is going to commit to an attack- whether it be oki, in a
              blockstring, or even on reaction to things like Drive Rush normals
              or Drive Impact. In the case of DI, DPs are usually a poor choice
              of reversal compared to supers since the invulnerability may
              expire while the DI is still active, resulting you being punished.
              If you have meter to cancel into a super (level 3 is the most
              versatile, but some level 1s and 2s work depending on the setup),
              you can make otherwise DI-unsafe sequences safe by buffering the
              super input during your string and then confirming into it on
              reaction to the flash from DI.
            </p>
          </ConceptSection>

          <ConceptSection title={"In Summary"} videoSrc={null}>
            <p>
              That's the rundown on your fundamental defensive options in SF6.
              Remember that your baseline for defence generally should be to
              block, and then do other things based on how your opponent
              attacks. Sometimes, you won't even need to do anything but block
              because their string will end and then they'll back up, or they'll
              immediately try to shimmy or bait a dp and let you get out of
              pressure for free. They might autopilot something unsafe that you
              can punish, or spend all their meter on drive rush, and then you
              have a lot less to worry about on the next guess. Learning what
              your options are on defense is critical to growing as a player and
              improving your matchup knowledge; if you're ever faced with a
              situation where you thought something should have worked and it
              didn't, the best thing to do is to either go into replay takeover
              and try different things, or set up that situation in training
              mode and experiment that way. Remember not to over rely on any one
              option unless your opponent refuses to play around it, and to
              think proactively about what options your opponent is representing
              both when they defend and when they attack.
            </p>
          </ConceptSection>
        </article>
      </div>
    </>
  );
}
