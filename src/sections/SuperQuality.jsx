import { undrawBest } from "../assets/images";
// import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section id="about-us" className="max-container w-full mb-9">
      <h3 className="font-palanquin text-center text-4xl font-bold mb-10">
        About
        <span className="text-coral-red"> Us </span>
      </h3>
      <div className="flex justify-between items-center max-lg:flex-col gap-5 max-md:px-6">
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin capitalize text-4xl max-sm:text-[40px] lg:max-w-xl font-bold w-full">
            Excellence in
            <span className="text-coral-red"> Empowered </span> Trucking
            Services
          </h2>
          <p className="mt-4 lg:max-w-lg info-text text-justify">
            At A-Town Trucking, we specialize in reliable and efficient trucking
            services. With{" "}
            <span className="text-coral-red text-2xl font-semibold"> 15+ </span>{" "}
            of years of experience, our dedicated team ensures safe and timely
            deliveries for all your transportation needs.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Our customer-centric approach and competitive rates set us apart in
            the industry. Trust us for exceptional service and personalized
            attention to meet your unique requirements.
          </p>
          {/* <div className="mt-11">
            <Button label="View details" />
          </div> */}
        </div>

        <div className="flex-1 flex justify-center items-center">
          <img
            src={undrawBest}
            alt="product detail"
            width={650}
            height={570}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
