import { Link } from "react-router-dom";

export default function Concepts() {
    return( <div className="conceptStyles">
        <h1>Concepts</h1>
        <p> Here you will find all articles, sorted by beginner to advanced. All planned content at the bottom!</p> 
        <p className="font-bold">I highly suggest 
        starting with the preface so you understand how the guides are structured.</p>


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
        </ul>
        
    
      {/*  <h2>Intermediate</h2>

        <hr className="smallDivider"></hr>

        <h2>Advanced</h2> */}

        <hr className="smallDivider"></hr> 

        <ul>
        <h3>Upcoming beginner content:</h3>
        <li>Holding your ground and controlling space</li>
        <li>It's okay to lose</li>
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
        </div>
    )
}