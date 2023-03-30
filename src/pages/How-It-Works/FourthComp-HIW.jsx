import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const FourthComp = () => {
    const divStyle2 = {
        fontFamily: 'Anton, sans-serif'
    }
  return (
    <div className='border-t-2 border-[#171b2d] mt-48 pt-32 pb-52 w-full'>
        <div className='flex flex-col items-center gap-y-10'>
            <div className='flex items-center lg:justify-center text-center w-full'>
                <span style={divStyle2} className='text-white text-6xl md:text-7xl lg:text-6xl lg:font-semibold font-bold mb-8 px-4 text-center'>
                    COMPETE AND BOOST YOUR REWARDS WITH
                    <span className='text-[#f3c351] pl-2'>CLANS</span>
                </span>
            </div>
            <div className='text-[#A5A7B5] text-lg lg:text-base md:text-xl px-3 lg:mx-80 text-center'>
                Connect, play, and contribute with your community. Enhance your game and increase your 
                rewards with the power of Clans. Everytime you enter a Ladder, 
                you enter Clan Ladder as well, placing in a separate Leaderboard.
            </div>
            <div className='mt-10 px-5 md:px-2 lg:px-0'>
                <AnimationOnScroll animateIn="animate__fadeInUp">
                    <img className="lg:w-[1200px]" src="src\assets\images\hiw\webp\Clans_Cards.webp" />
                </AnimationOnScroll>
            </div>
        </div>
    </div>
  )
}

export default FourthComp