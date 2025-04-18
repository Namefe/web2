
import Aos from 'aos';
import './App.css';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import "aos/dist/aos.css";

function App() {


  useEffect(() => {
    Aos.init({
      duration: 800, // 애니메이션 시간 (ms)
      once: false,    // 한 번만 작동할지 여부
    });
  }, []);


  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };
  const imageList = [
    "sm6.png", "sm12.png", "sm8.png", "sm9.png",
    "sm7.png", "sm1.png", "sm10.png", "sm11.png",
    "sm2.png", "sm3.png", "sm4.png", "sm5.png"
  ];

  const Header = () => (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center p-4 sm:p-6 z-10">
      <div className="flex items-center gap-2 relative">
        <img src={process.env.PUBLIC_URL + '/Group 1.png'} className="w-8 sm:w-12"/>
        <span className="text-xs sm:text-sm tracking-widest font-semibold ml-2">
          SM<br />ENTERTAINMENT
        </span>
      </div>
      <button className="text-white text-xl sm:text-2xl">
        <img src={process.env.PUBLIC_URL + '/bar.png'} className="w-6 sm:w-8"/>
      </button>
    </header>
  );
  
  return (
    <>
    <div className="w-full h-screen bg-black text-white font-bold relative overflow-hidden">
      <Header />
  
      <section>
        <div className='sec1_img w-full h-full relative'>
          <div className='relative'>
            <img className='img1' src={process.env.PUBLIC_URL + '/1.png'} />
          </div>
          <div className='relative'>
            <img className='img2' src={process.env.PUBLIC_URL + '/2.png'} />
          </div>
          <img className='img3' src={process.env.PUBLIC_URL + '/3.png'} />
          <img className='img4' src={process.env.PUBLIC_URL + '/4.png'} />
          <img className='img5' src={process.env.PUBLIC_URL + '/5.png'} />
          <img className='img6' src={process.env.PUBLIC_URL + '/6.png'} />
        </div>
  
        <div className="the absolute top-[120px] left-[20px] sm:top-[250px] sm:left-[150px]">
          <div className="text-[32px] sm:text-[100px] block w-fit">THE CULTURE,</div>
          <div className="text-[32px] sm:text-[100px] block w-fit">THE FUTURE</div>
        </div>
  
        <div>
          <div className="absolute bottom-4 left-4 text-xs sm:text-base font-medium">Introduction</div>
          <div className="scroll">
            <img className="cursor-pointer pointer-events-auto w-8 sm:w-12" src={process.env.PUBLIC_URL + '/scroll.png'} />
          </div>
          <div className="absolute bottom-[30px] right-4 sm:right-8 text-xs sm:text-base font-medium">
            <span className="opacity-90 text-[20px] sm:text-[35px]">We invest in the future.</span>
          </div>
        </div>
  
        <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 border border-white/50 rounded-full w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] z-10" style={{ backdropFilter: 'blur(2px)' }}>
          <img onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} src={process.env.PUBLIC_URL + '/top.png'} alt="top" className="w-full h-full"/>
        </div>
  
        <div className="relative w-full h-screen sm:block hidden">
          <div className="absolute top-0 bottom-0 left-[140px] w-px bg-white/20"></div>
          <div className="absolute top-0 bottom-0 right-[140px] w-px bg-white/20"></div>
         <div className="absolute left-0 right-0 bottom-[100px] h-px bg-white/20"></div>
        </div>
        </section>
    </div>

  
    {/*---------------------------------------------------------------------- section1 끝--------------------------------*/}

    <section  className="w-screen h-screen bg-black overflow-hidden relative text-white font-bold flex items-center justify-center">
          <p className="h-full flex items-center justify-center" style={{fontSize:'35px'}}>아시아를 넘어<br/> 글로벌 No.1을 지향합니다.</p>
          <img className='country absolute top-[50%] left-[50%]' src={process.env.PUBLIC_URL + '/sec2_01.png'}/>
      </section>
    {/*------------------------------------------------------------- section2 끝 --------------------------------------------*/}
    <div
  className="sec4bg w-full h-full text-black font-bold"
  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/sec3_bg.png)` }}
>
  <section>
    <div className="m-32 text-[20px] leading-relaxed text-center">
      <span className="text-justify 2xl:text-[55px]">
        SM Entertainment는 1995년 설립 이후
        <img
          src={`${process.env.PUBLIC_URL}/sec3_01.png`}
          alt="icon1"
          className="inline w-21 h-6 2xl:w-40 2xl:h-14 align-middle mx-1"
        />
        <br/>K-POP을 선도하며 글로벌 시장을 개척해왔습니다.<br/> 최고의 인재와 퍼포먼스로 세계에
        <img
          src={`${process.env.PUBLIC_URL}/sec3_02.png`}
          alt="icon2"
          className="inline w-21 h-6 2xl:w-40 2xl:h-14 align-middle mx-1"
        />
        ‘한류’를 알리며
        <img
          src={`${process.env.PUBLIC_URL}/sec3_03.png`}
          alt="icon3"
          className="inline w-12 h-12 2xl:w-20 2xl:h-20 align-middle mx-1"
        />
        글로벌 1등 기업으로 도약하겠습니다.
      </span>
    </div>
  </section>
</div>
    {/*------------------------------------------------------------- section4 끝 --------------------------------------------*/}

    <section className="sec4bg w-auto text-white font-bold bg-contain" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/sec4_bg.png)`}}>
        <div className='relative'>
          <div className='sec5txt '>
            <div className='sec5txt1 lg:text-2xl xl:text-[20px]'>SM Entertainment는</div>
            <div className='sec5txt2 lg:text-2xl xl:text-[40px]'>K-Culture의 미래를 설계합니다.</div>
            </div>
            <div className='sec5'>
            <img className='sec5img1 w-1/3 h-auto object-contain'data-aos="fade-up" src={process.env.PUBLIC_URL + '/sec4_01.png'}></img>
            <img className='sec5img2 w-1/3 h-auto object-contain'data-aos="fade-up" src={process.env.PUBLIC_URL + '/sec4_03.png'}></img>
            <img className='sec5img3 w-1/3 h-auto object-contain'data-aos="fade-up" src={process.env.PUBLIC_URL + '/sec4_01.png'}></img>
            <img className='sec5img4 w-1/3 h-auto object-contain'data-aos="fade-up" src={process.env.PUBLIC_URL + '/sec4_03.png'}></img>
            <img className='sec5img5 w-1/3 h-auto object-contain'data-aos="fade-up" src={process.env.PUBLIC_URL + '/sec4_01.png'}></img>
            <img className='sec5img6 w-1/3 h-auto object-contain'data-aos="fade-up" src={process.env.PUBLIC_URL + '/sec4_03.png'}></img>
            <img className='sec5img7 w-1/2 h-auto object-contain'data-aos="fade-up" src={process.env.PUBLIC_URL + '/sec4_02.png'}></img>
            </div>
            </div>
      </section>
    {/* -------------------------------------------------------------------section5 끝-------------------------------------------- */}
    <section  className="pc hidden md:block w-full bg-black text-white font-bold px-4 py-12">
  <div className="text-center mb-12">
    <div className="text-4xl inline-block mr-2 text-pink-300">SM</div>
    <div className="text-4xl inline-block">ARTISTS</div>
    <div className="text-sm mt-4">SM의 빛나는 성장을 함께한 주요 아티스트</div>
  </div>
  <div className="grid grid-cols-12 gap-0  inline-block overflow-hidden"> 
    <div className="col-span-8 object-cover w-full transition duration-300 group-hover:brightness-50 relative group overflow-hidden">
    <img src={process.env.PUBLIC_URL + '/sm6.png'} className="col-span-8 object-cover w-full h-auto transition duration-300 group-hover:brightness-50 group-hover:scale-105"/>
    <div style={{ cursor: "url('/hovercursor_32x32.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
    <a className="text-white  font-bold text-[30px]">VIEW MUSIC VIDEO ↗</a>
  </div>
  </div>
  <div className="self-end col-span-4 object-cover w-full transition duration-300 group-hover:brightness-50 relative group overflow-hidden">
    <img src={process.env.PUBLIC_URL + '/sm12.png'} className="block col-span-4  w-full self-end transition duration-300 group-hover:brightness-50 group-hover:scale-105"/>
    <div style={{ cursor: "url('/hovercursor_32x32.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
    <a className="inline-block text-white text-sm font-bold text-[20px]">VIEW MUSIC VIDEO ↗</a>
  </div>
    </div>
    <div className="col-span-4" />
    <div className=" col-span-4 object-cover w-full transition duration-300 group-hover:brightness-50 relative group overflow-hidden">
    <img src={process.env.PUBLIC_URL + '/sm8.png'} className="block col-span-4 object-cover w-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
    <div style={{ cursor: "url('/hovercursor_32x32.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
    <a className="inline-block text-white text-sm font-bold text-[20px]">VIEW MUSIC VIDEO ↗</a>
    </div>
    </div>
    <div className=" col-span-4 object-cover w-full transition duration-300 group-hover:brightness-50 relative group overflow-hidden">
    <img src={process.env.PUBLIC_URL + '/sm9.png'} className="block col-span-4 object-cover w-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
    <div style={{ cursor: "url('/hovercursor_32x32.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
    <a className="inline-block text-white text-sm font-bold text-[20px]">VIEW MUSIC VIDEO ↗</a>
    </div>
    </div>
    <div className='col-span-4 w-full'>
    <div className=" col-span-4 object-cover w-full transition duration-300 group-hover:brightness-50 relative group overflow-hidden">
    <img src={process.env.PUBLIC_URL + '/sm7.png'} className="block col-span-4 object-cover w-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
    <div style={{ cursor: "url('/hovercursor_32x32.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
    <a className="inline-block text-white text-sm font-bold text-[20px]">VIEW MUSIC VIDEO ↗</a>
    </div>
    </div>
    <div className=" col-span-4 object-cover w-full transition duration-300 group-hover:brightness-50 relative group overflow-hidden">
    <img src={process.env.PUBLIC_URL + '/sm1.png'} className="block col-span-4 object-cover w-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
    <div style={{ cursor: "url('/hovercursor_32x32.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
    <a className="inline-block text-white text-sm font-bold text-[20px]">VIEW MUSIC VIDEO ↗</a>
    </div>
    </div>
    </div>
    <div className='col-span-8'>
    <div className=" col-span-8 object-cover w-full transition duration-300 group-hover:brightness-50 relative group overflow-hidden">
    <img src={process.env.PUBLIC_URL + '/sm10.png'} className="block col-span-8 object-cover w-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
    <div style={{ cursor: "url('/hovercursor_32x32.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
    <a className="inline-block text-white text-sm font-bold text-[20px]">VIEW MUSIC VIDEO ↗</a>
    </div>
    </div>
    <div className="self-start w-1/2 object-cover transition duration-300 group-hover:brightness-50 relative group overflow-hidden">
    <img src={process.env.PUBLIC_URL + '/sm11.png'} className="self-start w-1/2 block col-span-4 object-cover w-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
    <div style={{ cursor: "url('/hovercursor_32x32.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
    <a className="inline-block text-white text-sm font-bold text-[20px]">VIEW MUSIC VIDEO ↗</a>
    </div>
    </div>
    </div>
    <div className=" col-span-8 object-cover w-full h-256 transition duration-300 group-hover:brightness-50 relative group overflow-hidden">
    <img src={process.env.PUBLIC_URL + '/sm2.png'} className="block col-span-4 object-cover w-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
    <div style={{ cursor: "url('/hovercursor_32x32.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
    <a className="inline-block text-white text-sm font-bold text-[20px]">VIEW MUSIC VIDEO ↗</a>
    </div>
    </div>
    <div className=" col-span-4 object-cover w-full h-128 transition duration-300 group-hover:brightness-50 relative group overflow-hidden">
    <img src={process.env.PUBLIC_URL + '/sm3.png'} className="block col-span-4 object-cover w-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
    <div style={{ cursor: "url('/hovercursor_32x32.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
    <a className="inline-block text-white text-sm font-bold text-[20px]">VIEW MUSIC VIDEO ↗</a>
    </div>
    </div>
    <div className=" col-span-4 object-cover w-full h-256 transition duration-300 group-hover:brightness-50 relative group overflow-hidden">
    <img src={process.env.PUBLIC_URL + '/sm4.png'} className="block col-span-4 object-cover w-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
    <div style={{ cursor: "url('/hovercursor_32x32.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
    <a className="inline-block text-white text-sm font-bold text-[20px]">VIEW MUSIC VIDEO ↗</a>
    </div>
    </div>
    <div className=" col-span-4 object-cover w-full h-256 transition duration-300 group-hover:brightness-50 relative group overflow-hidden">
    <img src={process.env.PUBLIC_URL + '/sm5.png'} className="block object-cover w-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
    <div style={{ cursor: "url('/hovercursor_32x32.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
    <a className="inline-block text-white text-sm font-bold text-[20px]">VIEW MUSIC VIDEO ↗</a>
    </div>
    </div>
    <div className="inline-block text-center mt-24 text-[50px] text-white opacity-80 col-span-4">
    Who's next?
  </div>
  </div>
</section>
{/*SECTION6 PC 끝 */}
    <section  className="mobile block md:hidden w-full bg-black text-white font-bold px-4 py-12">
  <div className="text-center mb-12">
    <div className="text-4xl inline-block mr-2 text-pink-300">SM</div>
    <div className="text-4xl inline-block">ARTISTS</div>
    <div className="text-sm mt-4">SM의 빛나는 성장을 함께한 주요 아티스트</div>
  </div>
  <div className="grid grid-cols-4 gap-4">
        {imageList.map((img, index) => (
          <motion.div
            key={img}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="relative group overflow-hidden aspect-[4/3]"
          >
            <img
              src={`${process.env.PUBLIC_URL}/${img}`}
              alt={img}
              className="object-cover w-full h-full transition duration-300 group-hover:brightness-50 group-hover:scale-105"
            />
            <div
              style={{ cursor: "url('/hovercursor_32x32.png') 0 0, auto" }}
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
            >
              <a className="text-white font-bold text-[10px]">
                VIEW MUSIC VIDEO ↗
              </a>
            </div>
          </motion.div>
        ))}
      </div>
</section>
    {/*SECTION6 끝 */}

    <section className=" w-full min-h-screen px-6 py-12 text-black font-bold">
          <div className='sec7txt'>
            <div className='text-pink-400 inline-block'>SM</div>
            <div className='inline-block'>ENTERTAINMENT CONNECTS</div>
            <div className=''>FANS AND ARTIST            
              <img className='inline' src={process.env.PUBLIC_URL + '/sec5_01.png'}/>
            </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-2">
              <div className="relative col-span-2 h-[400px] group hover: cursor-pointer">
                <img className='w-full h-full object-cover' src={process.env.PUBLIC_URL + '/sec7_01.png'}/>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className='inline-block text-white  text-[40px] group'>
                    <span className="inline-block relative">SMTOWN
                    <span className="absolute left-0 -bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </div>
                  <img className='inline-block ml-2' src={process.env.PUBLIC_URL + '/화살표.png'}/>
                
                <div className=' block text-white text-[40px] group'>
                  <span className="inline-block relative">GOODS&ITEMS 
                  <span className="absolute left-0 -bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  </div>
                <div className='text-white '>SM TOWN에서 팔로우하는 아티스트의 최신 굿즈와 앨범 등 다양한 아이템들을 한번에 만나보세요.</div>
                </div>
              </div>
              <div className="flex flex-col gap-3 ">
              <div className='relative h-[195px] overflow-hidden group hover: cursor-pointer'>
              <img className='w-full h-full object-cover' src={process.env.PUBLIC_URL + '/sec7_02bg.png'}/>
                  <img className='sec7_01 absolute right-4 top-0 w-20 h-20' src={process.env.PUBLIC_URL + '/sec7_02_1.png'}/>
                  <img className='sec7_02 absolute right-20 top-4 w-20 h-20' src={process.env.PUBLIC_URL + '/sec7_02_2.png'}/>
                <div className='absolute bottom-4 left-4 text-white'>
                  <div className='inline-block text-[30px] group'>
                    <span className="inline-block relative">KWANGYA 119
                    <span className="absolute left-0 -bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span></div>
                  <img className='inline-block' src={process.env.PUBLIC_URL + '/화살표.png'}/>
                  <div className='text-sm'>아티스트의 활동을 위한 제보는 광야 119로 문의해주세요.</div>
                </div>
              </div>
              <div className='relative h-[195px] group hover: cursor-pointer'>
                <img className='w-full h-full object-cover' src={process.env.PUBLIC_URL + '/sec7_03.png'}/>
                  <div className='absolute bottom-4 left-4 text-white '>
                  <div className='inline-block text-[30px] group'>
                    <span className="inline-block relative">SMTOWN 30
                    <span className="absolute left-0 -bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span></div>
                    <img className='inline-block' src={process.env.PUBLIC_URL + '/화살표.png'}/>
                    <div className='text-sm'>SM TOWN의 30주년을 맞이하여 준비한 이벤트를 체험해보세요.</div>
                  </div>
              </div>
              </div>
            </div>

      </section>
    {/*-------------------------------------------------------------------FOOTER 시작--------------------------------------------- */}
    <footer>
      <section className=" w-full h-auto bg-black text-white  px-6 py-12">
        <div className='footer1 xl:flex xl:justify-between'>
      <div>
      <img src={process.env.PUBLIC_URL + '/smlogo.png'}/>
      </div>
      <div>
        <div>
          <h3 className='font-bold '>CONTACT US</h3>
          <div className='opacity-80'>대표번호: 02-6240-9800</div>
          <div className='opacity-80'>이메일: smeir@smtown.com</div>
        </div>
        <div>
          <h3 className='font-bold mt-4 hidden 2xl:block'>OUR BUSINESS</h3>
          <div className='opacity-80 hidden 2xl:block'>SM Entertainment operates across multiple business<br/>sectors within the entertainment industry.</div>
        </div>
      </div>
      </div>
      <div className="footer1 inline-block border-t border-gray-700 my-8 w-full xl:flex xl:justify-between">
      <div className='block'>
        <h3 className='font-bold mt-4'>OUR COMMUNITY</h3>
        <div className='flex flex-end'>
        <img className='m-2' src={process.env.PUBLIC_URL + '/icon3.png'}/>
        <img className='m-2' src={process.env.PUBLIC_URL + '/icon6.png'}/>
        <img className='m-2' src={process.env.PUBLIC_URL + '/icon4.png'}/>
        <img className='m-2' src={process.env.PUBLIC_URL + '/icon2.png'}/>
        <img className='m-2' src={process.env.PUBLIC_URL + '/icon_01.png'}/>
        </div>
      </div>
      <div className='policy'>
        <h3 className='font-bold mt-4'>POLICY</h3>
        <div className='opacity-80'>개인정보처리방침</div>
        <div className='opacity-80'>◎SM Entertainment. All Right Reserved.</div>
      </div>
      </div>
      </section>
    </footer>
    </>
  )
}

export default App;