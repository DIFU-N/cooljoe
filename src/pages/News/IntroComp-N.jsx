import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory, setBgImage, setActiveName, setActiveText } from '../../app/headlineTag';


const IntroComp = () => {
    const dispatch = useDispatch();
    const headlineTopic = useSelector((state) => state.tag.headlineTag);
    let activeCategory = useSelector((state) => state.tag.activeCategory);
    // const [activeCategory, setActiveCategory] = useState("all");
    // console.log(activeCategory);
    const divStyle1 = {
        fontFamily: 'Barlow, sans-serif'
    }
  return (
    <div className={`relative pt-[60px] md:pt-[80px] lg:pt-[90px] lg:py-2 ml-4 overflow-x-auto overflow-y-hidden mb-3 bg-[#e1e2e7] ${activeCategory === "all" ? "md:mx-12 lg:mx-28" : "md:mx-12"}`}>
        <div className={`flex gap-x-4 lg:mx-5 py-2 lg:py-0`}>
        {headlineTopic.map((topic) => (
            // <a href="" key={topic.id} className='active:opacity-50'>
                <button
                    key={topic.id}
                    onClick={()=>
                        {if(activeCategory === topic.tag){
                            dispatch(setActiveCategory("all"));
                            dispatch(setBgImage(""));
                            dispatch(setActiveName(""));
                            dispatch(setActiveText(""));
                        } else {
                            dispatch(setActiveCategory(topic.tag))
                            dispatch(setBgImage(topic.image));
                            console.log(topic.name);
                            dispatch(setActiveName(topic.name))
                            dispatch(setActiveText(topic.text))
                        }
                    }} 
                    style={divStyle1}
                    className={`${
                        activeCategory === topic.tag
                          ? "bg-[#101323] text-white"
                          : "bg-white text-[#535669]"
                      } w-full h-7 chip-sliced rounded-l-sm py-1 pl-2 pr-3 font-black`}>
                    {topic.name.replace(/ /g, '\u00a0')}
                </button>
            // </a>
        ))}
        </div>
        <div>
        </div>
    </div>
  )
}

export default IntroComp