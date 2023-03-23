import React from 'react'

const FourthComp = () => {
    const divStyle = {
        fontFamily: 'Bebas Neue, cursive'
    }
    return (
        <div className='relative py-24 top-6 w-full bg-[#e1e2e7] border-t-4 border-[#f3c351]'>
            <div className='flex flex-col gap-y-8 items-center justify-center'>
                <span className='text-6xl font-bold' style={divStyle}>TRUSTED BY</span>
                <div className='flex flex-row gap-x-12 aos-init aos-animate'>
                    <img src="src\assets\images\svg\partner-overwolf.svg" className='w-auto h-16' alt="wolf" 
                        data-aos="fade-left"
                        data-aos-duration="250"
                        data-aos-once="false"
                    />
                    <img src="src\assets\images\svg\partner-riot.svg" className='w-auto h-16' alt="riot" 
                        data-aos="fade-left"
                        data-aos-duration="500"
                        data-aos-once="false"
                    />
                    <img src="src\assets\images\svg\partner-krafton.svg" className='w-auto h-16' alt="krafton" 
                        data-aos="fade-left"
                        data-aos-duration="750"
                        data-aos-once="false"
                    />
                    <img src="src\assets\images\svg\partner-hyperx.svg" className='w-auto h-16' alt="hyperx" 
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-once="false"
                    />
                    <img src="src\assets\images\svg\partner-visa.svg" className='w-auto h-16' alt="visa" 
                        data-aos="fade-left"
                        data-aos-duration="1250"
                        data-aos-once="false"
                    />
                    <img src="src\assets\images\svg\partner-lenovo.svg" className='w-auto h-16' alt="lenovo" 
                        data-aos="fade-left"
                        data-aos-duration="1500"
                        data-aos-once="false"
                    />
                </div>
            </div>
        </div>
    )
}

export default FourthComp