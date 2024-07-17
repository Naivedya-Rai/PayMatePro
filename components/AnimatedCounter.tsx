"use client";

import React from 'react'
import CountUp from 'react-countup'

//what it accepts and then give its type 
const AnimatedCounter = ({amount} : {amount:number} ) => {
  return (
    <div className='w-full' /*align money counter to the left*/>
        <CountUp 
        decimals={2}
        decimal="."
        prefix='₹'
        end = {amount} 
        />
    </div>
  )
}

export default AnimatedCounter
 