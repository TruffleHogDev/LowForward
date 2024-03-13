import { Link } from "react-router-dom";
import BnbBanner from "./banners/BnbBanner";
import ConceptItem from "./ConceptItem";


export default function Concepts() {
    return(
        <>
        <BnbBanner />
        <ConceptItem />

      {/*  <div className="container">
        <img className="w-4/6 lg:w-2/5 m-auto justify-center" src={conceptImg}></img>
        <article className="conceptStyles">
        <h3>Refine your knowledge of fighting games.</h3>
        <img className="w-1/6 m-auto justify-center" src={AAPreview}></img>



        <h2>Beginner</h2>

        <hr className="smallDivider"></hr>
        <ul>
        <Link to="../preface">Preface</Link>
        <Link to="../antiairs">Anti-airs</Link>
        <Link to="../bnbs">Basic Combos and How to Learn Them</Link>
        <Link to="../meaties_and_confirms">Meaties and Hit Confirms</Link>
        <Link to="../strikethrow">Fundamentals of Strike/Throw Offense</Link>
        <Link to="../reversals">Playing Around Reversals</Link>
        <Link to="../defense">Fundamental Defensive Options</Link>
        <Link to="../low_commitment_neutral">Satsui no Hado: the Power of (doing) Nothing</Link>
        <Link to="../pokes">Pokes and How to Use Them</Link>
        <Link to="../space_control">Holding Your Ground and Controlling Space</Link>
        <Link to="../losing_and_tilt">It's OK to Lose- A Healthy Approach to Tilting Situations</Link>
        </ul>

        <hr className="smallDivider"></hr> 

        <ul>
        <h3>Upcoming beginner content:</h3>
        <li>Putting it all together- forming a strong baseline</li>
        </ul>
        
        <hr className="smallDivider"></hr>

        <ul>
        <h3>Upcoming intermediate content:</h3>
        <li>What constitutes "good" decision making?</li>
        <li>Combo utility and why damage isn't everything</li>
        <li>Meter management and resource awareness</li>
        <li>The drive gauge and you</li>
        </ul>

        <hr className="smallDivider"></hr>

        <ul>
        <h3>Upcoming advanced content:</h3>
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