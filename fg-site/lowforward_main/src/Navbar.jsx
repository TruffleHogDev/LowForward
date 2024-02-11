import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useState } from "react";
import {FaTimes} from "react-icons/fa";
import { RiMenuLine } from "react-icons/ri";

export default function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const content = <> {/*Mobile navbar/dropdown*/}
        <div className="lg:hidden md:hidden block absolute top-16 w-full left-0 right-0 bg-nav-background transition">

        <ul className="text-center text-xl p-20">
             <CustomLink onClick={handleClick} spy={true} smooth={true} to="/resources">
                <li className="my-4 py-4 border-b border-nav-hover hover:bg-nav-hover hover:rounded hover:duration-300 text-whitesmoke active:bg-nav-focus">Resources</li>
             </CustomLink>
            <CustomLink onClick={handleClick} spy={true} smooth={true} to="/concepts">
                <li className="my-4 py-4 border-b border-nav-hover hover:bg-nav-hover hover:rounded hover:duration-300 text-whitesmoke active:bg-nav-focus">Concepts</li>
            </CustomLink>
            <CustomLink onClick={handleClick} spy={true} smooth={true} to="/support">
                 <li className="my-4 py-4 border-b border-nav-hover hover:bg-nav-hover hover:rounded hover:duration-300 text-whitesmoke active:bg-nav-focus">Support</li>
            </CustomLink>
        </ul>
    </div>
    </>

    return (
        <nav>
        <div className="h-10vh flex justify-between z-50 text-whitesmoke lg:py-1 px-20 py-4 bg-nav-background">
            <div className="flex items-center flex-1">
                <Link spy={true} smooth={true} to="/" className="text-[1.9rem] font-style: italic text-whitesmoke">
                    LowForward
                </Link>
            </div>

        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
            <div className="flex-10">
                <ul className="flex gap-8 mr-12 text-[18px]">
                 <CustomLink spy={true} smooth={true} to="/resources">
                    <li className="border-nav-hover hover:bg-nav-hover hover:rounded hover:duration-300 text-whitesmoke active:bg-nav-focus">Resources</li>
                 </CustomLink>
                <CustomLink spy={true} smooth={true} to="/concepts">
                    <li className="border-nav-hover hover:bg-nav-hover hover:rounded hover:duration-300 text-whitesmoke active:bg-nav-focus">Concepts</li>
                </CustomLink>
                 <CustomLink spy={true} smooth={true} to="/support">
                    <li className="border-nav-hover hover:bg-nav-hover hover:rounded hover:duration-300 text-whitesmoke active:bg-nav-focus">Support</li>
                </CustomLink>
                 </ul>
            </div>
        </div>

        <div>
            {click && content}
        </div>

        <button className="block md:hidden" onClick={handleClick} >
            {click ? <FaTimes/> : <RiMenuLine />}
        </button>
        </div>
    </nav>
    );
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