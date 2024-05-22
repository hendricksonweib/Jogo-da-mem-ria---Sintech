import React from 'react'
import '../../style/global.css'

function BtnPrimary({text}) {
  return (
    <div>
        <button className='BtnPrimary'>{text}</button>
    </div>
  )
}

export default BtnPrimary