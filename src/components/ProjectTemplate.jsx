// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { ProfilePhoto } from "../assets"

export const ProjectTemplate = (Props) => {
    return (
        <div style={Props.style} className="project-template">
            <div className="title">
                <h1>{Props.projectInfo.name}</h1>
            </div>
            <div className="image">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    style={{
                        width: "50%",
                        height: "70%",
                        background: "#333"
                    }}
                >
                    <SwiperSlide><img src={Props.projectInfo.image} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={ProfilePhoto.brainwave} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={ProfilePhoto.mount} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={ProfilePhoto.brainwave} alt="" /></SwiperSlide>
                    ...
                </Swiper>
            </div>
            <div className="info">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente fuga nostrum cum, placeat officiis hic quo ipsum perspiciatis enim expedita quibusdam nobis itaque voluptates voluptas beatae iste corrupti, magni vero.
                </p>
            </div>
        </div>
    )
}
