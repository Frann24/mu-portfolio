import React, { useEffect, useState } from "react";
import { allProjects } from "../../utils/projects";
import Project from "./Project";
import styles from "./Projects.module.css";
import "./project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import { Pagination, EffectCoverflow, Navigation } from "swiper";

function Projects() {
  const [active, setActive] = useState(0)
 
  return (
    <div className={styles.projects}>
      <h4 className={styles.projects__title}>My Projects</h4>
      <div className={styles.card}>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          /* navigation */
          pagination={{clickable: true,}}
          onSlideChange={(swiper) => setActive(swiper.activeIndex)}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 80,
            },
            1536: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          zoom={true}
          modules={[Pagination, EffectCoverflow, Navigation]}
          className="mySwiper"
        >
          {allProjects.map((project,i) => {
            return (
              <SwiperSlide key={i} className={`${styles.card__inner} ${active === i ? styles.card__active : styles.card__no__active}`}>
                <Project {...project} active={active === i}/>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
export default Projects;
