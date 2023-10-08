import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
   <div className="h-screen font-Poppins" style={{backgroundImage: 'url(https://i.ibb.co/WKmDSRS/logo-08.png)'}}>
    <div  className="text-left mt-24 mb-60" data-aos="fade-left" data-aos-duration="2000">
      <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Our Experience</h1>
    </div>
   </div>
  );
};

export default Experience;