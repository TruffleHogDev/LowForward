import { Link } from "react-router-dom";

export default function Concepts() {
    return( <div className="conceptStyles">
        <h1>Concepts</h1>
        <p> Here you will find all articles, sorted by beginner to advanced. All planned content at the bottom!</p> 
        <p>I highly suggest 
        starting with the preface so you understand how the guides are structured.</p>
        <h2>Beginner</h2>
        <ul>
        <Link to="/preface" replace>Preface</Link>
        <Link to="/antiairs">Anti-airs</Link>
        <Link to="/bnbs">Basic Combos and How to Learn Them</Link>
        <Link to="/meaties_and_confirms">Meaties and Hit Confirms</Link>
        </ul>
        
        <hr className="divider"></hr>

        <h2>Intermediate</h2>

        <hr className="divider"></hr>

        <h2>Advanced</h2>

        <hr className="divider"></hr>

        <ul>
        <h3>Upcoming beginner content:</h3>
        <li>Basics of strike/throw offense</li>
        <li>Making your punishes count</li>
        <li>Playing around reversals</li>
        <li>Fundamental defensive options</li>
        <li>Satsui no Hado: the power of (doing) nothing</li>
        <li>Holding your ground and controlling space</li>
        <li>Pokes and how to use them</li>
        <li>It's okay to lose</li>
        <li>Putting it all together- forming a strong baseline</li>
        </ul>
        
        <hr className="divider"></hr>

        <ul>
        <h3>Upcoming intermediate content:</h3>
        <li>What constitutes "good" decision making?</li>
        <li>Combo utility and why damage isn't everything</li>
        <li>Meter management and resource awareness</li>
        <li>The drive gauge and you</li>
        <li>Drive rush extensions</li>
        <li>Routing into supers</li>
        <li>Whiff punishes, spacing traps, and shimmies</li>
        <li>Basic option selects: buffers and delay techs</li>
        </ul>

        <hr className="divider"></hr>

        <ul>
        <h3>Upcoming advanced content:</h3>
        <li>Focusing on your opponent's character</li>
        <li>How to quickly learn your opponent's habits</li>
        <li>Adapting to knowledgable opponents</li>
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