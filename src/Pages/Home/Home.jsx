import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Card";

import Experience from "../../Components/Experience/Experience";
import Footer from "../../Components/Footer/Footer";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  const getData = useLoaderData([]);
  return (
    <>
      <div>
        <div className="m-auto font-Poppins">
          <Banner></Banner>
          <div></div>
        </div>
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h1 className="text-7xl font-bold mt-24 bg-gradient-to-r from-purple-500 via-blue-500 to-green-400 inline-block text-transparent bg-clip-text">
            Our Services
          </h1>
          <p className="text-lg mt-5 text-black text-center font-serif bg-gradient-to-r from-purple-700 via-blue-700 to-green-800 inline-block text-transparent bg-clip-text">
            Transform your home into an event masterpiece with our expert event
            management services. From intimate gatherings to grand celebrations,
            we curate unforgettable experiences tailored to your unique style
            and vision. Elevate your events with our meticulous planning,
            personalized touches, and seamless execution, turning your home into
            the perfect backdrop for cherished memories.
          </p>
        </div>
        <div
          className="m-auto"
          style={{
            backgroundImage: "url(https://i.ibb.co/WKmDSRS/logo-08.png)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
            {getData?.map((item) => (
              <Card key={item.id} item={item}></Card>
            ))}
          </div>
        </div>
      </div>
      <section>
        <Experience></Experience>
      </section>
      <section>
        <WhyChooseUs></WhyChooseUs>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </>
  );
};

export default Home;
