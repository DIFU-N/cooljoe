import React from 'react';
import ArrowButton from '../../hooks/ArrowButton';

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
        <div className='grid grid-cols-2 pt-36 mx-9 overflow-hidden bg-[#05070f] text-white pb-40'>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald&family=Yantramanav&family=Six+Caps&display=swap');
            </style>
            <div className='grid gap-y-6 w-[80%] ml-4'>
                <span className='text-[4.7rem] h-[6rem] font-black' style={divStyle}>EVERY ROUND COUNTS</span>
                <span className='text-[#A5A7B5] text-lg font-semibold' style={divStyle1}>
                    Instantly join competitions that suit your style, 
                    your level, and your schedule with Stryda, your gaming companion. 
                    It's esports how you want it, when you want it.
                </span>
                <div style={divStyle1}>
                    <ArrowButton />
                </div>
            </div>
            <video className="absolute top-64 z-0 right-0 bottom-0 h-full w-full md:h-auto xl:w-3/4 object-cover opacity-25 lg:opacity-100 mix-blend-lighten" autoPlay playsInline loop preload="true" data-cmp-info="9">
                <source src="https://res.cloudinary.com/gloot/video/upload/v1675240209/Stryda/marketing/website/Stryda_homepage-loop_02.mp4" />
                <img src="https://res.cloudinary.com/gloot/image/upload/v1676294294/Stryda/marketing/website/Stryda_homepage-loop_02-png.png" alt="" data-cmp-info="9" />
            </video>
        </div>
    )
}

export default IntroComp;