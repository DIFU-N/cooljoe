import React from 'react'
import IntroComp from './IntroComp-N'
import {SecondComp} from './SecondComp-N'

const NewsPage = () => {
  return (
    <div className='bg-[#e1e2e7]'>
        <IntroComp />
        <SecondComp />
    </div>
  )
}

export default NewsPage