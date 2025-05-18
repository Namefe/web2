import React, { useState, useRef, useEffect } from "react";

const accordionData = [
  {
    title: "aespa",
    subtitle: "THE 5TH MINI ALBUM - WHIPLASH",
    image: "/artist-logo.png",
    gradient:
      "linear-gradient(90deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.40) 48.5%, rgba(255, 255, 255, 0.20) 100%)",
    content: (
      <div className="flex flex-col lg:flex-row bg-black text-white min-h-[300px] px-6 lg:px-60 py-10 gap-8 lg:gap-32 items-start">
        <div className="w-full lg:w-[400px] text-center lg:text-left">
          <h1 className="text-[32px] lg:text-[50px] leading-none font-bold">THE 5TH ALBUM</h1>
        </div>
        <div className="flex-1 text-base leading-relaxed">
          <p>
            10월 21일 발매된 에스파 다섯 번째 미니앨범 'Whiplash'는 공개 직후 각종 국내 주요 음악 차트 상위권으로 진입해
            무서운 추이로 순위 상승에 시동을 걸고 있는 것은 물론, 아이튠즈 톱 앨범 차트에서 태국, 일본, 대만 등 총 17개
            지역의 정상에 올랐으며, 월드와이드 아이튠즈 앨범 차트에서도 1위를 차지했다.
          </p>
          <p className="mt-4">
            이번 앨범은 중국 텐센트뮤직 산하 5개 음원 플랫폼 통합 K-POP 차트 1위, QQ뮤직·쿠고우뮤직 디지털 앨범 판매
            차트 1위, 더블 플래티넘 인증을 획득했으며, 일본 AWA 실시간 차트·Mora 데일리 차트 1위에 오르며 글로벌 인기를
            입증했다.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "RIIZE",
    subtitle: "THE 1ST MINI ALBUM - RIIZING",
    image: "/artist-logo.png",
    gradient:
      "linear-gradient(90deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.20) 48.5%, rgba(255, 255, 255, 0.00) 100%)",

    content: (
      <div className="flex flex-col lg:flex-row bg-black text-white min-h-[300px] px-6 lg:px-60 py-10 gap-8 lg:gap-32 items-start">
        <div className="w-full lg:w-[400px] text-center lg:text-left">
          <h1 className="text-[32px] lg:text-[50px] leading-none font-bold">THE 5TH ALBUM</h1>
        </div>
        <div className="flex-1 text-base leading-relaxed">
          <p>
            10월 21일 발매된 에스파 다섯 번째 미니앨범 'Whiplash'는 공개 직후 각종 국내 주요 음악 차트 상위권으로 진입해
            무서운 추이로 순위 상승에 시동을 걸고 있는 것은 물론, 아이튠즈 톱 앨범 차트에서 태국, 일본, 대만 등 총 17개
            지역의 정상에 올랐으며, 월드와이드 아이튠즈 앨범 차트에서도 1위를 차지했다.
          </p>
          <p className="mt-4">
            이번 앨범은 중국 텐센트뮤직 산하 5개 음원 플랫폼 통합 K-POP 차트 1위, QQ뮤직·쿠고우뮤직 디지털 앨범 판매
            차트 1위, 더블 플래티넘 인증을 획득했으며, 일본 AWA 실시간 차트·Mora 데일리 차트 1위에 오르며 글로벌 인기를
            입증했다.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "NCT127",
    subtitle: "THE 6TH ALBUM - WLAK",
    image: "/artist-logo.png",
    gradient:
      "linear-gradient(90deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.10) 48.5%, rgba(255, 255, 255, 0.40) 100%)",
    content: (
      <div className="flex flex-col lg:flex-row bg-black text-white min-h-[300px] px-6 lg:px-60 py-10 gap-8 lg:gap-32 items-start">
        <div className="w-full lg:w-[400px] text-center lg:text-left">
          <h1 className="text-[32px] lg:text-[50px] leading-none font-bold">THE 5TH ALBUM</h1>
        </div>
        <div className="flex-1 text-base leading-relaxed">
          <p>
            10월 21일 발매된 에스파 다섯 번째 미니앨범 'Whiplash'는 공개 직후 각종 국내 주요 음악 차트 상위권으로 진입해
            무서운 추이로 순위 상승에 시동을 걸고 있는 것은 물론, 아이튠즈 톱 앨범 차트에서 태국, 일본, 대만 등 총 17개
            지역의 정상에 올랐으며, 월드와이드 아이튠즈 앨범 차트에서도 1위를 차지했다.
          </p>
          <p className="mt-4">
            이번 앨범은 중국 텐센트뮤직 산하 5개 음원 플랫폼 통합 K-POP 차트 1위, QQ뮤직·쿠고우뮤직 디지털 앨범 판매
            차트 1위, 더블 플래티넘 인증을 획득했으며, 일본 AWA 실시간 차트·Mora 데일리 차트 1위에 오르며 글로벌 인기를
            입증했다.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Hearts2Hearts",
    subtitle: "THE 1ST SINGLE ALBUM - THE CHASE",
    image: "/artist-logo.png",
    gradient:
      "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.40) 48.5%, rgba(255, 255, 255, 0.20) 100%)",
    content: (
      <div className="flex flex-col lg:flex-row bg-black text-white min-h-[300px] px-6 lg:px-60 py-10 gap-8 lg:gap-32 items-start">
        <div className="w-full lg:w-[400px] text-center lg:text-left">
          <h1 className="text-[32px] lg:text-[50px] leading-none font-bold">THE 5TH ALBUM</h1>
        </div>
        <div className="flex-1 text-base leading-relaxed">
          <p>
            10월 21일 발매된 에스파 다섯 번째 미니앨범 'Whiplash'는 공개 직후 각종 국내 주요 음악 차트 상위권으로 진입해
            무서운 추이로 순위 상승에 시동을 걸고 있는 것은 물론, 아이튠즈 톱 앨범 차트에서 태국, 일본, 대만 등 총 17개
            지역의 정상에 올랐으며, 월드와이드 아이튠즈 앨범 차트에서도 1위를 차지했다.
          </p>
          <p className="mt-4">
            이번 앨범은 중국 텐센트뮤직 산하 5개 음원 플랫폼 통합 K-POP 차트 1위, QQ뮤직·쿠고우뮤직 디지털 앨범 판매
            차트 1위, 더블 플래티넘 인증을 획득했으며, 일본 AWA 실시간 차트·Mora 데일리 차트 1위에 오르며 글로벌 인기를
            입증했다.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Red Velvet",
    subtitle: "THE 7TH MINI ALBUM - COSMIC",
    image: "/artist-logo.png",
    gradient:
      "linear-gradient(90deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.20) 48.5%, rgba(255, 255, 255, 0.00) 100%)",
    content: (
      <div className="flex flex-col lg:flex-row bg-black text-white min-h-[300px] px-6 lg:px-60 py-10 gap-8 lg:gap-32 items-start">
        <div className="w-full lg:w-[400px] text-center lg:text-left">
          <h1 className="text-[32px] lg:text-[50px] leading-none font-bold">THE 5TH ALBUM</h1>
        </div>
        <div className="flex-1 text-base leading-relaxed">
          <p>
            10월 21일 발매된 에스파 다섯 번째 미니앨범 'Whiplash'는 공개 직후 각종 국내 주요 음악 차트 상위권으로 진입해
            무서운 추이로 순위 상승에 시동을 걸고 있는 것은 물론, 아이튠즈 톱 앨범 차트에서 태국, 일본, 대만 등 총 17개
            지역의 정상에 올랐으며, 월드와이드 아이튠즈 앨범 차트에서도 1위를 차지했다.
          </p>
          <p className="mt-4">
            이번 앨범은 중국 텐센트뮤직 산하 5개 음원 플랫폼 통합 K-POP 차트 1위, QQ뮤직·쿠고우뮤직 디지털 앨범 판매
            차트 1위, 더블 플래티넘 인증을 획득했으며, 일본 AWA 실시간 차트·Mora 데일리 차트 1위에 오르며 글로벌 인기를
            입증했다.
          </p>
        </div>
      </div>
    ),
  },
];

const Art02 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full h-full bg-black text-white">
      {accordionData.map((item, index) => (
        <div key={index} className="  lg:via-transparent overflow-hidden">
          <div
            className="w-full h-[1px]"
            style={{
              background: item.gradient,
            }}
          ></div>
          <button
            onClick={() => toggleIndex(index)}
            className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-800 transition"
          >
            <div className="relative w-full h-full">
              <div className="text-[20px] lg:font-bold m-4">{item.title}</div>
              <div className="absolute inset-4 flex items-center justify-center text-[20px] text-center w-full lg:block hidden">
                {item.subtitle}
              </div>
            </div>
            <div className="mr-4">
              {openIndex === index ? <img src="/up.png" alt="Arrow Up" /> : <img src="/down.png" alt="Arrow Down" />}
            </div>
          </button>

          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className="transition-all duration-500 ease-in-out overflow-hidden"
            style={{
              maxHeight: openIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : "0px",
              opacity: openIndex === index ? 1 : 0,
            }}
          >
            <div className="p-4 bg-black text-sm leading-relaxed">
              <div className="mt-4 mb-6 flex justify-center">
                <img src={item.image} alt={`${item.title} Image`} className="w-[890px] h-auto " />
              </div>
              <div>{item.content}</div>
            </div>
          </div>
        </div>
      ))}
      <div
        className="w-full h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.40) 48.5%, rgba(255, 255, 255, 0.20) 100%)",
        }}
      ></div>
    </div>
  );
};
<div class="flex justify-center mt-6 space-x-4 sm:flex hidden">
  <div class="relative pb-1">
    <button class="px-4 py-2 text-white font-semibold">1</button>
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-0.5 bg-gradient-to-r from-fuchsia-500 via-purple-600 to-indigo-500 blur-sm opacity-100 rounded-full pointer-events-none"></div>
  </div>

  <div class="relative pb-1">
    <button class="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700 transition">2</button>
  </div>

  <div class="relative pb-1 ">
    <button class="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700 transition">3</button>
  </div>
</div>;

export default Art02;
