import { Link } from 'react-router-dom';
import BnbBanner from './banners/BnbBanner';
import supportImg from "../src/assets/images/supportImg.png";


export default function Support() {
    return (
        <>
        <BnbBanner />
        <div className="container">
        <img className="w-4/6 lg:w-2/5 m-auto justify-center" src={supportImg}></img>
        <article className="notFound">
        <p className="text-wrap">As an aspiring developer in the middle of switching careers, I have extremely limited time and funds to continue producing content for 
        the website. If you have the means to do so comfortably and find the guides here to be of value, consider supporting my work. 
        Contributions will be used to directly pay for webhosting costs and will allow me to keep writing quality articles without
        having to worry about being able to afford keeping the project afloat.</p>

        <h4 className="text-pretty mx-8 text-center">You can support the continued development of the site 
        by contributing to my <Link to="https://ko-fi.com/hogdev"> Ko-fi.</Link>
        </h4>

        </article>
        </div>
        </>
    )
}