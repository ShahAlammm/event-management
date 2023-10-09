import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./Hero/Hero";

const Experience = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div
        className="h-auto mt-10"
        style={{ backgroundImage: "url(https://i.ibb.co/WKmDSRS/logo-08.png)" }}
      >
        <div
          className="text-left mt-24 mb-60"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <h1 className="text-6xl mb-10 font-bold font-Poppins bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Our Experience
          </h1>
          <Hero></Hero>
        </div>
      </div>
    </div>
  );
};

export default Experience;
