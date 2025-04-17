
import './App.css';
import { motion } from "framer-motion";

function App() {


  const fadeInVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { 
        delay: i * 0.1,
         duration: 0.6, 
         ease: "easeOut" }
    }),
  };

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
    <div className="sec4bg w-full h-full text-black font-bold" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/sec3_bg.png)`}}>
    <section>
      <div/>
        <div className='m-32'>
        <div className='txt text-[40px]'>
          <div className='inline-block'>SM Entertainment는 1995년 설립 이후 </div>
          <div className='txt-image inline-block'>
          <img src={process.env.PUBLIC_URL + '/sec3_01.png'}></img>
          </div>
        </div>
        <div className='txt text-[40px]'>
           K-POP을 선도하며 글로벌 시장을 개척해왔습니다.
        </div>
        <div className='txt text-[40px]'>
          최고의 인재와 퍼포먼스로 세계에
          <div className='txt-image inline-block'>
          <img src={process.env.PUBLIC_URL + '/sec3_02.png'}></img>
          </div>
           '한류'를 알리며
        </div>
        <div className='txt text-[40px]'>
          <div className='txt-image inline-block'>
            <img className='w-20 h-20' src={process.env.PUBLIC_URL + '/sec3_03.png'}></img>
          </div>
          글로벌 1등 기업으로 도약하겠습니다.
        </div>
        </div>
      </section>
    </div>
    {/*------------------------------------------------------------- section4 끝 --------------------------------------------*/}

    <section className="sec4bg w-full text-white font-bold" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/sec4_bg.png)`}}>
        <div className='sec5'>
          <div className='sec5txt'>
            <div className='sec5txt1'>SM Entertainment는</div>
            <div className='sec5txt2'>K-Culture의 미래를 설계합니다.</div>
            </div>
            <img className='sec5img1' src={process.env.PUBLIC_URL + '/sec4_01.png'}></img>
            <img className='sec5img2' src={process.env.PUBLIC_URL + '/sec4_02.png'}></img>
            <img className='sec5img3' src={process.env.PUBLIC_URL + '/sec4_03.png'}></img>
            <img className='sec5img4' src={process.env.PUBLIC_URL + '/sec4_01.png'}></img>
            <img className='sec5img5' src={process.env.PUBLIC_URL + '/sec4_02.png'}></img>
            <img className='sec5img6' src={process.env.PUBLIC_URL + '/sec4_03.png'}></img>
            <img className='sec5img7' src={process.env.PUBLIC_URL + '/sec4_01.png'}></img>
            <img className='sec5img8' src={process.env.PUBLIC_URL + '/sec4_02.png'}></img>
            <img className='sec5img9' src={process.env.PUBLIC_URL + '/sec4_03.png'}></img>
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
    
    <motion.div  custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}
            className="relative group overflow-hidden aspect-[4/3]">
      <img src={process.env.PUBLIC_URL + '/sm6.png'} className="object-cover w-full h-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
      <div style={{ cursor: "url('/hovercursor_32x32.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <a className="text-white font-bold text-[20px]">VIEW MUSIC VIDEO ↗</a>
      </div>
    </motion.div>

    <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}
    className="relative group overflow-hidden aspect-[4/3]">
      <img src={process.env.PUBLIC_URL + '/sm12.png'} className="object-cover w-full h-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
      <div style={{ cursor: "url('/hovercursor_32x32.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <a className="text-white font-bold text-[20px]">VIEW MUSIC VIDEO ↗</a>
      </div>
    </motion.div>

    <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}
    className="relative group overflow-hidden aspect-[4/3]">
      <img src={process.env.PUBLIC_URL + '/sm8.png'} className="object-cover w-full h-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
      <div style={{ cursor: "url('/hovercursor_32x32.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <a className="text-white font-bold text-[20px]">VIEW MUSIC VIDEO ↗</a>
      </div>
    </motion.div>

    <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}
    className="relative group overflow-hidden aspect-[4/3]">
      <img src={process.env.PUBLIC_URL + '/sm9.png'} className="object-cover w-full h-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
      <div style={{ cursor: "url('/hovercursor_32x32.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <a className="text-white font-bold text-[20px]">VIEW MUSIC VIDEO ↗</a>
      </div>
    </motion.div>

    <motion.div custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}
    className="relative group overflow-hidden aspect-[4/3]">
      <img src={process.env.PUBLIC_URL + '/sm7.png'} className="object-cover w-full h-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
      <div style={{ cursor: "url('/hovercursor_32x32.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <a className="text-white font-bold text-[20px]">VIEW MUSIC VIDEO ↗</a>
      </div>
    </motion.div>

    <motion.div custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}
    className="relative group overflow-hidden aspect-[4/3]">
      <img src={process.env.PUBLIC_URL + '/sm1.png'} className="object-cover w-full h-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
      <div style={{ cursor: "url('/hovercursor_32x32.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <a className="text-white font-bold text-[20px]">VIEW MUSIC VIDEO ↗</a>
      </div>
    </motion.div>

    <motion.div custom={6} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}
     className="relative group overflow-hidden aspect-[4/3]">
      <img src={process.env.PUBLIC_URL + '/sm10.png'} className="object-cover w-full h-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
      <div style={{ cursor: "url('/hovercursor_32x32.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <a className="text-white font-bold text-[20px]">VIEW MUSIC VIDEO ↗</a>
      </div>
    </motion.div>

    <motion.div custom={7} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}
     className="relative group overflow-hidden aspect-[4/3]">
      <img src={process.env.PUBLIC_URL + '/sm11.png'} className="object-cover w-full h-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
      <div style={{ cursor: "url('/hovercursor_32x32.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <a className="text-white font-bold text-[20px]">VIEW MUSIC VIDEO ↗</a>
      </div>
    </motion.div>

    <motion.div custom={8} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}
    className="relative group overflow-hidden aspect-[4/3]">
      <img src={process.env.PUBLIC_URL + '/sm2.png'} className="object-cover w-full h-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
      <div style={{ cursor: "url('/hovercursor_32x32.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <a className="text-white font-bold text-[20px]">VIEW MUSIC VIDEO ↗</a>
      </div>
    </motion.div>

    <motion.div custom={9} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}
    className="relative group overflow-hidden aspect-[4/3]">
      <img src={process.env.PUBLIC_URL + '/sm3.png'} className="object-cover w-full h-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
      <div style={{ cursor: "url('/hovercursor_32x32.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <a className="text-white font-bold text-[20px]">VIEW MUSIC VIDEO ↗</a>
      </div>
    </motion.div>

    <motion.div custom={10} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}
    className="relative group overflow-hidden aspect-[4/3]">
      <img src={process.env.PUBLIC_URL + '/sm4.png'} className="object-cover w-full h-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
      <div style={{ cursor: "url('/hovercursor_32x32.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <a className="text-white font-bold text-[20px]">VIEW MUSIC VIDEO ↗</a>
      </div>
    </motion.div>

    <motion.div custom={11} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}
     className="relative group overflow-hidden aspect-[4/3]">
      <img src={process.env.PUBLIC_URL + '/sm5.png'} className="object-cover w-full h-full transition duration-300 group-hover:brightness-50 group-hover:scale-105" />
      <div style={{ cursor: "url('/hovercursor_32x32.png') 0 0, auto" }} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <a className="text-white font-bold text-[20px]">VIEW MUSIC VIDEO ↗</a>
      </div>
    </motion.div>

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
        <div className='footer1 inline-block'>
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
          <h3 className='font-bold mt-4'>OUR BUSINESS</h3>
          <div className='opacity-80'>SM Entertainment operates across multiple business<br/>sectors within the entertainment industry.</div>
        </div>
      </div>
      </div>
      <div className="footer1 inline-block border-t border-gray-700 my-8">
      <div>
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