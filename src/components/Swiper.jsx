import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// install Swiper modules}

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperDiv = ({ children }) => {
    return (
        <div className="w-full flex items-center justify-center flex-col p-12 text-white">
            {children}
        </div>
    );
};

export default function App() {
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="mySwiper"
        >
            <SwiperSlide>
                <SwiperDiv>
                    <img src="https://via.placeholder.com/150" alt="Slide 1" />
                    <p>Slide 1</p>
                </SwiperDiv>
            </SwiperSlide>
            <SwiperSlide>
                <SwiperDiv>
                    <img src="https://via.placeholder.com/150" alt="Slide 2" />
                    <p>Slide 2</p>
                </SwiperDiv>
            </SwiperSlide>
            <SwiperSlide>
                <SwiperDiv>
                    <img src="https://via.placeholder.com/150" alt="Slide 3" />
                    <p>Slide 3</p>
                </SwiperDiv>
            </SwiperSlide>
            <SwiperSlide>
                <SwiperDiv>
                    <img src="https://via.placeholder.com/150" alt="Slide 4" />
                    <p>Slide 4</p>
                </SwiperDiv>
            </SwiperSlide>
        </Swiper>
    );
}
