import { useEffect, useRef, useState } from "react";
import splitStringByRegex from "../utils/splitString";
import { NavLink } from "react-router-dom";
import logoImg from "../assets/images/logos/wyte.svg";

const navLinks = [
  { name: "Profile Magazine", path: "/profile-magazine" },
  { name: "Services", path: "/services" },
  { name: "Events", path: "/events" },
  { name: "About us", path: "/about-us" },
  { name: "Contact us", path: "/contact-us" },
];


const socials = [
  { name: "Instagram", link: "https://www.instagram.com/wyteimagemedia/" },
  { name: "YouTube", link: "" },
  { name: "Facebook", link: "https://www.facebook.com/share/1F4erv7tqq/" },
  // { name: "Linkedin", link: "" },
];

const addresses = [
  "United Kingdom",
  "Leeds",
  "",
  "Abuja, Nigeria",
  "Federal Capital Territory",
];
const email = "wyteimagemediaofficial@gmail.com";

function Navbar() {
  const [mouseEnteredNavItem, setMouseEnteredNavItem] = useState(-1);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const prevScrollOffSetRef = useRef(0); // Use ref instead of state

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollOffset = window.scrollY;

      if (currentScrollOffset > prevScrollOffSetRef.current) {
        setScrollDirection("down");
      } else if (currentScrollOffset < prevScrollOffSetRef.current) {
        setScrollDirection("up");
      }

      prevScrollOffSetRef.current = currentScrollOffset; // Update ref value
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener
    };
  }, []);

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }
  }, [isNavOpen]);

  return (
    <header>
      <nav
        className={`${
          scrollDirection === "down"
            ? "lg:-translate-y-full"
            : "lg:translate-y-0"
        } ${
          !isNavOpen && "bg-zinc-900 bg-opacity-25 backdrop-blur-sm"
        } transition-all duration-500 fixed z-[999] w-full px-12 lg:px-14 py-6 font-NeueMontreal-Regular flex justify-between items-center`}
      >
        <div className="logo z-[999] cursor-pointer">
          <NavLink to={"/"} onClick={() => setIsNavOpen(false)}>
            <h3>
              <svg
                className={`${isNavOpen && "invert"} overflow-hidden`}
                width="72"
                height="30"
                viewBox="0 0 72 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <image href={logoImg} width="72" height="30" />
              </svg>
            </h3>
          </NavLink>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex links gap-10">
          {navLinks.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => setMouseEnteredNavItem(index)}
              onMouseLeave={() => setMouseEnteredNavItem(-1)}
              className={`cursor-pointer flex text-lg font-light ${
                index === navLinks.length - 1 && "ml-32"
              }`}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `nav-text-container pb-1 hover-underline-animation relative flex overflow-hidden ${
                    isActive ? "text-gold" : "text-white"
                  }`
                }
              >
                {splitStringByRegex(item.name).map((character, i) => (
                  <span
                    className={`${
                      i === 0 && "uppercase"
                    } char-container relative`}
                    key={i}
                  >
                    <span
                      className={`${
                        mouseEnteredNavItem === index
                          ? "-translate-y-full"
                          : "translate-y-0"
                      } whitespace-pre inline-block transform ease-[cubic-bezier(.215,.61,.355,1)] duration-500`}
                    >
                      {character}
                    </span>
                    <span
                      className={`${
                        mouseEnteredNavItem === index
                          ? "-translate-y-full"
                          : "translate-y-0"
                      } transform duration-500 whitespace-pre inline-block absolute top-full w-full left-0`}
                    >
                      {character}
                    </span>
                  </span>
                ))}
              </NavLink>
            </li>
          ))}
        </ul>
        <div
          className="lg:hidden z-[9999] h-[24px] w-[24px] flex items-center justify-center"
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-label="Toggle navigation"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setIsNavOpen(!isNavOpen)}
        >
          <svg
            className="nav-toggle overflow-visible"
            width="24"
            height="9"
            viewBox="0 0 24 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              className={`${
                isNavOpen &&
                "origin-center transition-transform duration-[0.35s] ease-[cubic-bezier(.3,.86,.36,.95)] -rotate-45 -translate-y-[3px]"
              }`}
              x1="24"
              y1="8"
              x2="-4.37114e-08"
              y2="8"
              stroke={`${!isNavOpen ? "currentColor" : "black"}`}
            ></line>
            <line
              className={`${
                isNavOpen &&
                "origin-center transition-transform duration-[0.35s] ease-[cubic-bezier(.3,.86,.36,.95)] rotate-45 translate-y-[3px]"
              }`}
              x1="24"
              y1="1"
              x2="4.37114e-08"
              y2="1"
              stroke={`${!isNavOpen ? "currentColor" : "black"}`}
            ></line>
          </svg>
        </div>
      </nav>
      {/* Mobile Navigation Menue */}
      <div
        className={`z-[99] ${
          isNavOpen && "translate-y-0 opacity-100 duration-[0.35s] lg:hidden"
        }  -translate-y-full opacity-0 text-black fixed bg-zinc-100 inset-0 px-6 lg:px-14 py-6 pt-32 overflow-y-auto overflow-x-hidden `}
      >
        <div className="max-h-full overflow-y-auto">
          <div className="mb-28">
            <hr className="absolute left-0 w-full border border-blac" />
            <ul className="flex flex-col py-6 gap-12 pt-12 list-none">
              {navLinks.map((item, index) => (
                <li key={index} className="uppercase cursor-pointer">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `underline-animation font-FoundersGroteskXCond-Bold leading-[.75px] text-4xl md:text-7xl lg:text-8xl block ${
                        isActive ? "text-gold" : "text-black"
                      }`
                    }
                    onClick={() => setIsNavOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="font-NeueMontreal-Regular flex flex-col gap-5">
            <div>
              <div>
                <p className="mb-3">S:</p>
                <ul>
                  {socials.map((item, index) => (
                    <li key={index}>
                      <a className="link-underline" href={item.link}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div>
                <p className="mb-3">L:</p>
                <address>
                  {addresses.map((item, index) => (
                    <>
                      <span
                        key={index}
                        className="link-underline cursor-pointer"
                      >
                        {item}
                      </span>
                      <br />
                    </>
                  ))}
                </address>
              </div>
            </div>
            <div>
              <div>
                <p className="mb-3">E:</p>
                <a className="link-underline" href={"mailto:" + email}>
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
