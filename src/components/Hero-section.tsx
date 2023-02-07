import { NewArrival } from "./newArrival";
import { ServiceAd } from "./serviceAD";

function HeroSection() {
  return (
    <section className="">
      <div
        style={{
          backgroundImage: "url(images/chelsea-fern-WJRZNL7rDF8-unsplash.jpg)",
        }}
        className={`h-[100vh] w-full filter brightness-50 bg-center bg-cover `}
      ></div>
      <NewArrival />
      <ServiceAd />
    </section>
  );
}

export default HeroSection;
