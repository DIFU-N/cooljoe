import React from 'react'
import HelpFloat from '../../components/HelpFloat'
import FourthComp from './FourthComp-HIW'
import IntroComp from './IntroComp-HIW'
import SecondComp from './SecondComp-HIW'
import ThirdComp from './ThirdComp-HIW'
import SixthComp from '../HomePage/SixthComp'
import Footer from "../../components/Footer";

const HowItWorks = () => {
  return (
    <div className='bg-[#05070f] w-full'>
      <div className='px-5'>
        <IntroComp />
        <SecondComp />
        <ThirdComp />
        <FourthComp />
      </div>
        <SixthComp />
        <Footer />
        <HelpFloat />
    </div>
  )
}

export default HowItWorks