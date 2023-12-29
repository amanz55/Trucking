/* eslint-disable react/no-unescaped-entities */
import { Button } from "../components";
import { lastOne } from "../assets/icons";
import { heroVideo } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container h-full"
    >
      <div className="overlay backdrop-brightness-50 bg-blend-darken"></div>
      <div className="video-container">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover brightness-50"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Your other hero section content goes here */}
      </div>
      <div className="flex flex-col justify-center items-center">
        {/* <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p> */}

        <h1 className="font-hero-font justify-center  text-white text-[78px] max-sm:ml-1 max-sm:text-[60px] font-bold">
          <span className="xl:whitespace-nowrap relative">
            Delivering Excellence,
          </span>
        </h1>
        <h1 className="font-hero-font justify-center text-white  text-[100px] max-sm:ml-1 max-sm:text-[64px] font-bold">
          <span className="xl:whitespace-nowrap relative">
            One Load at a Time
            <br />
          </span>
        </h1>
        <p className="m-auto mt-5 mb-7 max-w-2xl  text-center text-xl max-sm:px-1 text-white font-palanquin z-10">
          We're not just moving cargo; we're delivering peace of mind. Join us
          on the road to excellence – your goods' trusted partner is here.
        </p>
        <div className="z-10">
          <a href="tel:555-555-5555">
            <Button label="Call us Now" iconURL={lastOne} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
