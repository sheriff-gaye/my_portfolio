import React from "react";
import "./testimonial.css";
import TM1 from "../../assets/tm1.jpg"
import TM2 from "../../assets/tm2.jpg"
import TM3 from "../../assets/tm3.jpg"
import TM4 from "../../assets/tm4.jpg"


import "swiper/css";
import "swiper/css/pagination";
import { Autoplay,Pagination,Navigation} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";




const Testimonial = () => {
    return (<section id="testimonial">
        <h5>Review from Clients</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonial_container" 
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,}}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination,Navigation,Autoplay]} 
          spaceBetween={40} 
          slidesPerView={1}>
            <SwiperSlide className="testimonial">
                <div className="client_avatar">
                    <img src={TM4} alt="" />

                </div>
                <h5 className="client_name">Sheriff Gaye</h5>

                <small className="client_review">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Dolore accusamus nisi et ipsa in debitis 
                repellendus vitae vel? Pariatur cumque fugiat at culpa unde illum nisi placeat qui officiis iste!</small>

            </SwiperSlide>

            <SwiperSlide className="testimonial">
                <div className="client_avatar">
                    <img src={TM1} alt="" />

                </div>
                <h5 className="client_name">Sheriff Gaye</h5>

                <small className="client_review">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Dolore accusamus nisi et ipsa in debitis 
                repellendus vitae vel? Pariatur cumque fugiat at culpa unde illum nisi placeat qui officiis iste!</small>

            </SwiperSlide>

            <SwiperSlide className="testimonial">
                <div className="client_avatar">
                    <img src={TM2} alt="" />

                </div>
                <h5 className="client_name">Sheriff Gaye</h5>

                <small className="client_review">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Dolore accusamus nisi et ipsa in debitis 
                repellendus vitae vel? Pariatur cumque fugiat at culpa unde illum nisi placeat qui officiis iste!</small>

            </SwiperSlide>

            <SwiperSlide className="testimonial">
                <div className="client_avatar">
                    <img src={TM3} alt="" />

                </div>
                <h5 className="client_name">Sheriff Gaye</h5>

                <small className="client_review">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Dolore accusamus nisi et ipsa in debitis 
                repellendus vitae vel? Pariatur cumque fugiat at culpa unde illum nisi placeat qui officiis iste!</small>

            </SwiperSlide>

        </Swiper>

    </section>);
}

export default Testimonial;