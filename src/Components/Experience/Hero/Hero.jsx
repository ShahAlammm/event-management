import SimpleBanner from "../../Banner/SimpleBanner";

const Hero = () => {
  return (
    <div className="hero lg:h-[700px] bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-sm w-[900px] lg:h-[600px] rounded-lg shadow-2xl">
          <SimpleBanner></SimpleBanner>
        </div>
        <div className="hidden lg:contents">
          <h1 className="text-5xl font-bold">Our Works</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
