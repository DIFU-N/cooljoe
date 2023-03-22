import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const SecondComp = () => {
  const divStyle = {
    fontFamily: 'Bebas Neue, cursive'
  }
  const divStyle1 = {
    fontFamily: 'Barlow, sans-serif'
  }
  useEffect(()=> {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Only animate once
    });
  }, [])
  return (
    <div>
        <div className='relative px-9 z-10 w-full transform translate-y-5 bg-[#080a16] from-850/90 to-900 py-10 backdrop-blur-sm'>
        {/* // 'w-[100%] border relative top-1/3 transform -translate-y-[10%] bg-[#080a16]'> */}
          <div className='px-4'>
            <div className='flex flex-row gap-12 overflow-x-auto items-start overflow-hidden'>
              <div className='flex flex-col w-full whitespace-nowrap aos-init'
                data-aos="fade-up"
                data-aos-duration="250"
                data-aos-once="false"
              >
                <span className='text-[#818495] text-[32px]' style={divStyle}>INNOVATIVE</span>
                <span className='text-[#e1e2e7] text-5xl' style={divStyle}>COMPETITIONS</span>
                <hr className='border-t-2 text-[#26293d] mt-8 mb-4 w-12 ml-0' />
                <span className='text-[#818495] text-base' style={divStyle1}>Challenge yourself, 24/7.</span>
              </div>
              <div className='flex flex-col w-full whitespace-nowrap aos-init'
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="false"
              >
                <span className='text-[#818495] text-[32px]' style={divStyle}>TRACK YOUR</span>
                <span className='text-[#e1e2e7] text-5xl' style={divStyle}>PROGRESSION</span>
                <hr className='border-t-2 text-[#26293d] mt-8 mb-4 w-12 ml-0' />
                <span className='text-[#818495] text-base' style={divStyle1}>Build your player identity.</span>
              </div>
              <div className='flex flex-col w-full whitespace-nowrap aos-init'
                data-aos="fade-up"
                data-aos-duration="750"
                data-aos-once="false"
              >
                <span className='text-[#818495] text-[32px]' style={divStyle}>PLAY AND</span>
                <span className='text-[#e1e2e7] text-5xl' style={divStyle}>GET REWARDS</span>
                <hr className='border-t-2 text-[#26293d] mt-8 mb-4 w-12 ml-0' />
                <span className='text-[#818495] text-base' style={divStyle1}>Gift cards, skins, goodies, and more.</span>
              </div>
              <div className='flex flex-col w-full whitespace-nowrap aos-init'
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="false"
              >
                <span className='text-[#818495] text-[32px]' style={divStyle}>DISCOVER</span>
                <span className='text-[#e1e2e7] text-5xl' style={divStyle}>COMMUNITIES</span>
                <hr className='border-t-2 text-[#26293d] mt-8 mb-4 w-12 ml-0' />
                <span className='text-[#818495] text-base' style={divStyle1}>Play together with like-minded gamers.</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SecondComp