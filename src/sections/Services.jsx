import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        Our
        <span className="text-coral-red"> Services </span>
      </h3>
      <p className="m-auto mt-5 mb-16 max-w-2xl  text-center info-text">
        Embark on worry-free logistics with our trusted trucking and loading
        services, where reliability meets excellence in transporting your cargo
        seamlessly to its destination.
      </p>
      <div className="flex justify-center flex-wrap gap-20">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
