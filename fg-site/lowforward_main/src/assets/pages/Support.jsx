import { Link } from 'react-router-dom';

export default function Support() {
    return (
        <div className="notFound">
        <h2>Support</h2>
        <p>As an aspiring developer in the middle of switching careers, I have limited time and funds to continue producing content for 
        the website. If you have the means to do so comfortably and find the guides here to be of value, consider supporting my work. 
        Contributions will be used to directly pay for server costs and will allow me to keep uploading quality articles without
        having to worry about being able to afford keeping the project afloat.</p>

        <h4>You can support the continued development of the site 
        by contributing to my <Link to="https://ko-fi.com/hogdev"> Ko-fi.</Link>
        </h4>

        <p>Please DM me there if there are any site-breaking bugs or
        display errors, and let me know what browser you're using so I can fix it ASAP. This is my first real project and I'm still getting 
        the hang of accessibility.</p>
        </div>
    )
}