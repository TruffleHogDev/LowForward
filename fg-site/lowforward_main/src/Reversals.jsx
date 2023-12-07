import amnesia from "../src/assets/videos/amnesia.mp4";
import levelOnePunish from "../src/assets/videos/levelOnePunish.mp4"


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

        <p>DPs are the most commonly used type of reversal. In SF6, they are fullly invincible on frame 1 and cost 2 drive bars per use.
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

            <hr className="smallDivider" />

            <h2>1b: Pseudo-reversals</h2>

            <p>While these aren't traditional invincible reversals, some characters have more niche reversal options with slightly
            different properties, such as armour instead of invincibility. If a move has armour, a character can 
            still take lethal damage from absorbing a hit if their life is low enough. </p> 
            
                <li>A list of all pseudo-reversals and their properties
                are as follows:</li>

                <li>E. Honda's OD Sumo Headbutt- two hits of armour, loses to throws.</li>
                <li>Marisa's OD Scutum- two hits of armour, loses to throws. Non-OD is not frame 1 armoured and also loses to lows.</li>
                <li>Lily's OD Tomahawk Buster- throw and anti-air invuln, loses to strikes.</li>
                <li>JP's OD Amnesia- this is a counter stance that only loses to projectiles.</li>
                <li>A.K.I's OD Snake Step- strike/projectile invuln, loses to throws.</li>

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
            <video src={amnesia} type="video/mp4" preload="metadata" controls></video>
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
        it notably does not hit grounded opponents, nor is it a consistent anti-air. For these reasons, it's largely considered to be the 
        worst level 1 in the game. His level 2 is invincible from frames 1-18, but it also isn't active until frame 18, making it 
        unreliable as a traditional wakeup reversal given the enormous window for his opponent to recover from their meaty and block. As 
        such, he is forced to rely on his level 3 as his only true reversal.</p>
        
        <p>Dhalsim's level 1 is also notable in that it lacks strike invincibility, though it is immune to throws. His level 2 is fully 
        invincible from frames 1-9, but completely whiffs on crouchers, making him especially susceptible to lows.
        </p>

        <p>Finally, Marisa's level 1 is armoured, and therefore it also loses to throws. Her level 2 and 3 can both be used as invincible 
        reversals, however.</p>

        <figure>
            <video src={levelOnePunish} type="video/mp4" preload="metadata" controls></video>
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

    </div>
    )
}