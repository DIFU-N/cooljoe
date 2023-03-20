import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-[#05070f] text-[15px] px-14 w-full">
      <nav className=" text-[#7b7e8e] p-1 grid grid-cols-[10%_70%_20%]">
          <div className="w-full flex ml-4">
            <NavLink className={'font-serif p-1 first-letter:text-3xl text-lg text-green-900'}>Okay</NavLink>
          </div>
          <div className="flex justify-center w-full">  
            <div className="grid grid-cols-4">
              <NavLink to="/" className={'flex font-semibold items-center group relative justify-center'}>
                <div className="my-2 px-2 mx-1 group-hover:text-[#f3c351] group-focus:text-[#f3c351]">Home</div>
                <span class="absolute left-0 right-0 bottom-0 border-b-[4px] border-transparent transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:border-b-3 group-hover:border-[#f3c351] group-hover:scale-100 group-focus:scale-x-100 group-focus:border-b-4 group-focus:border-[#f3c351]"></span>
              </NavLink>
              <NavLink to="/dash" className={'flex font-semibold items-center group relative justify-center'}>
                <div className="my-2 px-2 mx-1 group-hover:text-[#f3c351] group-focus:text-[#f3c351]">Dashboard</div>
                <span class="absolute left-0 right-0 bottom-0 border-b-[4px] border-transparent transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:border-b-3 group-hover:border-[#f3c351] group-hover:scale-100 group-focus:scale-x-100 group-focus:border-b-4 group-focus:border-[#f3c351]"></span>
              </NavLink>
              <NavLink to="/guedes" className={'flex font-semibold items-center group relative justify-center'}>
                <div className="my-2 px-2 mx-1 group-hover:text-[#f3c351] group-focus:text-[#f3c351]">Guides</div>
                <span class="absolute left-0 right-0 bottom-0 border-b-[4px] border-transparent transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:border-b-3 group-hover:border-[#f3c351] group-hover:scale-100 group-focus:scale-x-100 group-focus:border-b-4 group-focus:border-[#f3c351]"></span>
              </NavLink>
              <NavLink to="/" className={'flex font-semibold items-center group relative justify-center'}>
                <div className="my-2 px-2 mx-1 group-hover:text-[#f3c351] group-focus:text-[#f3c351]">News</div>
                <span class="absolute left-0 right-0 bottom-0 border-b-[4px] border-transparent transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:border-b-3 group-hover:border-[#f3c351] group-hover:scale-100 group-focus:scale-x-100 group-focus:border-b-4 group-focus:border-[#f3c351]"></span>
              </NavLink>
            </div>
          </div>
          <div className="w-full flex justify-end items-center gap-x-2">
            <NavLink>
              <button className="rounded-2xl border-[1.5px] text-sm border-[#a5a7b5] hover:bg-slate-800 my-1 w-16 p-1">LOGIN</button>
            </NavLink>
            <NavLink>
              <button className="rounded-2xl w-24 p-1 bg-[#d5ab48] hover:bg-[#f3c351] text-sm my-1 text-[#1b1b25]">SIGN UP</button>
            </NavLink>
          </div>
      </nav>
    </div>
  )
}
  
export default NavBar;

