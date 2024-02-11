import master from '../src/assets/images/master.png'

export default function Home() {
   return (
   <div className="articleStyles">
            <img className='w-screen max-w-screen-md h-600 p-12 object-cover object-left' 
            src={master}
            alt='/' />

            <h1 className='p-8'>Your resource for learning how to play fighting games at a high level.</h1>
                </div>
                
   )
}