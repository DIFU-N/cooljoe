import React from 'react'
import { useSelector } from 'react-redux';

const SecondComp = () => {
  const products = [
    {id:1, tag: "stryda", name: "Football" },
    {id:2, tag: "stryda", name: "Baseball" },
    {id:3, tag: "stryda", name: "Basketball" },
    {id:4, tag: "stream", name: "iPod Touch" },
    {id:5, tag: "apex", name: "iPhone 5" },
    {id:6, tag: "apex", name: "Nexus 7" },
    {id:7, tag: "dota", name: "Holiday" }
  ];
  const divStyle = {
    fontFamily: 'Anton, sans-serif'
  }
  const activeCategory = useSelector((state) => state.tag.activeCategory);
  const bgImage = useSelector((state) => state.tag.bgImage);
  const activeName = useSelector((state) => state.tag.activeName);
  const activeText = useSelector((state) => state.tag.activeText);
  return (
    <div style={divStyle}>
        <div className='text-white'>
            <div 
            style={{ backgroundImage: `url(${bgImage}?fit=fill&q=90&w=1600)` }}
            className="w-full bg-cover h-full bg-center bg-[#05070f] bg-no-repeat">
                {/* <img src={bgImage} alt="" /> */}
                {console.log(bgImage)}
                <div className='bg-gradient-to-r px-4 from-[#05070f] via-transparent to-transparent h-full'>
                  <div className='container mx-auto flex py-8 mb-10'>
                    <span className='flex-shrink-0 mr-6 w-1 bg-[#f3c351]'></span>
                    <div className='grid grid-flow-row'>
                      <span className='mb-4 text-6xl'>{activeName}</span>
                      <div className='text-lg opacity-75'>{activeText}</div>
                    </div>
                  </div>
                </div>
            </div>
              {products.filter(
                  ({ tag }) => activeCategory === tag || activeCategory === "all"
              )
              .map(({ tag, name, id }) => (
                <div 
                  key={id}
                  className="category__list-item flex items-center justify-between mb-2"
                >
                  <span className="text-gray-800">{name}</span>
                  <div className={`tag--${tag} w-3 h-3 rounded-full`}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export { SecondComp }