import { Link } from 'react-router-dom';
import BnbBanner from './banners/BnbBanner';
import resourcesImg from "../src/assets/images/resourcesImg.png";
import ResourceItem from './ResourceItem';

const data = [
    {
      tag: 'FGC Wiki',
      title: 'Supercombo Wiki',
      details: 'The Supercombo Wiki is an incredibly useful resource for SF6, as well as multiple other fighting games, such as MvC or legacy Street Fighter titles. Framedata, hitbox and hurtbox info, some basic combo routes, detailed explanations of game mechanics, and much more are there. I use this resource all the time and highly recommend anyone serious about learning the game to use it too. Check out their writeups on system mechanics and game data especially if you aren\'t familiar with either. It is not a be-all end-all resource, and does not always have up-to-date or fully accurate info (mostly an issue with older or less popular titles), but for general use it\'s invaluable.',
      location: 'https://wiki.supercombo.gg/w/Street_Fighter_6',
    }, 
    {
        tag: 'Arcsys Fighter Wiki',
        title:'Dustloop',
        details:'Similar concept as Supercombo, but focused on Arcsys/anime fighters like Guilty Gear, Blazblue, Granblue, DBFZ, DNF Duel, and more. Info on matchups and character theory is sometimes sparse, so you\'re better off looking at other resources (like this!) for help with learning how to approach those. but is otherwise reliable.' ,
        location: 'https://www.dustloop.com/w/Main_Page',

    },
    {
        tag:'Fighting Game Glossary',
        title: 'Infil.net',
        details: 'Fighting game glossary. Very helpful for learning FGC jargon. I generally try to explain the lingo I use in my articles, but if anything is missed or you come across a term you\'re unfamiliar with, this is the best resource there is.',
        location: 'https://glossary.infil.net/',
    }
]
export default function Resources() {
    return (
        <>
         <BnbBanner />
         <div>

         <article className="container">
         <img className="w-4/6 lg:w-2/5 m-auto justify-center" src={resourcesImg}></img>
         </article>

         {data.map((item, idx) => (
        <ResourceItem
        key={idx}
        tag={item.tag}
        title={item.title}
        details={item.details}
        location={item.location}
         />
        ))}

        </div>
    </>
    )
}