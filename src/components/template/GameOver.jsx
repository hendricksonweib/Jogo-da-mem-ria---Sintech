import React, { useState } from 'react';
import Flex from '../layout/Flex';
import BtnPrimary from '../layout/BtnPrimary';
import Menu from './Menu';
import Ranking from './Ranking';
import { isMobile } from 'react-device-detect';

function GameOver({ message }) {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(true);
    };

    return (
        <div className="game-over">
            {isMobile ? (
                <Flex item={'center'} direction={'column'} gaps={'15px'}>
                    <Ranking />
                    <h1 className='H1-title'>{message}</h1>
                    <BtnPrimary text={'Jogar Novamente'} onClick={handleClick} />
                </Flex>
            ) : (
                <Flex item={'center'} gaps={'15px'}>
                    <Ranking />
                    <Flex item={'center'} direction={'column'} gaps={'15px'}>
                        <h1 className='H1-title'>{message}</h1>
                        <BtnPrimary text={'Jogar Novamente'} onClick={handleClick} />
                    </Flex>
                </Flex>
            )}
            {showMenu && <Menu />}
        </div>
    );
}

export default GameOver;
