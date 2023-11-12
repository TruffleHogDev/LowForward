import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">LowForward</Link>
        <ul>
        <CustomLink to="/resources">Resources</CustomLink>
        <CustomLink to="/concepts">Concepts</CustomLink>
        <CustomLink to="/support">Support</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }) {
   const resolvedPath = useResolvedPath(to)
   const isActive = useMatch({ path: resolvedPath.pathname, end: true })
return (
    <li className={isActive ? "active" : ""}> {/*Enables highlighting the active page in the navbar */}
        <Link to={to} {...props}>{children}</Link>
    </li>
)
}