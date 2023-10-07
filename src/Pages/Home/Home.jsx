import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Card";
import SimpleBanner from "../../Components/Banner/SimpleBanner"

const Home = () => {
  const getData = useLoaderData([]);
  console.log(getData);
  return (
    <>
      <div className="m-auto">
        <Banner></Banner>
        <div>
          <SimpleBanner></SimpleBanner>
        </div>
      </div>
      <div
        className="h-screen m-auto"
        style={{backgroundImage: 'url(https://i.ibb.co/WKmDSRS/logo-08.png)'}}
      >
        <div className="grid lg:grid-cols-3 gap-4">
          {getData?.map((item) => (
            <Card key={item.id} item={item}></Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
