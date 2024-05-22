import React from 'react'
import Flex from '../layout/Flex'
import Logoimg from '../../../public/Logo.svg'
import '../../style/global.css'
import BtnPrimary from '../layout/BtnPrimary'

function Menu() {
    return (
        <>
            <div className="conteiner-menu">
                <Flex item={'center'} gaps={'0px'} direction={'column'}>
                    <h1 className='H1-title'>Seja Bem Vindo(a) ao</h1>
                    <img src={Logoimg} alt="Logo Jogo da memoria" className='Logo-defalt' />
                    <nav className="menu-nav">
                        <Flex item={'center'} gaps={'50px'} >
                            <BtnPrimary text={'Jogar'} />
                            <BtnPrimary text={'click'} />
                        </Flex>
                    </nav>
                </Flex>
            </div>
        </>
    )
}

export default Menu