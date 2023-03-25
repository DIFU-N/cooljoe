import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const SecondComp = () => {
  useEffect(()=> {
    AOS.init({
      duration: 100, // Animation duration in milliseconds
      once: false, // Only animate once
    });
  }, [])
  const divStyle = {
    fontFamily: 'Bebas Neue, cursive'
  }
  const divStyle1 = {
    fontFamily: 'Barlow, sans-serif'
  }
  return (
    <div>
        <div className='relative top-5 lg:bg-opacity-100 bg-opacity-70 px-2 lg:px-9 z-10 w-full transform translate-y-5 lg:bg-[#080a16] bg-[#05060e] from-850/90 to-900 py-8 lg:py-10 backdrop-blur-sm'>
        {/* // 'w-[100%] border relative top-1/3 transform -translate-y-[10%] bg-[#080a16]'> */}
          <div className='px-2 lg:px-4'>
            <div className='flex flex-row py-5 lg:py-0 gap-10 lg:gap-12 aos-init aos-animate overflow-x-auto items-start overflow-hidden'>
              <div className='grid relative space-y-2 lg:flex lg:flex-col w-full whitespace-nowrap aos-init'
                data-aos="fade-up"
                data-aos-duration="250"
                data-aos-once="false"
              >
                <span className='text-[#818495] lg:h-auto h-5 text-2xl font-semibold lg:font-normal lg:text-[32px]' style={divStyle}>INNOVATIVE</span>
                <span className='text-[#e1e2e7] text-[2rem] font-semibold lg:font-normal lg:text-5xl' style={divStyle}>COMPETITIONS</span>
                <hr className='border-t-2 border-[#5e5e5f] opacity-50 lg:border-[#26293d] mt-8 mb-4 w-9 lg:w-12 ml-0' />
                <span className='text-[#818495] text-xs lg:text-base' style={divStyle1}>Challenge yourself, 24/7.</span>
              </div>
              <div className='grid relative space-y-2 lg:flex lg:flex-col w-full whitespace-nowrap aos-init'
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
              >
                <span className='text-[#818495] lg:h-auto h-5 text-2xl font-semibold lg:font-normal lg:text-[32px]' style={divStyle}>TRACK YOUR</span>
                <span className='text-[#e1e2e7] text-[2rem] font-semibold lg:font-normal lg:text-5xl' style={divStyle}>PROGRESSION</span>
                <hr className='border-t-2 border-[#5e5e5f] opacity-50 lg:border-[#26293d] mt-8 mb-4 w-9 lg:w-12 ml-0' />
                <span className='text-[#818495] text-xs lg:text-base' style={divStyle1}>Build your player identity.</span>
              </div>
              <div className='grid relative space-y-2 lg:flex lg:flex-col w-full whitespace-nowrap aos-init'
                data-aos="fade-up"
                data-aos-duration="750"
                data-aos-once="false"
              >
                <span className='text-[#818495] lg:h-auto h-5 text-2xl font-semibold lg:font-normal lg:text-[32px]' style={divStyle}>PLAY AND</span>
                <span className='text-[#e1e2e7] text-[2rem] font-semibold lg:font-normal lg:text-5xl' style={divStyle}>GET REWARDS</span>
                <hr className='border-t-2 border-[#5e5e5f] opacity-50 lg:border-[#26293d] mt-8 mb-4 w-9 lg:w-12 ml-0' />
                <span className='text-[#818495] text-xs lg:text-base' style={divStyle1}>Gift cards, skins, goodies, and more.</span>
              </div>
              <div className='grid relative space-y-2 lg:flex lg:flex-col w-full whitespace-nowrap aos-init'
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="false"
              >
                <span className='text-[#818495] lg:h-auto h-5 text-2xl font-semibold lg:font-normal lg:text-[32px]' style={divStyle}>DISCOVER</span>
                <span className='text-[#e1e2e7] text-[2rem] font-semibold lg:font-normal lg:text-5xl' style={divStyle}>COMMUNITIES</span>
                <hr className='border-t-2 border-[#5e5e5f] opacity-50 lg:border-[#26293d] mt-8 mb-4 w-9 lg:w-12 ml-0' />
                <span className='text-[#818495] text-xs lg:text-base' style={divStyle1}>Play together with like-minded gamers.</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SecondComp