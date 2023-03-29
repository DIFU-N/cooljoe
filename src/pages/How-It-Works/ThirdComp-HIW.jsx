import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ArrowButton from '../../components/ArrowButton';


const ThirdComp = () => {
    const divStyle = {
        fontFamily: 'Anton, sans-serif'
    }
    const divStyle1 = {
        fontFamily: 'Barlow, sans-serif'
    }
    return (
        <div className='w-full mt-32 mb-10 border-t-2 border-[#171b2d]'>
            <div className='flex flex-col w-full px-3 relative'>
                <AnimationOnScroll animateIn="animate__fadeIn">
                    <img src="src\assets\images\hiw\webp\Rewards.webp" />
                </AnimationOnScroll>
                <div className='my-10 flex flex-col gap-y-5 items-center'>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <div className='text-white text-center'>
                        <span style={divStyle} className='text-3xl font-medium'>
                            EARN
                            <span className='text-[#f3c351] pl-2'>XP</span>
                        </span>
                        <div className='text-[#a5a7b5] text-lg' style={divStyle1}>
                        XP help you advance the Battle Pass, boost your XP with Premium.
                        </div>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <div className='text-white text-center'>
                            <span style={divStyle} className='text-3xl font-medium'>
                                SPEND
                                <span className='text-[#f3c351] pl-2'>TOKENS</span>
                            </span>
                            <div className='text-[#a5a7b5] text-lg' style={divStyle1}>
                                Use Tokens to enroll in Ladders. 
                                Earn Tokens from the Battle Pass, Daily Login Streak, or purchase them.
                            </div>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <div className='text-white text-center'>
                            <span style={divStyle} className='text-3xl font-medium'>
                                GET REWARDED WITH
                                <span className='text-[#f3c351] pl-2'>COINS</span>
                            </span>
                            <div className='text-[#a5a7b5] text-lg' style={divStyle1}>
                                Exchange your Coins for gift cards. Earn Coins through the 
                                Daily Login Streak, winning in a Ladder, and completing our Battle Pass.
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

export default ThirdComp