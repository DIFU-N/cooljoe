import React, {useState} from 'react'

const IntroComp = () => {
  const divStyle = {
      fontFamily: 'Bebas Neue, cursive'
  }
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const handleMouseEnter = (index) => {
      setHoveredIndex(index);
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
      <div className='relative bg-[#05070f] lg:py-16 md:pt-0 pt-9'>
          <div className='py-20 flex relative overflow-x-auto flex-col text-center lg:text-left items-center gap-y-8 justify-center'>
              <span className='text-7xl md:text-6xl lg:text-7xl text-white' style={divStyle}>GAMES</span>
              <div className='grid grid-cols-2 px-7 md:px-8 gap-4 justify-center md:justify-start lg:justify-center md:flex md:relative md:overflow-x-auto w-full scrollbar-hide items-center md:items-start  md:flex-1'>
                  {images.map((image) => (
                      <a href="" key={image.id} className='active:opacity-50'>
                          <div className='w-40'>
                              <img 
                              src={image.src} 
                              // className='rounded-lg'
                              // className={`rounded-lg ${hoveredIndex !== image.id ? 'brightness-50' : ''}`} 
                              className={`rounded-lg ${
                                  hoveredIndex !== -1 && hoveredIndex !== image.id
                                    ? "brightness-50"
                                    : ""
                                }`}
                              alt={image.alt}
                              onMouseOver={() => handleMouseEnter(image.id)}
                              onMouseOut={() => handleMouseLeave()} 
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