import BnbBanner from "../src/banners/BnbBanner.jsx";
import firstRoutes from "../src/assets/videos/firstRoutes.mp4";
import betterRoute from "../src/assets/videos/betterRoute.mp4";
import labNotes from "../src/assets/videos/labNotes.mp4";
import oneOption from "../src/assets/videos/oneOption.mp4";
import whyIsRyuSoGood from "../src/assets/videos/whyIsRyuSoGood.mp4";

export default function NewTech() {
    return (
    <>
    <BnbBanner />
    <div className="container">
    <article className="articleStyles">
        <h1>
        How to Pick Up New Tech
        </h1>
        <p>One of the most fun things about learning fighting games is picking up things you see, and it's incredibly rewarding to figure out how to do it yourself. Cool combos, nasty mixups-
        basically anything that makes you think "Damn, that's sick. I wanna do that, too." Labbing things doesn't always have to be about things being practical or "realistic"- sometimes you 
        just want to land the sauciest looking combo ever or see just how high you can push your damage in a vacuum. There are ways, however, you can take those fun experiments and implement them 
        into your play in some capacity. In this article, I'm going to outline my method for taking something I see another player doing and making it my own, starting from landing it 
        precisely as I saw it, workshopping it to make it match applicable, then figuring out when and how I can actually go for it. </p>

        <hr className="smallDivider" />
        
        <h3>Step 1: Monkey see, monkey do</h3>
       {/* <iframe className="w-5/6 sm:w-3/4 md:w-4/6" src="https://www.youtube.com/embed/VYJWviBSoPs" title="The Nuttiest Ryu Combo I&#39;ve Ever Seen" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        <p>The first thing to do when you've seen something you want to lab is to recreate it in training mode. Don't worry about setting up the exact situation where it happened or anything, 
        just focus on learning the route as you saw it, since you know for a fact it can work. For this example, I'm using my actual attempts to recreate a combo I saw off a perfect parry starter in a highlight clip. 
        I wanted to learn this combo not only because it was cool, but because I was missing a 
        solid confirm off of Ryu's newly buffed heavy Hashogeki, and thought this was a great potential place to start. If you find yourself having trouble landing the combo you're trying to learn, you can do a couple 
        of things: you can rewatch the clips to make sure you're using the right moves as well as the right strengths for specials, and you can also ask other players for routing help to see 
        if there's anything you might be missing, like specific spacing or a small delay. This will tie in to the next point, but you can also ask if there's an easier route you can substitute to 
        make it more consistent if it's a particularly difficult combo.</p>

        <figure>
            <video className="w-5/6 sm:w-3/4 md:w-4/6" src={firstRoutes} type="video/mp4" preload="metadata" controls></video>
            <figcaption>My first time landing the midscreen route as I saw it done in the clip to see its unscaled damage, then checking to see if I can get more damage in the corner right after. 
            Level 3 adds 2000 damage at minimum scaling (50% for level 3), and CA adds 2250.
            </figcaption>
            </figure>

        <hr className="smallDivider" />

        <h3>Step 2: Experimentation</h3>

        <p>Now that we're actually able to land the combo, the next step is to optimize it a little, whether it be for damage, consistency, or both. Based on the previous clip, I tried to do 
        Ryu's typical optimal corner ender of 4HPxx236HK, but the juggle made it impossible to land a DP before doing level 3. I knew that you could still get a DP juggle after DR-4HPxx236MK 
        because one of his optimal confirms off of EX denjin hasho into level 2 does exactly that, so my next test was to see if that would work in the corner for this combo, too. It did work, so now 
        we have a strong cashout confirm from this starter both midscreen and in the corner. This route is lucky in that it's not a particularly hard combo once you get used to the drive rush 
        timings, so we don't really need to substitute different moves to make it easier.</p>

             <figure>
            <video className="w-5/6 sm:w-3/4 md:w-4/6" src={betterRoute} type="video/mp4" preload="metadata" controls></video>
            <figcaption>Testing to see that my idea was in fact correct. Now I know I have a high damage cashout option off of this starter!
            </figcaption>
            </figure>


        <p>Next, now that we have high meter routes for this starter, it makes sense to see what we get for fewer resources so that we don't have to burn out if we don't want to. Max damage 
        routes with low drive cost, options for enders, and potential mixup situations are all things you can test out. I've condensed some example findings for this clip in the below video.</p>

        <figure>
            <video className="w-5/6 sm:w-3/4 md:w-4/6" src={labNotes} type="video/mp4" preload="metadata" controls></video>
            <figcaption>In order: Go-to low meter confirm for oki, confirm for denjin, checking what level 3 will work off of, discovering a safejump, testing safejump punish damage, seeing if 
            you can do a level 2 confirm, and a suboptimal corner combo for fun that can still potentially salvage a misinput.
            </figcaption>
        </figure>

            <hr className="smallDivider" />

        <h3>Step 3: How do I actually land this?</h3>

        <p>When thinking about situations where doing the combo is actually realistic, think about where you would be using the starter. For this example, two main ways come to mind: 
        As a 9-frame punish counter starter, or by using 214HP as a frametrap. As a punish starter it's not likely to come up often outside of perfect parries, so in those instances we can 
        default to the 4HP-214MK confirm as spending resources on the damage will usually not be worth it. For other situations such as after blocking a DP, 5HK is a much better 
        starter overall. Even if you were to get into a position where a 9-frame 2HP would technically connect but your optimal starter would be too slow, you're incredibly unlikely to be 
        in range for your move to reach- you'd be looking at something like blocking a point blank sweep in the corner.</p>

        <p>Given this, that leaves us with looking into frametrapping options. Even if done off of incredibly advantageous buttons like meaty drive rush 2MP, the 30-frame startup of 214HP is mashable
        by 4-frame moves or even throws. To make things worse, we can't counter DI if they react to the startup (though level 3 buffers can save you there potentially)! What this means is that while we have no guaranteed 
        way to set up this frametrap outside of burnout- more on this later- we can still go for it on either a heavily conditioned opponent, or we can play around spacing to punish attempted 
        jab checks. This is most effective when you are able to poke with max range 5HP but aren't often swinging afterwards, making it safer to try and sneak a 214HP in.</p>

        <figure>
            <video className="w-5/6 sm:w-3/4 md:w-4/6" src={oneOption} type="video/mp4" preload="metadata" controls></video>
            <figcaption>One way to potentially land the 214HP starter while evading jab checks. It's risky, but can be done with proper conditioning. Even if it's blocked, it encourages 
            your opponent to challenge after your buttons in the future, giving you potential openings to exploit down the line.
            </figcaption>
         </figure>

        <p>The last way we can fish for this starter is when our opponent is in burnout. 214HP is a terrifying button to have to deal with in burnout at a whopping +6 on block while dealing 
        200 chip damage, so these are MUCH more likely to land. To make these true frametraps, you still need to use a drive rush normal, and you have three options: 5HP, 4HK(2), or 
        2HP, which sets up a trade combo with an outrageous 26 frames of advantage- just plus enough to combo into DI. In fact, with a tiny delay, you can set up an inescapable stun if they 
        don't have a reversal super to get them out of it.</p>

        <figure>
            <video className="w-5/6 sm:w-3/4 md:w-4/6" src={whyIsRyuSoGood} type="video/mp4" preload="metadata" controls></video>
            <figcaption>Showing off ways to capitalize on burnout pressure with our new starter. Now we have practical ways to get the starter and ways to set up the hit. Landing these combos 
            in live games is suddenly a lot more realistic.
            </figcaption>
        </figure>
            
        <hr className="smallDivider" />

        <h3>In Summary</h3>

        <p>By now, you should have a structured way to approach labbing new things you see from other players- replicating it, finding permutations that are consistent, seeing what else you 
        can get from it, and ultimately just going crazy to see how far you can push the idea. I encourage you to try this out the next time you see something really cool for your main. You 
        never know what you'll find out; I know I didn't expect to find a checkmate stun scenario when I was initially trying to find a combo off of H hasho. You'll have a ton of new things 
        to try when you start playing games next, and become more well-rounded as a player overall, since you're practicing the rest of your fundamentals as you learn this stuff. Get out there and 
        have fun.</p>

        <hr className="smallDivider" />
     </article>
    </div>
    </>
    )
}