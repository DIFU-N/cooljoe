import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ArrowButton from '../../components/ArrowButton';

const SecondComp = () => {
  const divStyle = {
    fontFamily: 'Anton, sans-serif'
  }
  const divStyle1 = {
    fontFamily: 'Barlow, sans-serif'
  }
  return (
    <div className='w-full mt-32 mb-5 border-t-2 border-[#171b2d]'>
      <div className='flex flex-col md:flex-row-reverse md:gap-x-5 w-full px-3 relative md:items-center'>
        <AnimationOnScroll animateIn="animate__fadeIn">
          <img src="src\assets\images\hiw\webp\Missions_Ladders_Battlepass.webp" />
        </AnimationOnScroll>
        <div className='my-10 flex flex-col gap-y-5 md:gap-y-8 items-center lg:items-start'>
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <div className='text-white text-center md:text-left'>
              <span style={divStyle} className='text-3xl md:text-[40px] font-medium'>
                COMPLETE
                <span className='text-[#f3c351] pl-2'>MISSIONS</span>
              </span>
              <div className='text-[#a5a7b5] text-lg md:text-xl' style={divStyle1}>
                Kills, assists, headshots, every Mission comes with its own objective. 
                Completing Missions rewards you with XP.
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <div className='text-white text-center md:text-left'>
              <span style={divStyle} className='text-3xl md:text-[40px] font-medium'>
                COMPETE IN
                <span className='text-[#f3c351] pl-2'>LADDERS</span>
              </span>
              <div className='text-[#a5a7b5] text-lg md:text-xl' style={divStyle1}>
                Ladders are competitions against other players. 
                Fight your way to the top of the Leaderboards, solo or together with a Clan.
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <div className='text-white text-center md:text-left'>
              <span style={divStyle} className='text-3xl md:grid md:text-[40px] font-medium'>
                <span>PROGRESS YOUR</span>
                <span className='text-[#f3c351] pl-2 md:pl-0'>STRYDA BATTLE PASS</span>
              </span>
              <div className='text-[#a5a7b5] text-lg md:mt-2 md:text-xl' style={divStyle1}>
                All actions on Stryda advance your Battle Pass. Get rewarded at every level.
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <ArrowButton />
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  )
}

export default SecondComp