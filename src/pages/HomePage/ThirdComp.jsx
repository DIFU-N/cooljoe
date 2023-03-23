import React from 'react'
import ArrowButton from '../../hooks/ArrowButton';

const ThirdComp = () => {
    const divStyle = {
        fontFamily: 'Bebas Neue, cursive'
    }
    const divStyle1 = {
        fontFamily: 'Barlow, sans-serif'
    }
    return (
        <div className='relative top-6 px-9 bg-[#05070f]'>
            <div className='px-4 pt-20 aos-init aos-animate pb-[77px] grid gap-y-[125px]'>
                <div className='w-full flex flex-row gap-16'>
                    <div className='w-[80%] flex items-center'>
                        <div className='flex flex-col py-8 gap-8'
                            data-aos="fade-up"
                            data-aos-duration="250"
                            data-aos-once="false"
                        >
                            <div className='flex flex-col'>
                                <span className='text-white text-6xl font-bold' style={divStyle}>MAKE YOUR GG</span>
                                <span className='text-[#f3c351] text-7xl font-bold' style={divStyle}>MORE REWARDING</span>
                            </div>
                            <span className='text-[#a5a7b5] text-lg font-normal' style={divStyle1}>Play with purpose and get rewarded 
                            for your passion each time you game. Every round counts with Stryda.</span>
                            <ArrowButton />
                        </div>
                    </div>
                    <div className='w-[100%]'
                        data-aos="fade"
                        data-aos-duration="250"
                        data-aos-once="false"
                    >
                    <img alt="Make your GG more rewarding" src="src\assets\images\GG_s.webp"/>
                    </div>
                </div>
                <div className='w-full flex flex-row gap-16'>
                    <div className='w-[100%]'
                        data-aos="fade"
                        data-aos-duration="250"
                        data-aos-once="false"
                    >
                        <img alt="Make your GG more rewarding" src="src\assets\images\Missions.webp"/>
                    </div>
                    <div className='w-[80%] flex items-center'>
                        <div className='flex flex-col py-8 gap-8'
                            data-aos="fade-up"
                            data-aos-duration="250"
                            data-aos-once="false"
                        >
                            <div className='flex flex-col'>
                                <span className='text-white text-6xl font-bold' style={divStyle}>EXCHANGE YOUR</span>
                                <span className='text-[#f3c351] text-7xl font-bold' style={divStyle}>GAMING EXPERIENCE</span>
                            </div>
                            <span className='text-[#a5a7b5] text-lg font-normal' style={divStyle1}>Ace your Missions, climb weekly Leaderboards, and complete our free Battle Pass. 
                            Level up and make your games more rewarding, solo or with your Clan.</span>
                            <ArrowButton />
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-row gap-16'>
                    <div className='w-[80%] flex items-center'>
                        <div className='flex flex-col py-8 gap-8'
                            data-aos="fade-up"
                            data-aos-duration="250"
                            data-aos-once="false"
                        >
                            <div className='flex flex-col'>
                                <span className='text-white text-6xl font-bold' style={divStyle}>ONE TRACKER</span>
                                <span className='text-[#f3c351] text-7xl font-bold' style={divStyle}>ALL YOUR STATS</span>
                            </div>
                            <span className='text-[#a5a7b5] text-lg font-normal' style={divStyle1}>Easily track your stats across your games, 
                            gain valuable insights, and build your esports identity.</span>
                            <ArrowButton />
                        </div>
                    </div>
                    <div className='w-[100%]'
                        data-aos="fade"
                        data-aos-duration="250"
                        data-aos-once="false"
                    >
                    <img alt="Make your GG more rewarding" src="src\assets\images\Tracker.webp"/>
                    </div>
                </div>
                <div className='w-full flex flex-row gap-16'>
                    <div className='w-[100%]'
                        data-aos="fade"
                        data-aos-duration="250"
                        data-aos-once="false"
                    >
                        <img alt="Make your GG more rewarding" src="src\assets\images\Clan.webp"/>
                    </div>
                    <div className='w-[80%] flex items-center'>
                        <div className='flex flex-col py-8 gap-8'
                            data-aos="fade-up"
                            data-aos-duration="250"
                            data-aos-once="false"
                        >
                            <div className='flex flex-col'>
                                <span className='text-white text-6xl font-bold' style={divStyle}>ACHIEVE TOGETHER</span>
                                <span className='text-[#f3c351] text-7xl font-bold' style={divStyle}>WITH CLANS</span>
                            </div>
                            <span className='text-[#a5a7b5] text-lg font-normal' style={divStyle1}>Join a Clan and play together with your community. 
                            Achieve greater heights with your Clan to make it more fun, exciting, and rewarding!</span>
                            <ArrowButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdComp