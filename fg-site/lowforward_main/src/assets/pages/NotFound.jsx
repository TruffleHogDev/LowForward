import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="notFound">
        <h2>Page not found!</h2>
        <h3>Return to the <Link to="/">homepage</Link></h3>
        </div>
    )
}