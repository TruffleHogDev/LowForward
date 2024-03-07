import { Link } from 'react-router-dom';
import BnbBanner from './banners/BnbBanner';

export default function Resources() {
    return (
        <>
         <BnbBanner />
         <div className="container">
         <article className="resourceStyles">

         <h1>External Resources</h1>
        <p>
        Here you'll find some external resources that are invaluable for learning fighting games, along with a brief description.
        </p>

        <hr className="smallDivider"></hr>

        <h3>
        <Link to="https://wiki.supercombo.gg/w/Street_Fighter_6">Supercombo</Link>
        </h3>


        <p>Incredibly useful resource for SF6, as well as multiple other fighting games including legacy SF and MVC. Framedata, hitbox
        and hurtbox info, basic combo routes, detailed explanations of game mechanics, and much more are there. I use this resource all 
        the time and highly recommend anyone 
        serious about learning the game use it too. Check out their writeups on system mechanics and game data especially if you aren't 
        familiar with the intricacies of either.</p>

        <hr className="smallDivider"></hr>

        <h3>
        <Link to="https://www.dustloop.com/w/Main_Page">Dustloop</Link>
        </h3>

        
        <p>Same concept as Supercombo, but for Arcsys fighters including Guilty Gear, DBFZ, Blazblue, Granblue, and DNF Duel.</p>

        <hr className="smallDivider"></hr>

        <h3>
        <Link to="https://glossary.infil.net/">Fighting Game Glossary</Link>
        </h3>
        <p>As the name implies, it's a fighting game glossary for multiple games. Very helpful for learning all the various jargon 
        the FGC uses. I try to explain new terms in my articles, but if I miss something or if you otherwise aren't familiar with a term, 
        this is a great resource.</p>

        <hr className="smallDivider"></hr>

        </article>
    </div>
    </>
    )
}