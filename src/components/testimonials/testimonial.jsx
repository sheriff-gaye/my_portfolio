import React from "react";
import "./testimonial.css";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { reviews } from "./review";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonial_container"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        navigation={true}
        pagination={{
          clickable: true
        }}
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
      >
        {reviews.map(({ id, name, image, desc }) => {
          return (
            <SwiperSlide className="testimonial" index={id}>
              <div className="client_avatar">
                <img src={image} alt={name} />
              </div>
              <h5 className="client_name">{name}</h5>

              <small className="client_review">{desc}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
