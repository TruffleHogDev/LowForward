import meaty from "../src/assets/videos/meaty.mp4";
import lightCombo from "../src/assets/videos/lightcombopractice.mp4";
import confirmDrill from "../src/assets/videos/confirmDrill.mp4";
import confirmSettings from "../src/assets/images/confirmSettings.jpg";
import BnbBanner from "../src/banners/BnbBanner.jsx";

export default function Confirms() {
  return (
    <>
      <BnbBanner />
      <div className="container">
        <article className="articleStyles">
          <h1>Meaties and Hit Confirms</h1>
          <p>
            Now that we've got a set of combos to work with, we can use them as
            a starting point for our strike offense, using our combo starters to
            begin our blockstrings and visually confirming whether the attacks
            hit or not to determine if we should complete them. Being able to
            hit confirm is a core part of fighting game offense, and Street
            Fighter confirms can be uniquely difficult in that the confirm
            windows and blockstrings themselves tend to be quite short, and
            special cancels to end blockstrings are usually punishable in some
            way, whether they be unsafe on block or have gaps that can be
            challenged with invincible reversals, jabs, DI, drive reversals, and
            so on. This article will first outline meaties and how to practice
            them, and in the second half we'll cover tips for practicing our hit
            confirms once we can meaty. Meaty throws will be covered, but more
            advanced mixups involving plus frames and blockstrings will be
            covered in the next article- right now, we only care about whether
            we got the first hit.
          </p>

          <hr className="divider"></hr>

          <h2>Meaties</h2>

          <p>
            The easiest and by far most common way to set up these blockstrings
            is by doing them as pressure after a knockdown. Wakeup pressure is
            known colloquially as okizeme or oki for short, and will be referred
            to as such going forward. Once you get your knockdown, you get close
            to your opponent and time your button to hit them meaty. Meaties are
            another fighting game term that specifically refers to a move that
            is timed to hit your opponent on their first actionable frame after
            a knockdown. In simpler terms, if they press a button that's not
            invincible or otherwise evades the attack, they get hit unless they
            block or parry.
          </p>

          <p>
            In SF6, while strikes will beat throws if they both become active on
            the same frame, meaty throws will actually beat wakeup mashing,
            making mashing a very weak option the overwhelming majority of the
            time. Meaties that are timed well also offer better frame advantage
            both on block and on hit, since your opponent gets put into
            blockstun later into the move's active frames. This means that
            meaties offer stronger combo and mixup opportunities, if you're
            ready to confirm them. Do note that while perfectly timed meaties
            are the most powerful in terms of frame advantage, they do not need
            to be frame perfect in order to work. There's a 4-5~ frame window
            after recovering from a knockdown before your opponent's fastest jab
            or throw can come out, so your meaty just needs to hit within that
            window in order to be successful. Most characters have setups that
            guarantee a specific number of plus frames off of some combos or
            knockdowns so that they don't have to manually time them, but we
            don't need to worry about those for now.
          </p>

          <figure>
            <video
              className="w-5/6 sm:w-3/4 md:w-4/6"
              src={meaty}
              type="video/mp4"
              preload="metadata"
              controls
            ></video>
            <figcaption>
              Comparison of frame advantage when blocking Cammy 2HP normally vs
              blocking it meaty. Challenging on plus frames is incredibly risky.
            </figcaption>
          </figure>

          <p>
            The easiest way to set up meaties is to head into training mode, go
            to the corner, and set up the dummy to attack with its 4-frame
            normal on wakeup. If you don't know which button to choose, pick the
            Ryu dummy and have it do 2LP or 5LP. Optionally, set the dummy to
            recover with a backrise- while this doesn't matter as much in the
            corner, the reason for doing this is that in real games, most
            players will be backrising by default on wakeup since the extra
            distance it creates preemptively escapes a lot of oki situations.
            Setting this up now will make you much more prepared to deal with
            your midscreen pressure options when those situations come up.
          </p>

          <p>
            After the dummy has been set to recover with a wakeup jab, knock the
            dummy down and then try to counter hit the jab with your light
            confirm. If you're just starting out, sweeps are an easy universal
            knockdown to work with. The main things we want to focus on with
            this exercise are that we're getting a counterhit with our combo
            starter and that we're successfully completing the combo. Don't
            worry if you're struggling with the timing starting out; you can try
            setting the game speed to 50% in environment settings to help you
            see how to adjust your timing. If your attack isn't hitting them and
            then you get hit, you did it too early; conversely, if your attack
            isn't coming out and you're getting hit, you're doing it too late.
            Try to get as close to your opponent as possible before you go for
            the meaty if there's time- light confirms lose consistency or
            outright drop if you start them from too far away. If you're having
            trouble completing the combo, work on it in steps- start by building
            up the muscle memory to do the lights without dropping them, then
            work on the special cancel and only the special cancel, and then try
            to put it together, using slow mode if needed.
          </p>

          <figure>
            <video
              className="w-5/6 sm:w-3/4 md:w-4/6"
              src={lightCombo}
              type="video/mp4"
              preload="metadata"
              controls
            ></video>
            <figcaption>
              Various simple light confirm strings with Ken. Use this video for
              help seeing manually timed 4-5 frame lights + throws in action.
            </figcaption>
          </figure>

          <hr className="divider"></hr>

          <h2>Confirms</h2>

          <p>
            Once you feel more confident in landing your meaties and can
            consistently complete the combos, you can begin practicing your hit
            confirms. The exercise we'll be doing will have you set the dummy to
            block everything, then you'll throw the dummy in the corner to get
            your first knockdown and meaty it with your light confirm string,
            only completing the combo if the dummy didn't block. If your
            character does not have access to a throw loop or needs to spend
            drive to pressure meaningfully with lights after a throw, there will
            be one extra step. Affected characters are:
          </p>

          <li>Chun-Li</li>
          <li>Marisa</li>
          <li>E. Honda</li>
          <li>Lily</li>
          <li>A.K.I- use DR</li>
          <li>Guile- use DR</li>
          <li>Ken- use DR</li>

          <p>
            In the dummy settings, set the dummy to block all. In wakeup
            recovery options, set the first slot to use its 4-frame, and the
            second slot to do nothing. This is how we'll guarantee the dummy
            will only block on wakeup sometimes, but still randomly mash to
            simulate real hit confirm situations. If your character is on the
            above list, additionally set the dummy to only crouch block. This
            will allow the dummy to block our low and mid blockstring starters,
            but we can use a jump-in combo to get our first knockdown and start
            the drill that way instead.
          </p>

          <figure>
            <img
              className="w-5/6 sm:w-3/4 md:w-4/6"
              src={confirmSettings}
              alt="Wakeup settings for hit confirm practice."
            ></img>
            <figcaption>
              Wakeup settings for hit confirm practice using the Ryu dummy.
              Optionally enable anything toggled OFF for practice reacting to
              other common options.
            </figcaption>
          </figure>

          <p>
            To start the drill, knock down the dummy however your character can,
            and then hit it with a meaty light confirm string. Only complete the
            combo if the dummy gets hit; if it blocks, stop the combo without
            doing your special cancel, then knock the dummy down again and
            repeat the process. Do this 10 times in a row without making any
            mistakes- this includes ending the combo early on hit, finishing the
            combo on block, or mistiming your meaty. Reference the below video
            for a full set in action.
          </p>

          <p>
            A very helpful tip when confirming lights- it's generally not
            humanly possible to single hit confirm off of a regular jab, so aim
            to react to the block by the second light in your string. If your
            character has a 3-hit confirm light string, you can use that to give
            yourself some more breathing room.
          </p>

          <figure>
            <video
              className="w-5/6 sm:w-3/4 md:w-4/6"
              src={confirmDrill}
              type="video/mp4"
              preload="metadata"
              controls
            ></video>
            <figcaption>
              Full 10 rep set of light confirm practice. Remember to switch
              sides after you get 10 in a row on one!
            </figcaption>
          </figure>

          <p>
            For added layers of difficulty once this becomes consistent, you can
            also enable different defensive options from the dummy- like DI,
            jumps, and throws- and practice reacting to and punishing them. I
            don't recommend setting dummies to use parries or invincible
            reversals when training confirms since parries are effectively the
            same as blocking in the context of the exercise, and invincible
            reversals are the hard counter to meaties and with very limited
            exceptions are not an option we're able to play against when we go
            for them. Baiting drive reversal with lights on block is an option
            you can practice if desired, though.
          </p>

          <p>
            For even more practice options when you begin to master these, you
            can disable blocking and practice timing your meaties off of
            variable knockdowns- different combo enders, throws, supers, and so
            on; there are minor differences between each one, so adding these
            into your reps can work on both your meaties, your confirms, and
            your combo routing all at once. Finally, you can also try timing
            meaties from midscreen knockdowns. In cases where you can't close
            the gap meterlessly, go for a drive rush meaty and see if you can
            get anything from the situation. Remember to enable the dummy to
            backrise for the most realistic results. The intensity of this
            version of the drill is reserved for more intermediate and advanced
            players once you are able to do the basic exercise with around
            8-9/10 consistency on both sides.
          </p>

          <hr className="divider"></hr>

          <h2>Next steps</h2>

          <p>
            Now that you've mastered your light confirms, go and practice them
            in real matches. You'll probably be surprised at how much more
            easily you're able to snowball knockdowns into wins. You can apply
            the light confirm drill to mediums, too; mediums generally only link
            into one other medium or light before the special cancel, and often
            are single hit confirmable with a lot of practice. You'll get your
            most consistent results practicing mediums with 2-hit confirms,
            though. Some cancelable heavy normals are also single hit
            confirmable if you wish to practice those, but they're much harder
            to do and less broadly applicable than lights and mediums, so
            they're only touched on here.
          </p>

          <p>
            Congratulations on learning one of the most difficult skills for a
            fighting game player! You'll find that the effort was well worth it,
            and you'll also likely notice yourself picking up confirms
            incredibly quickly in other fighting games as well. With these
            tools, we're now ready to learn some fundamental concepts of
            strike/throw pressure in the next article.
          </p>
        </article>
      </div>
    </>
  );
}
