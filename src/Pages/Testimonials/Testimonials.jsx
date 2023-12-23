import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import axios from "axios";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("https://taskify-server-xi.vercel.app/testimonials").then((res) => {
      // console.log(res.data);
      setReviews(res.data);
    });
  }, []);

  // console.log(reviews);

  return (
    <div className="my-10 px-10">
      <h1 className="text-3xl font-bold text-center">Testimonials</h1>
      <>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div>
                {/* <h1></h1> */}
                <div className="car h-64 sm:w-full md:h-64 lg:h-64 mt-5 gap-2 bg-indigo-100 p- rounded-2xl shadow-xl">
                  <div className="card-body items-center text-center">
                    <h3 className="text-sm md:text-xl">{review.feedback}</h3>
                    <h2 className=" card-title font-bold">{review.fullName}</h2>
                    <h2 className=" font-bol">{review.jobTitle}</h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Testimonials;
