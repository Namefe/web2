import React from 'react'

const View02 = () => {
  return (
    <section  className="w-full h-screen bg-black overflow-hidden relative text-white font-bold flex items-center justify-center">
    <p className="h-full flex items-center justify-center" style={{fontSize:'35px'}}>아시아를 넘어<br/> 글로벌 No.1을 지향합니다.</p>
    <img className='country absolute top-[50%] left-[50%]' src={process.env.PUBLIC_URL + '/sec2_01.png'}/>
    </section>
  )
}

export default View02