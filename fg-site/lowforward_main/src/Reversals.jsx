import amnesia from "../src/assets/videos/amnesia.mp4";
import levelOnePunish from "../src/assets/videos/levelOnePunish.mp4";
import safeJump from "../src/assets/videos/safeJump.mp4";
import dontSendIt from "../src/assets/images/dontSendIt.jpg";



export default function Reversals() {
    return (
    <div className="articleStyles">
    
        <h1>Playing Around Reversals</h1>

        <p>If you've been following the guides so far, you'll have begun building a solid foundation with your anti-airs, and
        simple but effective strike/throw offense backed by reliable, strong combos. You might be having an easy time dealing with 
        players who have poor defense and are starting to crack open tougher opponents, but you may still struggle when they have an
        invincible wakeup reversal at their disposal. When is it a good idea to respect it and when should you ignore it? Are there tells 
        for when someone might be trying to send a reversal? Is there a way to pressure your opponent while staying safe to a potential
        reversal? Being attacked when you're trying to press your advantage can be intimidating, 
        and even the threat of a reversal can completely halt your offensive momentum.
        </p>
        
        <p>Understanding how reversals work is the first 
        part of understanding how to play around them, and in this article we're going to cover the different types of invincible 
        reversals, their strengths and weaknesses, ways to mitigate the risk and play around them, and then go into a bit of theory that 
        will hopefully deepen your understanding of managing risk/reward and how to quickly evaluate a position. 
        </p>

        <p> As a general rule, the strength of an invincible reversal is, as the name implies, the reversal of 
        momentum you gain on hit and the ability to challenge your opponent's offense any time there's a gap, even one as small as one 
        frame. This is offset by the fact that they are horrendously punishable on block and on whiff, and cannot be made safe. 
        Knowing a high damage punish to discourage their use is important.
        </p>

        <hr className="smallDivider" />

        <h2>Types of reversals and their properties</h2>

        <hr className="smallDivider" />

        <h3>1: DPs/Flash Kicks</h3>

        <p>DPs are the most commonly used type of reversal. In SF6, they are fully invincible on frame 1 and cost 2 drive bars per use.
        Their strength as a wakeup option comes from their versatility, as they are available at the beginning of a round and can be 
        used multiple times while preserving super meter for later in the game. </p>

        <p>Their drive cost is their primary weakness. They can't be used at all in burnout, and using them when low on drive can 
        burn you out or put you on the brink of burnout, resulting in a potentially losing position - even on hit. Remember that 
        having your opponent in burnout can be more valuable than a 50% life lead; it's very easy to make up the difference in health 
        through a combination of chip damage, extra plus frames, and losing access to most universal defensive options which can 
        create setups that at worst literally can't be escaped.</p>

        <p>In the case of flash kick style reversals that require down charge instead of a command input, they have a slightly unique 
        strength and weakness. Their simple input and ability to be buffered while blocking makes them comparatively easier to use while 
        challenging gaps in blockstrings, but they can't be used at all if charge hasn't been built; this is especially relevant if 
        their character is walking around to try and reposition without committing to a command normal that will move for them.</p>

        <hr className="smallDivider" />

        <li>A list of all characters that have some form of wakeup DP are as follows:</li>

            <li>Luke</li>
            <li>Jamie</li>
            <li>Juri</li>
            <li>Dee Jay (charge)</li>
            <li>Cammy</li>
            <li>Ryu</li>
            <li>Blanka (charge)</li>
            <li>Guile (charge)</li>
            <li>Ken</li>
            <li>Chun-Li</li>
            <li>Rashid</li>
            <li>Ed</li>

            <hr className="smallDivider" />

            <h2>1b: Pseudo-reversals</h2>

            <p>While these aren't traditional invincible reversals, some characters have more niche reversal options with slightly
            different properties, such as armour instead of invincibility. If a move has armour, a character can 
            still take lethal damage from absorbing a hit if their life is low enough. </p> 
            
                <li>A list of all pseudo-reversals and their properties
                are as follows:</li>

                <dl>

                <dt>E. Honda</dt> 
                
                <dd>OD Sumo Headbutt- two hits of armour, loses to throws.</dd>

                <dt>Marisa</dt> 
                
                <dd>OD Scutum- two hits of armour, loses to throws. Non-OD is not frame 1 armoured and also loses to lows.</dd>

                <dt>Lily</dt>
                
                <dd>OD Tomahawk Buster- throw and anti-air invuln, loses to strikes.</dd>

                <dt>JP</dt> 
                
                <dd>OD Amnesia- this is a counter stance that only loses to projectiles.</dd>

                <dt>A.K.I</dt> 
                
                <dd>OD Snake Step- strike/projectile invuln, loses to throws.</dd>
                
                </dl>

        <p>JP's counter has distinction in that it not only parries strikes and throws, but also command grabs and even non-projectile 
        supers. The frame advantage situation on activation also changes depending on the move used to proc it. Essentially, 
        this means that if you activate the counter with something like a jab, you can actually be at advantage to quickly challenge 
        (but not punish) with a fast normal or a throw. Note that the projectiles spawned on activation do not disappear when JP is hit, 
        and their delayed explosions can still hit you during your punish attempt and result in a massive punish and/or looping mixup 
        situation for JP. Because of the strike counter and the invincible animation recovery, it's 
        also impossible to bait and punish with a safejump (more on those below). Finally, the normal version of Amnesia can be used in 
        burnout to counter DI, as long as there's a 3 frame gap for it to start up. These properties combined with JP having two reversal 
        super options and strong abare tools make him uniquely dangerous to pressure. </p>

        <figure>
            <video className="w-5/6 sm:w-3/4 md:w-4/6" src={amnesia} type="video/mp4" preload="metadata" controls></video>
            <figcaption>Demonstrating some of the properties of OD Amnesia. If you proc it with a move that leaves you at advantage, 
            quickly go for a strike/throw mixup and immediately parry/block if you don't land a throw.
            </figcaption>
            </figure>

       <hr className="smallDivider" />

        <h3>2: Reversal Supers</h3>

        <h4>Level 1 Supers</h4>

        <p>Level 1 supers are a common reversal option that most characters have access to, and are used most often either when a 
        character doesn't have access to a DP/flash kick style reversal, or to break through the armour of DI. Their armour-breaking 
        property is one of their greatest strengths, as is their low super meter cost relative to level 2 or 3, and for this reason 
        it is typically the wakeup super of choice, even if the character technically has a reversal level 2/3 as an option. All 
        level 1 supers are weak to projectiles, so using them as a meaty is an option if you suspect a level 1 is coming- just be 
        sure you either have enough advantage on their knockdown to time it, or that you're spaced far enough away to recover safely 
        and defend against something like a wakeup DI or fully invincible reversal.</p>

        <p>It's important to note that Zangief does not have a traditional level 1 or 2 reversal super- while his level 1 is invincible, 
        it notably does not hit grounded opponents. His level 2 is invincible from frames 1-18, but it also isn't active until frame 18, making it 
        unreliable as a traditional wakeup reversal given the enormous window for his opponent to recover from their meaty and block. As 
        such, he is forced to rely on his level 3 as his only true reversal.</p>
        
        <p>Dhalsim's level 1 is also notable in that it lacks strike invincibility, though it is immune to throws. His level 2 is fully 
        invincible from frames 1-9, but completely whiffs on crouchers, making him especially susceptible to lows.
        </p>

        <p>Finally, Marisa's level 1 is armoured, and therefore it also loses to throws. Her level 2 and 3 can both be used as invincible 
        reversals, however.</p>

        <figure>
            <video className="w-5/6 sm:w-3/4 md:w-4/6" src={levelOnePunish} type="video/mp4" preload="metadata" controls></video>
            <figcaption>Fireballs are a great way of stopping level one supers in their tracks. 
            </figcaption>
            </figure>

            <h4>Level 3 Supers</h4>

        <p>Reversal level 3 supers are a universal tool that every character has access to. They are the most extreme example of high 
        risk, high reward due to their incredibly high damage and massive resource cost. All level 3s can be blocked, with the exception of 
        Lily, Manon, and Zangief, whose level 3s are command grabs. Notably, you can't jump on reaction to Zangief's super flash like you can
        with Manon and Lily, since it becomes active one frame before the cinematic begins.
        </p>    

        <p>Level 3 supers also boast full invulnerability, including to projectiles; notably, some long-range supers like Cammy and JP's 
        can punish fireballs on reaction from nearly full screen, making them significantly more dangerous to engage from long range.</p>

    <hr className="smallDivider" />

    <h2>Safejumps</h2>

    <hr className="smallDivider" />

        <p>Safejumps are a way of landing a meaty jump-in that is extremely advantageous on hit or on block, while recovering quickly 
        enough to block a wakeup reversal. Every character in SF6 has access to safejumps, but the way you route into them varies heavily 
        by character since they require a specific amount of advantage on knockdown- typically in the range of +41 to +43. Incorporating 
        safejumps into your game is a quick and easy way to test your opponents' matchup knowledge; against players who block, you get
        guaranteed pressure, or can even go for empty jump (jumping without attacking) into a throw or a low once they have been
        conditioned to respect the overhead. Note that safejumps can be perfect parried.</p>

        <figure>
        <video className="w-5/6 sm:w-3/4 md:w-4/6" src={safeJump} type="video/mp4" preload="metadata" controls></video>
            <figcaption>An extremely common Marisa safejump with a punish included. Safejumps are an easy way to bait reversals and
            maintain your offense. 
            </figcaption>
            </figure>

        <hr className="smallDivider" />

      <h2>Understanding when to respect reversals</h2>

        <hr className="smallDivider" />

        <p>Now that we understand the properties of the reversals in this game, we can talk about when to respect them. As a general
        rule, you shouldn't play around reversals until your opponents actually start to do them; it's almost always a bad idea to 
        play around the options they aren't representing. Instead, keep bullying them on offense with your meaty strike/throw pressure 
        until they get frustrated enough to use a reversal. If you get hit by a wakeup DP or level one, that's fine! It shouldn't bother
        you, since they 1. just spent two drive bars to reset back to neutral (which you presumably have won at least once already and can 
        win again) and 2: now you have a better idea of when they like to use their reversals and can leverage that against them. 
          </p>

          <p>One thing beginner and intermediate players do very poorly is manage their meter, so pay close attention to how much drive 
          and super gauge both players have. Generally speaking, the less drive your opponent has when they DP, the better it is for you, 
          since they have put themselves closer to burnout and also will probably struggle to win neutral with a significant drive 
          disadvantage. You can even harass them with long range pokes and fireballs to chip away at their drive and compel them to take 
          a risk to avoid burning out.</p>

          <p>In low life situations where your opponent has a large life lead, using a reversal super is almost always a bad idea if you 
          can conserve the meter for the next round;
          a very common mistake is someone doing a wakeup super with almost no hp and then immediately dying right after, forcing
          them to play the next round at a meter disadvantage and making their comeback even harder for no justifiable reason. 
          If you can safely tank the hit, it's usually okay to eat a super to the face closing out a round. If it is a game-deciding
          gamble, the most important thing is to remain calm and make an educated guess based on your opponent's habits. If you can 
          set up reversal-safe pressure, this is one of the best times to do so. Personally, the less fundamentally solid my opponents are, 
          the more comfortable I am with giving up my turn when we're both low and waiting for them to try one last gamble, and then 
          interrupting or punishing it. I always like to think "I've come back from worse" whenever I'm in a stressful situation, and that 
          helps a lot when you need to be clutch to win. If you lose, it's better to figure out what lead to you being in such a 
          precarious situation so you can avoid repeating it instead of agonizing over guessing wrong.</p>

          <figure>
            <img className="w-5/6 sm:w-3/4 md:w-4/6" src={dontSendIt} alt="Don't send it"></img>
            <figcaption> Example of a horrible time to use an invincible reversal. Even if flash kick connects, Guile will get burnt out
            and almost certainly lose to chip, and if level 1 lands, he's still in a losing position and no longer has a meter lead.
            It's best to try to make the comeback without reversals, and conserve meter for the next round if it doesn't work out.
            </figcaption>
            </figure>

          <p>You should respect reversals when your opponents use them frequently in the same spots, or if you notice they're a type that 
          likes to gamble a lot- against those players, once they start hitting you with DPs, you can switch your tactics from running 
          strike/throw offense to respecting their wakeup and punishing their all-ins. You should also be wary of level 3s in 
          low life situations, or in situations where you might want to attempt a fireball or a slow move like an overhead or a 
          drive impact- several of them will go through your move and hit you (even from further away; JP and Cammy's level 3s are 
          especially notoriously good nearly full screen supers that punish attempted fireballs), and can be done reliably on 
          reaction since your character is the only thing they have to pay attention to. 
          One of the nice things about shimmies is 
          that you can bait techs and reversals at the same time if your offense is already making them throw. Sometimes backing off 
          when you expect a delay tech or a throw can be a good spot to see if they want to DP or super.</p>

          <p>On the flipside, if your opponent has predictable offense or autopilots the same blockstrings, it can be a good idea to use 
          a reversal to call them out and throw off their cadence. If they keep autopiloting, you can keep punishing (as long as you 
          pay attention to your meter), but it's usually best to see if they adapt and start to vary their strings or their options first.
          Remember that with reversals, the reward on hit usually isn't great, so it's something that should be used sparingly and with 
          intent.</p>

          <p>Now that you hopefully have a better understanding of the mindgames around reversals and how to approach them, we can 
          build on that in the next lesson, focusing on all of Street Fighter's fundamental defensive options.</p>

    </div>
    )
}