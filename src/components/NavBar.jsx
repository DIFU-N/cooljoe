import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const location = useLocation();
  const divStyle = {
    fontFamily: 'Barlow, sans-serif'
  }
  const showNavItems = () => {
    document.getElementById('navItems').classList.remove('hidden');
    document.getElementById('navItems').classList.add('block');
  }
  const hideNavItems = () => {
    document.getElementById('navItems').classList.remove('block');
    document.getElementById('navItems').classList.add('hidden');
  }  
  return (
    <div className="bg-[#070a14] bg-opacity-80 fixed text-base pt-1 px-2 md:px-9 w-screen backdrop-blur z-50">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Barlow&display=swap');
      </style>
      <nav className="text-[#7b7e8e] grid grid-cols-2 gap-1 lg:grid-cols-[10.5%_69.5%_20%] lg:gap-x-[34px] overflow-hidden" style={divStyle}>
          <div className="flex md:ml-4">
          <img src="src\assets\images\svg\stryda-logo-main-white.svg" 
              className='w-auto h-[18px] lg:h-14'
              alt=""/>
            {/* <NavLink className={'w-full my-1 first-letter:text-3xl first-letter:text-[#f3c351] text-xl text-green-900'}>O STRYDAa</NavLink> */}
          </div>
          <div id="navItems" className="z-50 bg-opacity-[0.96] hidden left-0 top-0 bg-[#050710] py-7 lg:hidden absolute text-[14px]">
              <button title="Show navigation" type="button" onClick={hideNavItems} 
                className="button button-tertiary button-md bg-[#f3c351] absolute right-0 z-50 top-0 rounded-full py-[5px] px-[12px]">
                <span className="icon icon-menu-8">
                  <FontAwesomeIcon icon={faClose} size="sm" color="black" />
                </span>
              </button>
            {/* <div className="bg-[#f3c351] absolute right-0 z-50 top-0 rounded-full py-[5px] px-[12px]">
            </div> */}
            <div className="lg:flex-row text-[12px] flex flex-col justify-start items-start">
              <NavLink to="/" className={'flex items-center font-semibold group relative'}>
                <div className={(location.pathname === '/' ? "px-[10px] justify-center py-1 text-[#f3c351] w-screen bg-[#171b2d]" : 
                "px-2 py-1 group-hover:text-[#f3c351] bg-opacity-80 group-focus:text-[#f3c351] w-screen")}>Home</div>
              </NavLink>
              <NavLink to="/dash" className={'flex items-center font-semibold group relative'}>
                <div className={(location.pathname === '/dash' ? "px-[10px] justify-center py-1 text-[#f3c351] w-screen bg-[#171b2d]" : 
                "px-2 py-1 group-hover:text-[#f3c351] bg-opacity-80 group-focus:text-[#f3c351] w-screen")}>How It Works</div>
              </NavLink>
              <NavLink to="/guedes" className={'flex items-center font-semibold group relative'}>
                <div className={(location.pathname === '/guedes' ? "px-[10px] justify-center py-1 text-[#f3c351] w-screen bg-[#171b2d]" : 
                "px-2 py-1 group-hover:text-[#f3c351] bg-opacity-80 group-focus:text-[#f3c351] w-screen")}>Guides</div>
              </NavLink>
              <NavLink to="/news" className={'flex items-center font-semibold group relative'}>
                <div className={(location.pathname === '/news' ? "px-[10px] justify-center py-1 text-[#f3c351] w-screen bg-[#171b2d]" : 
                "px-2 py-1 group-hover:text-[#f3c351] bg-opacity-80 group-focus:text-[#f3c351] w-screen")}>News</div>
              </NavLink>
            </div>
          </div>
          <div id="lgnavItems" className="lg:flex lg:justify-center lg:relative hidden mt-[5px] text-[16px] w-full">
            <div className="lg:flex-row flex flex-col">
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
          <div className="w-full gap-1 flex items-center">  
            <div className="py-1 md:py-[10px] flex gap-x-1">
              <button className="rounded-2xl h-4 md:h-auto flex justify-center items-center md:py-1 border-[1.5px] text-[#a5a7b5] text-[7px] md:text-sm border-[#a5a7b5] hover:bg-slate-800 w-10 md:w-16">LOG IN</button>
              <button className="rounded-2xl h-4 md:h-auto flex justify-center items-center w-12 md:w-24 md:p-1 bg-[#d5ab48] hover:bg-[#f3c351] text-[7px] md:text-sm text-[#1b1b25]">SIGN UP</button>
            </div>
            <button title="Show navigation" type="button" onClick={showNavItems} 
            className="button button-tertiary button-sm rounded-full lg:hidden">
              <span className="icon icon-menu-8">
                <FontAwesomeIcon icon={faBars} size="sm" />
              </span>
            </button>
          </div>
      </nav>
    </div>
  )
}
  
export default NavBar;

