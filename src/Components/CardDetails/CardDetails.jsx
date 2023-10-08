import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import swal from "sweetalert";
// eslint-disable-next-line react/prop-types
const CardDetails = ({ details }) => {
  const { title, id, detail, price } = details || {};

  const handleAddBooking = () => {
    const addedBookingArray = [];
    const bookingItems = JSON.parse(localStorage.getItem("booking"));
    if (!bookingItems) {
      addedBookingArray.push(details);
      localStorage.setItem("booking", JSON.stringify(addedBookingArray));
      swal("Good job!", "Booking successfully!", "success");
    } else {
      const isExists = bookingItems.find((detail) => detail.id == id);
      if (!isExists) {
        addedBookingArray.push(...bookingItems, details);
        localStorage.setItem("booking", JSON.stringify(addedBookingArray));
        swal("Good job!", "Booking successfully!", "success");
      } else {
        swal("opps!", "You have already booked!", "error");
      }
    }
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="pt-6 lg:pt-28">
        <div
          className="hero h-[900px] "
          style={{
            backgroundImage:
              "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-90"></div>
          <div className="hero-content text-center text-neutral-content">
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="max-w-md text-white"
            >
              <h1 className="mb-5 text-5xl font-bold">{title}</h1>
              <p className="mb-5">
                {detail}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
                aut sapiente nemo nisi, alias ea tempore voluptatibus at libero
                non sit nulla maxime aliquam saepe quaerat. Molestiae
                consectetur doloribus possimus.
              </p>
              <button onClick={handleAddBooking} className="btn text-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-lg shadow-blue-600/50 text-white">
                Booking Now : ${price}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
