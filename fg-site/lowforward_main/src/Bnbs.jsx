import lightBnb from "../src/assets/videos/lightbnb.mp4";
import medBnb from "../src/assets/videos/medbnb.mp4";
import diCombo from "../src/assets/videos/pcdi.mp4";
import jumpIn from "../src/assets/videos/jumpin.mp4";
import heavyBnb from "../src/assets/videos/heavypunish.mp4";
import driveRegen from "../src/assets/videos/driveregen.mp4";
import slowMo from "../src/assets/images/slowmo.jpg";
import BnbBanner from "../src/banners/BnbBanner.jsx";
import WhatYoullLearn from "./WhatYoullLearn.jsx";

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
                what: "Bread and Butter",
                why: "You need easy combos that always work.",
              },
              {
                what: "Types of combos",
                why: "You need different combos from different starters.",
              },
            ]}
          />
          <p>
            Now that you have a handle on anti-airs, we can work on BnBs- a
            common abbreviation for bread and butter combos: your staple, easy,
            go-to routes from a given starter. As cool as flashy, max damage
            optimals are, you only need a few basic BnBs to make it far in
            fighting games- the ability to win interactions and get consistent
            damage and pressure from them is far more valuable than being able
            to do an explosive combo once every couple of sets, maybe. Every
            time I pick up a new character, the first combos I learn are my
            meterless options so that I know what I can always fall back on, and
            then I figure out metered combos after. I very strongly recommend
            you at minimum know your meterless combos before you start playing
            people, because spending meter when you're low on resources is
            almost never a good idea unless the combo will kill or you're going
            to set up some sort of kill sequence. Burning out at the wrong time
            can automatically lose you the round, even with a large life lead.
            If you're burnt and blocking AKI but you've got 60% more life than
            her, you're losing. SF6 has relatively easy combos compared to other
            fighting games, but the complexity comes from how many routing
            options you have and choosing the correct one quickly. An added
            bonus of having these basic combos already learned is that because
            we no longer have to think about our routing as much, we can focus
            on our opponent and the choices they make on defence.
          </p>

          <h3 className="section">Light confirms</h3>

          <p>
            The first thing you need is something you can easily route into off
            of your fastest jab or your low starter (typically a 2LK). These
            combos consist of 2-3 jabs into a special move and are most often
            used when challenging gaps in your opponent's offense (known as
            abare), as a versatile pressure tool (more on this in the basics of
            strike/throw offense), punishing poorly spaced moves, checking
            dashes or other movement, and off of jump-ins, particularly
            crossups. The importance of getting a knockdown and consistent
            damage after your lights cannot be overstated, and in my opinion
            this is the single most important type of combo you should know. You
            can end most light combos with a level 1 or level 3 super cancel,
            useful for securing KOs, pushing your opponents into burnout, or
            recovering your drive. Light combos are also a reliable way to
            punish after a perfect parry, though you can typically go for a PC
            throw or heavy starter in those situations. You should also learn
            what your character gets off of a jab-drive rush for squeezing out a
            little bit of extra damage or a better oki situation that you need
            to secure the round, as well as what OD moves combo off of your
            lights, if any. Just be careful about using drive in jab combos, as
            drive is precious and very costly when mismanaged.
          </p>

          <figure>
            <video
              className="w-5/6 sm:w-3/4 md:w-4/6"
              src={lightBnb}
              type="video/mp4"
              preload="metadata"
              controls
            ></video>
            <figcaption>
              A simple and reliable 3-hit low confirm BnB. Watch the virtual
              controller for help doing special cancel DPs- hold forward during
              the string!
            </figcaption>
          </figure>

          <h3 className="section">Medium BnB</h3>

          <p>
            {" "}
            The second most useful combo to have, typically used for confirms
            off of meaty buttons, punishes, drive rush filler, and so on- more
            or less the same things you would use light combos for, but slightly
            more situational due to the slower startup or range requirements of
            the moves. Mediums also generally have access to combo enders with
            better damage and corner carry than lights, and can allow for
            stronger mixup options from their knockdowns. Many characters have a
            medium-medium link on normal hit that's useful for hit confirms,
            though medium-light is also fairly common and used over a second
            medium when either spacing or frame advantage on hit is an issue.
            Mixing these in with our lights on offense can make our opponents
            unsure of when to challenge and open them up to frametraps and
            throws, and due to their utility and damage these should be learned
            at the same time you learn your light combos.{" "}
          </p>

          <p>
            When playing at midrange, a common tactic is to use a special
            cancelable medium poke (often a 2MK or similar button) and input a
            special move or drive rush as the normal is pressed (colloquially
            known as a buffer). This automatically allows for a quick combo on
            hit, and nothing if the move is whiffed. Mastering this technique is
            a hallmark of high level play, but be careful about overusing
            buffers, as they can easily open you up to burnout, DI, perfect
            parry, or easy whiff punishes if done predictably. While dedicated
            long-range, non-cancelable poking normals are usually bad for
            meaties due to their poor frame advantage on block and high damage
            proration, they are sometimes used in certain punish counter or
            drive rush routes when nothing else will reach- for instance,
            Terry's 5mk will usually link into his level 1 on punish counter,
            somewhat compensating for the terrible startup on his sweep. On
            landing counterhit or punish counter jabs, you're generally able to
            link into a medium or even heavy button for a better punish.
          </p>

          <figure>
            <video
              className="w-5/6 sm:w-3/4 md:w-4/6"
              src={medBnb}
              type="video/mp4"
              preload="metadata"
              controls
            ></video>
            <figcaption>
              A basic meaty 5MP combo. The 5LK is guaranteed to combo on any
              type of hit, safe on block, and can still be canceled into DI on
              reaction.
            </figcaption>
          </figure>

          <h3 className="section">Drive Impact (DI) Combos</h3>

          <p>
            After your core light and medium routes, you want combos off of DI,
            both for when you land it as a punish counter or as a wallsplat when
            blocked in the corner. As a punish counter, the damage and pressure
            situation that follows needs to be strong to discourage your
            opponent from trying to challenge you with DI or committal,
            non-cancelable normals and specials in neutral, giving you room to
            advance. The crumple state does mean that just using your medium BnB
            won't always work here, and you may need to adjust your combo if you
            land a PC DI or wallsplat from further away than usual, though drive
            rush is very useful for converting these if you have the meter to
            spare. Wallsplat punishes serve much the same purpose and are great
            when your opponent is low on drive or overly passive, and juggling
            with drive rush normals can lead to very tricky resets with most
            characters once you've established the full combo. DI is an
            incredibly risky option to just throw out and should not be relied
            on as a core part of your offense outside of burnout or when your
            opponent is predictably overusing moves that lose to DI. Landing a
            DI will do a minimum of 1 bar of drive damage to your opponent, so
            if their drive is low enough you can route into a quick super (or
            sometimes even combo into a DI itself!)to burn them out. For basic
            stun combos you can simply do your strongest jump-in combo and
            extend with drive or supers if desired.
          </p>

          <figure>
            <video
              className="w-5/6 sm:w-3/4 md:w-4/6"
              src={diCombo}
              type="video/mp4"
              preload="metadata"
              controls
            ></video>
            <figcaption>
              A PC DI punish. Make them afraid to try it again!
            </figcaption>
          </figure>

          <h3 className="section">Jump-in Combos</h3>

          <p>
            This will usually just end up being your best jump-in normal
            followed by a confirm into the best BnB you have. If you're
            confirming off of a crossup, your light combo will be your most
            reliable choice, and for other jump-ins you'll typically be going
            for the medium. If you're punishing a fireball, dp, or throw bait,
            you can combo into your heavies instead for better damage; these
            normals are sometimes impractical for use in blockstrings because
            they're slow or unsafe without a large commitment of meter or other
            resources, but it depends highly on the character. Many players will
            tech or mash repeatedly after blocking a jump-in, making your light
            and medium strings powerful pressure tools against them. Make sure
            you practice the angles and timings of your jump-in buttons so that
            you can choose your moves appropriately, and be careful and
            deliberate about when you go for jumps- I taught you anti-airs first
            for a reason.
          </p>

          <figure>
            <video
              className="w-5/6 sm:w-3/4 md:w-4/6"
              src={jumpIn}
              type="video/mp4"
              preload="metadata"
              controls
            ></video>
            <figcaption>
              A basic jump-in into medium BnB that has advantage on block on the
              first two moves, leading to potential strike/throw mixups while
              being DI safe.
            </figcaption>
          </figure>

          <h3 className="section">Dedicated Kill Combos</h3>

          <p>
            Most commonly reserved for blocked supers, DPs, or strong drive rush
            confirms. These usually will have punish counter heavies or special
            moves for starters and will lead to your highest damage routes. All
            you need for a good heavy punish is one or two heavy/medium normals
            you can link into followed by the strongest special move you can end
            with. If you have level 3 super, you can cancel into it from most
            characters' specials to tack on more damage and gain back some drive
            gauge. You don't need it to be fancy or super optimized, but you do
            want a cashout combo to close out rounds when the opening presents
            itself, and you want to know how to route into all of your supers.
            Make the punishes count, or your opponent won't ever be afraid to
            take risks. If you ever panic and don't know what to do if you get
            one of these openings, you can substitute your best medium or heavy
            BnB that will reach and do quite well- even if it's not optimal,
            it's better than nothing.
          </p>

          <figure>
            <video
              className="w-5/6 sm:w-3/4 md:w-4/6"
              src={heavyBnb}
              type="video/mp4"
              preload="metadata"
              controls
            ></video>
            <figcaption>
              A simple heavy punish with optional drive rush extensions shown.
              First drive rush rep is the core loop, second is corner optimal.
            </figcaption>
          </figure>

          <h3 className="section">
            Tips for training and learning how to combo
          </h3>

          <p>
            If you find it difficult to link your normals together and do your
            special cancels, don't worry. That's normal for beginners, and the
            steep initial learning curve is actually a big part of why I
            recommend starting with light combos. I often see players- sometimes
            Master players- who put off learning things like light confirms, and
            overcompensate by gambling with high risk workarounds and gimmicks
            that ironically completely fold to waiting for them to commit and
            punishing them with these basic BnBs. Practice these as early as
            possible, and you'll have a much easier time learning the game and
            forming good habits in the long run. Thankfully, SF6 has several
            tools to help soothe the growing pains a bit. The options in the
            training menu's screen display settings tab can all be used to help
            visualize what's going on, and I personally recommend enabling
            everything so that you can see when to time your buttons more
            easily, as well as see your mistakes so it's easier to correct them.
            There is also a game speed option under environment settings that
            can let you slow playback to 50%, giving you much more leniency with
            your execution, and this setting is highly recommended for
            practicing timing things manually and cleaning up your inputs. Some
            characters have something known as a target combo, which works
            similarly to gatlings or autocombos in other games. If you press the
            next button in the target combo, it will automatically come out and
            does not need to be timed. The drawback to target combos is that the
            tradeoff for their ease of use is that they're usually incredibly
            punishable on block, and lead to lower overall reward over manually
            timed combos. Some exceptions apply- Ken for instance has an
            infamously powerful target combo with great reward on hit and strong
            but risky pressure on block- and they are still an important part of
            many characters' routing and should be used when appropriate, just
            be careful not to use them if you don't have the hit.
          </p>

          <p>
            A very common problem people have when learning combos in fighting
            games is that they'll mash the buttons as quickly as they can
            because they're not confident in their timing. You will get the hang
            of it much more quickly if you force yourself to slow down and focus
            on timing the hits correctly. Normals are linked together by timing
            the second button right as the first one recovers, and you need
            enough frame advantage for them to connect (ex: if you're +5 on hit,
            you can only link with a normal that's 5 frames or faster). Mistakes
            are expected and normal, so don't worry about making them- your
            muscle memory needs time to develop. Do your special inputs slowly,
            and then build up speed only once you can do the motions correctly.
            50% speed is a fantastic tool for learning special cancels because
            most of them need to be done immediately as you press the normal
            you're canceling them from.
          </p>

          <figure>
            <img
              className="w-5/6 sm:w-3/4 md:w-4/6"
              src={slowMo}
              alt="Training mode 50% playback speed"
            ></img>
            <figcaption>
              Training mode slow-mo. Practice the motions slowly and with
              intent. Don't be afraid of mistakes, that's what this is for.
            </figcaption>
          </figure>

          <p>
            Don't be discouraged if it takes you a while to start doing even the
            jab combos consistently in spite of these tools- Street Fighter is
            hard, and it takes a lot of practice. It took me 3 hours before I
            could consistently do a 5LP-5LKxx623HP with Sagat when I first
            started playing SFV, so believe me when I say that we've all been
            there. You can watch the virtual controller on any of the example
            videos in this article to help you visualize how cancels look in
            real time, and you can also see how different input techniques are
            being used to make things easier, like comboing Ryu's DP into
            236236K by doing 623HP236K as one fluid motion, or holding back as
            early as possible in the Blanka combo to maintain charge. Rule of 10
            reps are a great idea when learning combos, and remember to practice
            doing all of your combos and inputs facing both sides.
          </p>

          <p>
            When you feel comfortable with your inputs, add a layer of
            difficulty by enabling combo practice in training mode (or setting
            the dummy to block after first hit). With this setting active, the
            dummy will automatically block if you mistime your combo, allowing
            you to focus on getting your timing consistent. Again, don't
            hesitate to slow playback to help you here- all that matters is that
            you're getting there. You want to be confident that you can time
            your BnBs properly in training before you practice them in games, so
            enabling this setting is important when doing your training reps.
          </p>

          <p>
            As a final optional layer of difficulty, you can try doing super
            cancels to complete your combos. In SF6, a general rule of thumb is
            that you can cancel into level 1s from normals only, level 2s from
            normals and some special moves, and level 3s from any cancelable
            normal and most special moves. Try out doing level 3 cancels from
            your light combos especially; while the damage isn't crazy, you're
            still adding a minimum of 2000 damage, which will make the
            difference in a lot of cases.
          </p>

          <h3 className="section">Drive meter and closing thoughts</h3>

          <p>
            While the main focus of this page has been on prioritizing your
            meterless damage, drive is undeniably the most important resource in
            the game, and managing it properly is essential. Always be aware of
            both players' drive, and be cognizant of when and how you choose to
            spend it. Drive rush combos are important and powerful, but at 3
            bricks for a regular drive rush cancel, they're incredibly
            expensive. Consider using OD moves over drive rush cancels if you
            want to spend meter when you can, as your natural drive regeneration
            stops when you drive rush mid-combo, but not if you use an OD move.
            Smart routing choices can exploit that to give you much more meter
            to work with in the long run, as you can almost fully restore the
            resources you spend to land the combo. While an advanced
            optimization, microwalks can give you just enough meter to get an
            extra drive rush cancel in a combo if you have enough meter to
            start. Experiment with what your character can do once you learn
            your core meterless combos, and learn what you can do with different
            meter levels.
          </p>

          <figure>
            <video
              className="w-5/6 sm:w-3/4 md:w-4/6"
              src={driveRegen}
              type="video/mp4"
              preload="metadata"
              controls
            ></video>
            <figcaption>
              Demonstrating the significance of drive regen when using OD moves
              vs using drive rush early in a combo.
            </figcaption>
          </figure>

          <p>
            Once you feel confident in your basic BnBs on both sides of the
            screen, take them into real matches and focus on nothing more than
            landing them. Wins and losses are irrelevant, your progress is the
            only victory that matters. With a strong set of combos to help you,
            we can take it to the next step and learn how to put ourselves in
            positions to land the combos, and confirm into them when we're not
            sure if our opponent is going to block them.
          </p>

          <hr className="divider"></hr>
        </article>
      </div>
    </>
  );
}
