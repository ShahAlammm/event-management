import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="text-left" data-aos="fade-left" data-aos-duration="2000">
        <h1 className="text-6xl font-bold font-serif bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Why Choose Us
        </h1>
      </div>
      <div className="font-serif mt-10 w-2/3 m-auto">
        <p className="text-center text-lg">
          Your home become into an event masterpiece with our expert event
          management services. From intimate gatherings to grand celebrations,
          we curate unforgettable experiences tailored to your unique style and
          vision. Elevate your events with our meticulous planning, personalized
          touches, and seamless execution, turning your home into the perfect
          desire.
        </p>
      </div>
      <div className="card m-6">
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="card-body"
        >
          <div className="stats shadow-lg bg-base-200 ">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Likes</div>
              <div className="stat-value text-primary">25.6K</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Page Views</div>
              <div className="stat-value text-secondary">2.6M</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary"></div>
              <div className="stat-value">86%</div>
              <div className="stat-title">Tasks done</div>
              <div className="stat-desc text-secondary">31 tasks remaining</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          className="mockup-phone"
        >
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1 text-xl text-center font-serif">
              Choose us for better deal and saves time.
              <h1 className="text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                <Link to="/contact">Contact Us naw</Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center m-auto">
        <h2 className="text-xl font-serif font-bold mt-10 text-center">
          Our location
        </h2>
        <div className="card">
          <div className="card-body">
            <img
              data-aos="fade-down"
              data-aos-duration="2000"
              className="rounded-lg h-[600px]"
              src="https://i.ibb.co/QmpvWpZ/loc.png"
              alt="Burger"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
