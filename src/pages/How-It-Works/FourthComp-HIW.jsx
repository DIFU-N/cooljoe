import React from 'react'

const FourthComp = () => {
    const divStyle2 = {
        fontFamily: 'Anton, sans-serif'
    }
  return (
    <div className='border-t-2 border-[#171b2d] mt-48 pt-32 pb-52 w-full'>
        <div className='flex flex-col items-center gap-y-10'>
            <div className='flex items-center text-center w-full px-5'>
                <span style={divStyle2} className='text-white text-6xl font-bold mb-8 px-4 text-center'>
                    COMPETE AND BOOST YOUR REWARDS WITH
                    <span className='text-[#f3c351] pl-2'>CLANS</span>
                </span>
            </div>
            <div className='text-[#A5A7B5] text-lg px-3 text-center'>
                Connect, play, and contribute with your community. Enhance your game and increase your 
                rewards with the power of Clans. Everytime you enter a Ladder, 
                you enter Clan Ladder as well, placing in a separate Leaderboard.
            </div>
            <div className='mt-10 px-5'>
                <img src="src\assets\images\hiw\webp\Clans_Cards.webp" />
            </div>
        </div>
    </div>
  )
}

export default FourthComp