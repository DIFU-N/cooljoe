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
    <div className='bg-[#05070f]'>
        <IntroComp />
        <SecondComp />
        <ThirdComp />
        <FourthComp />
        <SixthComp />
        <Footer />
        <HelpFloat />
    </div>
  )
}

export default HowItWorks