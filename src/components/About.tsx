import WaveButton from "./ui/WaveButton";
import AboutImage from "../assets/images/NGHA-women.jpeg";

const socials = [
  { name: "Instagram", link: "https://www.instagram.com/wyteimagemedia/" },
  { name: "YouTube", link: "" },
  { name: "Facebook", link: "https://www.facebook.com/share/1F4erv7tqq/" },
  // { name: "Linkedin", link: "" },
];

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".04"
      className="-mt-12 bg-[#cdea68] p-6 lg:pt-14 py-20 rounded-2xl"
    >
      <div className="pb-20">
        <h2 className="custom-heading max-w-screen-xl">
          <p className="font-NeueMontreal-Regular text-3xl md:text-5xl lg:text-5xl text-zinc-900">
            The Goldern Heart Award is an annual award ceremony organized by
            Wyte Image Media to celebrate and recognize outstanding individuals
            and organizations who have made significant contributions to various
            fields such as <u>business</u>, <u>leadership</u>,{" "}
            <u>humaniterian services</u>, <u>entertainment</u>,{" "}
            <u>philanthropy</u>, and <u>community development</u>.
          </p>
        </h2>
      </div>

      <hr className="absolute left-0 w-full border border-t-zinc-900" />

      <div className="text-zinc-900 flex flex-col gap-8 mt-6 mb-28 lg:flex-row lg:justify-between max-w-screen-sm lg:max-w-full">
        <div>How to nominate:</div>
        <div className="flex flex-col gap-8 lg:flex-row lg:w-1/2">
          <div className="flex flex-col gap-8 lg:w-1/2">
            <p>
              The Golden Heart Awards International is one of the most highly
              regarded and prestigious accolades that an recieve. Anyone can be nomenatted 
              through our social media handles, but only outstanding personalities are honored.
            </p>
            <p>
              Anyone based anywhere in the world that meets the criterial can be nomenatted 
              for The Golden Heart Awards. 
            </p>
            <p>
              The Golden Heart Award International is staged annually, and can be staged in any country.
            </p>
          </div>
          <div className="lg:mt-auto lg:ml-auto">
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
      </div>

      <hr className="absolute left-0 w-full border border-t-zinc-900" />

      {/* <div className="pt-6 flex flex-col gap-10 lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="mb-8 font-NeueMontreal-Regular text:3xl lg:text-5xl text-zinc-900">
            Our approach
          </h1>
          <WaveButton
            primaryColor={"#18181b"} //text-zinc-900
            secondaryColor={"#f4f4f5"} //text-zinc-200
            text={"Read More"}
          />
        </div>
        <div>
          <img
            className="rounded-3xl"
            src={AboutImage}
            alt="About-Page-Photo"
          />
        </div>
      </div> */}
    </div>
  );
}

export default About;
