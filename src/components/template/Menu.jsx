import React, { useState } from 'react';
import Flex from '../layout/Flex';
import Logoimg from '../../../public/Logo.svg';
import '../../style/global.css';
import BtnPrimary from '../layout/BtnPrimary';
import UserBoard from './UserBoard';
import LogoSintech from '../../../public/LogoSintech.svg';
import GameOver from './GameOver'; // Importe o componente GameOver

function Menu() {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    return (
        <>
            {/* Verifica se o usuário está jogando ou se o jogo acabou */}
            {isPlaying ? (
                <UserBoard />
            ) : (
                <div className="conteiner-menu">
                    <Flex item={'center'} gaps={'0px'} direction={'column'}>
                        <img src={LogoSintech} alt="Logo Sintech Soluções" />
                        <h1 className='H1-title'>Seja Bem Vindo(a) ao</h1>
                        <img src={Logoimg} alt="Logo Jogo da memoria" className='Logo-defalt' />
                        <nav className="menu-nav">
                            <Flex item={'center'} gaps={'50px'} >
                                <BtnPrimary text={'Jogar'} onClick={handlePlayClick} />
                            </Flex>
                        </nav>
                    </Flex>
                </div>
            )}
        </>
    );
}

export default Menu;
