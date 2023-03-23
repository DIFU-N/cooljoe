import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const divStyle = {
    fontFamily: 'Barlow, sans-serif'
  }
  return (
    <div className="bg-[#070a14] bg-opacity-80 fixed text-base px-9 w-full backdrop-blur z-50">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Barlow&display=swap');
      </style>
      <nav className=" text-[#7b7e8e] grid grid-cols-[10.5%_69.5%_20%] gap-x-[34px] overflow-hidden" style={divStyle}>
          <div className="flex ml-4">
          <img src="src\assets\images\svg\stryda-logo-main-white.svg" 
              className='w-auto h-14'
              alt=""/>
            {/* <NavLink className={'w-full my-1 first-letter:text-3xl first-letter:text-[#f3c351] text-xl text-green-900'}>O STRYDAa</NavLink> */}
          </div>
          <div className="flex justify-center mt-[5px] text-[16px] w-full">
            <div className="flex">
              <NavLink to="/" className={'flex items-center font-medium group relative justify-center'}>
                <div className={(location.pathname === '/' ? "mx-5 text-[#f3c351]" : 
                "mx-5 group-hover:text-[#f3c351] group-focus:text-[#f3c351]")}>Home</div>
                <span className={(location.pathname === '/' ? 'absolute left-0 right-0 bottom-0 scale-x-100 border-b-4 border-[#f3c351]' 
                : "absolute left-0 right-0 bottom-0 border-b-[4px] border-transparent transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:border-b-3 group-hover:border-[#f3c351] group-hover:scale-100" 
                )}></span>
              </NavLink>
              <NavLink to="/dash" className={'flex font-medium items-center group relative justify-center'}>
                <div className={(location.pathname === '/dash' ? "mx-6 text-[#f3c351]" : 
                "mx-6 group-hover:text-[#f3c351] group-focus:text-[#f3c351]")}>How It Works</div>
                <span className={(location.pathname === '/dash' ? 'absolute left-0 right-0 bottom-0 scale-x-100 border-b-4 border-[#f3c351]' 
                : "absolute left-0 right-0 bottom-0 border-b-[4px] border-transparent transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:border-b-3 group-hover:border-[#f3c351] group-hover:scale-100" 
                )}></span>
              </NavLink>
              <NavLink to="/guedes" className={'flex font-medium items-center group relative justify-center'}>
                <div className={(location.pathname === '/guedes' ? "mx-3 text-[#f3c351]" : 
                "mx-3 group-hover:text-[#f3c351] group-focus:text-[#f3c351]")}>Guides</div>
                <span className={(location.pathname === '/guedes' ? 'absolute left-0 right-0 bottom-0 scale-x-100 border-b-4 border-[#f3c351]' 
                : "absolute left-0 right-0 bottom-0 border-b-[4px] border-transparent transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:border-b-3 group-hover:border-[#f3c351] group-hover:scale-100" 
                )}></span>
              </NavLink>
              <NavLink to="/news" className={'flex font-medium items-center group relative justify-center'}>
                <div className={(location.pathname === '/news' ? "mx-3 text-[#f3c351]" : 
                "mx-3 group-hover:text-[#f3c351] group-focus:text-[#f3c351]")}>News</div>
                <span className={(location.pathname === '/news' ? 'absolute left-0 right-0 bottom-0 scale-x-100 border-b-4 border-[#f3c351]' 
                : "absolute left-0 right-0 bottom-0 border-b-[4px] border-transparent transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:border-b-3 group-hover:border-[#f3c351] group-hover:scale-100" 
                )}></span>
              </NavLink>
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="py-[10px] flex gap-x-1">
              <button className="rounded-2xl py-1 border-[1.5px] text-[#a5a7b5] text-sm border-[#a5a7b5] hover:bg-slate-800 w-16">LOG IN</button>
              <button className="rounded-2xl w-24 p-1 bg-[#d5ab48] hover:bg-[#f3c351] text-sm text-[#1b1b25]">SIGN UP</button>
            </div>
          </div>
      </nav>
    </div>
  )
}
  
export default NavBar;

