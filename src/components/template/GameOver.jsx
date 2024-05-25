import React, { useState } from 'react';
import Flex from '../layout/Flex';
import BtnPrimary from '../layout/BtnPrimary';
import Menu from './Menu';
import Ranking from './Ranking';
function GameOver({ message }) {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(true);
    };

    if (showMenu) {
        return <Menu />;
    }

    return (
        <div className="game-over">
            <Flex item={'center'} direction={'column'} gaps={'15px'}>
                <h1 className='H1-title'>{message}</h1>
                <BtnPrimary text={'Jogar Novamente'} onClick={handleClick} />
            </Flex>
        </div>
    );
}

export default GameOver;
