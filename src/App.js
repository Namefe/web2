import logo from './logo.svg';
import './App.css';

function App() {
  const Capsule = ({ style }) => (
    <div
      style={style}
      className="absolute w-36 h-12 rounded-full  from-purple-500 via-pink-500 to-blue-500 blur-sm opacity-80"
    />
  );
  const Header = () => (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-10">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-white rounded-full" />
        <span className="absolute top-[20px] left-[150px] text-sm tracking-widest font-semibold">SM<br/> ENTERTAINMENT</span>
      </div>
      <button className="text-white text-2xl">≡</button>
    </header>
  );
  return (
    <>
    <div className="w-full h-screen bg-black overflow-hidden relative text-white font-bold">
     <Header/>
     
      <Capsule style={{ top: '10%', left: '10%', transform: 'rotate(45deg)',border: '2px solid rgb(159, 65, 134)',backgroundColor:'transparent'}} />
      <Capsule style={{ top: '50%', left: '35%',border: '2px solid rgb(185, 71, 156)',backgroundColor:'transparent' }} />
      <Capsule style={{ bottom: '10%', right: '15%',border: '2px solid rgb(154, 52, 147)',backgroundColor:'transparent' }} />
      <section>
      <div className="text-left absolute top-[350px] left-[500px] transform -translate-x-1/2 -translate-y-1/2 text-center">
        <span className="text-[100px]  block w-fit">THE CULTURE,</span>
          <span className="text-[100px]  block w-fit">THE FUTURE</span>   
      </div>
      <div className="absolute bottom-8 right-8 text-sm md:text-base font-medium">
        <span className="opacity-90">We invest in the future.</span>
      </div>
      </section>
    </div>
    {/*---------------------------------------------------------------------- section1 끝--------------------------------*/}
    <div className="w-full h-screen bg-black overflow-hidden relative text-white font-bold">
    <section>
      <div className="h-100 w-1 bg-gradient-to-r from-pink-500  to-red-500 rounded-full"/>

        <div>
          <p className="h-screen flex items-center justify-center" style={{fontSize:'40px'}}>아시아를 넘어 글로벌 No.1을 지향합니다.</p>
        </div>
      </section>
    </div>
    {/*------------------------------------------------------------- section2 끝 --------------------------------------*/}
    <div className="w-full h-screen bg-red overflow-hidden relative text-white font-bold">
    <section>
      <div className="h-100 w-1 bg-gradient-to-r from-pink-500  to-red-500 rounded-full"/>

        <div>
          <p></p>
        </div>
      </section>
    </div>
    {/* ----------------------------------------------------------section3 끝 ----------------------------------------------*/}
    <div className="w-full h-screen bg-white text-black font-bold">
    <section>
      <div/>
        <div style={{fontSize:'20px'}}>
          <span className='text-center'>SM Entertainment는 1995년 설립 이후<img alt='이미지1'></img></span>
          <span className='text-center'>K-POP을 선도하며 글로벌 시장을 개척해왔습니다.</span>
          <span className='text-center'>최고의 인재와 퍼포먼스로 세계에<img alt='이미지2'></img> '한류'를 알리며</span>
          <span className='text-center'><img alt='이미지3'></img>글로벌 1등 기업으로 도약하겠습니다.</span>
        </div>
      </section>
    </div>
    {/*------------------------------------------------------------- section4 끝 --------------------------------------------*/}
    <div className="w-full h-screen bg-black text-white font-bold">
    <section>
      <div/>
        <div style={{fontSize:'20px'}}>
            <span>SM Entertainment는</span>
            <span>K-Culture의 미래를 설계합니다.</span>
            <img alt='이미지1'></img>
            <img alt='이미지2'></img>
            <img alt='이미지3'></img>
        </div>
      </section>
    </div>
    {/* -------------------------------------------------------------------section5 끝-------------------------------------------- */}
    <div className="w-full h-screen bg-black text-white font-bold">
    <section>
      <div/>
        <div style={{fontSize:'20px'}}>
            <span className='block'>SM ARTISTS</span>
            <span>SM의 빛나는 성장을 함께한 주요 아티스트</span>
            <img alt='이미지1'></img>
            <img alt='이미지2'></img>
            <img alt='이미지3'></img>
            <img alt='이미지4'></img>
            <img alt='이미지5'></img>
            <img alt='이미지6'></img>
            <img alt='이미지7'></img>
            <img alt='이미지8'></img>
            <img alt='이미지9'></img>
            <img alt='이미지10'></img>
            <img alt='이미지11'></img>
            <img alt='이미지12'></img>
            <p>Who's next?</p>
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
