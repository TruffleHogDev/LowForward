import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { RiMenuLine } from "react-icons/ri";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const dropdownRef = useRef(null); // Create a ref for the dropdown

  const handleClick = () => {
    setClick(!click);
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setClick(false); // Close dropdown if click is outside
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const content = (
    <>
      {/* Mobile navbar/dropdown */}
      <div
        ref={dropdownRef} // Attach the ref to the dropdown
        className="lg:hidden md:hidden block absolute top-16 w-full left-0 right-0 bg-nav-background transition max-h-[50vh] overflow-y-auto"
      >
        <ul onClick={handleClick} className="text-center text-xl p-8">
          <CustomLink spy={true} smooth={true} to="/resources">
            <li className="my-4 py-4 border-b hover:bg-nav-hover hover:rounded hover:duration-300 text-whitesmoke active:bg-nav-focus">
              Resources
            </li>
          </CustomLink>
          <CustomLink spy={true} smooth={true} to="/concepts">
            <li className="my-4 py-4 border-b hover:bg-nav-hover hover:rounded hover:duration-300 text-whitesmoke active:bg-nav-focus">
              Concepts
            </li>
          </CustomLink>
          <CustomLink spy={true} smooth={true} to="/support">
            <li className="my-4 py-4 border-b hover:bg-nav-hover hover:rounded hover:duration-300 text-whitesmoke active:bg-nav-focus">
              Support
            </li>
          </CustomLink>
        </ul>
      </div>
    </>
  );

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-nav-background bg-gradient-to-b from-transparent to-nav-background">
        <div className="h-10vh flex justify-between z-50 text-whitesmoke lg:py-1 px-10 py-4">
          <div className="flex items-center flex-1">
            <Link
              spy={true}
              smooth={true}
              to="/"
              className="text-[1.9rem] font-style: italic text-whitesmoke"
            >
              LowForward
            </Link>
          </div>

          <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-8 mr-12 text-[18px]">
                <CustomLink spy={true} smooth={true} to="/resources">
                  <li className="hover:duration-300 text-whitesmoke hover:text-emerald-300 active:text-emerald-400 hover:underline">
                    Resources
                  </li>
                </CustomLink>
                <CustomLink spy={true} smooth={true} to="/concepts">
                  <li className="hover:duration-300 text-whitesmoke hover:text-emerald-300 active:text-emerald-400 hover:underline">
                    Concepts
                  </li>
                </CustomLink>
                <CustomLink spy={true} smooth={true} to="/support">
                  <li className="hover:duration-300 text-whitesmoke hover:text-emerald-300 active:text-emerald-400 hover:underline">
                    Support
                  </li>
                </CustomLink>
              </ul>
            </div>
          </div>

          <div>{click && content}</div>

          <button
            className="block md:hidden translate-x-6 text-whitesmoke bg-transparent border-none text-lg hover:text-emerald-200 hover:duration-300 focus:text-emerald-400"
            onClick={handleClick}
          >
            {" "}
            {/*Mobile toggle*/}
            {click ? <FaTimes /> : <RiMenuLine />}
          </button>
        </div>
      </nav>

      {/* Main content below navbar */}
      <div className="pt-10">
        {" "}
        {/* Add padding-top to prevent overlap */}
        {/* Your main content here */}
      </div>
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      {" "}
      {/*Enables highlighting the active page in the navbar */}
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
