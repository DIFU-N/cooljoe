import React from 'react'
import IntroComp from './IntroComp-N'
import {SecondComp} from './SecondComp-N'

const NewsPage = () => {
  return (
    <div className='bg-[#e1e2e7] md:px-12 md:pb-80'>
        <IntroComp />
        <SecondComp />
    </div>
  )
}

export default NewsPage