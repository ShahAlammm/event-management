import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Card";
import SimpleBanner from "../../Components/Banner/SimpleBanner";
import Experience from "../../Components/Experience/Experience";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const getData = useLoaderData([]);
  return (
    <>
      <div>
        <div className="m-auto font-Poppins">
          <Banner></Banner>
          <div>
            <SimpleBanner></SimpleBanner>
          </div>
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
        <Footer></Footer>
      </section>
    </>
  );
};

export default Home;
