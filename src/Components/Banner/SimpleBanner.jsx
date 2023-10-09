import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";

const SimpleBanner = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <Marquee pauseOnHover speed={120}>
        <div>
          <img
            className="h-[600px] w-[400px]"
            src="https://i.ibb.co/4Prx1d4/wedd-6.jpg"
          />
        </div>
        <div>
          <img
            className="h-[600px] w-[400px]"
            src="https://i.ibb.co/ySqZ10W/birth-5.jpg"
          />
        </div>
        <div>
          <img
            className="h-[600px] w-[500px]"
            src="https://i.ibb.co/qY17RB5/baby-2.jpg"
          />
        </div>
        <div>
          <img
            className="h-[600px] w-[700px]"
            src="https://i.ibb.co/ydZxbjX/wedd-4.jpg"
          />
        </div>
        <div>
          <img
            className="h-[600px] w-[400px]"
            src="https://i.ibb.co/JBLTFq7/retire-2.jpg"
          />
        </div>
        <div>
          <img
            className="h-[600px] w-[400px]"
            src="https://i.ibb.co/hLMpnr1/babt-3.jpg"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default SimpleBanner;
