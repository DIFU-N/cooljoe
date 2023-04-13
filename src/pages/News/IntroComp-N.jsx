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
    <div className='relative pt-[60px] md:pt-[80px] ml-4 md:ml-0 overflow-x-auto overflow-y-hidden mb-3 bg-[#e1e2e7]'>
        <div className='flex gap-x-4 py-2'>
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
                            dispatch(setActiveName(topic.name))
                            dispatch(setActiveText(topic.text))
                        }
                    }} 
                    style={divStyle1}
                    className={`${
                        activeCategory === topic.tag
                          ? "bg-[#101323] text-white"
                          : "bg-white text-[#535669]"
                      } w-fit h-7 chip-sliced rounded-l-sm py-1 pl-2 pr-3 font-black`}>
                    {topic.name}
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