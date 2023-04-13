import React from 'react'
import IntroComp from './IntroComp-N'
import {SecondComp} from './SecondComp-N'
import Footer from "../../components/Footer";
import HelpFloat from '../../components/HelpFloat'

const NewsPage = () => {
  return (
    <div className='bg-[#05070f]'>
      <div className='bg-[#e1e2e7]'>
        <IntroComp />
        <SecondComp />
      </div>
        <Footer />
        <HelpFloat />
    </div>
  )
}

export default NewsPage