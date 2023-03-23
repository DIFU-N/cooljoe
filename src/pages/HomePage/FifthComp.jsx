import React, {useState} from 'react'

const FifthComp = () => {
    const divStyle = {
        fontFamily: 'Bebas Neue, cursive'
    }
    const divStyle1 = {
        fontFamily: 'Barlow, sans-serif'
    }
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
        // images.map((image) => {
        //     if (image.id !== hoveredIndex) {
        //         document.getElementsByClassName = `brightness-50`
        //     }
        // })
    };
    const handleMouseLeave = () => {
        setHoveredIndex(-1);
    };
    const images = [
        { id: 1, src: 'src/assets/images/jpeg/Game_cover_Valorant.jpg', alt: 'Valorant' },
        { id: 2, src: 'src/assets/images/jpeg/Game_cover_PUBG_Battlegrounds.jpg', alt: 'PUBG' },
        { id: 3, src: 'src/assets/images/jpeg/Game_cover_Apex_Legends.jpg', alt: 'Apex Legends' },
        { id: 4, src: 'src/assets/images/jpeg/Game_cover_CSGO.jpg', alt: 'CSGO' },
        { id: 5, src: 'src/assets/images/jpeg/Game_cover_Dota_2.jpg', alt: 'Dota 2' },
        { id: 6, src: 'src/assets/images/jpeg/Game_cover_League_of_Legends.jpg', alt: 'League of Legends' },
        { id: 7, src: 'src/assets/images/jpeg/Game_cover_Rocket_League.jpg', alt: 'Rocket League' },
    ];
    return (
        <div className='relative bg-[#05070f] pt-9 px-9'>
            <div className='grid grid-cols-2 px-4'>
                <div className='flex flex-col pt-24 gap-y-8'>
                    <span className='text-white text-7xl' style={divStyle}>JOIN THE COMMUNITY</span>
                    <span className='text-[#a5a7b5] text-lg pr-[24px]' style={divStyle1}>Join our community of gamers on 
                        <a href=''>Discord</a> for the latest news and discussions. 
                        If you have questions about Stryda, check out the 
                        <a href=''>How It Works</a> page or contact <a href=''>customer support.</a>
                    </span>
                </div>
                <div>
                    <img src="src\assets\images\communitymanager.webp" alt="" />
                </div>
            </div>
            <div className='py-20 flex flex-col items-center gap-y-8 justify-center'>
                <span className='text-7xl text-white' style={divStyle}>SUPPORTED GAMES</span>
                <div className='flex flex-1 px-8 gap-4'>
                    {images.map((image) => (
                        <a href="" key={image.id} className='active:opacity-50'>
                            <div className='w-36 aos-init'>
                                <img 
                                src={image.src} 
                                // className='rounded-lg'
                                // className={`rounded-lg ${hoveredIndex !== image.id ? 'brightness-50' : ''}`} 
                                className={`rounded-lg aos-animate ${
                                    hoveredIndex !== -1 && hoveredIndex !== image.id
                                      ? "brightness-50"
                                      : ""
                                  }`}
                                alt={image.alt}
                                onMouseOver={() => handleMouseEnter(image.id)}
                                onMouseOut={() => handleMouseLeave()} 
                                    data-aos="fade-left"
                                    data-aos-duration={image.id*350}
                                    data-aos-once="false"
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FifthComp