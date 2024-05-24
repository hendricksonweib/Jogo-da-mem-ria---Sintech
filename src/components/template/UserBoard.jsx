import React from 'react'
import '../../style/global.css'
import InputPrimary from '../layout/InputPrimary'
import BtnPrimary from '../layout/BtnPrimary'
import Flex from '../layout/Flex'

function UserBoard() {
    return (
        <Flex item={'center'} direction={'column'} gaps={'15px'}>
            <form>
                <h1 className='H1-title'>Cadastre-se</h1>
                <InputPrimary type={'text'} label={'Nome'} />
                <InputPrimary type={'e-mail'} label={'E-Mail'} />
                <InputPrimary type={'number'} label={'Whatsapp'} />
                <BtnPrimary text={'Jogar'} />
            </form>
        </Flex>
    )
}

export default UserBoard