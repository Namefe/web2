
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
    <div className="w-full h-screen bg-black   text-white font-bold">
     <Header/>
     
      <section>
      <div className='sec1_img'>
      <img className='img1' src={process.env.PUBLIC_URL + '/1.png'}/>
      <img className='img2' src={process.env.PUBLIC_URL + '/2.png'}/>
      <img className='img3' src={process.env.PUBLIC_URL + '/3.png'}/>
      <img className='img4' src={process.env.PUBLIC_URL + '/4.png'}/>
      <img className='img5' src={process.env.PUBLIC_URL + '/5.png'}/>
      <img className='img6' src={process.env.PUBLIC_URL + '/6.png'}/>
      </div>
      <div className="the">
        <div className="text-[152px]  block w-fit">THE CULTURE,</div>
          <div className="text-[152px]  block w-fit">THE FUTURE</div>   
      </div>
      <div className="absolute bottom-8 right-8 text-sm md:text-base font-medium">
        <span className="opacity-90">We invest in the future.</span>
      </div>
      </section>
    </div>
    {/*---------------------------------------------------------------------- section1 끝--------------------------------*/}
    <div className="w-full h-full bg-black overflow-hidden relative text-white font-bold">
    <section>
        <div>
          <p className="h-screen flex items-center justify-center" style={{fontSize:'40px'}}>아시아를 넘어 글로벌 No.1을 지향합니다.</p>
          <img className='absolute' src={process.env.PUBLIC_URL + '/sec2_01.png'}/>
        </div>
      </section>
    </div>
    {/*------------------------------------------------------------- section2 끝 --------------------------------------*/}
    <div className="w-full h-full bg-white">
    <section>
        <div>
          <p></p>
        </div>
      </section>
    </div>
    {/* ----------------------------------------------------------section3 끝 ----------------------------------------------*/}
    <div className="sec4bg w-full h-full text-black font-bold" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/sec3_bg.png)`}}>
    <section>
      <div/>
        <div>
        <div className='txt text-[40px]'>
          <div>SM Entertainment는 1995년 설립 이후 </div>
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
            <img src={process.env.PUBLIC_URL + '/sec3_03.png'}></img>
          </div>
          글로벌 1등 기업으로 도약하겠습니다.
        </div>
        </div>
      </section>
    </div>
    {/*------------------------------------------------------------- section4 끝 --------------------------------------------*/}
    <div className="sec4bg w-full h-full  text-white font-bold" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/sec4_bg.png)`}}>
    <section>
      <div/>
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
    </div>
    {/* -------------------------------------------------------------------section5 끝-------------------------------------------- */}
    <div className="w-full h-full bg-black relative text-white font-bold">
    <section>
      <div/>
        <div>
          <div className='sec6txt'>
            <div className=' SM inline-block '>SM</div>
            <div className='inline-block'>ARTISTS</div>
            <div className='sec6txt1 block'>SM의 빛나는 성장을 함께한 주요 아티스트</div>
            </div> 
            <div className='sec6img'>
            <img className='sec6img1 inline-block' src={process.env.PUBLIC_URL + '/sm6.png'}></img>
            <img className='sec6img2 inline-block' src={process.env.PUBLIC_URL + '/sm12.png'}></img>
            <img className='sec6img3 inline-block' src={process.env.PUBLIC_URL + '/sm8.png'}></img>
            <img className='sec6img4 inline-block' src={process.env.PUBLIC_URL + '/sm9.png'}></img>
            <img className='sec6img5 inline-block' src={process.env.PUBLIC_URL + '/sm7.png'}></img>
            <img className='sec6img6 inline-block' src={process.env.PUBLIC_URL + '/sm10.png'}></img>
            <img className='sec6img7 inline-block' src={process.env.PUBLIC_URL + '/sm1.png'}></img>
            <img className='sec6img8 inline-block' src={process.env.PUBLIC_URL + '/sm11.png'}></img>
            <img className='sec6img9 inline-block' src={process.env.PUBLIC_URL + '/sm2.png'}></img>
            <img  className='sec6img10 inline-block' src={process.env.PUBLIC_URL + '/sm3.png'}></img>
            <img  className='sec6img11 inline-block' src={process.env.PUBLIC_URL + '/sm4.png'}></img>
            <img  className='sec6img12 inline-block' src={process.env.PUBLIC_URL + '/sm5.png'}></img>
            </div>
            <div className='who'>Who's next?</div>
        </div>
      </section>
    </div>
    {/*SECTION6 끝 */}
    <div className="sec4bg w-full h-full relative  text-black font-bold" >
    <section>
      <div/>
        <div>
          <div className='sec7txt'>
            <div className='text-pink-200 inline-block'>SM</div>
            <div className='inline-block'>ENTERTAINMENT CONNECTS</div>
            <div>FANS AND ARTIST</div>
            <img  src={process.env.PUBLIC_URL + '/sec5_01.png'}/>
            </div>
            <div className='sec7img'>
              <div className='SMTOWN relative'>
                <img src={process.env.PUBLIC_URL + '/sec7_01.png'}/>
                <div>
                  <div className='text-white absolute top-0 left-0'>
                    SMTOWN
                  </div>
                  <img className='absolute top-0 left-0' src={process.env.PUBLIC_URL + '/화살표.png'}/>
                </div>
                <div className='text-white absolute top-0 left-0'>GOODS&ITEMS </div>
                <div className='text-white absolute top-0 left-0'>SM TOWN에서 팔로우하는 아티스트의 최신 굿즈와 앨범 등 다양한 아이템들을 한번에 만나보세요.</div>
              </div>
              <div className='sec7_02bg' style={{backgroundImage:`url(${process.env.PUBLIC_URL}/sec7_02bg.png)`}}>
                <div className='relative'>
                  <img className='sec7_01' src={process.env.PUBLIC_URL + '/sec7_02_1.png'}/>
                  <img className='sec7_02' src={process.env.PUBLIC_URL + '/sec7_02_2.png'}/>
                </div>
                <div className='gwangya'>
                  <h1 className='inline-block text-white text-[40px]'>KWANGYA 119</h1>
                  <img className='inline-block' src={process.env.PUBLIC_URL + '/화살표.png'}/>
                  <div className='text-white'>아티스트의 활동을 위한 제보는 광야 119로 문의해주세요.</div>
                </div>
              </div>
              <div className='SM30' style={{backgroundImage:`url(${process.env.PUBLIC_URL}/sec7_03.png)`}}>
                  <div className='smtowntxt text-[20px]'>
                    <h1 className='inline-block text-white text-[40px]'>SMTOWN 30</h1>
                    <img className='inline-block' src={process.env.PUBLIC_URL + '/화살표.png'}/>
                    <div className='text-white'>SM TOWN의 30주년을 맞이하여 준비한 이벤트를 체험해보세요.</div>
                  </div>
              </div>
            </div>
        </div>
      </section>
    </div>
    {/*-------------------------------------------------------------------FOOTER 시작--------------------------------------------- */}
    <footer>
      <div>
        <p className="text-center text-sm text-gray-500">
          © 2023 SM Entertainment. All rights reserved.
        </p>
      </div>
    </footer>
    </>
  )
}

export default App;
