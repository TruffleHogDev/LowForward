import backDash from "../src/assets/videos/backDash.mp4";
import ppdr from "../src/assets/videos/ppdr.mp4";
import badMistake from "../src/assets/videos/badMistake.mp4";
import driveReversal from "../src/assets/videos/driveReversal.mp4";
import reversalDI from "../src/assets/videos/reversalDI.mp4";
import superBuffer from "../src/assets/videos/superBuffer.mp4";
import BnbBanner from "../src/banners/BnbBanner.jsx";

export default function Defense() {
    return (
            <>
            <BnbBanner />
          <div className="container">

            <article className="articleStyles">

            <h1>Fundamental Defensive Options</h1>
            <p>On this page, we will cover every common defensive option 
            in SF6 in terms of their properties, general use cases, and weaknesses. 
            More detailed explanations of many of the systems in this article 
            can be found on Supercombo's pages on Defense and Gauges- see the Resources page for a link to their wiki.
            </p>

            <hr className="smallDivider" />

            <dl>
                <dt>Blocking</dt>
               <dd>
               Blocking is the safest and least committal defensive option in terms of risk/reward. Blocking low defends against lows and mids; 
               blocking high defends against mids and highs. In general, it's best to block low and react high since overheads are almost always
               slow and interruptable compared to lows. Blocking drains a little bit of drive for every hit, and in burnout blocking specials and 
               supers will result in taking chip damage that can kill you, discouraging turtling and rewarding active decision making when defending. 
               Blocking should be your default option on defense, and it should be used when you're not sure what to expect. While blocking, 
               look for opportunities to reset to neutral or counterattack, and especially pay attention to what 
               your opponent does when you block. Note if and when they try to go for throws, if they end their blockstrings safely, if 
               they try to gimmick you with things like DI or special moves like Kim teleport, etc, and use that information to make an 
               educated guess on when and how to challenge them. 
                </dd>

                <dt>Parry</dt>
                <dd>Parrying costs .5 of a drive bar to activate and drains slowly while the button is held. Parries are most useful for 
                defending against predictable strike sequences and projectiles, and for blocking strike mixups since it autoguards against 
                highs, lows, and crossups. For every hit parried, you will gain .5 of a drive bar, making them especially great ways
                to defend against multi-hitting moves. Parrying will also prevent the wallsplat from DI, making them a strong blanket check 
                as a reaction to multiple forms of attack. Walking forward and parrying 
                projectiles is one of the best ways to get in against zoners. Frame advantage does not change on block when you normal
                parry, and should not be overused on defense since throws and command grabs will land as a punish counter. Note that while 
                you can use parries to defend against jump-ins and crossups, your opponents can beat this by doing an empty jump into a throw.
                </dd>

            <figure>
            <video className="w-5/6 sm:w-3/4 md:w-4/6" src={badMistake} type="video/mp4" preload="metadata" controls></video>
            <figcaption>Parries can be strong options for covering both jump-ins and crossups, but be aware of the counterplay.
            </figcaption>
            </figure>

                <dt>Perfect Parry</dt>
                <dd>When you parry a move within a 2-frame window before it hits you, you instead perfect parry, adding 6 frames of forced hitstop
                on top of whatever recovery the move already had, while prorating the damage of punish combo starter to 50%. When perfect 
                parrying a projectile, you will instead recover instantly and can even drive rush cancel off of it, further increasing
                its utility at high levels of play. Since the punish combo damage is usually very low, 
                most players opt to go for a punish counter throw on perfect parry for the 1 bar of drive damage and hard knockdown it
                grants, unless the move being parried requires a different punish (ex: heavy Blanka Ball). 
                The highly scaled damage also means you don't want to spend resources on perfect parry combos unless it will 
                either kill or can otherwise be justified with utility, such as a midscreen combo with high corner carry and strong okizeme.</dd>

             <figure>
            <video className="w-5/6 sm:w-3/4 md:w-4/6" src={ppdr} type="video/mp4" preload="metadata" controls></video>
            <figcaption>Drive rush cancels from perfect parrying projectiles are a great way to close the gap on zoners.
            </figcaption>
            </figure>

            <dt>Throwing/Teching</dt>

            <dd>Inputting a throw as your opponent attempts to throw you, also known as "teching" a throw, is the most reliable way to 
            escape from throw pressure, especially in situations where you do not have enough frame advantage to mash out of the throw.
            As per the SuperCombo wiki, you have a 9-frame window to break a throw after your opponent inputs their own, giving you a 
            bit of a margin for error and enabling the delay tech option select, which is where you delay your throw by a few frames to 
            block immediate strikes while still covering throws that are either done meaty or out of frame advantage. Throws lose to strikes, 
            shimmies, jumps*, backdashes, invincible reversals, and command grabs. If done early enough and with a big enough gap, Drive Impacts 
            can also be thrown. Sometimes, a character will recover from their throw in time 
            to anti-air a neutral jump throw bait, but it depends on when the jump was performed.</dd>

            <dt>Backdashes</dt>

            <dd>Backdashes are a more niche option that are best used on defense as a hard callout against throws and command grabs. They have 
            no invincibility frames, so they lose to strikes, but it's a useful option in a pinch.</dd>

            <figure>
            <video className="w-5/6 sm:w-3/4 md:w-4/6" src={backDash} type="video/mp4" preload="metadata" controls></video>
            <figcaption>Showcasing the properties of backdash vs strikes, throws, and command grabs.
            </figcaption>
            </figure>

            <dt>Jump/Forward Jump</dt>

            <dd>Jumping on defense is usually done either in anticipation of a throw, or when attempting to escape haymakers like DI 
            in the corner, especially in burnout. You need a minimum of an 8-frame gap to jump out of the corner. Often, even forward 
            jumping out of the corner and getting anti-aired can be considered worth the damage because of how dangerous the corner is, 
            but remember it is a high risk, moderate reward option most of the time.</dd>

            <dt>Drive Reversal</dt>

            <dd>Drive reversals cost 2 bars of drive per use, and can be performed by pressing  6HP+HK while in blockstun 
            (forward + Drive Impact). Drive Reversal is fully invincible, does 500 non-lethal, recoverable damage on hit, and breaks armour, 
            but its incredibly slow startup of 20 frames makes it relatively easy to block on reaction with meaties or moves with fast 
            recovery. Drive Reversal is therefore usually best in the middle of blockstrings when your opponent is less likely to be 
            able to avoid it, or as a way to deny oppressive mixup situations, such as the 50/50 after Ken's heavy dragonlash. 
            Drive Reversal is generally a weaker option than other universal tools and invincible reversals if your character has one; 
            usually Dhalsim and Zangief players will utilize this option more since their defensive tools are either more
            specialized or more expensive. Drive Reversals are -8 on block, making them fairly punishable on a bait.</dd>

            <figure>
            <video className="w-5/6 sm:w-3/4 md:w-4/6" src={driveReversal} type="video/mp4" preload="metadata" controls></video>
            <figcaption>Demonstrating some ways to bait and punish Drive Reversal, and a good example of when to do it. Observant players may
            notice the hitstop OS done during the first blockstring- the 5MP is timed to not come out during drive reversal, but will 
            otherwise.
            </figcaption>
            </figure>

            <dt>Mashing</dt>

            <dd>You know it, you love to hate it, the scourge of netplay- mashing does have a time and place, despite conventional 
            advice being to not mash and block. Mashing done correctly is usually done when challenging gaps in pressure, such as when 
            the attacker is attempting a tick throw or walking up to reset their blockstring pressure. Mashing on wakeup should generally 
            be avoided at all costs with three main exceptions: at high levels of play when attackers are going for delayed buttons to beat 
            delay tech, in +1 situations when you believe the attacker is going to throw, 
            or when you have a hard read on your opponent going for a shimmy or reversal bait, and you mash with a button 
            that checks their movement and/or gives you some breathing room- if it's confirmable, even better. 
            In games with throw invulnerability frames on wakeup, such as Guilty Gear Strive or Granblue, mashing becomes a 
            slightly more reliable option since you can do that to challenge meaty throws and command grabs instead of teching.
            Nevertheless, mashing should always be done with caution and with intent, 
            unless you really like seeing win screens that aren't yours.</dd>

            <dt>Drive Impact</dt>
            <dd>While Drive Impact is generally ill-advised on wakeup, its utility as an advancing armored move makes it a good way to 
            check opponents who overuse committal, non-cancelable buttons either in neutral or on offense.</dd>

            <figure>
            <video className="w-5/6 sm:w-3/4 md:w-4/6" src={reversalDI} type="video/mp4" preload="metadata" controls></video>
            <figcaption>Defensive DI is a great way to blow up opponents who autopilot unsafe blockstrings that are otherwise hard 
            to challenge.
            </figcaption>
            </figure>

            <dt>Invincible Reversals</dt>
            <dd>These were mostly covered in the previous article, but invincible reversals are typically best used when you believe your 
            opponent is going to commit to an attack- whether it be oki, in a blockstring, or even on reaction to things like 
            Drive Rush normals or Drive Impact. In the case of DI, DPs are usually a poor choice of reversal compared to supers 
            since the invulnerability may expire while the DI is still active, resulting you being punished. If you have meter to cancel 
            into an invincible super (level 3 is the most versatile, but some level 1s and 2s work depending on the setup), you can make 
            otherwise DI-unsafe sequences safe by buffering the super input during your string and then confirming into it on reaction to 
            the flash from DI.</dd>

            <figure>
            <video className="w-5/6 sm:w-3/4 md:w-4/6" src={superBuffer} type="video/mp4" preload="metadata" controls></video>
            <figcaption>Buffering level 3 behind DI-unsafe sequences can punish opponents who would otherwise correctly react to them.
            </figcaption>
            </figure>

            </dl>

            <p>That's the rundown on your fundamental defensive options in SF6 as well as their use cases and general strategy for 
            counterplay. Learning what your options are on defense is critical to growing as a player and improving your matchup
            knowledge; if you're ever faced with a situation where you thought one of your defensive options should have worked and it didn't, 
            the best thing to do is to set up that situation in training mode and see if that option was correct but mistimed, or if there were 
            other option(s) available to you that might have worked better, or at least as an alternative. Remember not to over rely on any 
            one option unless your opponent refuses to play around it, and to think proactively about what options your opponent is representing 
            both when they defend and when they attack.</p>

            <p>In the next article, we're finally ready to delve into more neutral game-focused theory as we learn just how powerful being 
            non-committal in our approach can really be.</p>

            <hr className="smallDivider" />

            </article>
        </div>
        </>
    )
}