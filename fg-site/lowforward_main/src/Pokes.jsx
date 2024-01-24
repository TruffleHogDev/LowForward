import lucidDream from "../src/assets/videos/lucidDream.mp4";

export default function Pokes() {
    return(
        <div className="articleStyles">
            <h1>Pokes and How to Use Them</h1>
            <p>Understanding how to use pokes properly can be an especially vague and intimidating concept for someone trying to learn 
            how their character works. Fewer things are more frustrating than knowing that your character's buttons are supposed to be 
            strong, but not understanding how to use them. A scrub would simply decide that literally everybody else is wrong and assume 
            their experience failing to make the moves work is a universal truth, whereas people who aren't a lost cause will instead
            rethink their approach. In this article, we're going to tackle this deceptively difficult topic and go into how to use 
            normals and other moves to poke by doing a little thought exercise that will 
            hopefully guide you in the right direction as you figure out how to form your own gameplan.
        </p>

        <hr className="smallDivider" />

        <h2>Thinking about how your character plays neutral</h2>

        <hr className="smallDivider" />

        <p>Understanding how to poke is more art than science, and your character's normals and overall kit obviously play a significant 
        role in shaping their gameplan. Given this, instead of listing a bunch of move properties and academically outlining
        paragraphs of potential use cases and niches in a vacuum, we're going to consider how someone might intuitively develop a stronger 
        understanding of how to poke. Let us step into the mind of a mid level 
        Ken main, who is struggling mightily to overcome a plateau. The Ken main has a solid grasp on offense and defense, and 
        understands that the character's neutral is supposedly 
        incredibly good, with moves like 5HP in particular being considered to be very powerful. Every time they try to 5HP 
        their way up to the lofty heights of 1387 MR, however, they constantly get the move stuffed. In a rage, they resort to doing H dragonlash 
        where they are promptly perfect parried into oblivion. Blinking back tears, they look wistfully at the 44% winrate that got them all
        the way to Master rank and sigh. Why would Capcom do this? </p>

        <p>The Ken player posts some of their replays to their community discord for help, and despite getting some unhinged ramblings 
        from players who know even less than they do, a couple of people point out that they seem to use dragonlash "too much" and that 
        this might be something to focus on. "How am I supposed to do that," laments the Ken to themselves as they hop into training mode, 
        "if that's my only way to get in when 5HP doesn't work?!" Suddenly, as if by fate, their finger slips as they go to practice their 
        drive rush 5HP combos, and instead it lands on 5MK. Their eyes widen and their pupils dilate as they realize that Ken has had a 
        second normal all this time! Their imagination runs wild with possibility- could there be others? They breathe deeply to calm their racing 
        heart, and try to make sense of things. </p>

        <p>"Perhaps," begins the Ken player, "I have been using Ken's kit incorrectly. Maybe Ken's kit isn't primarily designed around 
        getting in with dragonlash, and in fact I am using it as a crutch instead of addressing my inability to play neutral? They begin 
        frantically brainstorming alternatives, and come up with the following:</p>

        <hr className="smallDivider" />

        <dl>
            <dt>Think:</dt>
            <dd>Many of Ken's normals, like 5HP, 5MK, and 5HK, have great range on account of their forward movement. While on paper, this 
            does mean that walking up and pressing the big advancing normals is a possibility, whenever I try to do that to try and bully 
            my way in, I get my pokes stuffed and die.</dd>

            <dt>Adjust:</dt>
            <dd>Let's change the way I use these normals to see if anything works better. If I hover around the max range of my opponent's 
            medium pokes and stop them from getting too close with 2MK and 5LK, I can then press my advancing normals to counterhit them 
            when they try to attack me. This will result in them 
            being domed from approximately 3 city blocks away, and they will then go and get in a Twitter argument because 
            somebody's tier list said Luke is better.</dd>

        </dl>

        <figure>
            <video className="w-5/6 sm:w-3/4 md:w-4/6" src={lucidDream} type="video/mp4" preload="metadata" controls></video>
            <figcaption>By Jove! It's working!
            </figcaption>
            </figure>

        <dl>
            <dt>Iterate:</dt>
            <dd>I now more clearly understand my core set of poking normals and how they enable each other, but they don't always work. 
            Sometimes my 5HK and 5HP are too slow, and people keep ducking under my 5MK and hitting me with 2MKs and sweeps.
            Using 5LK instead of my jabs to check people who get too close to 2MK is working, but it doesn't stop people from harassing me 
            from further away. Perhaps the disjointed hitbox and speed of 2MP or the moving hitbox of a hadoken are exactly the tools I need 
            to complement my core buttons. Doing this can frustrate my opponent into other options like jumping or neutral skips, and if they become
            passive because they can't break through, I can at last walk up and bully them with 5HP, or take my chances with a midrange 
            dragonlash.
            </dd>

            <dt>Conclusion:</dt>
            <dd>Ken's kit affords him a very strong midrange, and he is exceptionally good at whiff punishing and creating opportunities 
            to bait those whiffs. Going forward, I will focus my efforts on playing neutral with Ken with this as my goal instead of 
            attempting to recreate the ending of God of War 3 as soon as the round starts. I've figured out that the most consistent way 
            for me to know what moves to use is by using my slower, low commitment neutral to find out what options to prioritize on a 
            per-game basis. 623 years' worth of wisdom has awakened within me; now I have 1800 MR, my hair grew back, and my in-laws 
            tearfully called to say they forgive me for being a Ken main.</dd>
        </dl>

        <hr className="smallDivider" />

        <p>As you can see, our hypothetical Ken has achieved fighting game enlightenment and has smashed through their plateau by 
        thinking critically about their most powerful normals and how to use their other moves to enable them to be effective. The principles in 
        this thought exercise apply to any character in any game, and you can much more quickly figure out how to pilot a character 
        if you take this approach to their kit. It's important to be cognizant of what buttons you rely on, and to be thinking about alternatives 
        or workarounds to situations where things don't go the way you expected them to. Think about if there was a better move you could have 
        pressed in that situation, if something should have been pressed at all, etc, and you will find your decision making improving 
        over time. In the next article, we'll combine this approach to poking with our understanding of low commitment neutral to explain how 
        exactly everything combines to allow you to hold your ground and control space. </p>

        <hr className="smallDivider" />

        </div>
    )
}