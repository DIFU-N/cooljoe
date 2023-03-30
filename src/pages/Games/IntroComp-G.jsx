import React, {useState, useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const IntroComp = () => {
  useEffect(()=> {
    AOS.init({
      duration: 100, // Animation duration in milliseconds
      once: false, // Only animate once
    });
  }, [])
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
      <div className='relative bg-[#05070f] pt-9 md:pt-0 lg:pt-9 border lg:px-9 px-4'>
          <div className='py-20 flex relative overflow-x-auto flex-col text-center lg:text-left items-center gap-y-8 justify-center'>
              <span className='text-7xl md:text-6xl lg:text-7xl text-white' style={divStyle}>GAMES</span>
              <div className='flex overflow-x-auto w-full scrollbar-hide items-start lg:items-center flex-1 md:flex-1 px-8 gap-4'>
                  {images.map((image) => (
                      <a href="" key={image.id} className='active:opacity-50'>
                          <div className='w-32 aos-init'>
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

export default IntroComp