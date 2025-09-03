import { NavLink } from "react-router-dom";
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


const navLinks = [
  { name: "Profile Magazine", path: "/profile-magazine" },
  { name: "Services", path: "/services" },
  { name: "Events", path: "/events" },
  { name: "About us", path: "/about-us" },
  { name: "Contact us", path: "/contact-us" },
];

const email = "wyteimagemediaofficial@gmail.com";
const phone = "+447 733 7865";

function Footer() {
  return (
    <div className="px-6 lg:px-14 w-full h-full bg-zinc-900 rounded-tr-2xl rounded-tl-2xl -mt-10 pb-4">
      <div className="py-20 lg:flex w-full">
        <div className="lg:flex-1 ">
          <div className="masker -mb-3 lg:-mb-6 flex items-start w-fit font-FoundersGroteskXCond-Bold text-5xl md:text-5xl lg:text-8xl uppercase">
            <h1 className="flex items-center">Creating</h1>
          </div>
          <div className="masker -mb-3 lg:-mb-6 flex items-start w-fit font-FoundersGroteskXCond-Bold text-5xl md:text-5xl lg:text-8xl uppercase">
            <h1 className="flex items-center">Global</h1>
          </div>
          <div className="masker -mb-3 lg:-mb-6 flex items-start w-fit font-FoundersGroteskXCond-Bold text-5xl md:text-5xl lg:text-8xl uppercase">
            <h1 className="flex items-center">Inspiration</h1>
          </div>
        </div>

        <div className="lg:flex-1">
          <div className="flex">
            <div className="flex-1">
              <div className="my-6">
                <p className="mb-3">M:</p>
                <ul>
                  {navLinks.map((item, index) => (
                    <li key={index}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          ` after:bg-zinc-200" ${
                            isActive
                              ? "text-gold"
                              : "text-zinc-100 link-underline"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="my-6">
                <p className="mb-3">L:</p>
                <address>
                  {addresses.map((item, index) => (
                    <span key={`address-${index}`}>
                      <span className="link-underline after:bg-zinc-200 cursor-pointer">
                        {item}
                      </span>
                      <br key={`br-${index}`} />
                    </span>
                  ))}
                </address>
              </div>
              <div className="my-6">
                <p className="mb-3">E:</p>
                <a
                  className="link-underline after:bg-zinc-200"
                  href={"mailto:" + email}
                >
                  {email}
                </a>
              </div>
              <div className="my-6">
                <p className="mb-3">P:</p>
                <a
                  className="link-underline after:bg-zinc-200"
                  href={"tel:" + phone}
                >
                  {phone}
                </a>
              </div>
            </div>
            <div className="flex-1">
              <div className="my-6">
                <p className="mb-3">S:</p>
                <ul>
                  {socials.map((item, index) => (
                    <li key={index}>
                      <a
                        className="link-underline after:bg-zinc-200"
                        href={item.link}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright flex flex-col lg:flex-row pb-6 gap-6 lg:gap-0">
        <div className="lg:flex-1 logo z-[999] cursor-pointer">
          <h3 className="font-FoundersGroteskXCond-Bold text-2xl">
            Wyte Image Media
          </h3>
        </div>
        <div className="lg:flex-1 flex flex-col lg:flex-row lg:justify-between text-zinc-500">
          <div>© Wyte Image Media 2024. All rights reserved.</div>
          <div>Creating Global Inspiration</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
