import mySpace from "../src/assets/images/mySpace.jpg";
import BnbBanner from "../src/banners/BnbBanner.jsx";

export default function SpaceControl() {
    return (
        <>
        <BnbBanner />
        <div className="container">
        <article className="articleStyles">
            <h1>Holding Your Ground and Controlling Space</h1>

            <p>In the previous article, we learned how to develop a poking gameplan by thinking about what normals we can base our character's gameplan around, and then thinking about ways 
            to supplement those core normals to create a well-rounded understanding of their kit. This article will use that thought experiment as a baseline to discuss how exactly one uses
            those pokes to control space and hold their ground, as well as a little bit behind the psychology of why these strategies work against strong and weak players alike.
            </p>

            <hr className="smallDivider" />

            <h3>What does "controlling space" really mean?</h3>

            <hr className="smallDivider" />

            <p>Once you
            understand how to use your pokes and your opponents have begun to play around those pokes and respect the ranges that they cover, you implicitly control that space, in the sense 
            that they cannot enter that area without an immediate threat of being hit. To help
            illustrate the point, imagine an invisible line down the center of the screen at roundstart, with everything on your half of the line being under your control and the other half 
            belonging to your opponent. Your goal is to push that line towards the corner by making your opponent back up. While some moving back and forth is necessary to get a better
            position to engage the enemy, you generally always want that line to be moving forward, only going backwards when it benefits you to do so. That way, in the event that you do need 
            to back up, you have a lot more space to work with, and by extension you have more options available. If you are backing up without your 
            opponent actively threatening things that force you to back up, you're probably approaching the ground game wrong- the main exceptions to this would be if you're going to zone them or 
            are stalling out the 
            timer with a significant life lead, and even then you would use the space you gained earlier to have room to play lame. After all, a Guile sitting fullscreen and throwing booms is 
            a lot more dangerous if you're the one in the corner instead of him.</p>

            
            <figure>
            <img className="w-5/6 sm:w-3/4 md:w-4/6" src={mySpace} alt="Visual representation of space control."></img>
            <figcaption>Visual representation of space control. You can think of that center line moving forwards or backwards as your character moves. Your goal is to push it to the corner!
            </figcaption>
            </figure>

            <p>All of your movement in a fighting game should be deliberate, including walking. Footsies is a lot more than moving back and forth in a nebulous area around the tip of 
            your opponent's effective range, though that definitely is one aspect of it. If you're going forward and back and then forward and back and then go forward and back then press 
            one low forward without a concrete goal in mind, such as baiting a specific button they have been trying to poke you with, you're liable to get swept or poked as you move 
            forward because you are moving predictably and without a plan. It's generally better at first, in my opinion, to walk forward slightly and then downback to see what kind of response it 
            elicits from your opponent. If they back up in response, inch forward and do your best to maintain your position. 
            Keep in mind that if you move forward every single time they back up, you're 
            still open to getting poked just the same as you would walking back and forth, so as you improve over time keep in mind not to be too linear with any one aspect of your approach. </p>

            <p>
            If they attack after you walk forward and block, defend and then decide what to do during their 
            minus frames- are they patiently blocking? Are they pressing another button? If they are, does it look like a spacing trap or are they just flailing? Use this information to figure out 
            how and when you should attack them. If they're patiently blocking, a few potentially strong options are walking even closer to threaten more dangerous normals or throws, or pressing your 
            own counterpoke in response (maybe even with a drive rush or confirm special buffered behind it). If they're going for a spacing trap, you can wait for the second normal in their sequence
             and then attempt to whiff punish the 
            recovery. If they're just flailing, you can choose to interrupt them with a faster poke, go for a perfect parry on their predictable follow-up,  
            or block them out until they're out of range and continue moving forward- against these players, 
            be on the lookout for random neutral skips or jumps at this time especially.
            </p>

            <hr className="smallDivider" />

            <dl>

            <dt>Patient fighters who won't back up are scary because:</dt>

            <hr className="smallDivider" />

            <dd>1: They're always going to be trying to push you back, so you're incentivized to attack them- but you know they want you to attack so they can counter it, making pressing anything
                feel like a huge risk.</dd>

            <dd>2: If they're also doing a good job checking your jumps, dashes, etc, it can feel like anything you do is hopeless and you may be more willing to try something desperate that 
                loses the round.</dd>

            <dd>3: If you try to match their patience and contest them up close, they might take that hesitation as a chance to go on the offensive themselves with all of that extra space they 
                took from you.</dd>

            </dl>

            <hr className="smallDivider" />

            <p>By taking space and poking methodically, you become much more intimidating because you are hard to open up and hard to challenge. Weaker players will probably keep attacking you 
            in the hopes that something lands, and you can continue punishing them for easy wins. Intermediate to advanced players will likely begin backing up before trying something different 
             because you've conditioned them 
            to respect both your ability to poke and your ability to advance, and they want breathing room. Many players- even players in Master or your game's equivalent- have very little 
            experience facing someone who is comfortable slowly taking ground and staying put, and will be terrified of matching your pace. Learning how to do this is also quite scary at first, 
            but remember that blocking is free and usually the worst thing that will happen is you block something or take a small incidental hit. It's very important to never give your opponent 
            space they haven't earned. As you practice doing this more and play more people, advancing in this way will become much less stressful and you will begin to be comfortable at close 
            range and walking up aggressively, giving you a significant advantage against all but the strongest players, and allowing you to fight them, too, on your own terms.</p>

            <p>To reiterate, the main idea behind approaching and poking in this way is to take space away from your opponent to force them to choose between committing to a response, or 
            being bullied into the corner where you're going to have a much easier time breaking through. Weaker opponents who over rely on neutral skips will especially be likely to corner 
            themselves without much effort because they're too afraid to use their normals once you've demonstrated you can play around them. Sorry netplay Kims and Kens, but when you back up 
            fullscreen at roundstart, everybody knows what you want to go for and it isn't smart or safe.</p>

            <p>With all of this in mind, your goal when learning how to poke and hold ground should be to focus on walk blocking slowly, looking at how your opponent responds, and going from
            there. You should especially be aiming to put yourself in situations where you might be afraid to advance and block, because the only way to get over that fear is to face it head on 
            and get used to being in that spot. It will take time, and you will not always succeed, and that's okay- the most important thing is that you're making the effort and getting comfortable 
            with the strategy. Take failed interactions and losses as a moment of growth. Reflect on what lead up to what lost you the interaction, and think about if there was anything you could have 
            done differently to either win or avoid the situation in the first place. This is one of the most difficult aspects of fighting games to both teach and learn, and many players take several 
            years to become comfortable playing like this, so have fun and do your best to improve one small step at a time. In the next article, we'll talk a bit more about how to process losses 
            in a healthy way, and talk about more specific ways to workshop botched plays and learn from them.</p>

            <hr className="smallDivider" />
        </article>
        </div>
        </>
    )
}