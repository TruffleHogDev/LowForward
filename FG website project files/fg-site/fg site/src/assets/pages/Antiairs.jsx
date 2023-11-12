export default function Antiairs() {
    return (
        <div className="articleStyles">
        <h1>Anti-Airs</h1>
        <p>One of the first and most important skills you should learn as a fighting game player is how to anti-air. Aside from the
        free damage it racks up against impatient opponents, it's a crucial tool for controlling their movements and limiting their
        options.</p>

        <p>To start, hop in training mode with your character of choice and familiarize yourself with their normals if you haven't
        already: the inputs, the ranges, cancel options, etc. While you're doing this, look at what moves might be strong anti-airs-
        in Street Fighter 6, many characters' 2HP is a reliable option, though this is by no means universal 
        (A.K.I, Zangief, Dhalsim, Dee Jay, etc). In the training menu, go into simple training settings and select anti-air practice.</p>

        <img src="/src/assets/images/AA training.jpg" alt="Anti-Air Practice"></img>

        <p>While you're trying out your anti-air normals, one of the first things you'll notice is likely going to be that even your
        reliable options have to be timed manually and don't cover every jump angle, especially from closer jump ins. When you notice
        one of your buttons doesn't work in one of these situations, try using a different button- this will familiarize you with 
        which anti-airs to use in a given situation on the fly. If your grounded normals aren't working, try an air-to-air normal 
        or an air throw, if your character has one. You should also focus on only going for the anti-air when the dummy
        is jumping towards you, instead of when they neutral jump; the reason for this is because in practice, your opponents may be
        neutral jumping to test your anti-air reactions, either before they go for a real one or to bait and punish the recovery on
        a poorly spaced, highly committal option like a shoryuken.</p>

        <figure>
        <img src="/src/assets/images/airtoair.jpg" alt="Air to Air"></img>
        <figcaption>Grounded options not consistent? Try an air to air!</figcaption>
        </figure>

        <p>Once you feel comfortable and consistent with your normal options, take at look at what special moves your character might
        have as anti-air options. Shoryuken style uppercut moves (commonly abbreviated as DP for Dragon Punch, the shoryuken's translated 
        English name) are the original and most classical example of this. Some characters may have specialized anti-air special moves
        that look a little bit different, such as upward angled fireballs, or moves like Honda's headbutt or Blanka's vertical 
        rolling attack.</p>

        <p>These moves, while generally being more rewarding in terms of damage or having greater air invulnerability, tend to come with
        the caveat of either a more difficult input or requiring charge that can make them harder to pull out quickly in stressful 
        situations. Making sure these inputs are second nature to you is essential to having great anti-airs, so it's important to
        practice them as early as you can. In Street Fighter 6 and some other games, an input trick you can do for a traditional DP's 
        623 input is to simply crouch (2) and then double tap forward (6), then press whichever attack button corresponds with the move.
        This bypasses the need to do a diagonal input entirely and makes reaction anti-air DPs incredibly easy and consistent with
        practice. Do note that you cannot be downbacking while attempting this or else the game's input reader will give you a normal
         instead of your DP.
        </p>

        <p>If you have a DP style option for an anti-air, you have access to an advanced technique known as a crosscut DP to help
        you deal with opponents going for crossups: while crouching, if you input your special move right as your opponent crosses over
        you, your DP will autocorrect sides and hit them. Since the timing can be fairly difficult, this is something you can practice
        later as a lower priority when you feel more confident if it's too much to start with.</p>

        <video src="/src/assets/videos/crosscut.mp4" type="video/mp4" preload="metadata" controls></video>

        <p>You may find after some practice in real matches that you can consistently anti-air opponents that jump predictably, 
        but get caught out when they jump on you while you're focusing on the ground game. This is normal, and the theory behind
        what's happening will be explained in a later article, but the gist of it is that your opponent has 
        overwhelmed your mental stack with their grounded options and is deliberately only jumping when they think you
         won't be ready for it, especially if they're going for those aforementioned awkward angles or crossups. If you play a charge 
         character, you need to be especially aware of what normal options you can use because you may not have charge ready, which can 
         complicate things somewhat in the beginning.</p>

         <p>One final piece of advice to help your anti-airs and get you thinking about how to approach- when your opponent is cornered
         and you need to close the gap, you can position yourself right outside of your opponent's furthest range normals; since they
         can't move backwards, they may get antsy and try to jump out of the corner, leading to very easy anti-airs and allowing you a 
         way to start your offense if they jump, and giving you ample time to check a grounded approach if they don't.</p>

        <figure>
        <img src="/src/assets/images/cornerAA.jpg" alt="Corner AA sweet spot"></img>
        <figcaption>Ideal spacing for checking corner forward jumps.</figcaption>
        </figure>

         <p>Once you find your anti-airs becoming consistent, you'll be getting a lot of free wins on people who don't stop jumping, 
         and your opponents will eventually start sticking to the ground, where you can now begin to focus on the rest of your grounded
         gameplan.</p>

         <hr className="smallDivider"></hr>

        </div>
    )
}