import React from 'react';
import ArrowButton from '../../components/ArrowButton';

const IntroComp = () => {
    const divStyle = {
        // fontFamily: 'Yantramanav, sans-serif',
        fontFamily: 'Bebas Neue, cursive'
        // fontFamily: 'Six Caps, sans-serif',
        // fontFamily: 'Oswald, sans-serif'
    };
    const divStyle1 = {
        fontFamily: 'Barlow, sans-serif'
    }
    return (
        <div className='flex md:grid md:grid-cols-2 pt-32 md:pt-36 md:mx-9 overflow-hidden bg-[#05070f] text-white pb-40'>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald&family=Yantramanav&family=Six+Caps&display=swap');
            </style>
            <div className='md:grid md:gap-y-6 w-screen gap-y-3 pb-10 flex items-center flex-col md:w-[80%] md:ml-4'>
                <div>
                    <img src="src\assets\images\svg\stryda-logo-main-white.svg" 
                    className='w-auto h-[27px] lg:h-14'
                    alt=""/>
                </div>
                <span className='text-[3.0rem] hidden lg:block lg:text-[4.7rem] lg:h-[6rem] font-black' style={divStyle}>EVERY ROUND COUNTS</span>
                {/* <div className='lg:hidden flex flex-col border p-0 w-screen items-center'>
                </div> */}
                <span className='text-[3.0rem] lg:hidden font-black' style={divStyle}>EVERY ROUND</span>
                <span className='text-[3.0rem] lg:hidden font-black' style={divStyle}>COUNTS</span>
                <span className='text-[#A5A7B5] text-sm font-semibold' style={divStyle1}>
                    Instantly join competitions that suit your style, 
                    your level, and your schedule with Stryda, your gaming companion. 
                    It's esports how you want it, when you want it.
                </span>
                <div className='mt-3 lg:mt-0' style={divStyle1}>
                    <ArrowButton />
                </div>
            </div>
            <video className="absolute top-0 lg:top-64 z-0 right-0 bottom-0 h-screen w-screen lg:w-full md:h-auto xl:w-3/4 object-cover opacity-25 lg:opacity-100 mix-blend-lighten" autoPlay playsInline loop preload="true" data-cmp-info="9">
                <source src="https://res.cloudinary.com/gloot/video/upload/v1675240209/Stryda/marketing/website/Stryda_homepage-loop_02.mp4" />
                <img src="https://res.cloudinary.com/gloot/image/upload/v1676294294/Stryda/marketing/website/Stryda_homepage-loop_02-png.png" alt="" data-cmp-info="9" />
            </video>
        </div>
    )
}

export default IntroComp;