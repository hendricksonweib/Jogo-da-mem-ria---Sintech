import React from 'react'
import '../../style/global.css'
import Flex from '../layout/Flex'

function InputPrimary({ label, type }) {
    return (
        <div>
            <Flex item={'start'} gaps={'0px'} direction={'column'}>
                <label className='label-primary' for="input">{label}</label>
                <input className='input-primary' type={type} />
            </Flex>
        </div>
    )
}

export default InputPrimary