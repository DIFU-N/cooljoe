import React, { useCallback, useEffect, useRef, useState } from 'react';
import ArrowButton from '../../components/ArrowButton';
import { removeFromSetPosts, setAsArticle, setAsBlog, setBlogPosts } from '../../app/blogPosts';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

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
    const dispatch = useDispatch();
    console.log(useSelector((state) => state.posts.articleData));
    const setPosts = useSelector((state) => state.posts.blogPosts, shallowEqual);
    const updatePosts = useCallback(() => {
        // Create new arrays for article and blog posts
        let articlePosts = [];
        let blogPosts = [];
        // Iterate over the setPosts array and dispatch the appropriate action
        console.log(setPosts);
        setPosts.map(post => {
            const shouldDisplayTable = Math.random() < 0.5;
            if (shouldDisplayTable) {
              articlePosts = [...articlePosts, post];
            } else {
              blogPosts = [...blogPosts, post];
            }
            dispatch(removeFromSetPosts(post.id));
          });
          console.log(articlePosts);
          console.log(blogPosts);
          
          // Remove the product from setPosts once it has been dispatched
        // });
        // Update the Redux state with the new article and blog posts
        dispatch(setAsArticle(articlePosts));
        dispatch(setAsBlog(blogPosts));
        dispatch(setBlogPosts([...articlePosts, ...blogPosts]));
      }, []);
        const [count, setCount] = useState(0);
    const prevCountRef = useRef(count);
      useEffect(() => {
        if (prevCountRef.current === count) {
            // Do something only if the count has changed
            updatePosts();
            setCount(1);
            console.log("Count has changed");
            // prevCountRef.current = count;
          }
      }, []);
    return (
        <div className='flex w-full z-10 relative lg:grid lg:grid-cols-2 pt-32 md:pt-36 md:px-5 lg:px-9 mx-auto overflow-hidden bg-[#05070f] text-white pb-40 md:pb-36 lg:pb-40'>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald&family=Yantramanav&family=Six+Caps&display=swap');
            </style>
            <div className='lg:grid lg:gap-y-8 z-30 order-2 text-center lg:text-left w-full gap-y-7 pb-10 md:pb-0 lg:pb-10 flex items-center mx-auto flex-col lg:w-[80%] lg:ml-4'>
                <div>
                    <img src="src\assets\images\svg\stryda-logo-main-white.svg" 
                    className='w-auto h-12 lg:hidden'
                    alt=""/>
                </div>
                <span className='text-[4.3rem] hidden md:block lg:text-[4.7rem] lg:h-[6rem] font-black' style={divStyle}>EVERY ROUND COUNTS</span>
                <div className='md:hidden flex flex-col h-36 p-0 w-screen items-center'>
                    {/* leading4 reduce the line height which reduced the space */}
                    <span className='text-[4.3rem] lg:hidden font-black' style={divStyle}>EVERY ROUND</span>
                    <span className='text-[4.3rem] lg:hidden leading-4 font-black' style={divStyle}>COUNTS</span>
                </div>
                <span className='text-[#A5A7B5] px-5 tex    t-lg lg:text-base font-semibold' style={divStyle1}>
                    Instantly join competitions that suit your style, 
                    your level, and your schedule with Stryda, your gaming companion. 
                    It's esports how you want it, when you want it.
                </span>
                <div className='mt-3 lg:mt-0' style={divStyle1}>
                    <ArrowButton />
                </div>
            </div>
            <video className="absolute top-0 md:top-[25rem] lg:top-64 z-0 right-0 bottom-0 h-screen w-screen lg:w-full md:h-auto xl:w-3/4 object-cover opacity-25 lg:opacity-100 mix-blend-lighten" autoPlay playsInline loop preload="true" data-cmp-info="9">
                <source src="https://res.cloudinary.com/gloot/video/upload/v1675240209/Stryda/marketing/website/Stryda_homepage-loop_02.mp4" />
                <img src="https://res.cloudinary.com/gloot/image/upload/v1676294294/Stryda/marketing/website/Stryda_homepage-loop_02-png.png" alt="" data-cmp-info="9" />
            </video>
        </div>
    )
}

export default IntroComp;