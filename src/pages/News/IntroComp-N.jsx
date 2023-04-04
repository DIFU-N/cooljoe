import React, {useState} from 'react'
import { useSelector } from 'react-redux';

const IntroComp = () => {
    // const headlineTopic = [
    //     {id:1, name:"APEX LEGENDS", tag:"apex"},
    //     {id:2, name:"COMMUNITY", tag:"comm"},
    //     {id:3, name:"CS:GO", tag:"csgo"},
    //     {id:4, name:"DOTA 2", tag:"dota"},
    //     {id:5, name:"ESPORTS", tag:"esports"},
    //     {id:6, name:"FORTNITE", tag:"ftnite"},
    //     {id:7, name:"LEAGUE OF LEGENDS", tag:"lgnds"},
    //     {id:8, name:"PUBG:BATTLEGROUNDS", tag:"pubg"},
    //     {id:9, name:"RAINBOW SIX SEIGE", tag:"seige"},
    //     {id:10, name:"ROCKET LEAGUE", tag:"rl"},
    //     {id:11, name:"STREAMING", tag:"stream"},
    //     {id:12, name:"STRYDA", tag:"stryda"},
    //     {id:13, name:"TEAMFIGHT TACTICS", tag:"tmfight"},
    //     {id:14, name:"VALORANT", tag:"valorant"},
    // ];
    const headlineTopic = useSelector((state) => state.tag.headlineTag);

    const products = [
        {id:1, tag: "stryda", name: "Football" },
        {id:2, tag: "stryda", name: "Baseball" },
        {id:3, tag: "stryda", name: "Basketball" },
        {id:4, tag: "stream", name: "iPod Touch" },
        {id:5, tag: "apex", name: "iPhone 5" },
        {id:6, tag: "apex", name: "Nexus 7" },
        {id:7, tag: "dota", name: "Holiday" }
    ];
    const [activeCategory, setActiveCategory] = useState("all");

    const divStyle1 = {
        fontFamily: 'Barlow, sans-serif'
    }
  return (
    <div className='w-full pt-[75px] overflow-x-auto pb-20 bg-[#e1e2e7]'>
        <div className='flex gap-x-4'>
        {headlineTopic.map((topic) => (
            // <a href="" key={topic.id} className='active:opacity-50'>
                <button
                    key={topic.id}
                    onClick={()=>
                        {if(activeCategory === topic.tag){
                            setActiveCategory("all");
                        } else {
                            setActiveCategory(topic.tag)
                        }
                    }} 
                    style={divStyle1}
                    className={`${
                        activeCategory === topic.tag
                          ? "bg-[#101323] text-white"
                          : "bg-white text-[#535669]"
                      } w-fit h-9 chip-sliced rounded-l-sm py-2 pl-2 pr-3 font-black`}>
                    {topic.name}
                </button>
            // </a>
        ))}
        {/* <button style={divStyle1} className='w-fit focus:bg-[#101323] focus:text-white h-9 chip-sliced bg-white text-[#535669] rounded-l-sm py-2 pl-2 pr-3 font-black'>
            <span>APEX LEGENDS</span>
        </button> */}
        </div>
        <div>
            {products.filter(
                ({ tag }) => activeCategory === tag || activeCategory === "all"
            )
            .map(({ tag, name, id }) => (
                <div 
                    key={id}
                    className="category__list-item flex items-center justify-between mb-2">
                    <span className="text-gray-800">{name}</span>
                    <div
                    className={`tag--${tag} w-3 h-3 rounded-full`}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default IntroComp