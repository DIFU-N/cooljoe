import React from 'react'
import ArrowButton from '../../components/ArrowButton';

const IntroComp = () => {
  const divStyle = {
    fontFamily: 'Bebas Neue, cursive'
  };
  const divStyle1 = {
    fontFamily: 'Barlow, sans-serif'
  }
  const divStyle2 = {
    fontFamily: 'Anton, sans-serif'
  }
  return (
    <div className='w-full py-48'>
      <div className='flex items-center text-center w-full px-7'>
        <span style={divStyle2} className='text-white text-6xl font-medium mb-8 px-4 text-center'>
          MAKE EVERY ROUND COUNT WITH
          <span className='text-[#f3c351] pl-2'>STRYDA</span>
        </span>
      </div>
      <div className='grid grid-cols-[300px_300px_300px_300px] w-full px-5 gap-10 mx-4 overflow-x-auto scrollbar-hide'>
        <div className='text-white flex flex-col gap-y-3 items-center relative text-center gap-1 p-3 '>
          <img src="src\assets\images\hiw\Howitworks-Account.png" className='h-24 w-24' alt="Join" />
          <div className='w-8 h-8 rounded-full border-4 border-[#f3c351] bg-ui-900 mx-auto mt-2'></div>
          <span className='text-white text-2xl' style={divStyle2}>JOIN</span>
          <span className='text-[#A5A7B5] text-lg px-2' style={divStyle1}>Create your Stryda account.</span>
          <ArrowButton />
        </div>
        <div className='text-white flex flex-col gap-y-3 items-center relative text-center gap-1 p-3 '>
          <img src="src\assets\images\hiw\Howitworks-Mission.png" className='h-24 w-24' alt="Compete" />
          <div className='w-8 h-8 rounded-full border-4 border-[#f3c351] bg-ui-900 mx-auto mt-2'></div>
          <span className='text-white text-2xl' style={divStyle2}>COMPETE</span>
          <span className='text-[#A5A7B5] text-lg' style={divStyle1}>Enroll in Ladders & complete Missions.</span>
        </div>
        <div className='text-white flex flex-col gap-y-3 items-center relative text-center gap-1 p-3 '>
          <img src="src\assets\images\hiw\Howitworks-Shop.png" className='h-24 w-24' alt="Shop" />
          <div className='w-8 h-8 rounded-full border-4 border-[#f3c351] bg-ui-900 mx-auto mt-2'></div>
          <span className='text-white text-2xl' style={divStyle2}>SHOP</span>
          <span className='text-[#A5A7B5] text-lg px-2' style={divStyle1}>Exchange winnings for gift cards.</span>
        </div>
        <div className='text-white flex flex-col gap-y-3 items-center relative text-center gap-1 p-3 '>
          <img src="src\assets\images\hiw\Howitworks-Trophy.png" className='h-24 w-24' alt="Repeat" />
          <div className='w-8 h-8 rounded-full border-4 border-[#f3c351] bg-ui-900 mx-auto mt-2'></div>
          <span className='text-white text-2xl' style={divStyle2}>REPEAT</span>
          <span className='text-[#A5A7B5] text-lg px-2' style={divStyle1}>Make every round count.</span>
        </div>
      </div>
    </div>
  )
}

export default IntroComp