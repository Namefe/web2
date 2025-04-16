
import './App.css';

function App() {

  const Header = () => (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-10">
      <div className="flex items-center gap-2">
        <div>
          <img src={process.env.PUBLIC_URL + '/Group 1.png'}/>
        </div>
        <span className="absolute top-[20px] left-[150px] text-sm tracking-widest font-semibold">SM<br/> ENTERTAINMENT</span>
      </div>
      <button className="text-white text-2xl">
      <img src={process.env.PUBLIC_URL + '/bar.png'}/>
      </button>
    </header>
  );
  return (
    <>
    <div className="w-full h-screen bg-black  text-white font-bold ">
     <Header/>
     
      <section>
      <div className='sec1_img'>
        <div className='relative'>
      <img className='img1' src={process.env.PUBLIC_URL + '/1.png'}/>
      <img className='img1 absolute inset-0 backdrop-blur-sm rounded-full' src={process.env.PUBLIC_URL + '/1.png'}/>
      </div>
        <div className='relative'>
      <img className='img2' src={process.env.PUBLIC_URL + '/2.png'}/>
      <img className='img2 absolute inset-0 backdrop-blur-sm rounded-full' src={process.env.PUBLIC_URL + '/2.png'}/>
      </div>
      <img className='img3' src={process.env.PUBLIC_URL + '/3.png'}/>
      <img className='img4' src={process.env.PUBLIC_URL + '/4.png'}/>
      <img className='img5' src={process.env.PUBLIC_URL + '/5.png'}/>
      <img className='img6' src={process.env.PUBLIC_URL + '/6.png'}/>
      </div>
      <div className="the">
        <div className="text-[100px]  block w-fit">THE CULTURE,</div>
          <div className="text-[100px]  block w-fit">THE FUTURE</div>   
      </div>
      <div>
        <div className="absolute bottom-8 left-8 text-sm md:text-base font-medium">Introduction</div>
        <img className="scroll" src={process.env.PUBLIC_URL + '/scroll.png'}/>
      <div className="absolute bottom-[30px] right-8 text-sm md:text-base font-medium">
        <span className="opacity-90 text-[35px]">We invest in the future.</span>
      </div>
      </div>
      <div className="fixed bottom-8 right-8 border border-white/50 rounded-full w-[50px] h-[50px] z-10"style={{ backdropFilter: 'blur(2px)' }}>
      <img className="" src={process.env.PUBLIC_URL + '/top.png'} alt="top"/>
      </div>
      <div className="relative w-full h-screen">
      <div className="absolute top-0 bottom-0 left-[140px] w-px bg-white/20"></div>
      <div className="absolute top-0 bottom-0 right-[140px] w-px bg-white/20"></div>
      <div className="absolute left-0 right-0 bottom-[100px] h-px bg-white/20"></div>

      </div>
      </section>
    </div>
    {/*---------------------------------------------------------------------- section1 끝--------------------------------*/}

    <section className="w-screen h-screen bg-black overflow-hidden relative text-white font-bold flex items-center justify-center">
          <p className="h-full flex items-center justify-center" style={{fontSize:'40px'}}>아시아를 넘어 글로벌 No.1을 지향합니다.</p>
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
            <span className='sec5txt1'>SM Entertainment는</span>
            <span className='sec5txt2'>K-Culture의 미래를 설계합니다.</span>
            </div>
            <div className='sec5img'>
            <img className='sec5img1' src={process.env.PUBLIC_URL + '/sec4_01.png'}></img>
            <img className='sec5img2' src={process.env.PUBLIC_URL + '/sec4_02.png'}></img>
            <img className='sec5img3' src={process.env.PUBLIC_URL + '/sec4_03.png'}></img>
            </div>
        </div>
      </section>
    {/* -------------------------------------------------------------------section5 끝-------------------------------------------- */}
    <section className="w-full bg-black text-white font-bold px-4 py-12">
  <div className="text-center mb-12">
    <div className="text-4xl inline-block mr-2 text-pink-300">SM</div>
    <div className="text-4xl inline-block">ARTISTS</div>
    <div className="text-sm mt-4">SM의 빛나는 성장을 함께한 주요 아티스트</div>
  </div>

  <div className="grid grid-cols-12 gap-0">
    <img src={process.env.PUBLIC_URL + '/sm6.png'} className="col-span-8 object-cover w-full"/>
    <img src={process.env.PUBLIC_URL + '/sm12.png'} className="block col-span-4  w-full self-end" />
    <div className="col-span-4" />
    <img src={process.env.PUBLIC_URL + '/sm8.png'} className="block col-span-4 object-cover w-full" />
    <img src={process.env.PUBLIC_URL + '/sm9.png'} className="block col-span-4 object-cover w-full" />
    <div className='col-span-4 w-full'>
    <img src={process.env.PUBLIC_URL + '/sm7.png'} className="col-span-4 object-cover w-full" />
    <img src={process.env.PUBLIC_URL + '/sm1.png'} className=" object-cover w-full" />
    </div>
    <div className='col-span-8'>
    <img src={process.env.PUBLIC_URL + '/sm10.png'} className="block col-span-8 object-cover w-full" />
    <img src={process.env.PUBLIC_URL + '/sm11.png'} className="col-span-4 object-cover self-start w-1/2" />
    </div>
    <img src={process.env.PUBLIC_URL + '/sm2.png'} className="inline-block col-span-8 object-cover w-full h-256 z-0" />
    <img src={process.env.PUBLIC_URL + '/sm3.png'} className="inline-block col-span-4 object-cover w-full h-128" />
    <img src={process.env.PUBLIC_URL + '/sm4.png'} className="inline-block col-span-4 object-cover w-full" />

    <img src={process.env.PUBLIC_URL + '/sm5.png'} className="inline-block col-span-4 object-cover w-full" />
    <div className="inline-block text-center mt-24 text-[50px] text-white opacity-80 col-span-4">
    Who's next?
  </div>
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
              <div className="relative col-span-2 h-[400px]">
                <img className='w-full h-full object-cover' src={process.env.PUBLIC_URL + '/sec7_01.png'}/>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className='text-white inline-block text-[40px]'>
                    SMTOWN
                  </div>
                  <img className='inline-block ml-2' src={process.env.PUBLIC_URL + '/화살표.png'}/>
                
                <div className='text-white text-[40px]'>GOODS&ITEMS </div>
                <div className='text-white'>SM TOWN에서 팔로우하는 아티스트의 최신 굿즈와 앨범 등 다양한 아이템들을 한번에 만나보세요.</div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
              <div className='relative h-[195px] overflow-hidden'>
              <img className='w-full h-full object-cover' src={process.env.PUBLIC_URL + '/sec7_02bg.png'}/>
                  <img className='sec7_01 absolute right-4 top-0 w-20 h-20' src={process.env.PUBLIC_URL + '/sec7_02_1.png'}/>
                  <img className='sec7_02 absolute right-20 top-4 w-20 h-20' src={process.env.PUBLIC_URL + '/sec7_02_2.png'}/>
                <div className='absolute bottom-4 left-4 text-white'>
                  <h1 className='inline-block text-lg'>KWANGYA 119</h1>
                  <img className='inline-block' src={process.env.PUBLIC_URL + '/화살표.png'}/>
                  <div className='text-sm'>아티스트의 활동을 위한 제보는 광야 119로 문의해주세요.</div>
                </div>
              </div>
              <div className='relative h-[195px]'>
                <img className='w-full h-full object-cover' src={process.env.PUBLIC_URL + '/sec7_03.png'}/>
                  <div className='absolute bottom-4 left-4 text-white'>
                    <h1 className='inline-block font-bold text-lg'>SMTOWN 30</h1>
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