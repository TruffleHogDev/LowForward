import { Link } from 'react-router-dom';
import numPadNotation from "../src/assets/images/numpad.jpg";
import frameData from "../src/assets/images/frameData.jpg";


export default function Preface() {
    return (
        <div className="articleStyles">
        <h1>Preface</h1>
        <h3>The learning process, training plans, input notation, and more.</h3>

        <hr className="smallDivider"></hr>

        <h4>Important note: if you are brand new to fighting games, check out the Supercombo Wiki's 
        <Link to="https://wiki.supercombo.gg/w/Street_Fighter_6/Game_Data"> Game Data guide</Link> for an introduction to the concept 
        of framedata. It is mandatory to understand framedata in order to understand fighting games. You can also see a quick explanation
        in SF6's training mode below. </h4>

        <figure>
            <img className="w-5/6 sm:w-3/4 md:w-4/6" src={frameData} alt="Brief explanation of framedata."></img>
            <figcaption>Brief explanation of framedata. You must understand concepts like startup and frame advantage for many lessons to
            make sense. 
            </figcaption>
            </figure>

        <hr className="divider"></hr>

        <p>Before we get to the good stuff, there are a few housekeeping things to talk about. First, the playstyle, strategies, and 
        training plans written here are not the objectively "best" or most "correct" way to play the game, nor is it the only viable
         winning strategy in fighting games. It is simply my preferred playstyle, the one I am most familiar with, and one that I know 
         through experience can find success at all skill levels.</p>
         <p>Second, with regards to practicing the concepts in the articles, they are written in a way that provides a general outline
         that you can follow in the way that makes the most sense to you. For anything involving mechanical execution, especially things
         written for beginners, a great rule of thumb to follow is the rule of 10: you should practice each motion (or sequence, etc.) 
         until you can do 10 reps in a row without making a mistake. If you ever fumble for any reason, start back at zero. Once 
         you successfully do 10 reps on one side, switch sides and start back at zero. The idea behind the exercise being so demanding is
          so that you build up enough muscle memory that you can do it consistently in real matches without thinking, and by extension
           give you the confidence to go for them since you know you can do it on both sides. 
           If there are any specific training mode settings that are helpful for a particular exercise, they will be in their 
           independent articles.
           I also may give suggestions for advanced things to practice when you are comfortable with the basic concepts, 
           and you may choose to implement them or ignore them as you see fit. I will tell you if I think something is less of a priority, 
           so you can come back to it later if it's too difficult to start with. The main point for putting them in the articles at all is 
           to give beginners ideas for what they can try in the future, and more experienced players ideas to experiment with.</p>

           <p>You will also see a lot of overlap when it comes to the concepts being discussed on this site, and that's because 
           many of these fundamental skills work together in tandem to form a complete gameplan; it's very difficult to speak about 
           something like combos without also mentioning meaties or hit confirms, or talking about meaties without also touching on 
           strike/throw mixups. Each major concept will have an article where it is the primary focus, so don't worry 
           if you feel like some things being discussed are a little bit beyond the focus of the articles, especially in the beginner 
           sections- they will be explained in due time. Hopefully it will give you an idea for how all of these building blocks
            work together as you grow stronger as a player, and I have done my best to create an intuitive feeling lesson plan that 
            naturally moves from one concept to the next to help make things less confusing. The beginner section, for instance, 
            will start with anti-airs to allow you to control your opponent's movement, then we learn basic combos and pressure
            before movement in neutral because a lot of midscreen strategies rely on you being able to do both of those things consistently
            in order for them to be effective. </p>

            <hr className="divider"></hr>

           <p>When it comes to discussing inputs, I will for the most part be using numpad notation. If you're not familiar with 
           numpad notation, that's okay! You can refer to the following graphic below- 2MK would, for instance, refer to a 
           characters' crouching medium kick. It might take a little while to get used to it if you've never seen it before, but it's 
           a fairly standardized way of communicating inputs across multiple 2d fighting games, so it's mostly for clarity.</p>

        <figure className="numpadImg">
           <img className="w-5/6 sm:w-3/4 md:w-4/6" src={numPadNotation} alt="Numpad notation"></img>
        <figcaption>Guide to numpad notation- author unknown</figcaption>
        </figure>

        <p>Finally and most importantly: your progression will have peaks and valleys, some days will be more difficult than others, 
        and you will lose. A lot. You might drop a few games when practicing something that you might have otherwise won- this is 
        normal, and it's okay. It's one thing to be able to do something in training mode and another entirely to be able to do it 
        in a live game with someone who's actively trying to punch you in the face. You're basically trading a short-term win for 
        long-term consistency, and you should embrace this growth-oriented approach to wins, losses, and personal progression in 
        the genre in general. After all, even if you miss an opportunity to try the new thing you're working on and you recognize 
        it, that's still progress! Make your goal for the next set/session/whatever to only focus on the thing you're trying to 
        practice. Losing is part of everyone's journey, and so is an uneven path of progression.</p>

        <p>Never compare your results or rate of progression to others or else you will never be happy- your only goal in this regard
        should be to be stronger than your past self. With all that in mind, you're ready to dig in to the rest of the content here. I 
        hope you find it informative.</p>

        <hr className="divider"></hr>
        </div>
    )
}