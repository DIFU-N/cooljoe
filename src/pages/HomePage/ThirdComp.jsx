import React, {useEffect} from 'react'
import ArrowButton from '../../components/ArrowButton';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ThirdComp = () => {
    useEffect(()=> {
      AOS.init({
        duration: 500, // Animation duration in milliseconds
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
        <div className='relative top-6 px-2 lg:px-9 bg-[#05070f]'>
            <div className='px-2 lg:px-4 pt-20 aos-init aos-animate pb-[77px] grid gap-y-[125px]'>
                <div className='w-full flex flex-col-reverse lg:flex-row gap-16'>
                    <div className='w-full lg:w-[80%] flex lg:items-center'>
                        <div className='flex flex-col py-8 items-center gap-8'
                            data-aos="fade-up"
                            data-aos-duration="200"
                            data-aos-once="false"
                            data-aos-easing="cubic-bezier(.25, .46, .45, .94)"
                        >
                            <div className='flex flex-col text-center lg:text-left'>
                                <span className='text-white text-5xl lg:text-6xl font-bold' style={divStyle}>MAKE YOUR GG</span>
                                <span className='text-[#f3c351] text-6xl lg:text-7xl font-bold' style={divStyle}>MORE REWARDING</span>
                            </div>
                            <span className='text-[#a5a7b5] text-center text-lg font-normal' style={divStyle1}>Play with purpose and get rewarded 
                            for your passion each time you game. Every round counts with Stryda.</span>
                            <ArrowButton />
                        </div>
                    </div>
                    <div className='w-[100%]'
                        data-aos="fade"
                        data-aos-duration="500ms"
                        data-aos-once="false"
                        data-aos-delay="200"
                        // data-aos-easing="cubic-bezier(.25, .46, .45, .94)"
                    >
                    <img alt="Make your GG more rewarding" src="src\assets\images\GG_s.webp"/>
                    </div>
                </div>
                <div className='w-full flex flex-col lg:flex-row gap-16'>
                    <div className='w-[100%]'
                        data-aos="fade"
                        data-aos-duration="400"
                        data-aos-once="false"
                        data-aos-delay="100"
                        // data-aos-easing="cubic-bezier(.25, .46, .45, .94)"
                    >
                        <img alt="Make your GG more rewarding" src="src\assets\images\Missions.webp"/>
                    </div>
                    <div className='w-full lg:w-[80%] flex items-center'>
                        <div className='flex flex-col text-center items-center py-8 gap-8'
                            data-aos="fade-up"
                            data-aos-duration="400"
                            data-aos-once="false"
                            data-aos-easing="ease-out-quad"
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
                <div className='w-full flex flex-col-reverse lg:flex-row gap-16'>
                    <div className='w-full lg:w-[80%] flex items-center'>
                        <div className='flex text-center items-center flex-col py-8 gap-8'
                            data-aos="fade-up"
                            data-aos-duration="250"
                            data-aos-once="false"
                            data-aos-delay="200"
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
                        data-aos-delay="200"
                    >
                    <img alt="Make your GG more rewarding" src="src\assets\images\Tracker.webp"/>
                    </div>
                </div>
                <div className='w-full flex flex-col lg:flex-row gap-16'>
                    <div className='w-[100%]'
                        data-aos="fade"
                        data-aos-duration="400"
                        data-aos-once="false"
                        data-aos-delay="200"
                        // data-aos-easing="ease-out-quad"
                    >
                        <img alt="Make your GG more rewarding" src="src\assets\images\Clan.webp"/>
                    </div>
                    <div className='w-full lg:w-[80%] flex items-center'>
                        <div className='flex flex-col text-center items-center py-8 gap-8'
                            data-aos="fade-up"
                            data-aos-duration="400"
                            data-aos-once="false"
                            data-aos-delay="200"
                            // data-aos-easing="ease-out-quad"
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