import React from 'react'
import ArrowButton from '../../components/ArrowButton';

const IntroComp = () => {
  const divStyle1 = {
    fontFamily: 'Barlow, sans-serif'
  }
  const divStyle2 = {
    fontFamily: 'Anton, sans-serif'
  }
  return (
    <div className='w-full py-48'>
      <div className='flex items-center text-center md:justify-center w-full px-7'>
        <span style={divStyle2} className='text-white sm:flex text-[56px] lg:text-7xl font-medium mb-8 px-4 md:grid lg:block text-center'>
          MAKE EVERY ROUND COUNT WITH
          <span className='text-[#f3c351] pl-2'>STRYDA</span>
        </span>
      </div>
      <div className='grid grid-cols-[280px_300px_300px_300px] w-full px-5 mx-4 overflow-x-auto scrollbar-hide'>
        <div className='text-white flex flex-col gap-y-3 justify-center relative text-center items-center gap-1 lg:gap-x-0 p-3 lg:py-3 lg:px-0'>
          <img src="src\assets\images\hiw\Howitworks-Account.png" className='h-24 w-24' alt="Join" />
          <div className='w-full hidden lg:block'>
            <div className="relative">
              <div className="w-8 h-8 z-50 relative rounded-full border-4 border-[#f3c351] bg-[#05070f] mx-auto mt-2"></div>
              <div className="absolute z-10 h-[1px] bg-[#f3c351] w-full top-1/2"></div>
              {/* <div className="absolute h-0.5 bg-red-400 w-4/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div> */}
              <div className="absolute h-2 z-50 rounded-full w-2 bg-[#f3c351] top-1/2 transform -translate-x-1/2 -translate-y-1/2 before:rounded-sm after:rounded-sm"></div>
              {/* <div className="absolute h-2 z-50 rounded-full w-2 bg-[#f3c351] top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 before:rounded-sm after:rounded-sm"></div> */}
            </div>
          </div>
          <div className='w-8 h-8 lg:hidden rounded-full border-4 border-[#f3c351] bg-ui-900 mx-auto mt-2'></div>
          <span className='text-white text-2xl' style={divStyle2}>JOIN</span>
          <span className='text-[#A5A7B5] text-lg px-2' style={divStyle1}>Create your Stryda account.</span>
          <ArrowButton />
        </div>
        <div className='text-white flex flex-col gap-y-3 items-center relative text-center md:items-center gap-1 lg:gap-x-0 p-3 lg:py-3 lg:px-0'>
          <img src="src\assets\images\hiw\Howitworks-Mission.png" className='h-24 w-24' alt="Compete" />
          <div className='w-full hidden lg:block'>
            <div className="relative">
              <div className="w-8 h-8 z-50 relative rounded-full border-4 border-[#f3c351] bg-[#05070f] mx-auto mt-2"></div>
              <div className="absolute z-10 h-[1px] bg-[#f3c351] w-full top-1/2"></div>
              {/* <div className="absolute h-0.5 bg-red-400 w-4/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div> */}
              {/* <div className="absolute h-2 z-50 rounded-full w-2 bg-[#f3c351] top-1/2 transform -translate-x-1/2 -translate-y-1/2 before:rounded-sm after:rounded-sm"></div> */}
              {/* <div className="absolute h-2 z-50 rounded-full w-2 bg-[#f3c351] top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 before:rounded-sm after:rounded-sm"></div> */}
            </div>
          </div>
          <div className='w-8 h-8 lg:hidden rounded-full border-4 border-[#f3c351] bg-ui-900 mx-auto mt-2'></div>
          <span className='text-white text-2xl' style={divStyle2}>COMPETE</span>
          <span className='text-[#A5A7B5] text-lg' style={divStyle1}>Enroll in Ladders & complete Missions.</span>
        </div>
        <div className='text-white flex flex-col gap-y-3 items-center relative text-center md:items-center gap-1 lg:gap-x-0 p-3 lg:py-3 lg:px-0 '>
          <img src="src\assets\images\hiw\Howitworks-Shop.png" className='h-24 w-24' alt="Shop" />
          <div className='w-full hidden lg:block'>
            <div className="relative">
              <div className="w-8 h-8 z-50 relative rounded-full border-4 border-[#f3c351] bg-[#05070f] mx-auto mt-2"></div>
              <div className="absolute z-10 h-[1px] bg-[#f3c351] w-full top-1/2"></div>
              {/* <div className="absolute h-0.5 bg-red-400 w-4/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div> */}
              {/* <div className="absolute h-2 z-50 rounded-full w-2 bg-[#f3c351] top-1/2 transform -translate-x-1/2 -translate-y-1/2 before:rounded-sm after:rounded-sm"></div> */}
              {/* <div className="absolute h-2 z-50 rounded-full w-2 bg-[#f3c351] top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 before:rounded-sm after:rounded-sm"></div> */}
            </div>
          </div>
          <div className='w-8 h-8 lg:hidden rounded-full border-4 border-[#f3c351] bg-ui-900 mx-auto mt-2'></div>
          <span className='text-white text-2xl' style={divStyle2}>SHOP</span>
          <span className='text-[#A5A7B5] text-lg px-2' style={divStyle1}>Exchange winnings for gift cards.</span>
        </div>
        <div className='text-white flex flex-col gap-y-3 items-center relative text-center md:items-center gap-1 lg:gap-x-0 p-3 lg:py-3 lg:px-0 '>
          <img src="src\assets\images\hiw\Howitworks-Trophy.png" className='h-24 w-24' alt="Repeat" />
          <div className='w-full hidden lg:block'>
            <div className="relative">
              <div className="w-8 h-8 z-50 relative rounded-full border-4 border-[#f3c351] bg-[#05070f] mx-auto mt-2"></div>
              <div className="absolute z-10 h-[1px] bg-[#f3c351] w-full top-1/2"></div>
              {/* <div className="absolute h-0.5 bg-red-400 w-4/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div> */}
              {/* <div className="absolute h-2 z-50 rounded-full w-2 bg-[#f3c351] top-1/2 transform -translate-x-1/2 -translate-y-1/2 before:rounded-sm after:rounded-sm"></div> */}
              <div className="absolute h-2 z-50 rounded-full w-2 bg-[#f3c351] top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 before:rounded-sm after:rounded-sm"></div>
            </div>
          </div>
          <div className='w-8 h-8 lg:hidden rounded-full border-4 border-[#f3c351] bg-ui-900 mx-auto mt-2'></div>
          <span className='text-white text-2xl' style={divStyle2}>REPEAT</span>
          <span className='text-[#A5A7B5] text-lg px-2' style={divStyle1}>Make every round count.</span>
        </div>
      </div>
    </div>
  )
}

export default IntroComp