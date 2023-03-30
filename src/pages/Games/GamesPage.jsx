import React from 'react'
import Footer from '../../components/Footer'
import HelpFloat from '../../components/HelpFloat'
import SixthComp from '../HomePage/SixthComp'
import IntroComp from './IntroComp-G'

const GamesPage = () => {
  return (
    <div className='bg-[#05070f]'>
        <IntroComp />
        <SixthComp />
        <Footer />
        <HelpFloat />
    </div>
  )
}

export default GamesPage