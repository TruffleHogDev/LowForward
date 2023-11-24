import spacingTrap from "../src/assets/videos/spacingTrap.mp4";
import conditionedThrow from "../src/assets/videos/conditionedThrow.mp4";
import ryuSequence from "../src/assets/videos/ryuSequence.mp4";
import frameData from "../src/assets/images/frameData.jpg";
import stringEnder from "../src/assets/images/stringEnder.jpg";
import shimmy from "../src/assets/videos/shimmy.mp4";
import stagger from "../src/assets/videos/stagger.mp4";
import jumpScare from "../src/assets/videos/jumpScare.mp4";
import diReset from "../src/assets/videos/diReset.mp4";

export default function StrikeThrow() {
    return (
        <div className="articleStyles">
            <h1>Fundamentals of Strike/Throw Offense</h1>
            <p>
                Strike/throw mixups are the cornerstone of Street Fighter offense and can be both very simple and incredibly complicated.
                Since mixups inherently involve a large amount of mindgames, it's very difficult to provide a definitive guide on how to 
                do it. Given this, the goal of this page will be to outline the most common ways to initiate strike/throw mix, 
                describe the principles I base my offense on, and show you a few different 
                techniques you can use to make yourself more difficult to defend against, with some examples of when it 
                might be a good idea to try them.
            </p>

            <p>
            Note that most aspects of strike/throw offense fundamentally revolve around the concept of interacting with plus frames. If 
            you are still unfamiliar with framedata, check out the Resources tab or the preface for links to an in-depth explanation, 
            and the Frame Meter and You 
            tab in the Simple Training Settings tab of SF6 training mode. 
            </p>

            <figure>
            <img src={frameData} alt="Brief explanation of framedata."></img>
            <figcaption>A lot of strike/throw offense is based around exploiting your frame advantage to force your opponent to guess.
            </figcaption>
            </figure>

            <hr className="smallDivider" />

            <h3>When do I get strike/throw opportunities?</h3>
            <p>
                In SF6, overwhelmingly the most common way to get a strike/throw mixup is off of a knockdown that leaves you with enough 
                advantage to approach your opponent and force them to guess between a meaty strike and a meaty throw. Putting your opponent 
                in a position where they must immediately choose between two unreactable options that can't be defended 
                against by the same option is known colloquially
                as a 50/50. It doesn't apply to strike/throw in every case (high/low, left/right, etc), but it is the most common one. 
                Don't worry about option selects if you know about those; they will be 
                explained later, though shimmies for the purpose of beating delay techs will be touched on. 

                If your meaty strike is blocked and you have advantage on block, you can immediately put them in another 50/50 and they
                have to guess again. If your follow-up strike leaves a gap in your pressure that is small enough allow your 
                opponent to press something, but fast enough to interrupt their startup, it's known as a frametrap and is one of the 
                most common and powerful ways to continue your pressure. 
                In SF6, you need to be at minimum +2 in order for your throws to beat mashing a 4-frame. Some combo enders that don't end 
                with a knockdown will instead leave you with a small amount of frame advantage on hit, enabling you to press a quick button
                to discourage your opponent from attempting to take their turn back, which is another type of frame trap. 
                If the opponent begins to respect you pressing normals in 
                those spots, you can use those plus frames to walk up and throw them. This is risky because it does lose to mashing, 
                but can be devastating to an opponent's mental stack if you succeed. 
            </p>

            <p>It's also important to note that regular parries do not affect frame data on block- a move that's -2 normally is also 
            -2 when parried.</p>

            <p>If you have a fast command grab, your offense becomes much more potent because you cannot tech command grabs. Their priority
            over throws is what makes grappler offense so terrifying.</p>

            <figure>
            <video src={ryuSequence} type="video/mp4" preload="metadata" controls></video>
            <figcaption>Example pressure sequence that revolves around the threat of the plus frames and damage granted by meaty 5MP
            to enable throws. Includes sample tick
            throw and frametrap with 5LP. Try adding meaty throws to make it harder to defend against!
            </figcaption>
            </figure>

            <p>This concept also similarly applies to jump-ins, which if blocked low enough to the ground have a significant amount of 
            frame advantage- typically enough to go for an immediate strike/throw mixup or a blockstring into a powerful combo starter, 
            which is just another reason why having good AAs is important. You want to avoid having to guess as much as possible.</p>

            <p>The third most common way to get a strike/throw mixup in SF6 is off of drive rush normals, especially jabs; a typical 
            4-frame jab will be -1 on block, making it +3 off of drive rush and forcing an immediate 50/50. You can make it even harder 
            to defend against by doing drive rush into throw once your opponent expects the jab first.</p>

            <p>The final most common way to get plus frames stems from burnout- similar to drive rush, all moves gain an extra 4 frames of 
            advantage on block, so you can bully your opponents incredibly hard with a mixture of incredibly threatening
            plus on block normals and/or specials, throws, and drive impacts.  
            </p>

            <figure>
            <video src={spacingTrap} type="video/mp4" preload="metadata" controls></video>
            <figcaption>Example of a frametrap sequence utilizing plus frames on hit- Ken will commonly 2MK or 5LK here, 
            which will discourage challenging.
            </figcaption>
            </figure>

            <figure>
            <video src={conditionedThrow} type="video/mp4" preload="metadata" controls></video>
            <figcaption>The threat of being hit by the above example can enable throws, too. 
            You can use the momentum gained from strong fundamental strike/throw offense to form openings like this for some truly explosive 
            sequences. 
            </figcaption>
            </figure>

            <hr className="smallDivider"/>

        <h3>Basic theory behind strong strike/throw</h3>

            <hr className="smallDivider"/>
            
        <h4 className="bold">1: Make sure you can hit confirm consistently.</h4>
        <p> Being able to do this 
        fundamentally changes how your opponents have to play to survive. This is the real secret to beating "random" playstyles on 
        offense- you can react to whatever they choose to gamble with with one or two simple blockstrings, and repeat the situation until 
        either they defend appropriately or they lose the round.</p>

        <h4 className="bold">2: Don't adapt until your opponent does.</h4>
        <p> It's important to remember to 
        play around the things that your opponent is actually doing, rather than what they could potentially do. If that Chun player 
        has gotten hit by the last 4 meaty light strings in a row, there's no need to shimmy to try and bait a throw or a reversal- they 
        haven't tried to do anything but mash out of your offense. You generally don't need to do anything more advanced than meaty 
        strike/throw with your basic light and medium blockstrings until your opponents demonstrate they can defend against them.</p>

        <h4 className="bold">3: Avoid being predictable when they do adjust. </h4>
        <p>Basically, if you're finding it impossible to open up your opponents
        after a little while, it 
        probably means your pressure is too linear. Make sure you're not always going for the same options in the same places, or else 
        smart opponents will find it very easy to defend against you and will also be confident interrupting the gaps in your offense. 
        A good mixture of light/low strings, tick throws off of different normals in different places, 
        and plus on block meaties combined with meaty throws is comparatively 
        almost impossible to stop over a longer period of time than always going for a 5LP tick throw when you get a knockdown, if 
        that makes sense.</p>

        <h4 className="bold">4: Favor low risk options that also cover as many of your opponent's options as possible.</h4> 
        <p>For example, I'm very fond of going 
        for 2LK hit confirm strings early on in sets because they enable good combos on hit, are very safe on block, beat wakeup throw, 
        jump, and backdash, and can also 
        easily be canceled on reaction to Drive Impact. You can even use their quick recovery to bait and punish Drive Reversals or even 
        some invincible reversals like DPs and supers in some situations if your opponent begins doing those. 
        Their speed and ambiguous blockstring length also makes them great for tick throws 
        and pressure resets when they respect the jab chains. This allows you to safely get an idea for how your opponent defends for 
        almost zero downside.</p>

        <h4 className="bold">5: Reserve high risk options for when your opponent doesn't have the resources to check them or is consistently defending 
        against your safer options.</h4> 
        <p>This can be as simple as only going for Drive Impacts when your opponent is blocking you in burnout 
        and has no super meter to stop you, or as advanced as going for a shimmy setup because you noticed your opponent is delay 
        teching all your strike/throw mixups. It's okay to sometimes go for high risk options in situations where your opponent can 
        respond to them, but you want to err on the side of caution if they haven't given you a reason to go for them yet. Hit them with
        the solid stuff to enable the "fake" (punishable or easily interruptable/reactable if used predictably) stuff. Think moves like 
        slow overheads or oppressive but interruptable special moves like Ken's heavy Dragonlash or Dee Jay's sway followups.
        </p>

        <h4 className="bold">6: Be comfortable with ending your turn.</h4>
        <p>If your opponent doesn't bite, you don't always have to go for a DR extension or 
        try to extend a turn by pressing something during your minus frames. You can simply reset to neutral and wait. Your opponent will 
        be feeling immense pressure because they know how dangerous your offense is and is likely to lash out in desperation.</p>

        <figure>
            <img src={stringEnder} alt="Training mode 50% playback speed"></img>
            <figcaption> Be comfortable ending your blockstrings and waiting. The pressure caused by your patience at this range can make 
            any player crack when they know what happens if they overextend.
            </figcaption>
            </figure>

        <hr className="smallDivider" />

        <h3>What more advanced techniques can I use to stay unpredictable?</h3>
        
        <h4 className="bold">1: Tick throws</h4>

        <p>A tick throw is a technique where you use a fast normal like a jab and then immediately throw your opponent afterwards. 
        Tick throws are a powerful tool even if you don't have plus frames on your jab from a DR or burnout, since the low pushback 
        on block and speed of the attack makes them impossible to react to. Typically, tick throws lose to mashing during the gap 
        between the jab and the throw, but if you're plus and close enough, you can still beat mashing.</p>

        <h4 className="bold">2: Pressure resets</h4>

        <p>A pressure reset (sometimes also known as a stagger) is a risky option that involves you ending your blockstring early, 
        walking forward, and starting your string from the beginning. You can use this to help open up overly passive opponents who are 
        content to sit and block for extended periods of time, or who try to tech when they expect a tick throw. Like tick throws, 
        there is a gap where your opponent can mash to interrupt you as you walk forward, so you don't want to do this recklessly.
        You can also use this to open up patient defenders with repeated low-hitting lights. Once your opponent begins pressing buttons, 
        you can simply go back to doing your safer blockstrings and hit confirming them again.</p>

        <figure>
            <video src={stagger} type="video/mp4" preload="metadata" controls></video>
            <figcaption>Showcasing ways you can pressure overly passive defenders into pressing something. Tick throws and staggers can be 
            challenged, so use these sparingly.
            </figcaption>
            </figure>


        <h4 className="bold">3: Shimmies</h4>

        <p>Shimmies are a classic way to call out throws and invincible reversals, and they also have extra use as the main way of 
        beating delay techs, which is an advanced technique where you do a slightly delayed tech on wakeup so that you can automatically 
        defend against meaty strikes and meaty throws (typically about 4 frames after blockstun ends in SF6). 
        If your opponent is guessing a little bit too consistently with your meaties and teching every single throw, 
        they're probably delay teching. To do a shimmy, you back up out of your opponent's throw range, block for a brief moment, and then 
        press a button that you can confirm off of. Note that you're not actually reacting to whether they whiffed a throw, you're 
        simply doing a delayed button and then hit confirming that. Since this option gives up your turn on offense, it's usually 
        best to not do it unless they're doing a lot of wakeup reversals or are consistently delay teching. Shimmies are susceptible to 
        low-hitting lights and mediums, delayed buttons, and walk up throws. Sweeps will usually not catch a shimmy unless they're poorly 
        timed.</p>

        <figure>
            <video src={shimmy} type="video/mp4" preload="metadata" controls></video>
            <figcaption>A shimmy bait and punish, used for beating delay techs. If they are wakeup teching instead of delay teching, 
            stick to meaty strikes.
            </figcaption>
            </figure>

            <h4 className="bold">4: "Jumpscares"</h4>

            <p>These are your haymakers that are usually too reactable or unsafe to be reliable options. Think your DIs, your slow command 
            grabs, overheads, or plus on block command normals like Ryu's 6HP. These are best used when your opponent is under a lot 
            of stress and worried about 4 or 5 different options, like when they're low on life or in burnout. These can also be 
            used to reset your combos, intentionally ending them early and attempting to hit them with a new combo starter.
            You don't want to go for these under most circumstances due to their all-in nature, 
            but are great for securing KOs or making comebacks in a pinch.</p>

            <figure>
            <video src={jumpScare} type="video/mp4" preload="metadata" controls></video>
            <figcaption>An example of a "jumpscare" DI. Useful for breaking through heavily conditioned opponents who are too busy 
            thinking about other things to react in time.
            </figcaption>
            </figure>

            <figure>
            <video src={diReset} type="video/mp4" preload="metadata" controls></video>
            <figcaption>A sneaky DI reset commonly used after Jamie's level 3 that takes advantage of the opponent's expectation of a 
            longer combo.
            </figcaption>
            </figure>

            <hr className="smallDivider"></hr>

            <h3>Where do I start with all this?</h3>
            <p>If you're new or not confident in your regular strike/throw, start with your basic meaties and hit confirms. 
            Focus on your light and medium BnB blockstrings and don't worry about more difficult confirms that may require counterhits or 
            frame perfect meaties. Practice perfecting your strike and throw timing to beat wakeup mashing as the goal for your next 
            session(s). Try to react to wakeup DIs during your blockstrings to shut down that as an option, especially if you're below 
            Diamond. Don't worry about anything more complicated on offense until you can't open up your opponents anymore and are forced 
            to adapt- you want them to be doing all the thinking on defense. Your most basic goal as the attacker is to see 
            how they respond to stop your basic strike/throw, and then adjust to beat that response (unless they keep getting hit, in 
            which case keep doing it until you win).</p>

            <p>By now, you should have a basic ability to anti-air, a good set of BnBs that you can hit confirm, and the ability to 
            pressure your opponents when you score a knockdown. You might even be getting good at reacting to wakeup DIs and seeing 
            patterns in how your opponents defend. But you may have noticed a conspicuous absence among defensive options covered in this 
            article- what about wakeup DP and super? What about when they start to DP and perfect parry my frametraps? Is there anything 
            that I can do besides give up my turn and try to bait it? All of those questions and more will be covered in the 
            next article, dedicated to playing around reversals.</p>
        </div>
    )

}