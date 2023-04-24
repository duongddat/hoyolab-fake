import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import classNames from "classnames/bind";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";


import styles from "./SliderAuto.scss";

const cx = classNames.bind(styles);

function SliderAuto() {
    return ( 
        <Swiper className={cx("slider-auto-play")}
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 1000 }}
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <img className={cx("slider-img")} src="https://upload-os-bbs.hoyolab.com/upload/2023/04/21/208fb7d95e7f2d0e29f98f60c9e56877_7653681603655220006.jpg?x-oss-process=image%2Fresize%2Cs_400%2Fquality%2Cq_80%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={cx("slider-img")} src="https://upload-os-bbs.hoyolab.com/upload/2023/04/20/ab39206abec09e1148308c1e379f63f5_9132534640149315104.jpg?x-oss-process=image%2Fresize%2Cs_400%2Fquality%2Cq_80%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={cx("slider-img")} src="https://upload-os-bbs.hoyolab.com/upload/2023/04/19/52a23ba28b9befc2b3cbefd64c6e2e67_3975407864115627213.jpg?x-oss-process=image%2Fresize%2Cs_400%2Fquality%2Cq_80%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={cx("slider-img")} src="https://upload-os-bbs.hoyolab.com/upload/2023/04/17/51edeeddfe820a33e971a73939dcd6d3_1717329823243173729.png?x-oss-process=image%2Fresize%2Cs_400%2Fquality%2Cq_80%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp" alt="" />
            </SwiperSlide>
        </Swiper>
     );
}

export default SliderAuto;