import BnbBanner from "./banners/BnbBanner";
import ConceptBanner from "./banners/ConceptBanner";
import ConceptItem from "./ConceptItem";

const data = [
  {
    tag: 'Read first',
    title: 'Preface',
    details: 'The preface outlines how the guides are structured and how it is intended to be used as a learning aid.',
    location: '../preface',
  }, 
  {
    tag: 'Fundamentals',
    title: 'Anti-airs',
    details: 'Stop your opponent from jumping and rack up free damage with anti-airs, arguably the most important skill to learn as a beginner.',
    location: '../antiairs',
  },
  {
    tag: 'Fundamentals',
    title: 'BnBs: Basic Combos',
    details: 'Learn what combos to prioritize as a beginner, alongside some drills and tips for building muscle memory.',
    location: '../bnbs',
  },
  {
    tag: 'Fundamentals',
    title: 'Meaties and Hit Confirms',
    details: 'Meaties are a common pressure starter, and hit confirming them is a great way to practice using your combos.',
    location: '../meaties_and_confirms',
  },
  {
    tag: 'Fundamentals',
    title: 'Fundamentals of Strike/Throw Offense',
    details: 'Learn the basics of strike/throw offense- how you get it, how to do it, and more.',
    location: '../strikethrow',
  },
  {
    tag: 'Fundamentals',
    title: 'Playing Around Reversals',
    details: 'Learn the properties of reversal moves and how to play around them.',
    location: '../reversals',
  },
  {
    tag: 'Fundamentals',
    title: 'Fundamental Defensive Options',
    details: 'Offense is incredibly powerful, but so are your defensive tools. Learn what your options are, how to do them, and when to use them.',
    location: '../defense',
  },
  {
    tag: 'Theory',
    title: 'Satsui no Hado: The Power of (Doing) Nothing',
    details: 'Low-commitment neutral is a hallmark of top-level play. Learn what exactly it entails, why it\'s so strong, and how you can start implementing it too.',
    location: '../low_commitment_neutral',
  },
  {
    tag: 'Fundamentals',
    title: 'Pokes and How to Use Them',
    details: 'Poking is an essential part of any character\'s gameplan, but it can be hard to know intuitively what buttons to poke with and when.',
    location: '../pokes',
  },
  {
    tag: 'Fundamentals',
    title: 'Holding Your Ground and Controlling Space',
    details: 'Discover how to combine your poking normals with your low-commitment neutral to enforce your will on your opponent and control the pace of the match.',
    location: '../space_control',
  },
  {
    tag: 'Labbing',
    title: 'How to Pick Up New Tech',
    details: 'Make labbing fun by learning how to do cool things you see other people do and figuring out how you can do those things in game!',
    location: '../new_tech'
  }

]

export default function Concepts() {
    return(
        <>
        <BnbBanner />
        <div>

        <article className="container">
        <ConceptBanner />
        </article>

        {data.map((item, idx) => (
        <ConceptItem
        key={idx}
        tag={item.tag}
        title={item.title}
        details={item.details}
        location={item.location}
         />
        ))}

        </div>

      {/* 
        <Link to="../losing_and_tilt">It's OK to Lose- A Healthy Approach to Tilting Situations</Link>
        <li>What constitutes "good" decision making?</li>
        <li>Combo utility and why damage isn't everything</li>
        <li>Meter management and resource awareness</li>
        <li>Learning matchups
        <li>Focusing on your opponent's character</li>
        <li>Layering your pressure: offensive conditioning</li>
        <li>Layering your options: midscreen conditioning</li>
        <li>Layering your defense: creating opportunities</li>
        <li>Taking calculated risks</li>
        <li>Exploiting habits</li>
        <li>Dealing with bracket nerves and fighting top players</li>
        </ul>
        </article>
        </div> */}
        </>
    )
}