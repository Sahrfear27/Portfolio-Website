import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCommentDots } from "react-icons/fa6";
import { RiStarSFill } from "react-icons/ri";
import { useContext } from "react";

import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css";

import "./Testimonies.css";
import Satbir from "../../Images/Satbir Singh Negi.jpeg";
import asaad from "../../Images/asaad.jpeg";
import thao from "../../Images/thao.jpg";
import sagar from "../../Images/sagar.jpg";
import TheameContex from "../Theame/Theame";
type Props = {
  id: string;
};

export default function Testimonies(props: Props) {
  const { lightMode } = useContext(TheameContex);
  const { id } = props;
  return (
    <section
      id={id}
      className="testimonies vh-100 py-5"
      data-lightmode={lightMode ? "true" : "false"}
    >
      <h4 className="speaker-note text-center mb-4">
        <FaCommentDots />
        <FaCommentDots />
      </h4>
      <Swiper
        pagination={{ dynamicBullets: true }}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card  border-0">
            <div className="card-body text-center">
              <img src={asaad} alt="testimonial" className="test-pictures" />
              <h5 className="card-title">Asaad Saad</h5>
              <p className="card-text">Program Director at Maharishi</p>

              <p className="description">
                Committed and eager to learn new technologies.
              </p>
              <div className="stars mb-3">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card  border-0">
            <div className="card-body text-center">
              <img src={Satbir} alt="testimonial" className="test-pictures" />
              <h5 className="card-title">Dr. Satbir Singh Negi</h5>
              <p className="card-text"> DevOps Project Manager</p>

              <p className="description">
                Committed and eager to learn new technologies.
              </p>
              <div className="stars mb-3">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card  border-0">
            <div className="card-body text-center">
              <img src={thao} alt="testimonial" className="test-pictures" />
              <h5 className="card-title">Dr. Satbir Singh Negi</h5>
              <p className="card-text">DevOps Project Manager</p>

              <p className="description">
                Committed and eager to learn new technologies.
              </p>
              <div className="stars mb-3">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card  border-0">
            <div className="card-body text-center">
              <img src={sagar} alt="testimonial" className="test-pictures" />
              <h5 className="card-title">Dr. Satbir Singh Negi</h5>
              <p className="card-text">DevOps Project Manager</p>
              <p className="description">
                Committed and eager to learn new technologies.
              </p>
              <div className="stars mb-3">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
