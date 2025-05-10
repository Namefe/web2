import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import type SwiperType from "swiper";
import Arrow from "@/components/svg/Arrow";

// swiper 수정하기 nintendo

export default function Section05() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevArrowPosition, setPrevArrowPosition] = useState({ x: 0, y: 0 });
  const [nextArrowPosition, setNextArrowPosition] = useState({ x: 0, y: 0 });
  const [showPrevArrow, setShowPrevArrow] = useState(false);
  const [showNextArrow, setShowNextArrow] = useState(false);

  const swiperRef = useRef<SwiperType>();
  const swiperContainerRef = useRef<HTMLDivElement>(null);

  const slideData = [
    {
      title: "헤어&바디",
      // description: "설명 1",
      image: "/images/main/main-sec5-img1.jpg",
    },
    {
      title: "기초 화장품",
      // description: "설명 2",
      image: "/images/main/main-sec5-img2.jpg",
    },
    {
      title: "건강기능식품",
      // description: "설명 3",
      image: "/images/main/main-sec5-img3.jpg",
    },
    {
      title: "헤어&바디",
      // description: "설명 1",
      image: "/images/main/main-sec5-img1.jpg",
    },
    {
      title: "기초 화장품",
      // description: "설명 2",
      image: "/images/main/main-sec5-img2.jpg",
    },
    {
      title: "건강기능식품",
      // description: "설명 3",
      image: "/images/main/main-sec5-img3.jpg",
    },
  ];

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  useEffect(() => {
    const container = swiperContainerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // 컨테이너 너비의 1/3을 기준으로 왼쪽/오른쪽 영역 구분
      const containerWidth = rect.width;

      if (x < containerWidth / 3) {
        // 왼쪽 1/3 영역 - prev 화살표만 보이기
        setShowPrevArrow(true);
        setShowNextArrow(false);
        setPrevArrowPosition({ x, y });
      } else if (x > (containerWidth * 2) / 3) {
        // 오른쪽 1/3 영역 - next 화살표만 보이기
        setShowPrevArrow(false);
        setShowNextArrow(true);
        setNextArrowPosition({ x, y });
      } else {
        // 중앙 영역 - 화살표 숨기기
        setShowPrevArrow(false);
        setShowNextArrow(false);
      }
    };

    const handleMouseLeave = () => {
      setShowPrevArrow(false);
      setShowNextArrow(false);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="w-full flex flex-col relative mb-24 lg:mb-64">
      <div className="flex flex-col justify-center items-center text-center">
        <h3 className="text-sm md:text-2xl en800 text-[--mc-400] mb-6 lg:mb-12">Our Work</h3>
        <p className="font-medium text-3xl lg:text-6xl 2xl:text-[80px] leading-snug">
          아릅답고 건강한 삶을 위한
          <br className="" />
          나예코스메틱의 제품개발
        </p>
      </div>
      <div className="mt-20 lg:mt-40 flex justify-center">
        <div className="w-full md:w-[800px] px-4 md:px-0 relative">
          <div className="relative" ref={swiperContainerRef}>
            {/* 왼쪽 이전 버튼 - 마우스를 따라다니는 */}
            {showPrevArrow && (
              <div
                className="absolute z-10 transition-opacity cursor-pointer p-4 rounded-full"
                style={{
                  left: `${prevArrowPosition.x}px`,
                  top: `${prevArrowPosition.y}px`,
                  transform: "translate(-50%, -50%)",
                }}
                onClick={handlePrevClick}
              >
                <Arrow direction="left" color="white" strokeWidth={1} className=" md:size-20 w-16 h-16" />
              </div>
            )}

            {/* 오른쪽 다음 버튼 - 마우스를 따라다니는 */}
            {showNextArrow && (
              <div
                className="absolute z-10 transition-opacity cursor-pointer p-4 rounded-full"
                style={{
                  left: `${nextArrowPosition.x}px`,
                  top: `${nextArrowPosition.y}px`,
                  transform: "translate(-50%, -50%)",
                }}
                onClick={handleNextClick}
              >
                <Arrow direction="right" color="white" strokeWidth={1} className=" md:size-20 w-16 h-16" />
              </div>
            )}

            <Swiper
              modules={[Navigation, Pagination, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 0,
                stretch: 30,
                depth: 100,
                modifier: 2.5,
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.realIndex);
                swiper.slides.forEach((slide) => {
                  if (slide && slide.style) {
                    slide.style.opacity = "0";
                  }
                });
                const currentSlide = swiper.slides[swiper.activeIndex];
                const prevSlide = swiper.slides[swiper.activeIndex - 1];
                const nextSlide = swiper.slides[swiper.activeIndex + 1];

                [currentSlide, prevSlide, nextSlide].forEach((slide) => {
                  if (slide && slide.style) {
                    slide.style.opacity = "1";
                  }
                });
              }}
              className="w-full"
            >
              {slideData.map((slide, index) => (
                <SwiperSlide
                  key={index}
                  className="!w-[250px] !h-[500px] md:!w-[400px] md:!h-[820px] transition-all duration-300"
                >
                  <div className="w-full h-full overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={400}
                      height={820}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="invisible">이전</div>
            <div className="text-center">
              <h3 className="text-2xl md:text-4xl font-medium">{slideData[activeIndex].title}</h3>
            </div>
            <div className="invisible">다음</div>
          </div>
        </div>
      </div>
    </section>
  );
}